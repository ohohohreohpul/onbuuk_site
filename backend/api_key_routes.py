from fastapi import APIRouter, Depends, HTTPException, Header
from pydantic import BaseModel
from typing import Optional
import secrets
import hashlib
from datetime import datetime, timezone

api_key_router = APIRouter()

class APIKey(BaseModel):
    name: str
    description: Optional[str] = None

class APIKeyResponse(BaseModel):
    key: str
    name: str
    description: Optional[str]
    created_at: datetime
    message: str

# Simple API key verification
def verify_api_key(x_api_key: Optional[str] = Header(None)):
    """Verify API key from header"""
    if not x_api_key:
        raise HTTPException(status_code=401, detail="API key required")
    
    # In production, verify against database
    # For now, we'll use a simple check
    return x_api_key

@api_key_router.post("/admin/api-keys/generate", response_model=APIKeyResponse)
async def generate_api_key(key_data: APIKey, db=None):
    """
    Generate a new API key for automation tools
    
    Usage:
    - Call this endpoint from admin panel
    - Store the generated key securely
    - Use it in make.com, n8n, or other automation tools
    """
    
    # Generate a secure random API key
    api_key = f"buuk_{secrets.token_urlsafe(32)}"
    
    # Hash it for storage (in production, store hash only)
    key_hash = hashlib.sha256(api_key.encode()).hexdigest()
    
    # Store in database
    if db is not None:
        await db.api_keys.insert_one({
            "key_hash": key_hash,
            "name": key_data.name,
            "description": key_data.description,
            "created_at": datetime.now(timezone.utc),
            "last_used": None,
            "active": True
        })
    
    return APIKeyResponse(
        key=api_key,
        name=key_data.name,
        description=key_data.description,
        created_at=datetime.now(timezone.utc),
        message="API key generated successfully. Save this key - it won't be shown again!"
    )

@api_key_router.get("/admin/api-keys")
async def list_api_keys(db=None):
    """
    List all API keys (without showing actual keys)
    """
    if db is None:
        return {"keys": []}
    
    keys = await db.api_keys.find({}, {"_id": 0, "key_hash": 0}).to_list(100)
    return {"keys": keys}

@api_key_router.delete("/admin/api-keys/{key_name}")
async def revoke_api_key(key_name: str, db=None):
    """
    Revoke an API key
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database not available")
    
    result = await db.api_keys.update_one(
        {"name": key_name},
        {"$set": {"active": False, "revoked_at": datetime.now(timezone.utc)}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="API key not found")
    
    return {"message": f"API key '{key_name}' has been revoked"}

async def verify_api_key_from_db(api_key: str, db):
    """
    Verify API key against database
    """
    key_hash = hashlib.sha256(api_key.encode()).hexdigest()
    
    key_doc = await db.api_keys.find_one({
        "key_hash": key_hash,
        "active": True
    })
    
    if not key_doc:
        raise HTTPException(status_code=401, detail="Invalid or revoked API key")
    
    # Update last used timestamp
    await db.api_keys.update_one(
        {"key_hash": key_hash},
        {"$set": {"last_used": datetime.now(timezone.utc)}}
    )
    
    return key_doc
