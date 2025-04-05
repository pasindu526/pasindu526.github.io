import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import { LiaConnectdevelop } from 'react-icons/lia';
import ResponsiveMenu from './ResponsiveMenu';
import { navLinksdata } from '../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setShowMenu((prev) => !prev);

  // Track scrolling and update active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
      navLinksdata.forEach(({ link }) => {
        const section = document.getElementById(link);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = link;
          }
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-950 mb-7 z-50 w-full fixed items-center will-change-transform">
      <div className="flex items-center justify-between mx-auto py-6 px-6 md:px-8 border-b border-gray-600">
        {/* Logo Section */}
        <div>
          <a href="/">
            <h2 className="flex items-center text-xl sm:text-lg font-medium text-white">
              <LiaConnectdevelop className="text-blue-500 mr-1" />
              PASINDU BANDARA
            </h2>
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 lg:gap-10 mr-2 text-base items-center font-semibold">
            {navLinksdata.map(({ id, title, link }) => (
              <li
                key={id}
                className="text-base py-1 font-semibold tracking-wide cursor-pointer relative group text-gray-400 hover:text-blue-500"
              >
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                  className={activeLink === link ? 'text-white' : ''}
                  onSetActive={() => setActiveLink(link)}
                >
                  {title}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out
                    ${
                      activeLink === link
                        ? 'w-1/2 bg-white'
                        : 'w-0 bg-blue-500 opacity-0 group-hover:w-1/2 group-hover:opacity-100'
                    }`}
                ></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-3xl">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </div>
  );
};

export default Navbar;
