"use client";

import React, { useState, FormEvent } from 'react';
import { 
  UtensilsCrossed, 
  Clock, 
  Users, 
  Heart,
  MapPin,
  Phone,
  MessageCircle,
  FileText,
  Home
} from 'lucide-react';

interface FormData {
  title: string;
  description: string;
  guestCapacity: number;
  iftarTime: string;
  type: 'community' | 'private';
  location: string;
  hostingOption: 'athome' | 'mosque';
  contactNumber: string;
  communicationMode: 'phone' | 'message';
}

const ShareForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    guestCapacity: 1,
    iftarTime: '',
    type: 'community',
    location: '',
    hostingOption: 'athome',
    contactNumber: '',
    communicationMode: 'phone'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      if (name === 'type') {
        setFormData(prev => ({
          ...prev,
          type: value as 'community' | 'private'
        }));
      } else if (name === 'hostingOption') {
        setFormData(prev => ({
          ...prev,
          hostingOption: value as 'athome' | 'mosque'
        }));
      } else if (name === 'communicationMode') {
        setFormData(prev => ({
          ...prev,
          communicationMode: value as 'phone' | 'message'
        }));
      }
    } else if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: value === '' ? 1 : Number(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {/* Iftar Title */}
      <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm">
        <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-3">
          <UtensilsCrossed className="w-6 h-6 text-red-500" />
          Iftar Title
        </label>
        <input 
          type="text" 
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="What are you planning to serve?"
          required
          className="w-full px-4 py-4 text-lg rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>
      
      {/* Description */}
      <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm">
        <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-3">
          <FileText className="w-6 h-6 text-red-500" />
          Description
        </label>
        <textarea 
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell us about your Iftar gathering..."
          required
          className="w-full px-4 py-4 text-lg rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          rows={3}
        />
      </div>
      
      {/* Capacity and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm">
          <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-3">
            <Users className="w-6 h-6 text-red-500" />
            Guest Capacity
          </label>
          <input 
            type="number"
            name="guestCapacity"
            value={formData.guestCapacity}
            onChange={handleChange}
            min="1"
            required
            className="w-full px-4 py-4 text-lg rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        
        <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm">
          <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-3">
            <Clock className="w-6 h-6 text-red-500" />
            Iftar Time
          </label>
          <input 
            type="time"
            name="iftarTime"
            value={formData.iftarTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 text-lg rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Location */}
      <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm">
        <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-3">
          <MapPin className="w-6 h-6 text-red-500" />
          Iftar Location
        </label>
        <input 
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter the gathering location"
          required
          className="w-full px-4 py-4 text-lg rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>
      
      {/* Type Selection */}
      <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm">
        <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-4">
          <Heart className="w-6 h-6 text-red-500" />
          Type of Gathering
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input 
                type="radio" 
                name="type" 
                value="community" 
                checked={formData.type === 'community'}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-7 h-7 rounded-full border-2 border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
            </div>
            <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">Community Iftar</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input 
                type="radio" 
                name="type" 
                value="private" 
                checked={formData.type === 'private'}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-7 h-7 rounded-full border-2 border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
            </div>
            <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">Private Gathering</span>
          </label>
        </div>
      </div>

      {/* Hosting Options */}
      <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm">
        <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-4">
          <Home className="w-6 h-6 text-red-500" />
          Hosting Location
        </label>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input 
                type="radio" 
                name="hostingOption" 
                value="athome"
                checked={formData.hostingOption === 'athome'}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-7 h-7 rounded-full border-2 border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">At Home</span>
            </div>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input 
                type="radio"
                name="hostingOption"
                value="mosque"
                checked={formData.hostingOption === 'mosque'}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-7 h-7 rounded-full border-2 border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🕌</span>
              <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">At Mosque</span>
            </div>
          </label>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm">
        <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-4">
          <Phone className="w-6 h-6 text-red-500" />
          Contact Information
        </label>
        <div className="space-y-6">
          <div>
            <label className="block text-base text-gray-700 mb-2">
              Contact Number
            </label>
            <input 
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-4 text-lg rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-base text-gray-700 mb-3">
              Preferred Mode of Communication
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input 
                    type="radio" 
                    name="communicationMode" 
                    value="phone"
                    checked={formData.communicationMode === 'phone'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-7 h-7 rounded-full border-2 border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">Phone Call</span>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input 
                    type="radio"
                    name="communicationMode"
                    value="message"
                    checked={formData.communicationMode === 'message'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-7 h-7 rounded-full border-2 border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                  <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">Message</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-5 rounded-xl text-xl flex items-center justify-center gap-3 shadow-lg transition-colors"
      >
        <Heart className="w-6 h-6" />
        Host Iftar Gathering
      </button>
    </form>
  );
};

export default ShareForm;