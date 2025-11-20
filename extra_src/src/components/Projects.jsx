import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, image, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`modern-card group cursor-pointer overflow-hidden ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="absolute top-4 left-4 z-20 bg-gradient-to-r from-accent to-secondary px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1"
        >
          <FaStar size={10} />
          Featured
        </motion.div>
      )}

      <div className="relative overflow-hidden h-48 md:h-56">
        <motion.img
          src={image || "https://via.placeholder.com/400x200?text=Project+Image"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-center justify-center"
        >
          <div className="flex gap-3">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={20} />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-light mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
          <p className="text-light/70 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-center text-sm py-2 inline-flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={14} />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-center text-sm py-2 inline-flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'ChatGPT Clone using Openai API',
      description: 'A full-stack web application replicating ChatGPT functionality using OpenAI API, featuring real-time conversations, message history, and responsive design.',
      technologies: ['React', 'Node.js', 'OpenAI API', 'Express', 'CSS'],
      githubUrl: 'https://github.com/tuprott991/chatgpt-clone-openai-api',
      liveUrl: 'https://chatgpt-clone-openai-api-navy.vercel.app/',
      image: 'https://raw.githubusercontent.com/tuprott991/chatgpt-clone-openai-api/main/public/screenshot.png',
      category: 'web',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and contemporary design.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      githubUrl: 'https://github.com/tuprott991/portfolio',
      liveUrl: 'https://your-portfolio-demo.com',
      image: '/arch.png',
      category: 'web'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning dashboard for data visualization and predictive analytics with real-time insights and interactive charts.',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI'],
      githubUrl: 'https://github.com/tuprott991/ai-analytics-dashboard',
      liveUrl: 'https://ai-dashboard-demo.com',
      image: 'https://via.placeholder.com/600x400?text=AI+Dashboard',
      category: 'ai'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      githubUrl: 'https://github.com/tuprott991/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      image: 'https://via.placeholder.com/600x400?text=E-commerce',
      category: 'web'
    },
    {
      title: 'Computer Vision Object Detection',
      description: 'Real-time object detection system using YOLO and OpenCV for identifying and tracking objects in video streams.',
      technologies: ['Python', 'OpenCV', 'YOLO', 'TensorFlow', 'NumPy'],
      githubUrl: 'https://github.com/tuprott991/object-detection',
      image: 'https://via.placeholder.com/600x400?text=Object+Detection',
      category: 'ai'
    },
    {
      title: 'Social Media App',
      description: 'Full-featured social media application with real-time messaging, post sharing, and user interactions.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
      githubUrl: 'https://github.com/tuprott991/social-media-app',
      liveUrl: 'https://social-app-demo.com',
      image: 'https://via.placeholder.com/600x400?text=Social+Media',
      category: 'mobile'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          
          <motion.p
            className="text-lg text-light/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my technical skills and creative solutions. 
            From web applications to AI projects, each represents a unique challenge solved.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white/5 text-light/70 hover:bg-white/10 hover:text-light'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${project.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaCode className="text-primary" />
            <h3 className="text-2xl font-semibold text-light">More Projects Coming Soon</h3>
          </div>
          <p className="text-light/70 mb-6 max-w-2xl mx-auto">
            I'm constantly working on new projects and exploring cutting-edge technologies. 
            Follow my GitHub for the latest updates and contributions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/tuprott991"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub />
              <span>View All Projects</span>
              <FaArrowRight size={14} />
            </a>
            <a
              href="mailto:nvtu2305@gmail.com"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>Let's Collaborate</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;