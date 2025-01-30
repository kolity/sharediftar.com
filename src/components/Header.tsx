"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, UtensilsCrossed, Clock, Book, LogIn, UserPlus } from 'lucide-react';

const NavLink = ({ href, icon: Icon, children }: { href: string; icon: React.ElementType; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
  >
    <Icon className="w-5 h-5" />
    <span>{children}</span>
  </Link>
);

const BrandName = () => (
  <Link href="/" className="flex items-center">
    <span className="text-xl font-bold text-gray-900">ShareIftar.com</span>
  </Link>
);

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <div 
    className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <div className="flex justify-between items-center p-4 border-b">
      <BrandName />
      <button onClick={onClose} className="p-2">
        <X className="w-6 h-6" />
      </button>
    </div>
    
    <nav className="p-4">
      <div className="flex flex-col gap-4">
        <NavLink href="/ifthar" icon={UtensilsCrossed}>Ifthar</NavLink>
        <NavLink href="/recipes" icon={Book}>Recipes</NavLink>
        <NavLink href="/imsak" icon={Clock}>Imsak</NavLink>
        
        <div className="border-t my-4"></div>
        
        <NavLink href="/signin" icon={LogIn}>Sign in</NavLink>
        <Link 
          href="/signup" 
          className="flex items-center gap-3 p-3 bg-red-500 text-white rounded-lg"
        >
          <UserPlus className="w-6 h-6" />
          <span className="text-lg">Sign up</span>
        </Link>
      </div>
    </nav>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <BrandName />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center space-x-2">
            <NavLink href="/iftar" icon={UtensilsCrossed}>Iftar</NavLink>
            <NavLink href="/recipes" icon={Book}>Recipes</NavLink>
            <NavLink href="/imsak" icon={Clock}>Imsak</NavLink>
          </div>
          
          <div className="flex items-center gap-2">
            <NavLink href="/signin" icon={LogIn}>Sign in</NavLink>
            <Link 
              href="/signup" 
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm"
            >
              <UserPlus className="w-5 h-5" />
              <span>Sign up</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </nav>
    </header>
  );
};

export default Header;