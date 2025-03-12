import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer for AI Training Data",
    company: "Outlier AI (CA, Remote)",
    date: "September 2024 - Present",
    responsibilities: [
      "Optimize AI Models: Evaluate and refine AI-generated decision trees, enhancing performance",
      "Innovate Solutions: Develop efficient code solutions, accelerating AI model training",
      "Ensure Reliability: Design robust test cases, improving code reliability by 25%.",
      "Enhance Collaboration: Collaborate on projects in code evaluation and mobile app development, boosting AI response accuracy.",
    ],
  },
  {
    title: "Full Stack Trainer",
    company: "Orange Antelopes, Bhopal, India",
    date: "May 2023 - December 2023",
    responsibilities: [
      "Teach Programming: Instructed diverse age groups in Python.",
      "Web Technologies: Delivered courses on HTML, CSS, and JavaScript.",
      "Database Skills: Simplified SQL concepts for effective database management.",
      "Django Framework: Guided students in building robust web applications.",
      "Adapt Teaching: Tailored methods to engage various age groups.",
    ],
  },
  {
    title: "Machine Learning and AI Analyst (Intern)",
    company: "CCC Solution (UK, Remote)",
    date: "August 2023 - December 2023",
    responsibilities: [
      "Quantitative Analysis: Studied quantitative mathematics and applied it to develop algorithms, increasing prediction accuracy.",
      "Logistic Regression: Utilized logistic regression techniques, enhancing model efficiency.",
      "Model Enhancement: Improved AI and machine learning models, boosting decision-making speed.",
      "Data Analysis: Analyzed complex datasets to identify trends, optimizing model performance.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px" });

  return (
    <div className="container mx-auto pb-4 lg:mb-36 px-4">
      <motion.h1
        className="text-4xl lg:text-6xl font-bold text-center mb-10 text-stone-300"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Work Experience
      </motion.h1>
      <div className="relative flex flex-col items-center" ref={ref}>
        <div className="absolute w-1 bg-stone-300 h-full left-1/2 transform -translate-x-1/2 z-0"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`w-full lg:w-1/2 p-4 ${
              index % 2 === 0 ? "self-start" : "self-end"
            } z-10`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.3 }}
          >
            <div className="flex flex-col items-center lg:items-start mt-10 border border-stone-900 rounded-3xl p-6 bg-black shadow-lg">
              <motion.h2
                className="pb-2 text-2xl lg:text-3xl text-stone-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {exp.title}
              </motion.h2>
              <motion.span
                className="text-lg text-stone-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {exp.company}
              </motion.span>
              <motion.p
                className="my-2 text-md text-stone-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {exp.date}
              </motion.p>
              <ul className="list-disc pl-5 text-stone-300">
                {exp.responsibilities.map((task, i) => (
                  <motion.li
                    key={i}
                    className="text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  >
                    {task}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
