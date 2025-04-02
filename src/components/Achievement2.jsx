import React, { useState, useEffect } from 'react';
import { archievements } from '../constants/archivementsData';

const Achievement = () => {
  const [selectedArchievement, setSelectedArchievement] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // useEffect(() => {
  //   // Adjust itemsPerPage based on screen width
  //   const adjustItemsPerPage = () => {
  //     if (window.innerWidth <= 640) {
  //       setItemsPerPage(3);
  //     } else {
  //       setItemsPerPage(6);
  //     }
  //   };

  //   // Set itemsPerPage initially
  //   adjustItemsPerPage();

  //   // Add a resize event listener to adjust itemsPerPage dynamically
  //   window.addEventListener('resize', adjustItemsPerPage);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', adjustItemsPerPage);
  //   };
  // }, []);

  // Calculate total pages
  const totalPages = Math.ceil(archievements.length / itemsPerPage);

  // Get achievements for the current page
  const currentAchievements = archievements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="skills" className="pt-16 pb-6">
      <div className="flex flex-col max-w-6xl min-h-[80vh] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between h-full px-2 md:px-4 lg:px-0">
          {currentAchievements.map(({ id, title, resource, image, link }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-lg p-3 shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col cursor-pointer"
              onClick={() =>
                setSelectedArchievement({ id, title, resource, image, link })
              }
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover object-left-top rounded-md"
              />
              <div className="flex-grow px-2 py-4">
                <h3 className="text-base font-bold mb-2">{title}</h3>
                <p className="text-xs text-gray-400">{resource}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedArchievement && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedArchievement(null);
              }
            }}
          >
            <div className="bg-gray-900 rounded-lg pt-8 p-6 w-11/12 sm:w-3/4 lg:w-1/2 shadow-lg relative">
              <button
                className="absolute top-1 right-3 text-gray-500 hover:text-gray-400 text-xl md:text-2xl font-semibold"
                onClick={() => setSelectedArchievement(null)}
              >
                &times;
              </button>
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                {selectedArchievement.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Provided by: {selectedArchievement.resource}
              </p>

              {selectedArchievement.link && (
                <a
                  href={selectedArchievement.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-500 hover:text-blue-600 hover:underline"
                >
                  <span className="text-xs text-gray-300 font-semibold">
                    Verify Certificate:{' '}
                  </span>
                  {selectedArchievement.link}
                </a>
              )}

              <img
                src={selectedArchievement.image}
                alt={selectedArchievement.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-md mt-2"
              />
            </div>
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-auto pt-10 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Prev
          </button>
          <span className="text-white font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
