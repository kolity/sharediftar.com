import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const columns = {
    'Share Iftar': [
      'Host Iftar',
      'Find Iftar',
      'Community Events',
      'Special Needs',
      'Guidelines'
    ],
    'Resources': [
      'Ramadan Calendar',
      'Prayer Times',
      'Recipes',
      'Cooking Tips',
      'Host Guide'
    ],
    'About': [
      'Our Mission',
      'Community',
      'Support',
      'Contact Us',
      'FAQs'
    ]
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 px-6 py-8 md:py-12">
          {/* Brand Section */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">SharedIftar.com</span>
            </div>
            <p className="text-gray-500 text-sm">
              Connecting communities through the blessing of sharing Iftar. 
              Join us in spreading joy and strengthening bonds during Ramadan.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(columns).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link 
                      href="#" 
                      className="text-gray-500 hover:text-red-500 text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Social Section */}
        <div className="border-t px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SharedIftar.com. All rights reserved. 
              <span className="mx-2">|</span>
              <Link href="/privacy" className="hover:text-red-500">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-red-500">Terms of Service</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;