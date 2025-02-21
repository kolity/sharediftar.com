"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Heart, 
  Home, 
  MapPin, 
  Share2, 
  Clock,
  Utensils,
  Languages,
  AccessibilityIcon,
  Plus,
  Landmark,
  Coffee,
  UtensilsCrossed
} from 'lucide-react';
import { iftarGatherings } from '@/data/ifthar';

interface IftarGathering {
  id: string;
  title: string;
  description: string;
  capacity: number;
  type: 'community' | 'home' | 'mosque';
  iftarTime: string;
  menu: {
    category: 'main' | 'side' | 'dessert' | 'drink';
    items: string[];
  }[];
  dietaryInfo: string[];
  hostId: string;
  host: {
    id: string;
    name: string;
    location: string;
    rating: number;
    totalHosted?: number;
  };
  location: string;
  status: 'open' | 'full' | 'completed';
  guestsCount: number;
  additionalInfo?: {
    accessibility?: string[];
    parking?: boolean;
    languages?: string[];
  };
}

const TypeIcon = ({ type, className }: { type: string; className?: string }) => {
  switch (type) {
    case 'community':
      return <Users className={className} />;
    case 'home':
      return <Home className={className} />;
    case 'mosque':
      return <Landmark className={className} />;
    default:
      return <Users className={className} />;
  }
};

const GatheringCard = ({ gathering }: { gathering: IftarGathering }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    {/* Icon Header */}
    <div className="mb-6 flex justify-center">
      <div className={`p-4 rounded-full ${
        gathering.type === 'home' ? 'bg-blue-50 text-blue-600' :
        gathering.type === 'mosque' ? 'bg-green-50 text-green-600' :
        'bg-purple-50 text-purple-600'
      }`}>
        <TypeIcon type={gathering.type} className="w-8 h-8" />
      </div>
    </div>

    {/* Title and Capacity */}
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{gathering.title}</h3>
        <p className="text-gray-500">
          <span className="text-green-600">{gathering.capacity - gathering.guestsCount} spaces available</span>
          <span className="text-gray-400"> of {gathering.capacity}</span>
        </p>
      </div>
      <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-2">
        <Heart className="w-4 h-4" />
        <span>Join Us</span>
      </div>
    </div>

    {/* Menu Preview */}
    <div className="flex flex-wrap gap-2 mb-4">
      {gathering.menu.map((category, index) => (
        category.items[0] && (
          <span 
            key={index}
            className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full text-sm flex items-center gap-1"
          >
            {category.category === 'main' ? <UtensilsCrossed className="w-3 h-3" /> :
             category.category === 'drink' ? <Coffee className="w-3 h-3" /> :
             <Utensils className="w-3 h-3" />}
            {category.items[0]}
            {category.items.length > 1 && ` +${category.items.length - 1}`}
          </span>
        )
      ))}
    </div>

    {/* Info Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {gathering.dietaryInfo.map((info) => (
        <span 
          key={info}
          className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
        >
          {info}
        </span>
      ))}
      {gathering.additionalInfo?.accessibility?.map((access) => (
        <span 
          key={access}
          className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs flex items-center gap-1"
        >
          <AccessibilityIcon className="w-3 h-3" />
          {access}
        </span>
      ))}
      {gathering.additionalInfo?.languages && (
        <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded-full text-xs flex items-center gap-1">
          <Languages className="w-3 h-3" />
          {gathering.additionalInfo.languages.join(', ')}
        </span>
      )}
    </div>

    {/* Location and Host Info */}
    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
      <div className="flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        <span>{gathering.location}</span>
      </div>
      <div className="flex items-center gap-1">
        <Users className="w-4 h-4" />
        <span>By {gathering.host.name}</span>
        {gathering.host.totalHosted && (
          <span className="text-xs text-gray-400">
            ({gathering.host.totalHosted} hosted)
          </span>
        )}
      </div>
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span>{gathering.iftarTime}</span>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-2">
      <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
        <Heart className="w-5 h-5" />
        Join Gathering
      </button>
      <button className="bg-gray-50 hover:bg-gray-100 p-3 rounded-xl transition-colors">
        <Share2 className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  </div>
);

const IftarListing = () => {
  return (
    <div className="py-16">
      {/* Host CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Share Your Iftar Blessings</h1>
              <p className="text-white/90">Open your home or organize a gathering to share the spirit of Ramadan</p>
            </div>
            <Link href="/share" className="bg-white text-red-500 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors">
              <Plus className="w-5 h-5" />
              Host an Iftar
            </Link>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Available Iftar Gatherings</h2>
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <option value="">All Types</option>
              <option value="community">Community Iftar</option>
              <option value="home">Home Gathering</option>
              <option value="mosque">Mosque Iftar</option>
            </select>
            <select className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <option value="">All Locations</option>
              <option value="Malé">Malé</option>
              <option value="Hulhumalé">Hulhumalé</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iftarGatherings.map((gathering) => (
            <GatheringCard key={gathering.id} gathering={gathering} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IftarListing;