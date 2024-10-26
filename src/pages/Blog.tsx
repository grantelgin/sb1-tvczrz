import React from 'react';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Protect Your Home Before a Storm',
      excerpt: 'Essential steps to prepare your property for severe weather and minimize potential damage.',
      date: '2024-03-15',
      author: 'John Smith',
      image: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Understanding Your Insurance Coverage',
      excerpt: 'A comprehensive guide to storm damage insurance claims and what your policy might cover.',
      date: '2024-03-10',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Signs of Hidden Storm Damage',
      excerpt: 'Learn how to spot less obvious signs of storm damage that could lead to bigger problems.',
      date: '2024-03-05',
      author: 'Mike Wilson',
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Storm Damage Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice and insights on storm damage prevention, repair, and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;