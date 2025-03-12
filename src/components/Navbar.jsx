import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px 0px' });

  return (
    <motion.nav
      ref={ref}
      className="flex items-center justify-between py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="text-3xl">
          <img src={logo} className="mx-2" width={50} alt="Logo" />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/ayaan-ul-hasan/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/ayaan_ulhasan/#"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://github.com/mini-gear"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;