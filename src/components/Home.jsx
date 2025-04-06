import React from 'react';
import { Download } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Profile from '../assets/Me.png';
import { motion } from 'framer-motion';
import '../css/Home.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'Front-End Developer',
      'UI/UX Designer',
      'Web Developer',
      'Wordpress Developer',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="/"
      className="home min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center relative z-10"
    >
      <div className="max-w-7xl mt-28 md:mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-10 lg:gap-28 justify-between">
        <div className="md:w-1/2 md:space-y-7 px-6">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            <span className="flex flex-col  text-xl font-bold mb-2 text-gray-300 ">
              Hello, I'm
            </span>
            Pasindu Bandara
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-xl font-bold text-white mb-4"
          >
            I'm a <span className="text-blue-400">{text}</span>
            <Cursor />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300 text-justify"
          >
            A Software Engineering undergraduate with a passion for front-end
            development, UI design, and modern web technologies. I love to
            create beautiful and user-friendly web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
          >
            <button
              onClick={() => window.open('/Pasindu Bandara.pdf', '_blank')}
              className="px-4 py-3 w-36 flex items-center gap-2 bg-blue-600 rounded-md text-sm font-semibold text-white hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              <Download className="w-4 h-4" /> Download CV
            </button>
          </motion.div>

          <div className="flex gap-3 text-2xl transition-all mt-6 md:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=100011722833344"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-500 transition-transform transform hover:scale-110" />
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
              <FaLinkedin className="hover:text-blue-500 transition-transform transform hover:scale-110" />
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

        <div className="md:w-1/2 relative overflow-hidden items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Profile}
            alt="Profile"
            className="w-[300px] sm:w-[400px] md:w-auto md:h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
