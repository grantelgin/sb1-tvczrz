import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            About Restoration Response Network
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're a community-driven network of skilled professionals dedicated to helping property owners recover from storm damage.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, trustworthy storm damage restoration services through a network of verified professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Network</h3>
              <p className="text-gray-600">
                A carefully curated community of licensed, insured, and experienced contractors across the nation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
              <p className="text-gray-600">
                Quality workmanship, transparent pricing, and exceptional customer service on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded by experienced contractors who saw the need for a trusted network of storm damage repair professionals, Restoration Response Network has grown into a nationwide community of verified experts.
              </p>
              <p className="text-gray-600 mb-4">
                We understand the stress and uncertainty that comes with property damage. That's why we've built a platform that connects property owners with reliable contractors they can trust.
              </p>
              <p className="text-gray-600">
                Our commitment to quality, transparency, and customer service has made us a leader in storm damage restoration, helping thousands of property owners rebuild and recover.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;