import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <section id="skills" className="pt-16 pb-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Professional Skills
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-20"
      >
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">React</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">HTML</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">CSS</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Tailwind CSS</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">TypeScript</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Php</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className='className="mt-14 w-full flex flex-col gap-6'>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Java</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">SQL/MySQL</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Figma</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[65%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">65%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Wordpress</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Adobe Photoshop</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Adobe Illustrator</p>
              <span className="w-full h-2 bg-gray-900 rounded-md inline-flex mt-2 relative">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[30%] h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                >
                  <span className="absolute -top-7 right-0">30%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
