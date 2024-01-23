// components/Pricing.tsx

import React from 'react';
import Image from "next/image";

const Pricing = () => {

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Product <br /> & Services
              </h2>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                  <Image
                    src="/images/phone-app.png"
                    alt="aboutImage"
                    className="w-[659px]"
                    width={665}
                    height={480}
                  />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2
                  className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[32px]/[36px]"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Workplace Offers a tailor-made Comprehensive HR Services Package With Industry Expertise and a strong Client Base
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4  flex flex-wrap " style={{ marginTop: '40px' }}>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4" style={{ border: '6px rgba(235, 235, 240, 0.50) solid' }}>
            <div className="wow fadeInUp group mb-12 " data-wow-delay=".1s">
              <p className="p-4 text-body-color dark:text-dark-6 lg:mb-9" style={{ fontSize: '20px', fontFamily: 'Popins' }}>
                As a group, Workplace expands upon the individual offerings of all member companies to create a one-stop-shop for HR Services
              </p>
            </div>
          </div>
      
          <div className="w-full px-4 md:w-1/2 border-2 border-gray-500 lg:w-1/4" style={{ border: '6px rgba(235, 235, 240, 0.50) solid' }}>
            <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
              <p className="p-4 text-body-color dark:text-dark-6 lg:mb-9" style={{ fontSize: '20px', fontFamily: 'Popins' }}>
                Through state-of-the-art technical solutions and specialized teams with proven HR experience Workplace pairs clients with the best talent to suit their unique needs
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 border-2 border-gray-500 lg:w-1/4" style={{ border: '6px rgba(235, 235, 240, 0.50) solid' }}>
            <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
              <p className="p-4 text-body-color dark:text-dark-6 lg:mb-9" style={{ fontSize: '20px', fontFamily: 'Popins' }}>
                Workplace services offer clients workforce management from start to finish, allowing the client to focus on their core business
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 border-2 border-gray-500 lg:w-1/4" style={{ border: '6px rgba(235, 235, 240, 0.50) solid' }}>
            <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
              <p className="p-4 text-body-color dark:text-dark-6 lg:mb-9" style={{ fontSize: '20px', fontFamily: 'Popins' }}>
                Workplace also offers clients research solutions in order to provide a detailed and realistic representation of working conditions on the market even before recruiting begins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
