import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0" style={{ fontFamily: 'Poppins' }}>
                <h2 className="mb-5 text-[56px] font-bold leading-tight text-[#303031] dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Workplace, Mplus ve Noordenster işbirliğidir
                </h2>

                <h5 className="mb-5 text-2xl font-bold leading-tight text-dark dark:text-white sm:text-[24px] sm:leading-[1.2]">
                  ManpowerGroupun birkaç CEE ülkesindeki özel partneri ve lisans sahibidir
                </h5>

                <p className="mb-10 text-[16px] leading-relaxed text-body-color dark:text-dark-6">
                  Workplace, bölgedeki Bosna-Hersek, Bulgaristan, Hırvatistan, Macaristan, Sırbistan ve Slovenya dahil olmak üzere 6 ülkede Manpower markası altında şirketlere sahiptir.
                  <br />
                  <br />
                  Manpower markalı şirketlerin yanı sıra Workplace, gelişmiş dış kaynak kullanım çözümleri sunan MPS Integrationı ve Hırvatistan merkezli bir İK hizmetleri sağlayıcısı olan Smart Flexi de içerir.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-end sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-auto lg:h-auto xl:h-auto max-w-full">
                    {/* <Image
                      src="./assets/images/company.png"
                      alt="company image"
                      className="h-full w-full object-cover object-center"
                    /> */}
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

export default AboutSectionTwo;
