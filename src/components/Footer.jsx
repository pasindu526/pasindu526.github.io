import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>&copy; 2025 | Pasindu Bandara. All rights reserved.</p>
      <p className="text-xs my-1 font-medium">
        Designed & Developed by{' '}
        <a
          href="https://www.linkedin.com/in/pasindu-bandara-ab6925254"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          Pasindu Bandara
        </a>
      </p>
    </footer>
  );
};

export default Footer;
