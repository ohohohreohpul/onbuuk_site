from fastapi import APIRouter, Request, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime, timezone
from typing import Optional

contact_router = APIRouter(prefix='/api', tags=['contact'])


class ContactFormSubmission(BaseModel):
    name: str
    email: EmailStr
    businessName: str
    message: Optional[str] = ""


class ContactFormResponse(BaseModel):
    success: bool
    message: str


@contact_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(submission: ContactFormSubmission, request: Request):
    """
    Handle contact form submissions from the landing page
    """
    try:
        db = request.state.db
        
        # Create the contact submission document
        contact_doc = {
            "name": submission.name,
            "email": submission.email,
            "businessName": submission.businessName,
            "message": submission.message,
            "submitted_at": datetime.now(timezone.utc).isoformat(),
            "status": "new"  # Can be: new, contacted, closed
        }
        
        # Store in MongoDB
        result = await db.contact_submissions.insert_one(contact_doc)
        
        if result.inserted_id:
            return ContactFormResponse(
                success=True,
                message="Thank you for your interest! We'll get back to you within 24 hours."
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact submission")
            
    except Exception as e:
        print(f"Error saving contact submission: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while processing your request")


@contact_router.get("/contact/submissions")
async def get_contact_submissions(request: Request, status: Optional[str] = None):
    """
    Get all contact form submissions (for admin use)
    Optional status filter: new, contacted, closed
    """
    try:
        db = request.state.db
        
        # Build query
        query = {}
        if status:
            query["status"] = status
        
        # Fetch submissions, sorted by most recent first
        submissions = await db.contact_submissions.find(
            query, 
            {"_id": 0}
        ).sort("submitted_at", -1).to_list(1000)
        
        return {
            "success": True,
            "count": len(submissions),
            "submissions": submissions
        }
        
    except Exception as e:
        print(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact submissions")
