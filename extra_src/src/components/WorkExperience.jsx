import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

const ExperienceItem = ({ 
  company, 
  logo, 
  position, 
  employmentType, 
  duration, 
  location, 
  description, 
  skills 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="modern-card group mb-8"
  >
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <motion.div 
          className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center justify-center border border-primary/20"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {logo ? (
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-12 h-12 object-contain rounded-lg" 
            />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg text-white text-lg font-bold flex items-center justify-center">
              {company.charAt(0)}
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-light mb-2 group-hover:text-primary transition-colors duration-300">
            {position}
          </h3>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <div className="text-light/80 font-medium">
              <span className="text-primary font-semibold">{company}</span>
              {employmentType && (
                <>
                  <span className="mx-2 text-light/50">·</span>
                  <span className="text-accent">{employmentType}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 text-sm text-light/60 mb-4">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary" size={12} />
              <span>{duration}</span>
            </div>
            {location && (
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" size={12} />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-light/70 leading-relaxed">
          {description}
        </p>

        {skills && skills.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-light/80 uppercase tracking-wide">
              Key Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Prudential Vietnam Assurance Private Ltd.',
      logo: 'https://companieslogo.com/img/orig/PUK-8e5412a2.png?t=1729229413',
      position: 'AI Engineer Intern',
      employmentType: 'Full-time',
      duration: 'Jul 2025 - Present',
      location: 'Ho Chi Minh City, Vietnam',
      description: 'Working on an Agentic AI project, focusing on Reasoning LLMs, RAG (Retrieval-Augmented Generation), Document analysis, Knowledge Bases/Graphs, and Vector Databases to enhance enterprise AI capabilities.',
      skills: ['Large Language Models', 'RAG', 'Vector Databases', 'Knowledge Graphs', 'Document Analysis', 'Agentic AI']
    },
    {
      company: 'Vnemex',
      logo: 'https://wli-eco.com/wp-content/uploads/2023/12/vnemex.jpg',
      position: 'AI/ML Intern',
      employmentType: 'Full-time',
      duration: 'Apr 2025 - Jun 2025 · 3 mos',
      location: 'Hybrid',
      description: 'Developed lightweight deep learning models for cell segmentation & classification and biometric recognition systems. Focused on face detection, anti-spoofing, face recognition, and optimized models for real-time inference on edge devices.',
      skills: ['PyTorch', 'Research Skills', 'Computer Vision', 'Deep Learning', 'Edge Computing']
    }
  ];

  return (
    <section id="work-experience" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-darker to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

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
            Work Experience
          </motion.h2>
          
          <motion.p
            className="text-lg text-light/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional journey in AI engineering and machine learning, 
            working with cutting-edge technologies and innovative solutions.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaBriefcase className="text-primary" />
            <h3 className="text-2xl font-semibold text-light">Open to Opportunities</h3>
          </div>
          <p className="text-light/70 mb-6 max-w-2xl mx-auto">
            Currently seeking full-time AI Engineer positions where I can contribute to 
            innovative projects and continue growing in machine learning and AI development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:nvtu2305@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Let's Talk</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nguyen-van-tu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt size={14} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;