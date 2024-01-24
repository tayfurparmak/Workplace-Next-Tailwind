"use client"

import Facebook from "../Icon/facebook";
import Instagram from "../Icon/instagram";
import Linkedin from "../Icon/linkedin";
import Twitter from "../Icon/twitter";
import Youtube from "../Icon/youtube";
import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: 'Success!',
        text: 'You send is successfull!',
        icon: 'success',
        confirmButtonText: 'Back to home',
      }).then(result => {
        if (result.isConfirmed) {
          window.location.href = '/';
        }
      });
    } catch (error) {
      
    }
  };

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ydnfcyf', 'template_mzeico1', formRef.current, '0GdQwosSH0Z7jz1VE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section
      className="relative md:py-[120px]"
      style={{ backgroundColor: "#FF4438", margin: "40px" }}
    >
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="dark:bg-dark-700 absolute left-5 right-5 top-5 -z-[1] w-full "></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/2">
            <div
              className="wow fadeInUp shadow-testimonial dark:bg-dark-2 rounded-lg bg-white px-8 py-10 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
               <form ref={formRef} onSubmit={(e) => { sendEmail(e); onSubmit(e); }}>
                <div className="p-12 mb-[50px]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="dark: w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:text-black"
                  />
                </div>
                <div className=" px-12 mb-[50px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail Address"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-white dark:text-black"
                  />
                </div>
                <div className=" px-12 mb-[50px]">
                  <textarea
                    name="message"
                    rows={1}
                    placeholder="Details"
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color dark:text-black placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-white "
                  ></textarea>
                </div>
                <div className="px-12 mb-4">
                  <button
                
                    type="submit"
                    className="hover:bg-blue-dark inline-flex w-full items-center justify-center rounded-md bg-dark px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/2">
            <div className="mb-12 lg:mb-[150px]">
              <span
                className="mb-6 block font-medium text-white dark:text-dark"
                style={{
                  fontSize: "54px",
                  fontFamily: "Popins",
                  fontWeight: 700,
                }}
              >
                CONTACT US
              </span>
              <h2 className="text-[24px] font-semibold leading-[1.14] text-white dark:text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </h2>
            </div>
            <div className="flex">
              <div className="relative h-12 w-12">
                <div className="absolute left-[10.50px] top-[12px] h-[23.25px] w-[27.71px]">
                <div className="flex">
              <div className="flex space-x-4">
                <Instagram />
                <Twitter />
                <Facebook />
                <Youtube />
                <Linkedin />
              </div>
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

export default Contact;
