"""
Backend API Tests for Blog Admin System
Tests: Admin login, Blog CRUD operations
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAdminAuth:
    """Admin authentication endpoint tests"""
    
    def test_admin_login_success(self):
        """Test successful admin login with valid credentials"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={
            "email": "admin@buuk.com",
            "password": "admin123"
        })
        assert response.status_code == 200
        
        data = response.json()
        assert data["success"] == True
        assert "token" in data
        assert "user" in data
        assert data["user"]["email"] == "admin@buuk.com"
        assert data["user"]["role"] == "admin"
    
    def test_admin_login_invalid_credentials(self):
        """Test login with invalid credentials returns 401"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={
            "email": "wrong@example.com",
            "password": "wrongpass"
        })
        assert response.status_code == 401


class TestBlogCRUD:
    """Blog post CRUD operations tests"""
    
    @pytest.fixture
    def auth_headers(self):
        """Get authentication headers"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={
            "email": "admin@buuk.com",
            "password": "admin123"
        })
        token = response.json().get("token")
        return {"Authorization": f"Bearer {token}"}
    
    def test_get_all_blog_posts(self, auth_headers):
        """Test fetching all blog posts"""
        response = requests.get(f"{BASE_URL}/api/admin/blog", headers=auth_headers)
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)
    
    def test_create_blog_post(self, auth_headers):
        """Test creating a new blog post"""
        unique_title = f"TEST_Post_{uuid.uuid4().hex[:8]}"
        post_data = {
            "title": unique_title,
            "excerpt": "This is a test excerpt for the blog post",
            "content": "<p>This is the test content for the blog post</p>",
            "category": "Best Practices",
            "author": "Test Author",
            "readTime": "5 min",
            "image": "",
            "featured": False,
            "published": True
        }
        
        response = requests.post(f"{BASE_URL}/api/admin/blog", json=post_data, headers=auth_headers)
        assert response.status_code == 200
        
        data = response.json()
        assert data["title"] == unique_title
        assert data["excerpt"] == post_data["excerpt"]
        assert data["content"] == post_data["content"]
        assert "id" in data
        assert "slug" in data
        
        # Store post_id for cleanup
        return data["id"]
    
    def test_get_single_blog_post(self, auth_headers):
        """Test fetching a single blog post by ID"""
        # First create a post
        unique_title = f"TEST_SinglePost_{uuid.uuid4().hex[:8]}"
        post_data = {
            "title": unique_title,
            "excerpt": "Test excerpt",
            "content": "<p>Test content</p>",
            "category": "Marketing",
            "author": "Test Author",
            "readTime": "3 min",
            "image": "",
            "featured": False,
            "published": True
        }
        
        create_response = requests.post(f"{BASE_URL}/api/admin/blog", json=post_data, headers=auth_headers)
        assert create_response.status_code == 200
        post_id = create_response.json()["id"]
        
        # Now fetch the post
        get_response = requests.get(f"{BASE_URL}/api/admin/blog/{post_id}", headers=auth_headers)
        assert get_response.status_code == 200
        
        fetched_post = get_response.json()
        assert fetched_post["id"] == post_id
        assert fetched_post["title"] == unique_title
    
    def test_update_blog_post(self, auth_headers):
        """Test updating a blog post - CRITICAL: This tests the '0 changes' bug fix"""
        # First create a post
        unique_title = f"TEST_UpdatePost_{uuid.uuid4().hex[:8]}"
        post_data = {
            "title": unique_title,
            "excerpt": "Original excerpt",
            "content": "<p>Original content</p>",
            "category": "Revenue Growth",
            "author": "Original Author",
            "readTime": "4 min",
            "image": "",
            "featured": False,
            "published": True
        }
        
        create_response = requests.post(f"{BASE_URL}/api/admin/blog", json=post_data, headers=auth_headers)
        assert create_response.status_code == 200
        post_id = create_response.json()["id"]
        
        # Update the post with new data
        updated_title = f"TEST_UpdatedTitle_{uuid.uuid4().hex[:8]}"
        update_data = {
            "title": updated_title,
            "excerpt": "Updated excerpt - this should be saved",
            "content": "<p>Updated content - this should be saved</p>",
            "category": "Customer Retention",
            "author": "Updated Author",
            "readTime": "6 min",
            "image": "",
            "featured": True,
            "published": True
        }
        
        update_response = requests.put(f"{BASE_URL}/api/admin/blog/{post_id}", json=update_data, headers=auth_headers)
        assert update_response.status_code == 200
        
        updated_post = update_response.json()
        assert updated_post["title"] == updated_title
        assert updated_post["excerpt"] == update_data["excerpt"]
        assert updated_post["content"] == update_data["content"]
        
        # Verify persistence by fetching again
        verify_response = requests.get(f"{BASE_URL}/api/admin/blog/{post_id}", headers=auth_headers)
        assert verify_response.status_code == 200
        
        verified_post = verify_response.json()
        assert verified_post["title"] == updated_title
        assert verified_post["excerpt"] == update_data["excerpt"]
        assert verified_post["content"] == update_data["content"]
        print(f"✓ Blog post update verified - title changed from '{unique_title}' to '{updated_title}'")
    
    def test_delete_blog_post(self, auth_headers):
        """Test deleting a blog post"""
        # First create a post
        unique_title = f"TEST_DeletePost_{uuid.uuid4().hex[:8]}"
        post_data = {
            "title": unique_title,
            "excerpt": "To be deleted",
            "content": "<p>This post will be deleted</p>",
            "category": "Business Growth",
            "author": "Test Author",
            "readTime": "2 min",
            "image": "",
            "featured": False,
            "published": False
        }
        
        create_response = requests.post(f"{BASE_URL}/api/admin/blog", json=post_data, headers=auth_headers)
        assert create_response.status_code == 200
        post_id = create_response.json()["id"]
        
        # Delete the post
        delete_response = requests.delete(f"{BASE_URL}/api/admin/blog/{post_id}", headers=auth_headers)
        assert delete_response.status_code == 200
        
        # Verify deletion
        verify_response = requests.get(f"{BASE_URL}/api/admin/blog/{post_id}", headers=auth_headers)
        assert verify_response.status_code == 404


class TestPublicBlogAPI:
    """Public blog API tests"""
    
    def test_get_public_posts(self):
        """Test fetching public blog posts"""
        response = requests.get(f"{BASE_URL}/api/blog/")
        assert response.status_code == 200
        
        data = response.json()
        assert "posts" in data
        assert isinstance(data["posts"], list)
    
    def test_get_post_by_slug(self):
        """Test fetching a post by slug"""
        # First get all posts to find a valid slug
        response = requests.get(f"{BASE_URL}/api/blog/")
        assert response.status_code == 200
        
        posts = response.json().get("posts", [])
        if posts:
            slug = posts[0]["slug"]
            slug_response = requests.get(f"{BASE_URL}/api/blog/{slug}")
            assert slug_response.status_code == 200
            
            post = slug_response.json()
            assert post["slug"] == slug
        else:
            pytest.skip("No published posts available to test slug lookup")
