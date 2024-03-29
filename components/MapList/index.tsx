// components/Testimonials.tsx
import Image from "next/image";

import React from "react";
import RedSvg from "./RedImage";
import YellowSvg from "./YellowImage";

const MapList = () => {
  return (
    <section className="relative z-10 bg-primary/[0.03] py-16 md:py-20 lg:py-28">
      <div className="flex h-screen w-full items-center justify-center bg-black bg-cover bg-no-repeat">
        <div className="absolute inset-0">
          <Image src="/images/bg-map.png" alt="background image" fill />
        </div>
        <div className=" bg-gray-800 relative z-10 rounded-xl bg-opacity-75 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="mb-[150px] relative flex flex-row items-center">
      
            <p className="w-full break-words text-4xl font-bold leading-10 text-white">
              <span className="absolute top-[-20px] left-[-30px]">  <RedSvg/> 
            </span>
              Workplace
              <br />
              Footprint
              <span className="absolute  bottom-[-20px]  left-[150px]">
              <YellowSvg  />
         </span>
            </p>
            <span className="text-gray-300 text-2xl text-white">
              Workplace Serves Over 1.000 clients spread across its member
              companies and regions, making the Workplace a leader in HR
              Services.
            </span>
          </div>

          <div className="mb-8 flex h-20 flex-row items-center gap-4 ">
            <div className="bg-opacity-71 bg-gray-800 flex h-2/4 w-full items-center justify-between border-2 px-20 py-14">
              <div className="font-poppins break-words text-[28px] font-bold text-white">
                Bulgaria
              </div>
              <div className="flex items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="text-opacity-35 font-poppins mt-20 break-words text-[18px] font-light text-white">
                    Total Clients
                  </div>
                  <div className="font-poppins mb-20 break-words text-[24px] font-bold text-white">
                    419
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-3/4 w-full items-center justify-between border-2 bg-white px-20 py-14">
              <div className="text-D4145A font-poppins break-words text-2xl font-bold text-[#D4145A]">
                Croatia
              </div>
              <div className="flex items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="text-opacity-35 font-poppins mt-20 break-words  text-[18px] font-light text-black">
                    Total Clients
                  </div>
                  <div className="font-poppins mb-20 break-words text-[24px] font-bold text-black">
                    163
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex h-20 flex-row items-center gap-4 pt-8 ">
            <div className="bg-opacity-71 bg-gray-800 flex h-2/4 w-full items-center justify-between border-2 px-20 py-14">
              <div className="font-poppins break-words text-[28px] font-bold text-white">
                Hungary
              </div>
              <div className="flex items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="text-opacity-35 font-poppins mt-20 break-words text-[18px] font-light text-white">
                    Total Clients
                  </div>
                  <div className="font-poppins mb-20 break-words text-[24px] font-bold text-white">
                    190
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex h-3/4  w-full items-center justify-between border-2 bg-black px-20 py-14">
              <div className="text-D4145A font-poppins break-words text-2xl font-bold text-white">
                Serbia
              </div>
              <div className="flex items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="text-opacity-35 font-poppins mt-20 break-words  text-[18px] font-light text-white ">
                    Total Clients
                  </div>
                  <div className="font-poppins mb-20 break-words text-[24px] font-bold text-white">
                    362
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex h-20 flex-row items-center gap-4 pt-16 ">
            <div className="bg-opacity-71 bg-gray-800 flex h-2/4 w-full items-center justify-between border-2 px-20 py-14">
              <div className="font-poppins break-words text-[28px] font-bold text-white">
                Slovenia
              </div>
              <div className="flex items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="text-opacity-35 font-poppins mt-20 break-words text-[18px] font-light text-white">
                    Total Clients
                  </div>
                  <div className="font-poppins mb-20 break-words text-[24px] font-bold text-white">
                    150
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex h-3/4  w-full items-center justify-between border-2 bg-black px-20 py-14">
              <div className="text-D4145A font-poppins break-words text-2xl font-bold text-white">
                B&H
              </div>
              <div className="flex items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="text-opacity-35 font-poppins mt-20 break-words  text-[18px] font-light text-white ">
                    Total Clients
                  </div>
                  <div className="font-poppins mb-20 break-words text-[24px] font-bold text-white">
                    50+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapList;
