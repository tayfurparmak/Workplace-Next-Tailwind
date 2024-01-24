import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-white pt-20 pb-12 dark:bg-dark lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="relative w-full px-4 lg:w-6/12">
          <svg
            className="absolute top-20 left-20"
            width="106"
            height="79"
            viewBox="0 0 106 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M106 0H13.8619H0V13.7044V79H13.8619V13.7044H106V0Z"
              fill="#FF4438"
            />
          </svg>

          <div className="-mx-3 flex items-center sm:-mx-4">
            <Image
              src="/images/company-about.png"
              alt="aboutImage"
              className="h-[550px] w-[659px] shrink-0"
              width={659}
              height={550}
            />
          </div>
        </div>

        <div className="mt-10 w-full px-4 text-black dark:text-white lg:mt-0 lg:w-1/2 xl:w-5/12 ">
          <span className="text-zinc-800 font-['Poppins'] text-[38.34px] font-bold leading-[69.50px]">
            Our expert guidance <br />
            and innovative workforce solutions
            <br /> enable faster and <br />
          </span>

          <span className="font-poppins text-[46.86px] font-medium italic leading-[69.50px] text-[#FF4438]">
            smarter decisions for your
            <br />
            talent{" "}
          </span>
          <span className="text-zinc-800 font-['Poppins'] text-[38.34px] font-bold leading-[69.50px]">
            optimization.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
