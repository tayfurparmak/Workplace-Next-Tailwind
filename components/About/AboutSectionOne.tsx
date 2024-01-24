import Image from "next/image";
import React from "react";
import AboutOneRedImage from "./AboutOneRedImage";
import AboutTwoYellowImage from "./AboutTwoYellowImage";

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-white pt-20 pb-12 dark:bg-dark lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto flex flex-wrap items-center justify-between relative">
        {/* Sol üst köşe - Red Image */}
        <div className="absolute top-0 left-0">
          <AboutOneRedImage />
        </div>

        <div className="relative w-full px-4 lg:w-6/12">
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

        {/* Sağ alt köşe - Yellow Image */}
        <div className="absolute bottom-0 right-0">
          <AboutTwoYellowImage />
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
