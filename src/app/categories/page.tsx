// app/categories/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories } from '@/data/categories';


export default function CategoriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900">Categories</span>
          </div>

          <h1 className="text-3xl font-bold mb-8">Food Categories</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                href={`/categories/${category.id}`}
                key={category.id}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-xl font-semibold">{category.name}</h2>
                      <span className="text-sm text-gray-500">{category.totalItems} items</span>
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}