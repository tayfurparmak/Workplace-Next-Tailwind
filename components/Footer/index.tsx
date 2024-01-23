// components/Footer.tsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24" data-wow-delay=".1s">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center pt-4">
          <span className="block text-sm text-center text-gray-500 dark:text-white">Work Place Copyright © 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
