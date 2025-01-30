import React from 'react';
import Link from 'next/link';
import { LogIn, Mail, Lock } from 'lucide-react';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 bg-gradient-to-br from-red-500 to-red-600 p-8 hidden md:flex flex-col justify-center">
        <div className="max-w-md mx-auto text-white">
          <Image 
            src="/logo.png" 
            alt="Roadha.com" 
            width={80} 
            height={80} 
            className="mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-xl text-white/90">
            Share and discover amazing iftar experiences in the Maldives
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="text-gray-600 mt-2">Enter your email and password to continue</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link href="/forgot-password" className="text-sm text-red-500 hover:text-red-600">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-red-500 hover:text-red-600 font-medium">
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