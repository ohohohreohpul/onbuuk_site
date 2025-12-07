#!/usr/bin/env python3
"""
Test image upload functionality for blog CMS
"""

import requests
import io
import sys

BACKEND_URL = "https://salon-manage-3.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_image_upload():
    """Test image upload endpoint"""
    print("Testing image upload functionality...")
    
    try:
        # Create a simple test file (simulating an image)
        test_content = b"fake image content for testing"
        test_file = io.BytesIO(test_content)
        
        # Upload the file
        files = {'file': ('test_image.jpg', test_file, 'image/jpeg')}
        response = requests.post(f"{API_BASE}/admin/upload", files=files)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') and data.get('url'):
                print(f"✅ Image upload successful - URL: {data['url']}")
                return True
            else:
                print(f"❌ Image upload failed - Invalid response: {data}")
                return False
        else:
            print(f"❌ Image upload failed - Status: {response.status_code}, Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Image upload failed - Exception: {str(e)}")
        return False

if __name__ == "__main__":
    success = test_image_upload()
    sys.exit(0 if success else 1)