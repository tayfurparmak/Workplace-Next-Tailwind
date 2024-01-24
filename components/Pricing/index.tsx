// components/Pricing.tsx

import React from "react";
import Image from "next/image";

const Pricing = () => {
  const pricingItems = [
    "As a group, Workplace expands upon the individual offerings of all member companies to create a one-stop-shop for HR Services",
    "Through state-of-the-art technical solutions and specialized teams with proven HR experience Workplace pairs clients with the best talent to suit their unique needs",
    "Workplace services offer clients workforce management from start to finish, allowing the client to focus on their core business",
    "Workplace also offers clients research solutions in order to provide a detailed and realistic representation of working conditions on the market even before recruiting begins",
  ];

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
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="py-3 sm:py-4">
                <Image
                  src="/images/phone-app.png"
                  alt="aboutImage"
                  className="h-[480] w-[659px]"
                  width={665}
                  height={480}
                />
              </div>
            </div>

            <div className="mt-10 w-full px-4 lg:mt-0 lg:w-1/2 xl:w-5/12">
              <h2
                className="sm:text-[32px]/[36px] mb-5 text-3xl font-bold text-dark dark:text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Workplace Offers a tailor-made Comprehensive HR Services Package
                With Industry Expertise and a strong Client Base
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-40 flex flex-row">
          {pricingItems.map((text, index) => (
            <div
              key={index}
              className="border-gray-500 ml-2 max-w-full border-2 px-4 md:w-1/2 lg:w-1/4"
            >
              <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                <p className="p-6 ml-8 mt-4 text-zinc-800 w-[244px] font-['Poppins'] text-xl font-normal leading-[34.50px]">
                  {text}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
