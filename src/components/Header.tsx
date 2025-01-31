"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, UtensilsCrossed, Book, LogIn, UserPlus, Heart, Share } from 'lucide-react';

const NavLink = ({ href, icon: Icon, children }: { href: string; icon: React.ElementType; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group flex items-center gap-2 text-gray-600 font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-red-50"
  >
    <Icon className="w-5 h-5 text-red-500 transition-transform duration-200 group-hover:scale-110" />
    <span className="relative">
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
    </span>
  </Link>
);

const BrandName = () => (
  <Link href="/" className="flex items-center group">
    <Heart className="w-7 h-7 text-red-500 mr-2 transition-transform duration-200 group-hover:scale-110" />
    <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
      SharedIftar.com
    </span>
  </Link>
);

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {/* Overlay */}
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 ${
        isOpen ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    />

    {/* Menu */}
    <div
      className={`fixed top-0 right-0 bottom-0 w-9/12 max-w-sm bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <BrandName />
        <button
          onClick={onClose}
          className="p-2 hover:bg-red-50 rounded-lg transition-colors duration-200"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <nav className="p-6 h-full overflow-y-auto">
        <div className="flex flex-col gap-6">
          <NavLink href="/iftar" icon={UtensilsCrossed}>
            Find Iftar
          </NavLink>
          <NavLink href="/share-iftar" icon={Share}>
            Share Iftar
          </NavLink>
          <NavLink href="/recipes" icon={Book}>
            Recipes
          </NavLink>

          <div className="border-t my-6"></div>

          <NavLink href="/signin" icon={LogIn}>
            Sign in
          </NavLink>
          <Link
            href="/signup"
            className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg shadow-red-100 hover:shadow-red-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            <UserPlus className="w-5 h-5" />
            <span className="font-semibold">Join the Community</span>
          </Link>
        </div>
      </nav>
    </div>
  </>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <BrandName />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-4">
            <NavLink href="/iftar" icon={UtensilsCrossed}>Find Iftar</NavLink>
            <NavLink href="/share-iftar" icon={Share}>Share Iftar</NavLink>    
            <NavLink href="/recipes" icon={Book}>Recipes</NavLink>
          </div>
          
          <div className="flex items-center gap-4">
            <NavLink href="/signin" icon={LogIn}>Sign in</NavLink>
            <Link 
              href="/signup" 
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-red-100 hover:shadow-red-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              <UserPlus className="w-5 h-5" />
              <span>Join the Community</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-red-50 rounded-lg transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6 text-gray-600" />
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