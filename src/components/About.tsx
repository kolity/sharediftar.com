import React from 'react';

const About = () => {
  return (
    <section className="bg-red-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are ?</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-lg">
            Roadha.com is back for the 11th consecutive year. This year Roadha.com is being
            relaunched by its original developers following the wide public support and interest given
            to ROADHAVEELLUN.COM 2007.
          </p>
          <p className="mb-8 text-lg">
            The website registered over 14,000 visitors and over 800,000 hits within ONE month.
          </p>
          <button className="bg-black hover:bg-gray-900 text-white px-8 py-2 rounded-full transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;