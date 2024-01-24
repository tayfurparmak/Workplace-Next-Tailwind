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
                <h2 className="mb-3 text-6xl font-bold font-serif text-dark dark:text-white font-weight-700 line-height-61px sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Discover <br />
                  The Workplace
                </h2>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center" style={{ textAlign: 'center' }}>
            <FeatureCard
              title="Revenues"
              value="€94M"
              additionalValue="300"
              description="Internal Headcount"
            />
            <FeatureCard
              title="Clients"
              value="1,000+"
              additionalValue="3,000+"
              description="Annualy Employed Candidates"
            />
            <FeatureCard
              title="Companies"
              value="16"
              additionalValue="4,500+"
              description="Payrolls"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ title, value, additionalValue, description }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
        <div className="circle-container" style={{ border: '2px solid #CCCCCC', width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }}>
          <span className="text-xl font-medium">
            <div className="mb-3 text-xl font-semibold text-dark dark:text-dark xl:text-[42px] xl:leading-[1.21]">
              <span className="title" style={{ textAlign: 'center', color: '#FF4438', fontSize: '22px', fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>{title}</span>
              <br />
              <span className="value" style={{ textAlign: 'center', fontSize: '34px', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>{value}</span>
            </div>
          </span>
        </div>
        <div className="mb-[50px]">
          <span className="additional-value" style={{ width: '100%', height: '100%', textAlign: 'center', color: '#FF4438', fontSize: '94px', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>{additionalValue}</span>
          <div className="flex flex-col gap-[14px] text-dark dark:text-dark">
            <p className="description" style={{ fontSize: '22px', fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
