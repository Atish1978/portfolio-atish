import { motion } from "framer-motion"

const skillsName = [
  { name: 'HTML 90%', level: 90 },
  { name: 'CSS 85%', level: 85 },
  { name: 'Tailwind 80%', level: 80 },
  { name: 'JavaScript 65%', level: 65 },
  { name: 'React 70%', level: 70 }
];

const ProgressBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="text-lg font-medium text-gray-800">{name}</div>
      <div className="h-2 w-full bg-gray-200 rounded-lg">
        <div
          className="h-full bg-yellow-400 rounded-lg"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: -500 }} // Initial state of the animation
        animate={{ opacity: 5, y: 0 }} // Target state of the animation
        transition={{ duration: 1 }} // Animation duration
      >
    <div className=" py-8 bg-base-200 px-12 my-8">
      <h1 className="text-4xl font-bold mb-4 ">Personal Skills</h1>
      {skillsName.map((skill, index) => (
        <ProgressBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
      </motion.div>
  );
};

export default Skills;