import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.png'
import project3 from '../assets/projects/project-3.png'

const projects = [
  {
    title: "Full Stack Realtime Chat App",
    description: "Authentication and Authorization with JWT. Real-time messaging with Socket.io. Global state management with Zustand. Error handling both on the server and on the client",
    image: project1,
    tech: ["Express", "Reactjs", "Webscket"],
    github: "https://github.com/mini-gear/Realtime-chat-app-react-fullstack",
    live: "https://realtime-chat-app-react-fullstack.onrender.com/",
  },
  {
    title: "Cine Suggest",
    description: "Cine Suggest is a dynamic React app that uses the TMDb API to fetch movie data. Users can search for movies, view details, and manage a favorites list. The app features a responsive UI for seamless use on any device, providing an easy way to explore and save favorite movies.",
    image: project2,
    tech: ["API", "Reactjs", "TailwindCSS"],
    github: "https://github.com/mini-gear/Cine-Suggest-React-App",
    live: "https://cines-suggest-react-app.netlify.app/",
  },{
    title: "React Memory Game",
    description: 'A fun and interactive memory game built with React. Flip cards to find matching pairs and test your memory! Features randomized layouts, responsive design, and smooth animations',
    image: project3,
    tech: ["JavaScript", "Reactjs", "TailwindCSS"],
    github: "https://github.com/mini-gear/React-Memory-Game-App",
    live: "https://memory-game-ayaan-ul-hasan.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-white pb-24">
      <h2 className="my-20 text-center text-4xl font-bold text-stone-300">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-black rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white text-white py-2 px-4 rounded-full text-sm hover:bg-white hover:text-black transition"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white text-white py-2 px-4 rounded-full text-sm hover:bg-white hover:text-black transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* More Projects Button */}
      <div className="text-center mt-12">
      <a href='https://github.com/mini-gear' target='_blank' rel="noopener noreferrer"  
        className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>More Projects</a>
      </div>
    </div>
  );
};

export default Projects;
