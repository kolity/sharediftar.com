import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { categories, type CategoryItem } from '@/data/categories';

const CategoryCard = ({ name, image, description, totalItems, id }: CategoryItem) => (
  <Link href={`/categories/${id}`} className="block">
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
      <div className="relative h-64">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex justify-between items-end">
          <h3 className="text-white text-2xl font-bold tracking-wide group-hover:scale-105 transition-transform">
            {name}
          </h3>
          <span className="text-white/90 text-sm font-medium bg-black/30 px-3 py-1 rounded-full">
            {totalItems} available
          </span>
        </div>
        <p className="text-white/90 text-base mt-2 line-clamp-2 font-medium">
          {description}
        </p>
      </div>
    </div>
  </Link>
);

const Categories = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold tracking-tight">Ways to Share Iftar</h2>
      <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-full">
        <span className="text-2xl">🌙</span>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Show first three categories from imported data */}
      {categories.slice(0, 3).map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
    <div className="text-center mt-10">
      <Link 
        href="/categories" 
        className="inline-block bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-xl transition-colors font-medium text-lg"
      >
        Explore All Ways to Share
      </Link>
    </div>
  </section>
);

export default Categories;