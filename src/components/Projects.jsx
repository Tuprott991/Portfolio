import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="glass-effect rounded-lg overflow-hidden shadow-md hover:shadow-primary/30 transition-all duration-300 group glow-effect"
  >
    <div className="relative overflow-hidden">
      <img
        src={image || "https://via.placeholder.com/400x200"}
        alt={title}
        className="w-full h-48 object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-60"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-light">{title}</h3>
      <p className="text-light/70 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-dark-accent text-light/80 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
        >
          <FaGithub /> GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Booking Tour",
      description: "A comprehensive tour booking platform for Blue Moon Travel",
      technologies: ["Next.js", "React", "TypeScript", "MongoDB"],
      githubUrl: "https://github.com/ariesanhthu/BMT_bookingtour",
      liveUrl: "https://www.bluemoontravel.com.vn",
      image: "https://raw.githubusercontent.com/ariesanhthu/ariesanhthu.github.io/refs/heads/main/Screenshot%20(1435).png"
    },
    {
      title: "AI-Powered Virtual Try-On Clothing Store",
      description: "An innovative e-commerce platform with virtual try-on capabilities",
      technologies: ["Next.js", "React", "TypeScript", "Sanity"],
      githubUrl: "https://github.com/ariesanhthu/vton-webstore",
      liveUrl: "https://vton-webstore.vercel.app",
      image: "https://raw.githubusercontent.com/ariesanhthu/ariesanhthu.github.io/refs/heads/main/Screenshot%20(1436).png"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-dark">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;