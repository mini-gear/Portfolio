import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px 0px' });

  return (
    <div className="container mx-auto my-12 px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-stone-300 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Education
      </motion.h2>
      <div className="space-y-6 lg:flex lg:gap-6 items-center justify-center" ref={ref}>
        <motion.div
          className="flex flex-col items-center lg:items-start mt-10 border border-stone-900 rounded-3xl p-6 bg-black shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Software Development & Network Engineering</h3>
          <p className="text-lg mb-1">Sheridan College, Brampton, ON</p>
          <p className="text-md mb-1">Honours, 3.7 CGPA</p>
          <p className="text-md mb-3">January 2024 - December 2027</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Focused on software development, network engineering, and cloud technologies.</li>
            <li>Gained hands-on experience with programming languages and network protocols.</li>
          </ul>
        </motion.div>
        <motion.div
          className="flex flex-col items-center lg:items-start mt-10 border border-stone-900 rounded-3xl p-6 bg-black shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-2">IB Diploma</h3>
          <p className="text-lg mb-1">Eastern Public School, Bhopal, India</p>
          <p className="text-md mb-3">Completed in 2023</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed strong analytical and critical thinking skills.</li>
            <li>Engaged in a diverse curriculum with a focus on international education and lifelong learning.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;