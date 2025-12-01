from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
import uuid

class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    title: str
    excerpt: str
    content: str
    category: str
    author: str
    date: str = Field(default_factory=lambda: datetime.utcnow().strftime('%b %d, %Y'))
    readTime: str
    image: Optional[str] = None
    featured: bool = False
    published: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class BlogPostCreate(BaseModel):
    title: str
    excerpt: str
    content: str
    category: str
    author: str
    readTime: str
    image: Optional[str] = None
    featured: bool = False
    published: bool = True

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    author: Optional[str] = None
    readTime: Optional[str] = None
    image: Optional[str] = None
    featured: Optional[bool] = None
    published: Optional[bool] = None

class AdminLogin(BaseModel):
    email: str
    password: str

class AdminUser(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    name: str
    role: str = 'admin'
    createdAt: datetime = Field(default_factory=datetime.utcnow)
