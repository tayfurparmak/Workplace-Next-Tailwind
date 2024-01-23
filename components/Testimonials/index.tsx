// components/Testimonials.tsx

import React from 'react';

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/[0.03] py-16 md:py-20 lg:py-28">
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-row items-center">

              <p className="w-full text-white text-4xl font-bold leading-10 break-words">
                <svg width="59" height="45" viewBox="0 0 59 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M58.5857 0H7.66142H0V7.66142V44.1647H7.66142V7.66142H58.5857V0Z" fill="#FF4438" />
                </svg>
                Workplace<br />Footprint

                <svg width="42" height="45" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M33.7488 0V36.5033H0V44.1647H33.7488H41.4102V36.5033V0H33.7488Z" fill="#FFC600" />
                </svg>
              </p>
              <span className="text-gray-300">Workplace serves over 1,000 clients spread across its member companies and regions, making the Workplace a leader in HR Services.</span>

            </div>
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="location-card">
                <div className="location-header">Bulgaria</div>
                <div className="location-info">
                  <div className="info-label">Total Clients</div>
                  <div className="info-value">419</div>
                </div>
              </div>
              <div className="location-card">
                <div className="location-header" style={{ color: '#D4145A' }}>Croatia</div>
                <div className="location-info">
                  <div className="info-label">Total Clients</div>
                  <div className="info-value">163</div>
                </div>
              </div>
              <div className="location-card">
                <div className="location-header">Hungary</div>
                <div className="location-info">
                  <div className="info-label">Total Clients</div>
                  <div className="info-value">139</div>
                </div>
              </div>
              <div className="location-card">
                <div className="location-header">Serbia</div>
                <div className="location-info">
                  <div className="info-label">Total Clients</div>
                  <div className="info-value">362</div>
                </div>
              </div>
              <div className="location-card">
                <div className="location-header">Slovenia</div>
                <div className="location-info">
                  <div className="info-label">Total Clients</div>
                  <div className="info-value">150</div>
                </div>
              </div>
              <div className="location-card">
                <div className="location-header">B&H</div>
                <div className="location-info">
                  <div className="info-label">Total Clients</div>
                  <div className="info-value">50+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
