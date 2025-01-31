"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Book, LogIn, UserPlus } from 'lucide-react';

const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
  <Link href={href} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </Link>
);

const Logo = () => (
  <Link href="/" className="text-xl font-bold text-gray-900">
    SharedIftar
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
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <Logo />
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="p-6 space-y-4">
        <NavLink href="/iftar" label="Find Iftar" icon={Calendar} />
        <NavLink href="/share-iftar" label="Share Iftar" icon={Calendar} />
        <NavLink href="/recipes" label="Recipes" icon={Book} />

        <div className="border-t mt-4 pt-4">
          <NavLink href="/signin" label="Sign In" icon={LogIn} />
          <Link
            href="/signup"
            className="flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg transition-all duration-200 hover:bg-blue-700"
          >
            <UserPlus className="w-5 h-5" />
            <span className="font-medium">Sign Up</span>
          </Link>
        </div>
      </nav>
    </div>
  </>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <NavLink href="/iftar" label="Find Iftar" icon={Calendar} />
            <NavLink href="/share-iftar" label="Share Iftar" icon={Calendar} />
            <NavLink href="/recipes" label="Recipes" icon={Book} />
          </nav>

          {/* Desktop Sign In/Up */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/signin" label="Sign In" icon={LogIn} />
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg transition-all duration-200 hover:bg-blue-700"
            >
              <span className="font-medium">Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;