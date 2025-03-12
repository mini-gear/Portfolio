import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4it4b2p', 'template_d2qo20w', form.current, 'JKQvb3_WpZ7cY0Dci')
      .then(() => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
      }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
      });

    e.target.reset();
  };

  return (
    <motion.footer
      ref={ref}
      className="bg-black text-stone-300 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-12">
        <div className="mb-8 lg:mb-0 text-center lg:text-left lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p>Email: <a href="mailto:ayaanullhasan1499@gmail.com" className="underline">ayaanullhasan1499@gmail.com</a></p>
          <p>Phone: <a href="tel:+14376650286" className="underline">+1 437 665 0286</a></p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <motion.a
              href="https://www.linkedin.com/in/ayaan-ul-hasan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ayaan_ulhasan/#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/mini-gear"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="mailto:ayaanullhasan1499@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target='_blank'
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="bg-black text-stone-300 p-6 rounded-xl shadow-lg max-w-lg lg:w-1/2">
          <input type="hidden" name="contact_number" value="697483" />
          <label className="block text-lg mb-2">Name</label>
          <input type="text" name="user_name" className="w-full p-2 mb-4 rounded bg-stone-800 text-stone-300" required />
          <label className="block text-lg mb-2">Email</label>
          <input type="email" name="user_email" className="w-full p-2 mb-4 rounded bg-stone-800 text-stone-300" required />
          <label className="block text-lg mb-2">Message</label>
          <textarea name="message" rows="4" className="w-full p-2 mb-4 rounded bg-stone-800 text-stone-300" required></textarea>
          <input type="submit" value="Send" className="bg-stone-700 hover:bg-stone-600 text-stone-300 font-bold py-2 px-4 rounded cursor-pointer" />
        </form>
      </div>
      <div className="mt-6 text-center">
        <p>Made with ReactJS, Tailwind CSS, and <span role="img" aria-label="love">❤️</span></p>
        <p>© {new Date().getFullYear()} Ayaan Ul Hasan. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;