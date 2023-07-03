import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const { img, projectName, projectFeatures, tools, site, github } = project;

    const handleClickSite = () => {

        window.open(site, '_blank');

    };
    const handleClickGithub = () => {

        window.open(github, '_blank');

    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-2 py-2 h-[250px] border border-spacing-4">
                <img src={img} alt="" className="border border-spacing-4" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-left">{projectName}</h2>
                <h2 className=" text-sm font-bold text-left">Features:</h2>
                <div className="h-auto">
                    <h2 className="text-sm text-left ps-2">1. {projectFeatures[0]}</h2>
                    <h2 className="text-sm text-left ps-2">2. {projectFeatures[1]}</h2>
                    <h2 className="text-sm text-left ps-2">3. {projectFeatures[2]}</h2>
                </div>
                <div className="h-auto">
                    <h2 className="text-sm font-bold text-left">Tools:</h2>
                    <h2 className="text-sm text-left ps-2">{tools}</h2>
                </div>
                <div className="flex gap-2">
                <Link ><button onClick={handleClickSite} className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500">Visit Site</button></Link>
                <Link ><button onClick={handleClickGithub} className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500">GitHub</button></Link>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;