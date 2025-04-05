import React, { useState, useRef } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaUserFriends,
  FaWhatsapp,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const [isProcessing, setIsProcessing] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    emailjs
      .sendForm('service_d0elasl', 'template_rawhj4m', form.current, {
        publicKey: '0XUTjUiALBjm7O_u1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsProcessing(false);
          toast.success('Your message has been sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsProcessing(false);
          toast.error('Failed to send your message. Please try again!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-950 py-16 px-2 sm:px-6 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                Let's Connect
              </h1>
              <p className="my-5">
                Have questions or want to contact me? Let's connect..! You can
                reach me via email, phone, social media, or contact forum.
              </p>
              <h3 className="flex flex-row items-center text-2xl font-semibold">
                <FaEnvelope className="w-5 h-5 mr-2" /> Email
              </h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="mailto:pasindumadusanka526@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  pasindumadusanka526@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="flex flex-row items-center text-2xl font-semibold">
                <FaPhone className="w-4 h-4 mr-2" /> Phone
              </h3>
              <p className="text-gray-600 mt-2 flex flex-col max-w-32">
                <a
                  href="tel:+94763126721"
                  className="text-blue-500 hover:underline transition-transform transform hover:scale-105"
                >
                  +94 76 312 6721
                </a>
                <a
                  href="tel:+94713508217"
                  className="text-blue-500 hover:underline transition-transform transform hover:scale-105"
                >
                  +94 71 350 8217
                </a>
              </p>
            </div>
            <div>
              <h3 className="flex flex-row items-center text-2xl font-semibold">
                <FaUserFriends className="w-5 h-5 mr-2" />
                Follow Me
              </h3>
              <div className="flex gap-3 text-2xl transition-all mt-5 text-blue-400">
                <a
                  href="https://www.facebook.com/profile.php?id=100011722833344"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="hover:text-blue-300 transition-transform transform hover:scale-110" />
                </a>
                <a
                  href="https://wa.me/+94754369691"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="hover:text-green-400 transition-transform transform hover:scale-110" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pasindu-bandara-ab6925254"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-blue-300 transition-transform transform hover:scale-110" />
                </a>
                <a
                  href="https://github.com/pasindu526"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-gray-400 transition-transform transform hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className="bg-gray-900 rounded-lg p-6 sm:p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Get in Touch
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base mb-2 font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2.5 border bg-gray-950 text-white text-sm border-gray-600 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base mb-2 font-medium text-gray-300"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2.5 border bg-gray-950 text-white text-sm border-gray-600 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base mb-2 font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-2.5 border bg-gray-950 text-white text-sm border-gray-600 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Message Here...."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white text-base font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center ${
                  isProcessing ? 'cursor-not-allowed' : ''
                }`}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-blue-200 border-t-transparent rounded-full animate-spin"></span>
                    <span className="animate-pulse text-blue-200 italic">
                      Sending...
                    </span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
