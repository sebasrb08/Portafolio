import GitHubIcon from '@mui/icons-material/GitHub';

import { projects } from "../data/projects"
export function Project(){
    return(
        <section id="project" className=" flex flex-col justify-center items-center space-y-6 font-inter  ">
            <div>
                <h3 className="text-2xl md:text-4xl font-extrabold  text-center mt-20">
                    Proyectos
                </h3>
            </div>
            <div className="flex flex-col md:flex-row  text-center mt-10 md:space-x-10">
            {  projects.map((project, index) => (
                <div key={index} className="border-2 border-transparent  rounded-lg flex flex-col justify-center items-center p-7 ">
                    <div >
                        <img src={project.image} className="w-80 h-48"/>
                    </div>
                    <div className="mt-7 space-y-3">
                        <p className="font-bold text-xl">{project.title}</p>
                        <p>{project.description}</p>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4 text-sky-400 font-bold ">
                        <button className="border-2 border-sky-400 p-2 rounded-lg hover:bg-sky-400 text-white">
                            <a href={project.link} className="cursor-pointer hover:scale-105 transition-transform flex  space-x-2"> <GitHubIcon/> <span>GitHub</span></a>
                        </button>

                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}