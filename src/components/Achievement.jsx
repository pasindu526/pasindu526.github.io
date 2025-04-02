import React, { useState } from 'react';
import { archievements } from '../constants/archivementsData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Achievement = () => {
  const [selectedArchievement, setSelectedArchievement] = useState(null);
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust scrolling distance
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust scrolling distance
      behavior: 'smooth',
    });
  };

  const totalAchievements = archievements.length;

  return (
    <section id="skills" className="pt-16 pb-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Achievements
          <p className="text-center text-blue-200 text-opacity-80 text-base font-semibold mt-4">
            Total Achievements: {totalAchievements}
          </p>
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-snap-x snap-mandatory space-x-6 p-4 px-2 scrollbar-hide"
          >
            {archievements.map(({ id, title, resource, image, link }) => (
              <div
                key={id}
                className="flex-shrink-0 w-72 sm:w-80 lg:w-[23vw] bg-gray-900 rounded-lg p-3 shadow-lg overflow-hidden 
                          transform transition-transform hover:scale-105 snap-start cursor-pointer"
                onClick={() =>
                  setSelectedArchievement({ id, title, resource, image, link })
                }
              >
                <div className="relative group">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover object-top rounded-md mb-3 group-hover:hidden"
                  />
                  <div className="hidden group-hover:block">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-48 object-cover object-top rounded-md mb-3"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                      <button className="bg-gray-900 rounded-lg p-2 px-4 w-auto shadow-lg text-sm font-semibold">
                        View
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-2 py-2">
                  <h3 className="text-base font-bold mb-2">{title}</h3>
                  <p className="text-xs text-gray-400">{resource}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-90 text-white 
                      rounded-full p-4 hover:bg-gray-600 hover:bg-opacity-90 hover:border-2 hover:border-gray-300 z-10 shadow-lg 
                      flex items-center justify-center"
          >
            <FaArrowLeft className="text-lg" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-90 text-white 
                      rounded-full p-4 hover:bg-gray-600 hover:bg-opacity-90 hover:border-2 hover:border-gray-300 z-10 shadow-lg 
                      flex items-center justify-center"
          >
            <FaArrowRight className="text-lg" />
          </button>
        </div>

        {/* Modal for Viewing Achievements */}
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
      </div>
    </section>
  );
};

export default Achievement;
