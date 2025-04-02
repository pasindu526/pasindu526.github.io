import React, { useState } from 'react';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import { LiaConnectdevelop } from 'react-icons/lia';
import ResponsiveMenu from './ResponsiveMenu';
import { navLinksdata } from '../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-gray-950 mb-7 z-50 w-full fixed items-center">
      <div className="flex items-center justify-between mx-auto py-6 px-6 md:px-8  border-b border-gray-600">
        {/* logo section */}
        <div>
          <a href="/">
            <h2 className="flex items-center text-xl sm:text-lg font-medium text-white">
              <LiaConnectdevelop className="text-blue-500 mr-1" />
              PASINDU BANDARA
            </h2>
          </a>
        </div>

        {/* Menu section  */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 lg:gap-10 mr-2 text-base items-center font-semibold text-white">
            {navLinksdata.map(({ id, title, link }) => (
              <li
                className="text-base py-1 font-semibold tracking-wide cursor-pointer relative group text-gray-400 hover:text-blue-500"
                key={id}
              >
                <Link
                  activeClass="text-white"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  onSetActive={() => setActiveLink(link)}
                >
                  {title}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-1/2 ${
                    activeLink === link ? 'bg-white w-1/2' : 'bg-blue-600 w-0'
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden text-white text-3xl">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
