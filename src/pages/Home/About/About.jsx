import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: -500 }} // Initial state of the animation
        animate={{ opacity: 5, y: 0 }} // Target state of the animation
        transition={{ duration: 1 }} // Animation duration
      >
         <div className="hero bg-base-200 px-12 py-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/Atish.jpg" className="max-auto rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold mb-2">About Me</h1>
                    <hr className="border-b-4 border-yellow-500 w-28 mt-2" />
                    <p className="py-4 text-xl text-justify pr-8">As a junior web developer with experience in JavaScript and React.js, my career objective is to build a strong foundation in web development and continue to grow as a professional. My goal is to work with a team of experienced developers, learn from them, and contribute towards building innovative solutions for clients. Ultimately, my aim is to become a well-rounded full-stack developer who can handle end-to-end development tasks with ease and proficiency.</p>
                  
                </div>
            </div>
        </div>
      </motion.div>
    );
  };
export default About;