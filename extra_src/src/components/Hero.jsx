import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-width relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p 
                variants={itemVariants}
                className="text-primary font-display font-medium tracking-wide uppercase text-sm"
              >
                Welcome to my digital world
              </motion.p>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text block lg:inline">
                  Nguyễn Văn Tú
                </span>
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants}
                className="text-xl md:text-2xl lg:text-3xl text-light/80 font-medium"
              >
                <span className="text-accent">AI Engineer</span> @ Prudential | 
                <span className="text-secondary"> HCMUS Student</span>
              </motion.h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-light/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              A passionate Information Technology student at{' '}
              <a 
                href="https://hcmus.edu.vn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors duration-300 underline decoration-primary/30 hover:decoration-accent/50"
              >
                University of Science - VNUHCM
              </a>
              . I love to research & build LLMs, Computer Vision projects, and innovative AI solutions.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 py-6"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-light/60 uppercase tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-light/60 uppercase tracking-wide">Awards</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">2+</div>
                <div className="text-sm text-light/60 uppercase tracking-wide">Years Exp</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="btn-primary group"
              >
                <span>View Projects</span>
                <FaExternalLinkAlt className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="/papers/NguyenVanTu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <span>Download CV</span>
                <FaDownload className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href="https://github.com/tuprott991"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-light/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nguyen-van-tu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-light/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </div>
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Animated background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary via-primary to-accent rounded-full blur-xl opacity-30 animate-spin-slow"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-gradient-shift opacity-75"></div>
                <div className="absolute inset-1 bg-dark rounded-full"></div>
                <img
                  src="https://avatars.githubusercontent.com/u/165151839?v=4"
                  alt="Nguyễn Văn Tú"
                  className="absolute inset-2 rounded-full w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover"
                />
                
                {/* Floating badges */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -left-4 top-1/4 bg-dark-card/90 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-2 shadow-glow"
                >
                  <div className="text-sm font-semibold text-primary">AI Engineer</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -right-4 top-3/4 bg-dark-card/90 backdrop-blur-sm border border-accent/30 rounded-xl px-4 py-2 shadow-glow"
                >
                  <div className="text-sm font-semibold text-accent">HCMUS</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-light/60 uppercase tracking-wider">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;