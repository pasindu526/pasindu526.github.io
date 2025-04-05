import React, { useState } from 'react';
import { FaChevronRight, FaUserCircle } from 'react-icons/fa';
import { navLinksdata } from '../constants';
import { Link } from 'react-scroll';
import { LiaConnectdevelop } from 'react-icons/lia';

const ResponsiveMenu = ({
  showMenu,
  setShowMenu,
  activeLink,
  setActiveLink,
}) => {
  return (
    <div
      className={`${showMenu ? 'left-0' : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 px-6 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div>
          <a href="/">
            <h2 className="flex items-center text-2xl font-medium text-white border-b-4 border-blue-500 pb-2">
              <LiaConnectdevelop size={72} className="text-blue-500 mr-2" />{' '}
              PASINDU BANDARA
            </h2>
          </a>
        </div>
        <nav className="mt-12 px-2">
          <ul className="flex flex-col gap-7 text-lg font-semibold text-white">
            {navLinksdata.map(({ id, title, link }) => (
              <li
                className="text-xl py-1 font-semibold tracking-wide cursor-pointer relative group text-gray-400 hover:text-blue-500"
                key={id}
              >
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  onSetActive={() => setActiveLink(link)}
                  onClick={() => setShowMenu(false)}
                  className={
                    activeLink === link ? 'text-white hover:text-white' : ''
                  }
                >
                  {title}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-1/2 ${
                    activeLink === link ? 'bg-white w-full' : 'bg-blue-600 w-0'
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
