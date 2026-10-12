const experience = [
  {
    role: 'Software Engineering (Intern)',
    company: 'All In One Holdings (Pvt) Ltd - kandy',
    year: 'May 2025 - November 2025',
    description:
      'Developed and optimized MERN stack applications, enhancing user experience.',
    icon: '💻',
  },
  {
    role: 'Management Assistant (MA)',
    company: 'Genesis College International Kandy',
    year: '2023 - 2024',
    // description:
    //   'Founded a digital marketing and web development agency, delivering tailored solutions.',
    icon: '💼',
  },
];

const education = [
  {
    degree: 'Bachelor of Software Engineering (BSE hons)',
    institution: 'The Open University of Sri Lanka',
    year: 'September 2022 - 2027',
    description: 'Undergraduate', //'with a strong foundation in critical thinking and problem-solving.',
    icon: '🎓',
  },
  {
    degree: 'Secondary Education ',
    institution: 'Poramadulla Central College',
    year: '2012 - 2021',
    description:
      'GCE Ordinary Level: 3A, 6B\nGCE Advanced Level: 1C, 2S\n(Combined Mathematics-S, Physics-S, ICT-C)',
    icon: '📚',
  },
  // {
  //   degree: 'Primary Education ',
  //   institution: 'Model School Rikillagaskada',
  //   year: '2007 - 2012',
  //   // description:
  //   //   'Lorem ipsum dolor sit amet consectetur adipisicing elit Vel molestiae.',
  //   icon: '📚',
  // },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-r bg-gray-950 pt-16 pb-4 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl  font-bold text-center text-gray-300 mb-12">
          Education & Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Experience
            </h3>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
              >
                <div className="text-4xl mr-6 text-blue-500">{exp.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-100">
                    {exp.role}
                  </h4>
                  <p className="text-gray-300 font-medium">{exp.company}</p>
                  <p className="text-gray-400 text-sm italic">{exp.year}</p>
                  {/* <p className="text-gray-400 mt-2">{exp.description}</p> */}
                </div>
              </div>
            ))}
          </div>

          {/* Education section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
              >
                <div className="text-4xl mr-6 text-blue-500">{edu.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-100">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 font-medium">{edu.institution}</p>
                  <p className="text-gray-400 text-sm italic">{edu.year}</p>
                  <p
                    style={{ whiteSpace: 'pre-line' }}
                    className="text-gray-400 mt-2"
                  >
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
