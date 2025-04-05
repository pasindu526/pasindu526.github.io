import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 p-4 bg-blue-600 rounded-full transition-transform transform hover:scale-110 focus:outline-none"
        >
          <FaArrowUp color="white" size={15} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
