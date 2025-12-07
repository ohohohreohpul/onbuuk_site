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
    if (!window.confirm(`Are you sure you want to revoke the API key "${keyName}"?`)) {
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
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar onLogout={onLogout} />
      
      <div className="ml-60 flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">API Keys</h1>
            <p className="text-gray-600">Manage API keys for automation tools</p>
          </div>
          <Button
            onClick={() => setShowNewKeyModal(true)}
            className="bg-[#14B8A6] hover:bg-[#0d9488] text-white flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Generate New Key</span>
          </Button>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-blue-900 mb-2">🔐 Using API Keys for Automation</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use these keys to automate blog post creation from Make.com, n8n, or custom scripts</li>
            <li>• Include the key in Authorization header as Bearer token</li>
            <li>• See API_AUTOMATION.md for detailed integration guide</li>
            <li>• Keep your keys secret - treat them like passwords!</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">Name</th>
                <th className="text-left p-4 font-semibold text-gray-900">Description</th>
                <th className="text-left p-4 font-semibold text-gray-900">Created</th>
                <th className="text-left p-4 font-semibold text-gray-900">Last Used</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                <th className="text-right p-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {keys.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-12 text-gray-500">
                    <Key className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p>No API keys yet. Generate one to get started!</p>
                  </td>
                </tr>
              ) : (
                keys.map((key, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{key.name}</td>
                    <td className="p-4 text-gray-600">{key.description || '-'}</td>
                    <td className="p-4 text-gray-600">
                      {new Date(key.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-gray-600">
                      {key.last_used ? new Date(key.last_used).toLocaleDateString() : 'Never'}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        key.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {key.active ? 'Active' : 'Revoked'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      {key.active && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => revokeKey(key.name)}
                          className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showNewKeyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Generate New API Key</h2>
            
            {!generatedKey ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Key Name *
                  </label>
                  <Input
                    value={newKeyData.name}
                    onChange={(e) => setNewKeyData({ ...newKeyData, name: e.target.value })}
                    placeholder="e.g., Make.com Integration"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Description (Optional)
                  </label>
                  <Textarea
                    value={newKeyData.description}
                    onChange={(e) => setNewKeyData({ ...newKeyData, description: e.target.value })}
                    placeholder="What will this key be used for?"
                    rows={3}
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={closeModal}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={generateKey}
                    className="flex-1 bg-[#14B8A6] hover:bg-[#0d9488] text-white"
                  >
                    Generate Key
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-yellow-900 mb-2">⚠️ Save this key now!</p>
                  <p className="text-xs text-yellow-800">You won't be able to see it again.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your API Key
                  </label>
                  <div className="relative">
                    <Input
                      value={generatedKey.key}
                      readOnly
                      type={showKey ? 'text' : 'password'}
                      className="pr-20 font-mono text-sm"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
                      <button
                        onClick={() => setShowKey(!showKey)}
                        className="p-2 hover:bg-gray-100 rounded"
                        type="button"
                      >
                        {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => copyToClipboard(generatedKey.key)}
                        className="p-2 hover:bg-gray-100 rounded"
                        type="button"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={closeModal}
                  className="w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white"
                >
                  Done
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default APIKeys;
