from fastapi import APIRouter, HTTPException, UploadFile, File, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from models import BlogPost, BlogPostCreate, BlogPostUpdate, AdminLogin
from typing import List, Optional
from datetime import datetime
import re
import os
import uuid
import shutil
from pathlib import Path

blog_router = APIRouter(prefix='/api/blog', tags=['blog'])
admin_router = APIRouter(prefix='/api/admin', tags=['admin'])

# Simple auth - In production, use proper JWT tokens
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', 'admin@buuk.com')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'admin123')

# Helper function to generate slug from title
def generate_slug(title: str) -> str:
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = slug.strip('-')
    return slug

# Public Blog Routes
@blog_router.get('/', response_model=List[BlogPost])
async def get_all_posts(db: AsyncIOMotorDatabase, published: bool = True):
    """Get all published blog posts"""
    query = {'published': published} if published else {}
    posts = await db.blog_posts.find(query).sort('createdAt', -1).to_list(100)
    return [BlogPost(**post) for post in posts]

@blog_router.get('/{slug}', response_model=BlogPost)
async def get_post_by_slug(slug: str, db: AsyncIOMotorDatabase):
    """Get a single blog post by slug"""
    post = await db.blog_posts.find_one({'slug': slug, 'published': True})
    if not post:
        raise HTTPException(status_code=404, detail='Blog post not found')
    return BlogPost(**post)

# Admin Authentication
@admin_router.post('/login')
async def admin_login(credentials: AdminLogin):
    """Simple admin login"""
    if credentials.email == ADMIN_EMAIL and credentials.password == ADMIN_PASSWORD:
        return {
            'success': True,
            'user': {
                'email': ADMIN_EMAIL,
                'name': 'Admin',
                'role': 'admin'
            },
            'token': 'mock-token-123'  # In production, use proper JWT
        }
    raise HTTPException(status_code=401, detail='Invalid credentials')

# Admin Blog Management Routes
@admin_router.get('/blog', response_model=List[BlogPost])
async def admin_get_all_posts(db: AsyncIOMotorDatabase):
    """Get all blog posts (including unpublished)"""
    posts = await db.blog_posts.find().sort('createdAt', -1).to_list(100)
    return [BlogPost(**post) for post in posts]

@admin_router.post('/blog', response_model=BlogPost)
async def admin_create_post(post_data: BlogPostCreate, db: AsyncIOMotorDatabase):
    """Create a new blog post"""
    slug = generate_slug(post_data.title)
    
    # Check if slug already exists
    existing = await db.blog_posts.find_one({'slug': slug})
    if existing:
        slug = f"{slug}-{str(uuid.uuid4())[:8]}"
    
    post = BlogPost(
        slug=slug,
        **post_data.dict()
    )
    
    await db.blog_posts.insert_one(post.dict())
    return post

@admin_router.get('/blog/{post_id}', response_model=BlogPost)
async def admin_get_post(post_id: str, db: AsyncIOMotorDatabase):
    """Get a single blog post by ID"""
    post = await db.blog_posts.find_one({'id': post_id})
    if not post:
        raise HTTPException(status_code=404, detail='Blog post not found')
    return BlogPost(**post)

@admin_router.put('/blog/{post_id}', response_model=BlogPost)
async def admin_update_post(post_id: str, post_data: BlogPostUpdate, db: AsyncIOMotorDatabase):
    """Update a blog post"""
    post = await db.blog_posts.find_one({'id': post_id})
    if not post:
        raise HTTPException(status_code=404, detail='Blog post not found')
    
    update_data = post_data.dict(exclude_unset=True)
    update_data['updatedAt'] = datetime.utcnow()
    
    # Update slug if title changed
    if 'title' in update_data:
        update_data['slug'] = generate_slug(update_data['title'])
    
    await db.blog_posts.update_one(
        {'id': post_id},
        {'$set': update_data}
    )
    
    updated_post = await db.blog_posts.find_one({'id': post_id})
    return BlogPost(**updated_post)

@admin_router.delete('/blog/{post_id}')
async def admin_delete_post(post_id: str, db: AsyncIOMotorDatabase):
    """Delete a blog post"""
    result = await db.blog_posts.delete_one({'id': post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail='Blog post not found')
    return {'success': True, 'message': 'Blog post deleted'}

# Image Upload
@admin_router.post('/upload')
async def upload_image(file: UploadFile = File(...)):
    """Upload an image for blog posts"""
    # Create uploads directory if it doesn't exist
    upload_dir = Path('/app/frontend/public/uploads')
    upload_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate unique filename
    file_extension = file.filename.split('.')[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = upload_dir / unique_filename
    
    # Save file
    with open(file_path, 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Return public URL
    return {
        'success': True,
        'url': f'/uploads/{unique_filename}',
        'filename': unique_filename
    }
