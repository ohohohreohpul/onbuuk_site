import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import axios from 'axios';
import { toast } from 'sonner';
import AdminSidebar from './AdminSidebar';
import { Key, Copy, Trash2, Plus, Eye, EyeOff } from 'lucide-react';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const APIKeys = ({ onLogout }) => {
  const [keys, setKeys] = useState([]);
  const [showNewKeyModal, setShowNewKeyModal] = useState(false);
  const [newKeyData, setNewKeyData] = useState({ name: '', description: '' });
  const [generatedKey, setGeneratedKey] = useState(null);
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    fetchKeys();
  }, []);

  const fetchKeys = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API}/admin/api-keys`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setKeys(response.data.keys);
    } catch (error) {
      console.error('Failed to fetch API keys:', error);
    }
  };

  const generateKey = async () => {
    if (!newKeyData.name) {
      toast.error('Please enter a name for the API key');
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post(
        `${API}/admin/api-keys/generate`,
        newKeyData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      setGeneratedKey(response.data);
      toast.success('API key generated successfully!');
      fetchKeys();
    } catch (error) {
      toast.error('Failed to generate API key');
      console.error(error);
    }
  };

  const revokeKey = async (keyName) => {
    if (!confirm(`Are you sure you want to revoke the API key "${keyName}"?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${API}/admin/api-keys/${keyName}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('API key revoked');
      fetchKeys();
    } catch (error) {
      toast.error('Failed to revoke API key');
      console.error(error);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const closeModal = () => {
    setShowNewKeyModal(false);
    setGeneratedKey(null);
    setNewKeyData({ name: '', description: '' });
  };

  return (
    <div className=\"flex min-h-screen bg-gray-50\">\n      <AdminSidebar onLogout={onLogout} />\n      \n      <div className=\"ml-60 flex-1 p-8\">\n        {/* Header */}\n        <div className=\"flex items-center justify-between mb-8\">\n          <div>\n            <h1 className=\"text-3xl font-bold text-gray-900 mb-2\">API Keys</h1>\n            <p className=\"text-gray-600\">Manage API keys for automation tools (Make.com, n8n, etc.)</p>\n          </div>\n          <Button\n            onClick={() => setShowNewKeyModal(true)}\n            className=\"bg-[#14B8A6] hover:bg-[#0d9488] text-white flex items-center space-x-2\"\n          >\n            <Plus className=\"w-4 h-4\" />\n            <span>Generate New Key</span>\n          </Button>\n        </div>\n\n        {/* Info Box */}\n        <div className=\"bg-blue-50 border-2 border-blue-200 p-6 rounded-lg mb-8\">\n          <h3 className=\"font-bold text-blue-900 mb-2\">🔐 Using API Keys for Automation</h3>\n          <ul className=\"text-sm text-blue-800 space-y-1\">\n            <li>• Use these keys to automate blog post creation from Make.com, n8n, or custom scripts</li>\n            <li>• Include the key in the <code className=\"bg-blue-100 px-1 rounded\">X-API-Key</code> header or use Bearer token authentication</li>\n            <li>• See <a href=\"/API_AUTOMATION.md\" className=\"underline font-semibold\">API Documentation</a> for detailed integration guide</li>\n            <li>• Keep your keys secret - treat them like passwords!</li>\n          </ul>\n        </div>\n\n        {/* API Keys List */}\n        <div className=\"bg-white border-2 border-gray-200 rounded-lg overflow-hidden\">\n          <table className=\"w-full\">\n            <thead className=\"bg-gray-50 border-b-2 border-gray-200\">\n              <tr>\n                <th className=\"text-left p-4 font-semibold text-gray-900\">Name</th>\n                <th className=\"text-left p-4 font-semibold text-gray-900\">Description</th>\n                <th className=\"text-left p-4 font-semibold text-gray-900\">Created</th>\n                <th className=\"text-left p-4 font-semibold text-gray-900\">Last Used</th>\n                <th className=\"text-left p-4 font-semibold text-gray-900\">Status</th>\n                <th className=\"text-right p-4 font-semibold text-gray-900\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              {keys.length === 0 ? (\n                <tr>\n                  <td colSpan=\"6\" className=\"text-center p-12 text-gray-500\">\n                    <Key className=\"w-12 h-12 mx-auto mb-4 text-gray-400\" />\n                    <p>No API keys yet. Generate one to get started!</p>\n                  </td>\n                </tr>\n              ) : (\n                keys.map((key, index) => (\n                  <tr key={index} className=\"border-b border-gray-100 hover:bg-gray-50\">\n                    <td className=\"p-4 font-medium text-gray-900\">{key.name}</td>\n                    <td className=\"p-4 text-gray-600\">{key.description || '-'}</td>\n                    <td className=\"p-4 text-gray-600\">\n                      {new Date(key.created_at).toLocaleDateString()}\n                    </td>\n                    <td className=\"p-4 text-gray-600\">\n                      {key.last_used ? new Date(key.last_used).toLocaleDateString() : 'Never'}\n                    </td>\n                    <td className=\"p-4\">\n                      <span className={`px-2 py-1 rounded text-xs font-semibold ${\n                        key.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'\n                      }`}>\n                        {key.active ? 'Active' : 'Revoked'}\n                      </span>\n                    </td>\n                    <td className=\"p-4 text-right\">\n                      {key.active && (\n                        <Button\n                          variant=\"ghost\"\n                          size=\"sm\"\n                          onClick={() => revokeKey(key.name)}\n                          className=\"text-red-600 hover:text-red-800 hover:bg-red-50\"\n                        >\n                          <Trash2 className=\"w-4 h-4\" />\n                        </Button>\n                      )}\n                    </td>\n                  </tr>\n                ))\n              )}\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      {/* Generate Key Modal */}\n      {showNewKeyModal && (\n        <div className=\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50\">\n          <div className=\"bg-white rounded-lg p-8 max-w-md w-full\">\n            <h2 className=\"text-2xl font-bold mb-4\">Generate New API Key</h2>\n            \n            {!generatedKey ? (\n              <div className=\"space-y-4\">\n                <div>\n                  <label className=\"block text-sm font-semibold text-gray-900 mb-2\">\n                    Key Name *\n                  </label>\n                  <Input\n                    value={newKeyData.name}\n                    onChange={(e) => setNewKeyData({ ...newKeyData, name: e.target.value })}\n                    placeholder=\"e.g., Make.com Integration\"\n                  />\n                </div>\n                \n                <div>\n                  <label className=\"block text-sm font-semibold text-gray-900 mb-2\">\n                    Description (Optional)\n                  </label>\n                  <Textarea\n                    value={newKeyData.description}\n                    onChange={(e) => setNewKeyData({ ...newKeyData, description: e.target.value })}\n                    placeholder=\"What will this key be used for?\"\n                    rows={3}\n                  />\n                </div>\n\n                <div className=\"flex space-x-3 pt-4\">\n                  <Button\n                    variant=\"outline\"\n                    onClick={closeModal}\n                    className=\"flex-1\"\n                  >\n                    Cancel\n                  </Button>\n                  <Button\n                    onClick={generateKey}\n                    className=\"flex-1 bg-[#14B8A6] hover:bg-[#0d9488] text-white\"\n                  >\n                    Generate Key\n                  </Button>\n                </div>\n              </div>\n            ) : (\n              <div className=\"space-y-4\">\n                <div className=\"bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg\">\n                  <p className=\"text-sm font-semibold text-yellow-900 mb-2\">⚠️ Save this key now!</p>\n                  <p className=\"text-xs text-yellow-800\">You won't be able to see it again.</p>\n                </div>\n                \n                <div>\n                  <label className=\"block text-sm font-semibold text-gray-900 mb-2\">\n                    Your API Key\n                  </label>\n                  <div className=\"relative\">\n                    <Input\n                      value={generatedKey.key}\n                      readOnly\n                      type={showKey ? 'text' : 'password'}\n                      className=\"pr-20 font-mono text-sm\"\n                    />\n                    <div className=\"absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1\">\n                      <button\n                        onClick={() => setShowKey(!showKey)}\n                        className=\"p-2 hover:bg-gray-100 rounded\"\n                      >\n                        {showKey ? <EyeOff className=\"w-4 h-4\" /> : <Eye className=\"w-4 h-4\" />}\n                      </button>\n                      <button\n                        onClick={() => copyToClipboard(generatedKey.key)}\n                        className=\"p-2 hover:bg-gray-100 rounded\"\n                      >\n                        <Copy className=\"w-4 h-4\" />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n\n                <Button\n                  onClick={closeModal}\n                  className=\"w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white\"\n                >\n                  Done\n                </Button>\n              </div>\n            )}\n          </div>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default APIKeys;
