"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
    {label}
  </Link>
);

const Logo = () => (
  <Link href="/" className="text-xl font-bold text-gray-900">
    <span className="sr-only">SharedIftar</span>
    <img 
      className="h-8 w-auto"
      src="/logo.svg" 
      alt="SharedIftar Logo"
    />
  </Link>
);

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {/* Overlay */}
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    />

    {/* Menu */}
    <div
      className={`fixed top-0 right-0 bottom-0 w-72 bg-white p-4 transition transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-600 focus:outline-none"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="mt-8 space-y-2">
        <NavLink href="/iftar" label="Find Iftar" />
        <NavLink href="/share-iftar" label="Share Iftar" />
        <NavLink href="/recipes" label="Recipes" />
      </nav>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <Link
          href="/signin"
          className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <NavLink href="/iftar" label="Find Iftar" />
              <NavLink href="/share-iftar" label="Share Iftar" />
              <NavLink href="/recipes" label="Recipes" />
            </nav>
          </div>

          {/* Desktop Sign In/Up */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/signin"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;