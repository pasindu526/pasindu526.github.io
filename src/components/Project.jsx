import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../constants/projectsData';

const Project = () => {
  const handleButtonClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const totalProjects = projects.length;

  return (
    <section
      id="project"
      className="bg-gray-900 py-16 px-4 md:px-6 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My Projects
          <p className="text-center text-blue-200 text-opacity-80 text-base font-semibold mt-5">
            Total Projects: {totalProjects}
          </p>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between h-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-lg p-3 shadow-lg overflow-hidden transform transition-transform 
                hover:scale-105 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="flex-grow px-2 py-4">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <div className="relative group">
                  <p className="mb-4 text-gray-400">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 py-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 text-xs font-medium px-4 py-1 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="flex flex-row gap-3 mt-4 text-sm font-semibold">
                  {/* View Project Button with Tooltip */}
                  <div className="relative group">
                    <button
                      onClick={() => handleButtonClick(project.link)}
                      className={`w-28 justify-center bg-blue-600 text-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transform hover:scale-105
                      transition-transform ${
                        !project.link ? 'cursor-not-allowed' : ''
                      }`}
                      disabled={!project.link}
                    >
                      View Project
                    </button>
                    {!project.link && (
                      <div className="group relative bottom-full">
                        <span
                          className="absolute z-20 w-32 mb-2 bottom-full left-1/2 text-center transform -translate-x-1/2 
                              bg-gray-100 text-gray-950 text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 
                              transition-opacity"
                        >
                          Project Link is not Available..!
                        </span>
                        <span
                          className="absolute z-10 w-4 h-4 mb-1 bottom-full left-1/2 transform -translate-x-1/2 bg-gray-100 
                              rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"
                        ></span>
                      </div>
                    )}
                  </div>

                  {/* GitHub Button with Tooltip */}
                  <div className="relative group">
                    <button
                      onClick={() => handleButtonClick(project.github)}
                      className={`w-24 flex gap-2 justify-center items-center bg-gray-800 text-gray-200 px-4 py-2 rounded-md 
                      shadow-md hover:bg-gray-900 transform hover:scale-105 transition-transform ${
                        !project.github ? 'cursor-not-allowed' : ''
                      }`}
                      disabled={!project.github}
                    >
                      <FaGithub /> GitHub
                    </button>
                    {!project.github && (
                      <div className="group relative bottom-full">
                        <span
                          className="absolute z-20 w-32 mb-2 bottom-full left-1/2 text-center transform -translate-x-1/2 
                              bg-gray-100 text-gray-950 text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 
                              transition-opacity"
                        >
                          GitHub Link is not Available..!
                        </span>
                        <span
                          className="absolute z-10 w-4 h-4 mb-1 bottom-full left-1/2 transform -translate-x-1/2 bg-gray-100 
                              rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"
                        ></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
