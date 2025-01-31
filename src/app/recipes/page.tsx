"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, ChefHat, Clock, Users, BookOpen, UtensilsCrossed, Heart, Globe2 } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Main Course' | 'Appetizer' | 'Dessert' | 'Drink' | 'Snack';
  region: string;
  author: string;
  likes: number;
}

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Traditional Dates and Nuts Smoothie',
    description: 'A nutritious blend of dates, mixed nuts, and milk - perfect for breaking your fast.',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 2,
    difficulty: 'Easy',
    category: 'Drink',
    region: 'Middle East',
    author: 'Sarah Abdullah',
    likes: 245
  },
  {
    id: '2',
    title: 'Vegetable Samosas',
    description: 'Crispy pastries filled with spiced potatoes and peas - a beloved iftar snack.',
    prepTime: '30 mins',
    cookTime: '20 mins',
    servings: 6,
    difficulty: 'Medium',
    category: 'Appetizer',
    region: 'South Asia',
    author: 'Priya Kumar',
    likes: 189
  },
  {
    id: '3',
    title: 'Moroccan Harira Soup',
    description: 'A hearty soup with lentils, chickpeas, and aromatic spices - traditional Ramadan favorite.',
    prepTime: '20 mins',
    cookTime: '45 mins',
    servings: 8,
    difficulty: 'Medium',
    category: 'Main Course',
    region: 'North Africa',
    author: 'Fatima Zahra',
    likes: 312
  }
];

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <span className={`px-3 py-1 rounded-full text-sm font-medium 
        ${recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
          recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'}`}>
        {recipe.difficulty}
      </span>
      <span className="flex items-center gap-1 text-gray-500 text-sm">
        <Globe2 className="w-4 h-4" />
        {recipe.region}
      </span>
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h3>
    <p className="text-gray-600 mb-4">{recipe.description}</p>
    
    <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-4">
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span>Prep: {recipe.prepTime}</span>
      </div>
      <div className="flex items-center gap-1">
        <UtensilsCrossed className="w-4 h-4" />
        <span>Cook: {recipe.cookTime}</span>
      </div>
      <div className="flex items-center gap-1">
        <Users className="w-4 h-4" />
        <span>{recipe.servings} servings</span>
      </div>
    </div>

    <div className="flex items-center justify-between pt-4 border-t">
      <span className="text-sm text-gray-600">By {recipe.author}</span>
      <div className="flex items-center gap-1 text-red-500">
        <Heart className="w-4 h-4" />
        <span className="text-sm">{recipe.likes}</span>
      </div>
    </div>
  </div>
);

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <ChefHat className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Global Iftar Recipes</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Discover traditional Ramadan recipes from around the world
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search recipes from different cultures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>

        {/* Filters and Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Recipes</h2>
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="">All Regions</option>
                <option value="middle-east">Middle East</option>
                <option value="south-asia">South Asia</option>
                <option value="north-africa">North Africa</option>
                <option value="southeast-asia">Southeast Asia</option>
                <option value="west-africa">West Africa</option>
              </select>
              <select className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="">All Categories</option>
                <option value="main">Main Course</option>
                <option value="appetizer">Appetizer</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
                <option value="snack">Snack</option>
              </select>
              <select className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="">Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecipesPage;