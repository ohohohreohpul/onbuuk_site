# Blog CMS API Documentation for Automation Tools (Make.com / n8n)

## Base URL
```
Production: https://your-domain.com/api
Development: http://localhost:8001/api
```

## Authentication

All API requests require authentication using JWT tokens.

### Get Admin Token

**Endpoint:** `POST /api/admin/login`

**Request Body:**
```json
{
  "email": "admin@buuk.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Login successful"
}
```

**Usage:**
Include the token in all subsequent requests:
```
Authorization: Bearer <token>
```

---

## Blog Post Endpoints

### 1. Create Blog Post

**Endpoint:** `POST /api/admin/blog`

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "10 Ways to Boost Your Salon Revenue",
  "excerpt": "Discover proven strategies to increase bookings and grow your salon business",
  "content": "<h2>Introduction</h2><p>This is the blog content with HTML formatting...</p>",
  "category": "Revenue Growth",
  "author": "buuk Team",
  "readTime": "5 min",
  "image": "https://example.com/image.jpg",
  "featured": false,
  "published": true
}
```

**Field Descriptions:**
- `title` (required): Blog post title (50-60 chars recommended for SEO)
- `excerpt` (required): Short summary/meta description (150-160 chars for SEO)
- `content` (required): Full blog content (supports HTML)
- `category` (required): One of: "Best Practices", "Revenue Growth", "Customer Retention", "Marketing", "Business Growth"
- `author` (required): Author name
- `readTime` (optional): Reading time estimate (e.g., "5 min")
- `image` (optional): URL to featured image
- `featured` (optional): Boolean, mark as featured post
- `published` (optional): Boolean, true to publish immediately, false for draft

**Response:**
```json
{
  "id": "unique-post-id",
  "slug": "10-ways-to-boost-your-salon-revenue",
  "title": "10 Ways to Boost Your Salon Revenue",
  "createdAt": "2024-12-06T10:30:00Z",
  "message": "Post created successfully"
}
```

---

### 2. Update Blog Post

**Endpoint:** `PUT /api/admin/blog/{post-id}`

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:** (Same as Create, all fields optional)
```json
{
  "title": "Updated Title",
  "published": true
}
```

**Response:**
```json
{
  "message": "Post updated successfully",
  "id": "post-id"
}
```

---

### 3. Get All Posts (Admin)

**Endpoint:** `GET /api/admin/blog`

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `published` (optional): Filter by published status (true/false)
- `category` (optional): Filter by category
- `limit` (optional): Number of posts to return (default: 50)
- `skip` (optional): Number of posts to skip for pagination

**Response:**
```json
{
  "posts": [
    {
      "id": "post-id",
      "title": "Post Title",
      "slug": "post-slug",
      "excerpt": "Post excerpt...",
      "author": "Author Name",
      "category": "Category",
      "published": true,
      "createdAt": "2024-12-06T10:30:00Z"
    }
  ],
  "total": 25
}
```

---

### 4. Get Single Post (Admin)

**Endpoint:** `GET /api/admin/blog/{post-id}`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "id": "post-id",
  "title": "Post Title",
  "slug": "post-slug",
  "excerpt": "Post excerpt...",
  "content": "<html>Full content...</html>",
  "author": "Author Name",
  "category": "Revenue Growth",
  "readTime": "5 min",
  "image": "https://...",
  "featured": false,
  "published": true,
  "createdAt": "2024-12-06T10:30:00Z",
  "updatedAt": "2024-12-06T11:00:00Z"
}
```

---

### 5. Delete Blog Post

**Endpoint:** `DELETE /api/admin/blog/{post-id}`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "message": "Post deleted successfully"
}
```

---

### 6. Upload Image

**Endpoint:** `POST /api/admin/upload`

**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Request Body:**
- `file`: Image file (PNG, JPG, max 5MB)

**Response:**
```json
{
  "success": true,
  "url": "https://your-domain.com/uploads/filename.jpg"
}
```

---

## Public Endpoints (No Auth Required)

### Get Published Posts

**Endpoint:** `GET /api/blog/`

**Query Parameters:**
- `category` (optional): Filter by category
- `limit` (optional): Number of posts (default: 10)
- `skip` (optional): For pagination

**Response:**
```json
{
  "posts": [
    {
      "title": "Post Title",
      "slug": "post-slug",
      "excerpt": "...",
      "author": "Author",
      "category": "Category",
      "readTime": "5 min",
      "image": "https://...",
      "createdAt": "2024-12-06T10:30:00Z"
    }
  ]
}
```

### Get Single Published Post

**Endpoint:** `GET /api/blog/{slug}`

**Response:**
```json
{
  "title": "Post Title",
  "slug": "post-slug",
  "content": "<html>...</html>",
  "author": "Author",
  "category": "Category",
  "readTime": "5 min",
  "image": "https://...",
  "createdAt": "2024-12-06T10:30:00Z"
}
```

---

## Make.com / n8n Setup Examples

### Make.com Scenario

1. **Trigger:** Schedule (daily) or Webhook
2. **Module:** HTTP Request
   - Method: POST
   - URL: `https://your-domain.com/api/admin/blog`
   - Headers: 
     - `Authorization`: `Bearer YOUR_TOKEN`
     - `Content-Type`: `application/json`
   - Body: JSON with blog post data
3. **Module:** Error Handler (optional)

### n8n Workflow

1. **Node:** Schedule Trigger or Webhook
2. **Node:** HTTP Request
   - Method: POST
   - URL: `https://your-domain.com/api/admin/blog`
   - Authentication: Generic Credential Type
     - Header Auth: `Authorization: Bearer YOUR_TOKEN`
   - Body: JSON Mode
3. **Node:** Send notification on success/failure

---

## AI Content Generation Integration

### Example: OpenAI + Make.com/n8n

1. **Generate Content:** Use OpenAI API to generate blog post
2. **Format Response:** Extract title, content, excerpt
3. **Create Post:** Send to buuk CMS API
4. **Optional:** Generate image with DALL-E

### Example Workflow:
```
Trigger (Schedule) 
  → OpenAI (Generate blog topic)
  → OpenAI (Write blog content)
  → OpenAI (Generate meta description)
  → DALL-E (Generate image - optional)
  → buuk CMS API (Create post)
  → Slack/Email (Notification)
```

---

## Best Practices

1. **Store Token Securely:** Never hardcode tokens in workflows
2. **Rate Limiting:** Space out API calls (max 60 requests/minute recommended)
3. **Error Handling:** Always include error handlers in automation
4. **Content Validation:** Verify content length and formatting before posting
5. **Draft First:** Create posts as drafts (`published: false`) for manual review
6. **Backup:** Keep copies of generated content before posting

---

## Rate Limits

- **60 requests per minute** per IP
- **1000 posts per day** maximum

Exceeding limits will result in `429 Too Many Requests` response.

---

## Error Codes

- `400` - Bad Request (missing/invalid fields)
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (post doesn't exist)
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error

---

## Support

For automation setup help or API issues:
- Email: support@buuk.com
- Documentation: https://docs.buuk.com/api
