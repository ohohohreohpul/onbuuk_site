import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import AdminSidebar from './AdminSidebar';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BlogList = ({ onLogout }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API}/admin/blog`);
      setPosts(response.data);
    } catch (error) {
      toast.error('Failed to fetch blog posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await axios.delete(`${API}/admin/blog/${postId}`);
      toast.success('Post deleted successfully');
      fetchPosts();
    } catch (error) {
      toast.error('Failed to delete post');
    }
  };

  const filteredPosts = posts.filter(post => {
    if (filter === 'all') return true;
    if (filter === 'published') return post.published;
    if (filter === 'draft') return !post.published;
    return true;
  });

  const stats = {
    total: posts.length,
    published: posts.filter(p => p.published).length,
    drafts: posts.filter(p => !p.published).length
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar onLogout={onLogout} />
      
      <div className="ml-60 flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600 mt-1">Manage your blog content</p>
          </div>
          <Button
            onClick={() => navigate('/admin/blog/new')}
            className="bg-black hover:bg-gray-800 text-white h-11 px-6"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Post
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Posts</p>
                <p className="text-3xl font-semibold text-gray-900 mt-2">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-3xl font-semibold text-gray-900 mt-2">{stats.published}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Drafts</p>
                <p className="text-3xl font-semibold text-gray-900 mt-2">{stats.drafts}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center">
                <Edit className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white border border-gray-200 mb-0">
          <div className="flex space-x-8 px-6 border-b border-gray-200">
            <button
              onClick={() => setFilter('all')}
              className={`py-4 text-sm font-medium transition-colors relative ${
                filter === 'all'
                  ? 'text-black'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All
              {filter === 'all' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`py-4 text-sm font-medium transition-colors relative ${
                filter === 'published'
                  ? 'text-black'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Published
              {filter === 'published' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`py-4 text-sm font-medium transition-colors relative ${
                filter === 'draft'
                  ? 'text-black'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Drafts
              {filter === 'draft' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase">Title</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase">Category</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase">Author</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : filteredPosts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-gray-500">
                      No blog posts yet
                    </td>
                  </tr>
                ) : (
                  filteredPosts.map((post) => (
                    <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">{post.title}</td>
                      <td className="py-4 px-6 text-gray-600">{post.category}</td>
                      <td className="py-4 px-6 text-gray-600">{post.author}</td>
                      <td className="py-4 px-6 text-gray-600">{post.date}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-3 py-1 text-xs font-medium ${
                          post.published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                            className="text-gray-600 hover:text-black transition-colors"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="text-gray-600 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {filteredPosts.length > 0 && (
            <div className="py-4 px-6 text-sm text-gray-600">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { FileText } from 'lucide-react';

export default BlogList;