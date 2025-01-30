"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Search, Gift, ChefHat, MapPin, Clock } from 'lucide-react';
import ShareForm from './shareform';
import Link from 'next/link';
import Image from 'next/image';
import { iftarMeals, type IftarMeal } from '@/data/ifthar';

interface FeaturedMealProps {
  meal: IftarMeal;
}

const FeaturedMeal: React.FC<FeaturedMealProps> = ({ meal }) => (
  // FeaturedMeal component remains the same
  <div className="bg-white rounded-2xl p-6 shadow-lg">
    <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
      <Image 
        src={meal.images[0]}
        alt={meal.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{meal.title}</h3>
        <p className="text-gray-500">{meal.servings} servings available</p>
      </div>
      <div className={`flex items-center gap-2 ${
        meal.type === 'gift' 
          ? 'bg-green-100 text-green-700' 
          : 'bg-blue-100 text-blue-700'
        } px-3 py-1 rounded-full text-sm`}>
        {meal.type === 'gift' ? (
          <>
            <Gift className="w-4 h-4" />
            <span>Gift</span>
          </>
        ) : (
          <>
            <span className="font-medium">MVR</span>
            <span>{meal.price}</span>
          </>
        )}
      </div>
    </div>
    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
      <div className="flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        <span>{meal.location}</span>
      </div>
      <div className="flex items-center gap-1">
        <ChefHat className="w-4 h-4" />
        <span>By {meal.cook.name}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span>{meal.cookTime}</span>
      </div>
    </div>
  </div>
);

const SharePage = () => {
  const featuredMeals = iftarMeals.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Iftar</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Cook extra food and share the blessings with others during this holy month of Ramadan
            </p>
          </div>
        </div>

        {/* Featured Meals Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Iftar Meals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredMeals.map((meal) => (
              <FeaturedMeal key={meal.id} meal={meal} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/home-cook/listing"
              className="inline-flex items-center justify-center gap-2 bg-red-500 text-white hover:bg-red-600 transition-colors px-8 py-4 rounded-xl font-bold text-lg"
            >
              <Search className="w-5 h-5" />
              Browse All Available Meals
            </Link>
          </div>
        </div>

        {/* Form Section with Instructions */}
        <div className="max-w-4xl mx-auto px-4 py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Iftar Meal</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 mb-6">
                Fill out the form below to share your meal with those in need. You can choose to gift your meal or sell it at a reasonable price.
              </p>
              <div className="flex items-center gap-4 justify-center text-gray-500 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Takes about 5 minutes</span>
                </div>
                <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Help spread the blessings</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-4 text-sm text-gray-500">Begin Sharing</span>
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