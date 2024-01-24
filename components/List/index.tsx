// components/ListSection.tsx

import Image from 'next/image';
import React from 'react';

const ListSection = () => {
  return (
    <section className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="relative h-screen ">
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}> {/* Siyahlaştırma için ekledim */}
          <Image src="/images/people-bg.png" alt="background image" layout="fill" objectFit="cover" />
        </div>
        <div className="relative z-10 p-10 gap-4 bg-cover bg-center justify-between mx-auto container flex">
          <div className="flex flex-col mt-10 items-center w-1/2 ">
            <div className="text-white text-5xl font-bold font-poppins leading-14 mb-6">
              Workplace<br />Solutions
            </div>
            <div className="text-white text-xl font-poppins font-light leading-8">
              Our expert guidance and innovative workforce solutions enable faster and smarter decisions for your talent optimization.
            </div>
          </div>

          <div className="w-full mt-10 ml-[190px] ">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="flex items-center mb-10">
                <div className="text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{ background: 'red' }}>
                  {index + 1}
                </div>
                <p className="ml-4 text-white text-2xl font-poppins font-bold leading-13">
                  {getListItemContent(index)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const getListItemContent = (index) => {
  const contentList = [
    'Tailor-made solutions for each Client',
    'Permanent Recruitment & Selection',
    'Temporary Staffing',
    'Payroll, Finance & HR Administration',
    'Advanced Outsourcing',
    'Education & HR Strategy',
    'Research',
  ];
  return contentList[index];
};

export default ListSection;
