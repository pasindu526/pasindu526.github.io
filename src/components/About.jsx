import AboutImg from '../assets/about.png';
import { Link } from 'react-scroll';

const About = () => {
  // Function to calculate age based on date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // If the birthday hasn't occurred yet this year, subtract 1 from the age
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  // Calculate age using the date of birth
  const age = calculateAge('2001-06-02');

  return (
    <div id="about" className="py-16 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-6 p-3 md:w-1/3 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]">
            <img
              src={AboutImg}
              alt="Pasindu Bandara"
              className="w-full h-60 object-top object-cover rounded-md"
            />
            <div className="items-center gap-2 p-3 pt-0">
              <ul className="text-base leading-6 space-y-3">
                <li>
                  <strong className="mr-2 text-blue-300">Name:</strong>P G P M
                  Bandara
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">Full Name:</strong>
                  Parana Gedara Pasindu Madusanka Bandara
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">Birthday:</strong>02
                  June 2001
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">City:</strong>
                  Rikillagaskada, Sri Lanka
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">Age:</strong>
                  {age} years
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">Degree:</strong>
                  BSE(hons)
                </li>
                <li>
                  <strong className="mr-2 text-blue-300">University:</strong>The
                  Open University of Sri Lanka
                </li>
              </ul>
              <Link to="contact" offset={-70} duration={200}>
                <button className="px-3 py-2 mt-8 rounded-md bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105 text-xs text-white font-semibold">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>

          {/* Right/paragraph section */}

          <div className="p-5 md:p-6 lg:p-8 md:w-2/3 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] md:text-justify">
            <h1 className="font-bold text-2xl mb-6">
              Hi, I&apos;m{' '}
              <span className="text-blue-400">Pasindu Bandara.</span>
            </h1>

            <p className="text-base leading-7 mb-6">
              A Software Engineering undergraduate at{' '}
              <span className="font-semibold">
                The Open University of Sri Lanka (OUSL)
              </span>{' '}
              with six months of industry internship experience in web
              development, UI/UX design, and software quality assurance. I enjoy
              building clean, user-friendly, and responsive digital experiences
              that solve real-world problems.
            </p>

            <p className="text-base leading-7 mb-6">
              I have hands-on experience with{' '}
              <span className="font-semibold">
                React, JavaScript, TypeScript, and Tailwind CSS
              </span>
              , contributing to client projects, website revamps, and responsive
              user interfaces during my internship. I&apos;m also developing my
              backend skills with Node.js, Express.js, and MongoDB through
              full-stack project development. I use tools such as Git, GitHub,
              and Postman in my development workflow.
            </p>

            <p className="text-base leading-7">
              Beyond web development, I&apos;m interested in UI/UX design and
              Software Quality Assurance, including manual and automated
              testing. I enjoy learning new technologies, collaborating with
              others, and improving my problem-solving skills. My goal is to
              grow as a software engineer and contribute to building reliable,
              high-quality digital solutions.
            </p>

            <div className="mt-6">
              <h2 className="font-bold text-xl mb-5 text-blue-400">
                My Interests
              </h2>

              <div className="flex flex-wrap gap-4 mb-5 text-xs">
                {[
                  'Front-End Development',
                  'Full-Stack Development',
                  'UI/UX Design',
                  'Software Quality Assurance',
                  'Manual Testing',
                  'Test Automation',
                  'WordPress Development',
                  'Web Design',
                  'Graphic Design',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="bg-gray-900 text-gray-300 px-3 py-2 rounded-full transition-transform duration-200 hover:scale-105"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="gap-6 p-5 md:p-6 lg:p-10 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]">
          <Skills />
        </div> */}
      </div>
    </div>
  );
};

export default About;
