import Navbar from "./Navbar"
import Footer from "./Footer"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    
    return (
        <div>
            <Navbar />
            <div className="w-full  font-[roboto]">
                <div className="container flex flex-col items-center justify-center px-5 py-12 mx-auto lg:px-20 xl:px-0">
                    <div className="flex flex-col items-center justify-center w-full mb-12 text-center lg:w-2/3">
                        <h1 className="mb-4 text-3xl font-bold text-center text-[#4176FF]">
                            Contact us
                        </h1>
                        <p className="mx-auto text-base font-bold leading-relaxed text-gray-700 lg:w-2/3">
                            We are here to help you with any questions you may have about our products or services. Reach out to us and we'll respond as soon as we can.
                        </p>
                    </div>
                    <form className="flex flex-col w-full mb-12 lg:w-2/3" ref={form} onSubmit={sendEmail}>
                        <div className="relative flex flex-col w-full mb-3">
                            <label htmlFor="name" className="text-sm font-medium leading-relaxed text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-white"
                            />
                        </div>
                        <div className="relative flex flex-col w-full mb-3">
                            <label htmlFor="email" className="text-sm font-medium leading-relaxed text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-white"
                            />
                        </div>
                        <div className="relative flex flex-col w-full mb-3">
                            <label htmlFor="message" className="text-sm font-medium leading-relaxed text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Enter your message"
                                className="w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-white"
                            />
                        </div>
                        <div className="flex justify-end w-full mt-6">
                            <button className="px-6 py-2 font-medium text-white bg-[#4176FF] rounded-md" type="submit" value="Send">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// Path: src\components\Client\Contact.module.css