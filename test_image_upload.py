#!/usr/bin/env python3
"""
Test image upload functionality for blog CMS
"""

import requests
import io
from PIL import Image
import sys

BACKEND_URL = "https://salon-manage-3.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_image_upload():
    """Test image upload endpoint"""
    print("Testing image upload functionality...")
    
    try:
        # Create a simple test image
        img = Image.new('RGB', (100, 100), color='red')
        img_bytes = io.BytesIO()
        img.save(img_bytes, format='JPEG')
        img_bytes.seek(0)
        
        # Upload the image
        files = {'file': ('test_image.jpg', img_bytes, 'image/jpeg')}
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