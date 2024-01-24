import Image from "next/image";
import YellowSvg from "./AboutTwoYellowImage";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex items-center">
          <div className="w-full px-4 font-['Poppins'] font-bold  leading-6 text-black dark:text-white  sm:text-[40px] sm:leading-[1.2] lg:w-1/2">
            <h2 className="mb-5 text-[56px] ">
              Workplace is a
              <br />
              collaboration between
              <br /> Mplus and <br />
              Noordenster{" "}
            </h2>
            <h5 className="mb-5 text-2xl font-bold leading-tight sm:text-[24px] sm:leading-[1.2]">
              Its the exclusive ManpowerGroup partner
              <br /> and license holder for the Manpower brand
              <br /> in multiple CEE countries
            </h5>

            <p className=" mb-10 text-[16px] leading-relaxed ">
              Workplace owns companies under the Manpower Brand in 6 countries
              <br /> in the region including Bosnia and Herzegovina, Bulgaria,
              Croatia, <br />
              Hungary, Serbia and Slovenia.
              <br />
              <br />
              Alongside Manpower branded companies, Workplace also encompasses <br />
              MPS Integration, offering advanced outsourcing solutions, as well <br />
              as Smart Flex, a Croatian based HR services provider.
            </p>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className=" relative flex-end flex sm:-mx-4 ">
              <Image
                src="/images/company.png"
                alt="aboutImage"
                className="h-[650px] w-[659px]  relative z-1"
                width={661}
                height={650}
              />
               <div className="absolute bottom-0 right-3 w-[600px] h-[620px] border-b-[18px] border-r-[18px] border-[#FFC600] pointer-events-none"></div>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
