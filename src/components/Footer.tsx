import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Restoration Response</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in storm damage restoration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400">About Us</Link>
              </li>
              <li>
                <Link to="/assessment" className="text-gray-400 hover:text-blue-400">Get Assessment</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-blue-400">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Storm Damage Repair</li>
              <li className="text-gray-400">Roof Restoration</li>
              <li className="text-gray-400">Emergency Services</li>
              <li className="text-gray-400">Insurance Claims</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-400">24/7 Emergency Service</p>
              <a href="tel:1-800-RESTORE" className="text-blue-400 hover:text-blue-300 font-semibold block">
                1-800-RESTORE
              </a>
              <a href="mailto:help@restorationresponse.net" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400">
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Restoration Response Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;