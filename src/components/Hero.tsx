import React from 'react';
import { Search, Heart, Share2, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center min-h-screen md:min-h-[85vh]" style={{ backgroundImage: "url('/hero-bg.png')" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
            Share the Blessings of Iftar
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Connect with your community, share homemade meals, and spread the joy of Ramadan
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for Iftar meals or hosts..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none text-gray-900 text-lg shadow-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Your location"
              className="w-full md:w-56 px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none text-gray-900 text-lg shadow-sm"
            />
            <button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl transition-all font-semibold text-lg shadow-sm hover:shadow-md">
              Find Iftar
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Share Your Blessings</h3>
              <p className="text-gray-600">Offer your homemade Iftar meals to those in need</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Connect with Community</h3>
              <p className="text-gray-600">Join or host Iftar gatherings in your neighborhood</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Share2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Share Recipes</h3>
              <p className="text-gray-600">Exchange traditional Iftar recipes and cooking tips</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all text-base font-semibold shadow-sm hover:shadow-md">
                <Heart className="w-5 h-5" />
                Host an Iftar
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all text-base font-semibold shadow-sm hover:shadow-md">
                <Users className="w-5 h-5" />
                Find Local Hosts
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all text-base font-semibold shadow-sm hover:shadow-md">
                <Share2 className="w-5 h-5" />
                Share Recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;