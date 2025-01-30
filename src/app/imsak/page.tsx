import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Sun, Sunrise, Sunset, Moon, Star } from 'lucide-react';

const imsakTimes = [
  { id: 1, prayer: 'Fajr', time: '4:45 AM', icon: Sun, color: 'bg-blue-50', description: 'Dawn Prayer' },
  { id: 2, prayer: 'Sunrise', time: '6:15 AM', icon: Sunrise, color: 'bg-orange-50', description: 'Sunrise Time' },
  { id: 3, prayer: 'Dhuhr', time: '12:10 PM', icon: Sun, color: 'bg-yellow-50', description: 'Noon Prayer' },
  { id: 4, prayer: 'Asr', time: '3:30 PM', icon: Clock, color: 'bg-green-50', description: 'Afternoon Prayer' },
  { id: 5, prayer: 'Maghrib', time: '6:05 PM', icon: Sunset, color: 'bg-purple-50', description: 'Sunset Prayer' },
  { id: 6, prayer: 'Isha', time: '7:20 PM', icon: Moon, color: 'bg-indigo-50', description: 'Night Prayer' },
];

const ImsakPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Prayer Times in Malé</h1>
            <p className="text-xl text-gray-600">Today&apos;s Prayer Schedule for Malé, Maldives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imsakTimes.map((time) => {
              const Icon = time.icon;
              return (
                <div
                  key={time.id}
                  className={`${time.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
                  role="article"
                  aria-label={`${time.prayer} prayer time`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-10 h-10 text-gray-700" />
                      <h3 className="text-2xl font-bold text-gray-900">{time.prayer}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg mb-3">{time.description}</p>
                  <p className="text-4xl font-bold text-red-500">{time.time}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <Star className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">Important Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prayer Time Calculation</h3>
                <p className="text-lg text-gray-700">
                  Times are calculated for Malé, Maldives. Your exact times may vary slightly based on your location.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Time Zone</h3>
                <p className="text-lg text-gray-700">
                  All times shown are in Maldives Time (MVT). Please confirm with your local mosque.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 text-center">
            <button 
              className="bg-red-500 hover:bg-red-600 text-white text-xl px-8 py-4 rounded-xl font-bold transition-colors shadow-lg"
              aria-label="Set prayer time reminders"
            >
              <div className="flex items-center gap-3 justify-center">
                <Clock className="w-6 h-6" />
                <span>Set Prayer Reminders</span>
              </div>
            </button>
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ImsakPage;