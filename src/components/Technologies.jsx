import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Angular", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Three.js", level: 85 },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "Spring-Boot", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "Linux/Unix", level: 75 },
    ],
  },
];

const Technologies = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-white pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">
              {skillCategory.category}
            </h2>
            {skillCategory.technologies.map((tech, i) => {
              const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
              return (
                <div key={i} className="mb-3" ref={ref}>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-stone-300 font-medium">{tech.name}</span>
                    <span className="text-lg text-stone-400 font-medium">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${tech.level}%` : 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gray-300 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;