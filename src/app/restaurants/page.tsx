import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChefHat } from 'lucide-react';

const RestaurantsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <ChefHat className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            We&apos;re cooking up something special. Our restaurants section will be ready to serve you soon.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantsPage;