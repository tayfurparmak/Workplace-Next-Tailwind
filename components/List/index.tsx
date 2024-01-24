import Image from "next/image";
import React from "react";
import RedSvg from "./RedImage";
import YellowSvg from "./YellowImage";

const ListSection = () => {
  return (
    <section className="bg-primary/5 py-16  px-10 md:py-20 lg:py-28">
      <div className="relative h-screen  ">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <Image
            src="/images/people-bg.png"
            alt="background image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container relative z-10 mx-auto flex justify-between gap-4 bg-cover bg-center p-10">
          <div className="mt-10 flex w-1/2 flex-col items-center ">
       
            <div className="relative font-poppins leading-14 mb-6 text-5xl font-bold text-white">
            <span className="absolute top-[-20px] left-[-30px]">  <RedSvg/> 
      </span>
              Workplace
              <br />
              Solutions
              <span className="absolute  bottom-[-20px]  right-0">
         <YellowSvg  />
         </span>
            </div>
            <div className="w-[343px] font-['Poppins'] text-2xl font-normal leading-10 text-white">
              Our expert guidance and innovative workforce solutions enable
              faster and smarter decisions for your talent optimization.
            </div>
          
          </div>

          <div className="mt-10 ml-[190px] w-full ">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="mb-10 flex items-center">
                <div className="inline-flex h-[88px] w-[88px] flex-col items-center justify-center gap-2 rounded-[48px] bg-[#FF4438] p-2">
                  <div className="font-['Poppins'] text-[40px] font-bold leading-[50.50px] text-white">
                    {index + 1}
                  </div>
                </div>
                <p className="font-poppins leading-13 ml-4 text-2xl font-bold text-white">
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
    "Tailor-made solutions for each Client",
    "Permanent Recruitment & Selection",
    "Temporary Staffing",
    "Payroll, Finance & HR Administration",
    "Advanced Outsourcing",
    "Education & HR Strategy",
    "Research",
  ];
  return contentList[index];
};

export default ListSection;
