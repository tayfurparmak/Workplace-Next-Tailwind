import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12 relative">
            <svg className="absolute top-20 left-20" width="106" height="79" viewBox="0 0 106 79" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106 0H13.8619H0V13.7044V79H13.8619V13.7044H106V0Z" fill="#FF4438"/>
            </svg>

            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2 relative">
                <div className="py-3 sm:py-4">
                  <Image
                    src="/images/company-about.png"
                    alt="aboutImage"
                    className="w-[659px]"
                    width={659}
                    height={550}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <div className="text-[#303031] dark:text-white" >
                <span style={{ fontSize: '38.34px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '69.50px', wordWrap: 'break-word' }}>
                  Our expert guidance <br/>and innovative workforce solutions enable faster and
                </span>
                <span style={{ color: '#303031', fontSize: '46.86px', fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 600, lineHeight: '69.50px', wordWrap: 'break-word' }}>
                  {' '}
                </span>
                <span style={{ color: '#FF4438', fontSize: '46.86px', fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 500, lineHeight: '69.50px', wordWrap: 'break-word' }}>
                  smarter decisions for your talent
                </span>
                <span style={{ color: '#303031', fontSize: '38.34px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '69.50px', wordWrap: 'break-word' }}>
                  optimization.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
