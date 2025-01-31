"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Search, 
  Home, 
  MapPin, 
  Clock, 
  Users, 
  Landmark,
  UtensilsCrossed,
  Globe2,
  Languages,
  AccessibilityIcon,
  Star
} from 'lucide-react';
import ShareForm from './shareform';
import Link from 'next/link';
import { iftarGatherings, type IftarGathering } from '@/data/ifthar';

interface FeaturedGatheringProps {
  gathering: IftarGathering;
}

const TypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'mosque':
      return <Landmark className="w-4 h-4" />;
    case 'community':
      return <Users className="w-4 h-4" />;
    case 'home':
      return <Home className="w-4 h-4" />;
    default:
      return <Users className="w-4 h-4" />;
  }
};

const FeaturedGathering: React.FC<FeaturedGatheringProps> = ({ gathering }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    {/* Type Badge and Host Info */}
    <div className="flex items-center justify-between mb-6">
      <div className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
        gathering.type === 'mosque' ? 'bg-green-50 text-green-600' :
        gathering.type === 'home' ? 'bg-blue-50 text-blue-600' :
        'bg-purple-50 text-purple-600'
      }`}>
        <TypeIcon type={gathering.type} />
        <span className="capitalize">
          {gathering.type === 'mosque' ? 'Mosque Iftar' : 
           gathering.type === 'home' ? 'Home Gathering' : 
           'Community Iftar'}
        </span>
      </div>
      {gathering.host.verifiedHost && (
        <div className="flex items-center gap-1 text-blue-600">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-xs">Verified Host</span>
        </div>
      )}
    </div>

    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{gathering.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{gathering.description}</p>
        <p className="text-gray-500">
          <span className="text-green-600 font-medium">{gathering.capacity - gathering.guestsCount} spaces available</span>
          <span className="text-gray-400"> of {gathering.capacity}</span>
        </p>
      </div>

      {/* Menu Preview */}
      <div className="flex flex-wrap gap-2">
        {gathering.menu.slice(0, 2).map((category, index) => (
          category.items[0] && (
            <span 
              key={index}
              className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full text-sm flex items-center gap-1"
            >
              <UtensilsCrossed className="w-3 h-3" />
              {category.items[0]}
              {category.items.length > 1 && ` +${category.items.length - 1}`}
            </span>
          )
        ))}
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2">
        {gathering.additionalInfo?.languages && (
          <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Languages className="w-3 h-3" />
            {gathering.additionalInfo.languages.join(', ')}
          </span>
        )}
        {gathering.additionalInfo?.accessibility?.map((access) => (
          <span 
            key={access}
            className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs flex items-center gap-1"
          >
            <AccessibilityIcon className="w-3 h-3" />
            {access}
          </span>
        ))}
      </div>

      {/* Location and Time */}
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{gathering.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe2 className="w-4 h-4" />
          <span>{gathering.region}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{gathering.iftarTime}</span>
        </div>
      </div>

      {/* Host Info */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            Hosted by {gathering.host.name}
            {gathering.host.totalHosted && (
              <span className="text-gray-400"> · {gathering.host.totalHosted} hosted</span>
            )}
          </span>
        </div>
        <Link 
          href={`/iftars/${gathering.id}`}
          className="text-red-500 text-sm font-medium hover:text-red-600"
        >
          View Details →
        </Link>
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Iftar Gatherings</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe2 className="w-4 h-4" />
              <span>Worldwide Community</span>
            </div>
          </div>
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