import React from 'react';

const About = () => {
  return (
    <section className="bg-red-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            SharedIftar.com is a platform dedicated to reviving the beautiful tradition of sharing 
            Iftar meals during Ramadan. We believe in strengthening community bonds by connecting 
            those who wish to share their blessings with those seeking to join in the spirit of 
            breaking fast together.
          </p>
          <p className="text-lg leading-relaxed">
            Our platform facilitates meaningful connections between hosts and guests, ensuring that 
            no one breaks their fast alone. Whether you&apos;re a family looking to share your home-cooked 
            meals, a mosque organizing community Iftars, or someone seeking the warmth of community 
            during Ramadan, SharedIftar.com brings everyone together.
          </p>
          <div className="pt-4">
            <button className="bg-white text-red-500 hover:bg-gray-100 px-8 py-3 rounded-xl transition-colors font-semibold">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;