"use client";

import React from 'react';
import Link from 'next/link';
import { LogIn, Mail, Lock, Heart, UtensilsCrossed, Users, Globe2 } from 'lucide-react';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="flex-1 bg-gradient-to-br from-red-500 to-red-600 p-8 hidden md:flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-md mx-auto text-white relative z-10 space-y-8">
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10" />
            <span className="text-2xl font-bold">SharedIftar.com</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="text-xl text-white/90">
              Continue sharing and discovering blessed Iftar experiences
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Find Iftar</h3>
                <p className="text-white/80">Discover local Iftar gatherings</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Host Gatherings</h3>
                <p className="text-white/80">Share your blessings with others</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Join Community</h3>
                <p className="text-white/80">Connect with local Muslims</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-600 mt-2">Sign in to continue sharing blessings</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-shadow"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link href="/forgot-password" className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-shadow"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-200 hover:shadow-red-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-red-500 hover:text-red-600 font-medium transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;