import React from 'react';
import AboutImg from '../assets/about.jpg';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-6 p-3 md:w-1/3 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]">
            <img
              src={AboutImg}
              alt="Pasindu Bandara"
              className="w-full h-60 object-top object-cover rounded-md"
            />
            <div className="items-center gap-2 p-3 pt-0">
              <ul className="text-base leading-6 space-y-3">
                <li>
                  <strong className="mr-2 text-blue-300">Name:</strong>P G P M
                  Bandara
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">Full Name:</strong>
                  Parana Gedara Pasindu Madusanka Bandara
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">Birthday:</strong>02
                  June 2001
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">City:</strong>
                  Rikillagaskada, Sri Lanka
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">Age:</strong>23
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">Degree:</strong>
                  BSE(hons)
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">University:</strong>The
                  Open University of Sri Lanka
                </li>
              </ul>
              <Link to="contact" offset={-70} duration={200}>
                <button className="px-3 py-2 mt-8 rounded-md bg-blue-600 hover:bg-blue-700 text-xs text-white font-semibold">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>

          {/* Right/paragraph section */}
          <div className="p-5 md:p-6 lg:p-8 md:w-2/3 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] md:text-justify">
            <h1 className="font-bold text-2xl mb-6">
              Hi, I'm <span className="text-blue-400">Pasindu Bandara,</span>
            </h1>
            <p className="text-base leading-7 mb-6">
              A Software Engineering undergraduate at{' '}
              <span className="font-semibold">
                The Open University of Sri Lanka (OUSL)
              </span>{' '}
              with a strong interest in web development, UI/UX design, and
              Software Quality Assurance. I enjoy learning and experimenting
              with modern technologies to create clean, user-friendly, and
              responsive digital experiences.
            </p>
            <p className="text-base leading-7 mb-6">
              I'm continuously improving my skills in HTML, CSS, JavaScript, and
              MySQL, while exploring frameworks like React and Tailwind CSS.
              Additionally, I have experience with WordPress, Git, and Adobe
              Photoshop, allowing me to work across different aspects of web
              development. As I expand my expertise, I'm also diving into
              Software Quality Assurance through online courses to enhance my
              testing and quality management skills.
            </p>
            <p className="text-base leading-7 ">
              I’m always eager to learn, take on challenges, and grow as a
              developer and QA enthusiast. My goal is to create high-quality,
              functional, and impactful digital solutions.
            </p>
            <div className="mt-6">
              <h1 className="font-bold text-xl mb-5 text-blue-400">
                My Interests
              </h1>
              <div className="flex flex-wrap gap-4 mb-5 text-xs">
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Front-End Development
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Fullstack Development
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Wordpress
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Graphic Design
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  UI/UX Design
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Web Design
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Quality Assurance (Automation/Manual)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="gap-6 p-5 md:p-6 lg:p-10 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]">
          <Skills />
        </div> */}
      </div>
    </div>
  );
};

export default About;
