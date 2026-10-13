import { motion } from 'framer-motion';

const skills = [
  // Frontend Development
  { name: 'React', level: 75 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 80 },
  { name: 'Tailwind CSS', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'TypeScript', level: 60 },
  { name: 'Bootstrap', level: 70 },
  { name: 'Vite', level: 65 },

  // Backend Development
  { name: 'PHP', level: 60 },
  { name: 'Node.js', level: 55 },
  { name: 'Express.js', level: 55 },
  { name: 'REST APIs', level: 60 },
  { name: 'Java', level: 70 },

  // Database
  { name: 'SQL / MySQL', level: 90 },
  { name: 'MongoDB', level: 55 },

  // Tools and Design
  { name: 'Git & GitHub', level: 85 },
  { name: 'Postman', level: 80 },
  { name: 'Figma', level: 75 },
  { name: 'WordPress', level: 60 },
  { name: 'Adobe Photoshop', level: 75 },
  { name: 'Adobe Illustrator', level: 30 },

  // Quality Assurance
  { name: 'Manual Testing (QA)', level: 60 },
];

const Skills = () => {
  const columns = [
    skills.slice(0, Math.ceil(skills.length / 2)),
    skills.slice(Math.ceil(skills.length / 2)),
  ];

  return (
    <section id="skills" className="pt-16 pb-12 px-4 text-gray-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Professional Skills
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12"
      >
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/2">
            <div className="flex flex-col gap-7">
              {column.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm uppercase font-medium tracking-wide">
                      {skill.name}
                    </p>

                    <span className="text-sm">{skill.level}%</span>
                  </div>

                  <div
                    className="w-full h-2 bg-gray-900 rounded-md overflow-hidden"
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: (index % 5) * 0.08,
                        ease: 'easeOut',
                      }}
                      className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
