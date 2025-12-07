import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import axios from 'axios';
import { toast } from 'sonner';
import AdminSidebar from './AdminSidebar';
import TipTapEditor from './TipTapEditor';
import { Upload, X } from 'lucide-react';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const categories = [
  'Best Practices',
  'Revenue Growth',
  'Customer Retention',
  'Marketing',
  'Business Growth'
];

const BlogEditor = ({ onLogout }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: categories[0],
    author: '',
    readTime: '',
    image: '',
    featured: false,
    published: true
  });

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${API}/admin/blog/${id}`);
      setFormData(response.data);
    } catch (error) {
      toast.error('Failed to fetch post');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        await axios.put(`${API}/admin/blog/${id}`, formData);
        toast.success('Post updated successfully');
      } else {
        await axios.post(`${API}/admin/blog`, formData);
        toast.success('Post created successfully');
      }
      navigate('/admin/blog');
    } catch (error) {
      toast.error('Failed to save post');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const response = await axios.post(`${API}/admin/upload`, formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setFormData({ ...formData, image: response.data.url });
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ],
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar onLogout={onLogout} />
      
      <div className="ml-60 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            {isEdit ? 'Edit Blog Post' : 'Create New Post'}
          </h1>
          <p className="text-gray-600 mt-1">
            {isEdit ? 'Update your blog post' : 'Write and publish a new blog post'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Content */}
          <div className="bg-white border border-gray-200 p-8">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter post title"
                  required
                  className="h-11 border-gray-300"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief description of the post"
                  required
                  rows={3}
                  className="border-gray-300"
                />
              </div>

              {/* Content Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <div className="border border-gray-300 bg-white">
                  <ReactQuill
                    theme="snow"
                    value={formData.content}
                    onChange={(value) => setFormData({ ...formData, content: value })}
                    modules={modules}
                    style={{ minHeight: '400px' }}
                  />
                </div>
              </div>

              {/* Row: Category & Author */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full h-11 border border-gray-300 px-3 bg-white"
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author *
                  </label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Author name"
                    required
                    className="h-11 border-gray-300"
                  />
                </div>
              </div>

              {/* Read Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Read Time *
                </label>
                <Input
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  placeholder="e.g., 5 min read"
                  required
                  className="h-11 border-gray-300"
                />
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image
                </label>
                
                {formData.image ? (
                  <div className="relative border border-gray-300 p-4">
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      className="w-full h-64 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '' })}
                      className="absolute top-6 right-6 bg-red-600 text-white p-2 hover:bg-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <Button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      disabled={uploading}
                      className="bg-black hover:bg-gray-800 text-white"
                    >
                      {uploading ? 'Uploading...' : 'Choose Image'}
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-5 h-5 border-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Featured Post
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-5 h-5 border-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Published
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-4">
            <Button
              type="button"
              onClick={() => navigate('/admin/blog')}
              variant="outline"
              className="h-11 px-6 border-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-black hover:bg-gray-800 text-white h-11 px-6"
            >
              {loading ? 'Saving...' : (isEdit ? 'Update Post' : 'Create Post')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
