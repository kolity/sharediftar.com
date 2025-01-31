import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const columns = {
    'Quick Links': [
      { name: 'Find Iftar', href: '/iftars' },
      { name: 'Host Iftar', href: '/share' },
      { name: 'Recipes', href: '/recipes' }
    ],
    'About': [
      { name: 'Our Mission', href: '/about' },
      { name: 'Community Guidelines', href: '/guidelines' },
      { name: 'Contact Us', href: '/contact' }
    ]
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">SharedIftar.com</span>
            </div>
            <p className="text-gray-500 text-sm">
              Connecting communities through the blessing of sharing Iftar during Ramadan.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(columns).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-500 hover:text-red-500 text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Social Section */}
        <div className="border-t px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SharedIftar.com
              <Link href="/privacy" className="ml-4 hover:text-red-500">Privacy</Link>
              <Link href="/terms" className="ml-4 hover:text-red-500">Terms</Link>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;