"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Sun, Sunrise, Sunset, Moon, Star, MapPin, AlertTriangle } from 'lucide-react';

interface PrayerTimes {
  Imsak: string;
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface CityData {
  name: string;
  times: PrayerTimes;
}

interface CityPrayerTimes {
  [key: string]: CityData;
}

const cityPrayerTimes: CityPrayerTimes = {
  male: {
    name: 'Malé',
    times: {
      Imsak: '4:45 AM',
      Fajr: '4:55 AM',
      Dhuhr: '12:10 PM',
      Asr: '3:30 PM',
      Maghrib: '6:20 PM',
      Isha: '7:35 PM'
    }
  },
  hulhumale: {
    name: 'Hulhumalé',
    times: {
      Imsak: '4:44 AM',
      Fajr: '4:54 AM',
      Dhuhr: '12:10 PM',
      Asr: '3:30 PM',
      Maghrib: '6:20 PM',
      Isha: '7:35 PM'
    }
  },
  addu: {
    name: 'Addu City',
    times: {
      Imsak: '4:50 AM',
      Fajr: '5:00 AM',
      Dhuhr: '12:15 PM',
      Asr: '3:35 PM',
      Maghrib: '6:25 PM',
      Isha: '7:40 PM'
    }
  }
};

type CityKey = keyof typeof cityPrayerTimes;

interface PrayerCardProps {
  name: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
}

const PrayerCard = ({ name, time, icon: Icon, color, description }: PrayerCardProps) => (
  <div
    className={`${color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
    role="article"
    aria-label={`${name} prayer time`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <Icon className="w-10 h-10 text-gray-700" />
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
      </div>
    </div>
    <p className="text-gray-600 text-lg mb-3">{description}</p>
    <p className="text-4xl font-bold text-red-500">{time}</p>
  </div>
);

const ImsakPage = () => {
  const [selectedCity, setSelectedCity] = useState<CityKey>('male');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* City Selection and Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <p className="text-amber-800 font-medium">
                These times are approximate. Please confirm with your local mosque for accurate prayer times.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value as CityKey)}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {Object.entries(cityPrayerTimes).map(([key, city]) => (
                  <option key={key} value={key}>{city.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Prayer Times in {cityPrayerTimes[selectedCity].name}</h1>
            <p className="text-xl text-gray-600">Today&apos;s Prayer Schedule</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PrayerCard 
              name="Imsak" 
              time={cityPrayerTimes[selectedCity].times.Imsak} 
              icon={Moon} 
              color="bg-indigo-50"
              description="Start of Fast"
            />
            <PrayerCard 
              name="Fajr" 
              time={cityPrayerTimes[selectedCity].times.Fajr} 
              icon={Sun} 
              color="bg-blue-50"
              description="Dawn Prayer"
            />
            <PrayerCard 
              name="Dhuhr" 
              time={cityPrayerTimes[selectedCity].times.Dhuhr} 
              icon={Sun} 
              color="bg-yellow-50"
              description="Noon Prayer"
            />
            <PrayerCard 
              name="Asr" 
              time={cityPrayerTimes[selectedCity].times.Asr} 
              icon={Clock} 
              color="bg-green-50"
              description="Afternoon Prayer"
            />
            <PrayerCard 
              name="Maghrib" 
              time={cityPrayerTimes[selectedCity].times.Maghrib} 
              icon={Sunset} 
              color="bg-purple-50"
              description="Sunset Prayer"
            />
            <PrayerCard 
              name="Isha" 
              time={cityPrayerTimes[selectedCity].times.Isha} 
              icon={Moon} 
              color="bg-indigo-50"
              description="Night Prayer"
            />
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <Star className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">Important Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prayer Time Guidelines</h3>
                <p className="text-lg text-gray-700">
                  These times are calculated based on standard methods. For the most accurate times, please consult your local mosque or Islamic center.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">During Ramadan</h3>
                <p className="text-lg text-gray-700">
                  Imsak time is the recommended time to stop eating before Fajr. However, you may continue eating until the Fajr adhan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ImsakPage;