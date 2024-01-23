// components/ListSection.tsx

import React from 'react';

const ListSection = () => {
  return (
    <section className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="p-10 gap-4 bg-cover bg-center justify-between mx-auto" style={{ background: "url('./assets/images/people-bg.png') rgb(75, 71, 71) 50% / cover no-repeat", margin: '40px', height: '100%' }}>
        <div className="container flex">
          <div className="flex flex-col items-center w-1/2" style={{ marginTop: '80px' }}>
            <div style={{ width: '100%', color: 'white', fontSize: '54px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '59px', wordWrap: 'break-word' }}>Workplace<br/>Solutions</div>
            <div style={{ width: '100%', color: 'white', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '40.50px', wordWrap: 'break-word' }}>Our expert guidance and innovative workforce solutions enable faster and smarter decisions for your talent optimization.</div>
          </div>

          <div className="w-full" style={{ marginLeft: '150px', marginBottom: '80px', marginTop: '80px' }}>
        
            <div className="flex items-center" style={{ marginBottom: '10px' }}>
              <div className="text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{ background: 'red' }}>
                1
              </div>
              <p style={{ marginLeft: '10px', color: 'white', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '50.50px', wordWrap: 'break-word' }}>Tailor-made solutions for each Client</p>
            </div>

            <div className="flex items-center" style={{ marginBottom: '10px' }}>
              <div className="text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{ background: 'red' }}>
                2
              </div>
              <p style={{ marginLeft: '10px', color: 'white', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '50.50px', wordWrap: 'break-word' }}>Permanent Recruitment & Selection</p>
            </div>

            <div className="flex items-center" style={{ marginBottom: '10px' }}>
              <div className="text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{ background: 'red' }}>
                3
              </div>
              <p style={{ marginLeft: '10px', color: 'white', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '50.50px', wordWrap: 'break-word' }}>Temporary Staffing</p>
            </div>

            <div className="flex items-center" style={{ marginBottom: '10px' }}>
              <div className="text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{ background: 'red' }}>
                4
              </div>
              <p style={{ marginLeft: '10px', color: 'white', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '50.50px', wordWrap: 'break-word' }}>Payroll, Finance & HR Administration</p>
            </div>

            <div className="flex items-center" style={{ marginBottom: '10px' }}>
              <div className="text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{ background: 'red' }}>
                5
              </div>
              <p style={{ marginLeft: '10px', color: 'white', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '50.50px', wordWrap: 'break-word' }}>Advanced Outsourcing</p>
            </div>

            <div className="flex items-center" style={{ marginBottom: '10px' }}>
              <div className="text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{ background: 'red' }}>
                6
              </div>
              <p style={{ marginLeft: '10px', color: 'white', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '50.50px', wordWrap: 'break-word' }}>Education & HR Strategy</p>
            </div>

            <div className="flex items-center" style={{ marginBottom: '10px' }}>
              <div className="text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{ background: 'red' }}>
                7
              </div>
              <p style={{ marginLeft: '10px', color: 'white', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '50.50px', wordWrap: 'break-word' }}>Research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSection;
