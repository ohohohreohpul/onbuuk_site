#!/usr/bin/env python3
"""
Backend Test Suite for Blog CMS
Tests all blog-related API endpoints including admin authentication,
blog CRUD operations, and public blog access.
"""

import requests
import json
import sys
from datetime import datetime
import os

# Get backend URL from frontend .env file
BACKEND_URL = "https://seo-landing-pages.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

# Test credentials
ADMIN_EMAIL = "admin@buuk.com"
ADMIN_PASSWORD = "admin123"

class BlogCMSTest:
    def __init__(self):
        self.session = requests.Session()
        self.admin_token = None
        self.test_post_id = None
        self.test_slug = None
        
    def log(self, message, level="INFO"):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{timestamp}] {level}: {message}")
        
    def test_admin_login(self):
        """Test admin authentication"""
        self.log("Testing admin login...")
        
        try:
            response = self.session.post(
                f"{API_BASE}/admin/login",
                json={
                    "email": ADMIN_EMAIL,
                    "password": ADMIN_PASSWORD
                },
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and data.get('token'):
                    self.admin_token = data['token']
                    self.log("✅ Admin login successful")
                    return True
                else:
                    self.log("❌ Admin login failed - Invalid response format", "ERROR")
                    return False
            else:
                self.log(f"❌ Admin login failed - Status: {response.status_code}, Response: {response.text}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"❌ Admin login failed - Exception: {str(e)}", "ERROR")
            return False
    
    def test_create_blog_post(self):
        """Test creating a new blog post"""
        self.log("Testing blog post creation...")
        
        try:
            post_data = {
                "title": "10 Ways to Boost Your Salon Revenue",
                "excerpt": "Discover proven strategies to increase bookings and grow your salon business",
                "content": "<h2>Introduction</h2><p>Running a successful salon requires more than just great styling skills. Here are <strong>10 proven strategies</strong> to boost your revenue:</p><ul><li>Implement online booking systems</li><li>Offer package deals and memberships</li><li>Focus on customer retention</li><li>Upsell premium services</li><li>Optimize your pricing strategy</li></ul><h3>Strategy 1: Online Booking</h3><p>Make it easy for customers to book appointments 24/7...</p>",
                "category": "Revenue Growth",
                "author": "buuk Team",
                "readTime": "5 min",
                "image": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
                "featured": True,
                "published": True
            }
            
            response = self.session.post(
                f"{API_BASE}/admin/blog",
                json=post_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                self.test_post_id = data.get('id')
                self.test_slug = data.get('slug')
                self.log(f"✅ Blog post created successfully - ID: {self.test_post_id}, Slug: {self.test_slug}")
                return True
            else:
                self.log(f"❌ Blog post creation failed - Status: {response.status_code}, Response: {response.text}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"❌ Blog post creation failed - Exception: {str(e)}", "ERROR")
            return False
    
    def test_get_admin_blog_list(self):
        """Test getting all blog posts from admin panel"""
        self.log("Testing admin blog list retrieval...")
        
        try:
            response = self.session.get(f"{API_BASE}/admin/blog")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log(f"✅ Admin blog list retrieved successfully - Found {len(data)} posts")
                    
                    # Check if our test post is in the list
                    if self.test_post_id:
                        found_post = any(post.get('id') == self.test_post_id for post in data)
                        if found_post:
                            self.log("✅ Test post found in admin blog list")
                        else:
                            self.log("❌ Test post not found in admin blog list", "ERROR")
                            return False
                    return True
                else:
                    self.log("❌ Admin blog list failed - Invalid response format", "ERROR")
                    return False
            else:
                self.log(f"❌ Admin blog list failed - Status: {response.status_code}, Response: {response.text}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"❌ Admin blog list failed - Exception: {str(e)}", "ERROR")
            return False
    
    def test_get_public_blog_list(self):
        """Test getting published blog posts from public endpoint"""
        self.log("Testing public blog list retrieval...")
        
        try:
            response = self.session.get(f"{API_BASE}/blog/")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log(f"✅ Public blog list retrieved successfully - Found {len(data)} published posts")
                    
                    # Check if our test post is in the public list
                    if self.test_slug:
                        found_post = any(post.get('slug') == self.test_slug for post in data)
                        if found_post:
                            self.log("✅ Test post found in public blog list")
                        else:
                            self.log("❌ Test post not found in public blog list", "ERROR")
                            return False
                    return True
                else:
                    self.log("❌ Public blog list failed - Invalid response format", "ERROR")
                    return False
            else:
                self.log(f"❌ Public blog list failed - Status: {response.status_code}, Response: {response.text}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"❌ Public blog list failed - Exception: {str(e)}", "ERROR")
            return False
    
    def test_get_blog_post_by_slug(self):
        """Test getting a single blog post by slug"""
        if not self.test_slug:
            self.log("⚠️ Skipping blog post by slug test - no test slug available", "WARNING")
            return True
            
        self.log(f"Testing blog post retrieval by slug: {self.test_slug}")
        
        try:
            response = self.session.get(f"{API_BASE}/blog/{self.test_slug}")
            
            if response.status_code == 200:
                data = response.json()
                if data.get('slug') == self.test_slug:
                    self.log("✅ Blog post retrieved by slug successfully")
                    
                    # Verify content formatting
                    content = data.get('content', '')
                    if '<h2>' in content and '<strong>' in content and '<ul>' in content:
                        self.log("✅ Blog post content formatting preserved")
                    else:
                        self.log("⚠️ Blog post content formatting may be missing", "WARNING")
                    
                    return True
                else:
                    self.log("❌ Blog post by slug failed - Invalid response data", "ERROR")
                    return False
            else:
                self.log(f"❌ Blog post by slug failed - Status: {response.status_code}, Response: {response.text}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"❌ Blog post by slug failed - Exception: {str(e)}", "ERROR")
            return False
    
    def test_update_blog_post(self):
        """Test updating a blog post"""
        if not self.test_post_id:
            self.log("⚠️ Skipping blog post update test - no test post ID available", "WARNING")
            return True
            
        self.log(f"Testing blog post update for ID: {self.test_post_id}")
        
        try:
            update_data = {
                "title": "10 Ways to Boost Your Salon Revenue - Updated",
                "excerpt": "Discover proven strategies to increase bookings and grow your salon business - Updated version",
                "readTime": "6 min"
            }
            
            response = self.session.put(
                f"{API_BASE}/admin/blog/{self.test_post_id}",
                json=update_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get('title') == update_data['title']:
                    self.log("✅ Blog post updated successfully")
                    return True
                else:
                    self.log("❌ Blog post update failed - Title not updated", "ERROR")
                    return False
            else:
                self.log(f"❌ Blog post update failed - Status: {response.status_code}, Response: {response.text}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"❌ Blog post update failed - Exception: {str(e)}", "ERROR")
            return False
    
    def test_backend_health(self):
        """Test basic backend connectivity"""
        self.log("Testing backend health...")
        
        try:
            response = self.session.get(f"{API_BASE}/")
            
            if response.status_code == 200:
                self.log("✅ Backend is responding")
                return True
            else:
                self.log(f"❌ Backend health check failed - Status: {response.status_code}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"❌ Backend health check failed - Exception: {str(e)}", "ERROR")
            return False
    
    def cleanup_test_post(self):
        """Clean up test post after testing"""
        if not self.test_post_id:
            return
            
        self.log(f"Cleaning up test post ID: {self.test_post_id}")
        
        try:
            response = self.session.delete(f"{API_BASE}/admin/blog/{self.test_post_id}")
            
            if response.status_code == 200:
                self.log("✅ Test post cleaned up successfully")
            else:
                self.log(f"⚠️ Test post cleanup failed - Status: {response.status_code}", "WARNING")
                
        except Exception as e:
            self.log(f"⚠️ Test post cleanup failed - Exception: {str(e)}", "WARNING")
    
    def run_all_tests(self):
        """Run all blog CMS tests"""
        self.log("=" * 60)
        self.log("STARTING BLOG CMS BACKEND TESTS")
        self.log("=" * 60)
        
        tests = [
            ("Backend Health Check", self.test_backend_health),
            ("Admin Login", self.test_admin_login),
            ("Create Blog Post", self.test_create_blog_post),
            ("Get Admin Blog List", self.test_get_admin_blog_list),
            ("Get Public Blog List", self.test_get_public_blog_list),
            ("Get Blog Post by Slug", self.test_get_blog_post_by_slug),
            ("Update Blog Post", self.test_update_blog_post),
        ]
        
        results = {}
        
        for test_name, test_func in tests:
            self.log(f"\n--- Running: {test_name} ---")
            try:
                results[test_name] = test_func()
            except Exception as e:
                self.log(f"❌ {test_name} failed with exception: {str(e)}", "ERROR")
                results[test_name] = False
        
        # Cleanup
        self.cleanup_test_post()
        
        # Summary
        self.log("\n" + "=" * 60)
        self.log("TEST RESULTS SUMMARY")
        self.log("=" * 60)
        
        passed = 0
        total = len(results)
        
        for test_name, result in results.items():
            status = "✅ PASS" if result else "❌ FAIL"
            self.log(f"{test_name}: {status}")
            if result:
                passed += 1
        
        self.log(f"\nOverall: {passed}/{total} tests passed")
        
        if passed == total:
            self.log("🎉 ALL TESTS PASSED!")
            return True
        else:
            self.log("⚠️ SOME TESTS FAILED!")
            return False

if __name__ == "__main__":
    tester = BlogCMSTest()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)