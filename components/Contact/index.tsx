
const Contact = () => {
  return (
        <section className="relative md:py-[120px]" style={{ backgroundColor: '#FF4438', margin: '40px' }}>
        <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
        <div className="absolute left-5 right-5 top-5 -z-[1] w-full dark:bg-dark-700 "></div>
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/2">
              <div className="mb-12 lg:mb-[150px]">
                <span className="mb-6 block font-medium text-white dark:text-dark" style={{ fontSize: '54px', fontFamily: 'Popins', fontWeight: 700 }}>
                  CONTACT US
                </span>
                <h2 className="text-[24px] font-semibold leading-[1.14] text-white dark:text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                </h2>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/2">
              <div className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]" data-wow-delay=".2s">
                <form>
                  <div className="mb-[50px]">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full name"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark: dark:text-white"
                    />
                  </div>
                  <div className="mb-[50px]">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-Mail Address"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-white dark:text-white"
                    />
                  </div>
                  <div className="mb-[50px]">
                    <textarea
                      name="message"
                      rows={1}
                      placeholder="Details"
                      className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color dark:text-white placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-white"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center rounded-md bg-dark px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Contact;
