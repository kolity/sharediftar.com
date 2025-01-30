"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Search, Home, MapPin, Clock, Users } from 'lucide-react';
import ShareForm from './shareform';
import Link from 'next/link';
import Image from 'next/image';
import { iftarGatherings, type IftarGathering } from '@/data/ifthar';

interface FeaturedGatheringProps {
  gathering: IftarGathering;
}

const TypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'mosque':
      return <span className="text-sm">🕌</span>;
    case 'community':
      return <Users className="w-4 h-4" />;
    case 'home':
      return <Home className="w-4 h-4" />;
    default:
      return <Users className="w-4 h-4" />;
  }
};

const FeaturedGathering: React.FC<FeaturedGatheringProps> = ({ gathering }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg">
    <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
      <Image 
        src={gathering.images[0]}
        alt={gathering.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{gathering.title}</h3>
        <p className="text-gray-500">
          <span className="text-green-600">{gathering.capacity - gathering.guestsCount} spaces available</span>
        </p>
      </div>
      <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-2">
        <TypeIcon type={gathering.type} />
        <span className="capitalize">
          {gathering.type === 'mosque' ? 'Mosque Iftar' : 
           gathering.type === 'home' ? 'Home Gathering' : 
           'Community Iftar'}
        </span>
      </div>
    </div>
    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
      <div className="flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        <span>{gathering.location}</span>
      </div>
      <div className="flex items-center gap-1">
        <Users className="w-4 h-4" />
        <span>Hosted by {gathering.host.name}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span>{gathering.iftarTime}</span>
      </div>
    </div>
  </div>
);

const SharePage = () => {
  const featuredGatherings = iftarGatherings.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Iftar Blessings</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Open your home and heart to fellow Muslims this Ramadan. Share the joy of breaking fast together.
            </p>
          </div>
        </div>

        {/* Featured Gatherings Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Iftar Gatherings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredGatherings.map((gathering) => (
              <FeaturedGathering key={gathering.id} gathering={gathering} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/iftars"
              className="inline-flex items-center justify-center gap-2 bg-red-500 text-white hover:bg-red-600 transition-colors px-8 py-4 rounded-xl font-bold text-lg"
            >
              <Search className="w-5 h-5" />
              Find More Iftar Gatherings
            </Link>
          </div>
        </div>

        {/* Form Section with Instructions */}
        <div className="max-w-4xl mx-auto px-4 py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Host an Iftar Gathering</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 mb-6">
                Open your doors for Iftar and create lasting bonds within your community. Whether you&apos;re hosting at home,
                organizing a community event, or arranging a mosque gathering, you can make a difference this Ramadan.
              </p>
              <div className="flex items-center gap-4 justify-center text-gray-500 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Quick 5-minute registration</span>
                </div>
                <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Earn blessings this Ramadan</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-4 text-sm text-gray-500">Begin Hosting</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ShareForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SharePage;