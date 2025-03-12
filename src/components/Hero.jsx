import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../assets/profile1.png';
import resume from '../assets/resume.pdf'

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        
        {/* Profile Image Section with Animation */}
        <motion.div
          className="w-full lg:w-2/5"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex justify-center lg:p-8">
            <img src={profile} className="border border-stone-900 rounded-3xl" alt="Ayaan Ul Hasan" />
          </div>
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Ayaan Ul Hasan
            </motion.h2>
            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Typewriter
                words={['Full-Stack Developer', 'UI/UX Designer', 'Software Engineer', "Technical Trainer"]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.span>
            <motion.p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Passionate full-stack developer and problem solver with expertise in Python, Java, and modern web technologies. Skilled in crafting innovative solutions and delivering comprehensive training, I thrive in fast-paced environments. Let's connect and create exceptional digital experiences together.
            </motion.p>

            <motion.a
              href={resume}
              target='_blank'
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;