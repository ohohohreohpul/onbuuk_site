import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import axios from 'axios';
import { toast } from 'sonner';
import AdminSidebar from './AdminSidebar';
import TipTapEditor from './TipTapEditor';
import { Upload, X, Save, Eye, ArrowLeft } from 'lucide-react';

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
  const [charCount, setCharCount] = useState({ title: 0, excerpt: 0 });

  useEffect(() => {
    if (isEdit) {
      fetchPost();
    }
  }, [id]);

  useEffect(() => {
    setCharCount({
      title: formData.title.length,
      excerpt: formData.excerpt.length
    });
  }, [formData.title, formData.excerpt]);

  const fetchPost = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API}/admin/blog/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFormData(response.data);
    } catch (error) {
      toast.error('Failed to load post');
      console.error(error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setUploading(true);
    const formDataObj = new FormData();
    formDataObj.append('file', file);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post(`${API}/admin/upload`, formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      setFormData({ ...formData, image: response.data.url });
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload image');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (isEdit) {
        await axios.put(`${API}/admin/blog/${id}`, formData, config);
        toast.success('Post updated successfully!');
      } else {
        await axios.post(`${API}/admin/blog`, formData, config);
        toast.success('Post created successfully!');
      }
      
      navigate('/admin/blog');
    } catch (error) {
      toast.error(isEdit ? 'Failed to update post' : 'Failed to create post');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = async () => {
    const draftData = { ...formData, published: false };
    setFormData(draftData);
    
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (isEdit) {
        await axios.put(`${API}/admin/blog/${id}`, draftData, config);
      } else {
        await axios.post(`${API}/admin/blog`, draftData, config);
      }
      toast.success('Draft saved successfully!');
      navigate('/admin/blog');
    } catch (error) {
      toast.error('Failed to save draft');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar onLogout={onLogout} />
      
      <div className="ml-60 flex-1">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/admin/blog')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Posts</span>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">
                {isEdit ? 'Edit Post' : 'Create New Post'}
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={handleSaveDraft}
                disabled={loading}
                className="flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save as Draft</span>
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[#14B8A6] hover:bg-[#0d9488] text-white flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>{loading ? 'Publishing...' : 'Publish'}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Title *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter your blog post title..."
                  className="text-2xl font-bold h-14 border-2 text-gray-900 bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">{charCount.title} / 100 characters (optimal: 50-60)</p>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Excerpt / Meta Description *
                </label>
                <Textarea
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Write a brief summary that will appear in search results and blog listings..."
                  rows={3}
                  className="resize-none border-2 text-gray-900 bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">{charCount.excerpt} / 160 characters (optimal: 150-160)</p>
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Featured Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#14B8A6] transition-colors">
                  {formData.image ? (
                    <div className="relative">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, image: '' })}
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="mt-4"
                      >
                        {uploading ? 'Uploading...' : 'Choose Image'}
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Editor */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Content *
                </label>
                <div className="bg-white">
                  <TipTapEditor
                    content={formData.content}
                    onChange={(value) => setFormData({ ...formData, content: value })}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">💡 Tip: Use headings, lists, and formatting to make your content easy to read</p>
              </div>

              {/* Metadata Row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#14B8A6] text-gray-900 bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Author *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Author name"
                    className="border-2 text-gray-900 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Read Time
                  </label>
                  <Input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="e.g., 5 min"
                    className="border-2 text-gray-900 bg-white"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-8">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 text-[#14B8A6] border-gray-300 rounded focus:ring-[#14B8A6]"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-900">
                    Mark as Featured Post
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;