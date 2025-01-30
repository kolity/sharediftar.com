"use client";

import React from 'react';
import Image from 'next/image';
import { iftarMeals } from '@/data/ifthar';
import { 
  Gift, 
  Heart, 
  ChefHat, 
  MapPin, 
  Share2, 
  Clock,
  UtensilsCrossed,
  Coffee
} from 'lucide-react';

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'main':
      return <UtensilsCrossed className="w-4 h-4" />;
    case 'dessert':
      return <Coffee className="w-4 h-4" />;
    case 'snack':
      return <Coffee className="w-4 h-4" />;
    case 'drink':
      return <Coffee className="w-4 h-4" />;
    default:
      return <UtensilsCrossed className="w-4 h-4" />;
  }
};

const IftarListing = () => {
  return (
    <div className="py-16">
      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Available Iftar Meals</h2>
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <option value="">All Categories</option>
              <option value="main">Main Course</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
              <option value="drink">Drink</option>
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
          {iftarMeals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Image */}
              <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
                <Image 
                  src={meal.images[0]}
                  alt={meal.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                  <CategoryIcon category={meal.category} />
                  <span className="capitalize">{meal.category}</span>
                </div>
              </div>

              {/* Title and Price/Gift Badge */}
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

              {/* Dietary Info */}
              <div className="flex flex-wrap gap-2 mb-4">
                {meal.dietaryInfo.map((info) => (
                  <span 
                    key={info}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                  >
                    {info}
                  </span>
                ))}
              </div>

              {/* Location and Cook Info */}
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{meal.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ChefHat className="w-4 h-4" />
                  <div className="flex items-center gap-1">
                    <span>By {meal.cook.name}</span>
                    <span className="text-yellow-500">★</span>
                    <span>{meal.cook.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{meal.cookTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Request
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IftarListing;