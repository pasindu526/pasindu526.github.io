import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Achievement2 from './Achievement2';

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section
      id="resume"
      className="bg-gradient-to-r bg-gray-950 py-16 px-6 md:px-8 text-gray-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center">Resume</h2>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? 'border-2 border-blue-600 text-white font-semibold rounded-md'
                : 'border-transparent'
            } resumeLi`}
          >
            Education & Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setAchievementData(false)
            }
            className={`${
              skillData
                ? 'border-2 border-blue-600 text-white font-semibold rounded-md'
                : 'border-transparent'
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? 'border-2 border-blue-600 text-white font-semibold rounded-md'
                : 'border-transparent'
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {/* {achievementData && <Achievement2 />} */}
    </section>
  );
};

export default Resume;
