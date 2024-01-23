


const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-6xl font-bold font-serif text-dark dark:text-white font-weight: 700; line-height: 61px; sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Discover <br />
                The Workplace
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center" style={{ textAlign: 'center' }}>
          {/* İlk Kart */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl text-dark px-8 py-10 shadow-pricing dark:text-white sm:p-12 lg:px-6 lg:py-10 xl:p-14">
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: '2px solid black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '60px',
                }}
              >
                <span className="text-xl font-medium" style={{ display: 'inline-block' }}>
                  <div className="mb-3 text-xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                    <span style={{ textAlign: 'center', color: '#FF4438', fontSize: '22px', fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Revenues</span>
                    <br />
                    <span style={{ textAlign: 'center', fontSize: '34px', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>€94M</span>
                  </div>
                </span>
              </div>
              <div className="mb-[50px]">
                <span style={{ width: '100%', height: '100%', textAlign: 'center', color: '#FF4438', fontSize: '94px', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>300+</span>
                <div className="flex flex-col gap-[14px] text-dark dark:text-white">
                  <p style={{ fontSize: '22px', fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Internal Headcount</p>
                </div>
              </div>
            </div>
          </div>

          {/* İkinci Kart */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: '2px solid black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '60px',
                }}
              >
                <span className="text-xl font-medium" style={{ display: 'inline-block' }}>
                  <div className="mb-3 text-xl font-semibold text-dark dark:text-white  xl:text-[42px] xl:leading-[1.21]">
                    <span style={{ textAlign: 'center', color: '#FF4438', fontSize: '22px', fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Clients</span>
                    <br />
                    <span style={{ textAlign: 'center', fontSize: '34px', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>1,000+</span>
                  </div>
                </span>
              </div>
              <div className="mb-[50px]">
                <span style={{ width: '100%', height: '100%', textAlign: 'center', color: '#FF4438', fontSize: '94px', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>3,000+</span>
                <div className="flex flex-col gap-[14px] text-dark dark:text-white">
                  <p style={{ fontSize: '22px', fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Annualy Employed Candidates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Üçüncü Kart */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: '2px solid black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '60px',
                }}
              >
                <span className="text-xl font-medium" style={{ display: 'inline-block' }}>
                  <div className="mb-3 text-xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                    <span style={{ textAlign: 'center', color: '#FF4438', fontSize: '22px', fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Companies</span>
                    <br />
                    <span style={{ textAlign: 'center', fontSize: '34px', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>16</span>
                  </div>
                </span>
              </div>
              <div className="mb-[50px] text-dark dark:text-white">
                <span style={{ width: '100%', height: '100%', textAlign: 'center', color: '#FF4438', fontSize: '94px', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>4,500+</span>
                <div className="flex flex-col gap-[14px]">
                  <p style={{ fontSize: '22px', fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Payrolls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

         
   
      </section>
    </>
  );
};

export default Features;
