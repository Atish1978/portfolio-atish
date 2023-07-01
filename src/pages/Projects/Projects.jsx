import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion"


const Projects = () => {
    const [projects, setProjects] = useState([]);
    

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);

            })

    }, [])


    return (
        <motion.div
            initial={{ opacity: 0, y: -500 }} // Initial state of the animation
            animate={{ opacity: 5, y: 0 }} // Target state of the animation
            transition={{ duration: 1 }} // Animation duration
        >
            <div className="bg-base-200 px-12 py-8">
                <div className="">
                    <h3 className="text-4xl font-bold mb-6">Portfolio</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                        {
                            projects.map(project => <ProjectCard
                                key={project.id}
                                project={project}></ProjectCard>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;