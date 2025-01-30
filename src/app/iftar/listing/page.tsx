"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IftarListing from './iftarlisting';
import { Search } from 'lucide-react';

const ListingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Search Bar */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for meals, cooks, or locations..."
                className="w-full px-6 py-4 rounded-xl shadow-lg text-lg focus:ring-2 focus:ring-red-500 focus:border-transparent pr-12"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Listing Component */}
        <IftarListing />
      </main>

      <Footer />
    </div>
  );
};

export default ListingPage;