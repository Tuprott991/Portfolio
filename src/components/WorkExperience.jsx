import React from 'react';
import { motion } from 'framer-motion';

// Utility function to calculate duration from start date to present (LinkedIn style)
const calculateDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();
  
  // LinkedIn counts both start and current months, so we add 1
  let totalMonths = years * 12 + months + 1;
  
  if (totalMonths < 1) {
    return "Less than 1 mo";
  } else if (totalMonths < 12) {
    return `${totalMonths} mo${totalMonths > 1 ? 's' : ''}`;
  } else {
    const yrs = Math.floor(totalMonths / 12);
    const mos = totalMonths % 12;
    if (mos === 0) {
      return `${yrs} yr${yrs > 1 ? 's' : ''}`;
    }
    return `${yrs} yr${yrs > 1 ? 's' : ''} ${mos} mo${mos > 1 ? 's' : ''}`;
  }
};

// Function to format duration string with auto-calculation for "Present"
const formatDuration = (duration) => {
  if (!duration.includes('Present')) {
    return duration;
  }
  
  // Extract start date from duration string like "Jul 2025 - Present · 2 mos"
  const parts = duration.split(' - ');
  if (parts.length < 2) return duration;
  
  const startDateStr = parts[0].trim();
  
  // Parse the start date (assuming format like "Jul 2025" or "Apr 2025")
  const monthMap = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  
  const [monthStr, yearStr] = startDateStr.split(' ');
  const month = monthMap[monthStr];
  const year = parseInt(yearStr);
  
  if (month !== undefined && year) {
    const startDate = new Date(year, month, 1);
    const calculatedDuration = calculateDuration(startDate);
    return `${startDateStr} - Present · ${calculatedDuration}`;
  }
  
  return duration;
};

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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="glass-effect p-6 rounded-lg shadow-md hover:shadow-primary/20 transition-all duration-300 mb-6"
  >
    <div className="flex items-start gap-4">
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
          {logo ? (
            <img src={logo} alt={`${company} logo`} className="w-12 h-12 object-contain" />
          ) : (
            <div className="w-12 h-12 bg-primary rounded text-white text-sm font-bold flex items-center justify-center">
              {company.charAt(0)}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Position Title */}
        <h3 className="text-xl font-bold text-light mb-1">{position}</h3>
        
        {/* Company and Employment Type */}
        <div className="text-light/80 font-medium mb-2">
          <span className="text-primary">{company}</span>
          {employmentType && (
            <>
              <span className="mx-2">·</span>
              <span>{employmentType}</span>
            </>
          )}
        </div>

        {/* Duration and Location */}
        <div className="text-sm text-light/60 mb-3">
          <span>{formatDuration(duration)}</span>
          {location && (
            <>
              <br />
              <span>{location}</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-light/80 mb-3 leading-relaxed">{description}</p>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
              >
                {skill}
              </span>
            ))}
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
      description: 'Work on an Agentic AI project, focusing on Reasoning LLMs, RAG, Document analysis, Knowledge Bases/Graphs, and Vector Databases',
      skills: ['Large Language Models', 'RAG', 'Vector Databases', 'Knowledge Graphs', 'Document Analysis', 'Agentic AI']
    },
    {
      company: 'Vnemex',
      logo: 'https://wli-eco.com/wp-content/uploads/2023/12/vnemex.jpg',
      position: 'AI/ML Intern',
      employmentType: 'Full-time',
      duration: 'Apr 2025 - Jun 2025 · 3 mos',
      location: 'Hybrid',
      description: 'Work on a cell segmentation & classification project. Researched & developed lightweight deep learning models for detection, segmentation, and classification. Also participated in a Biometric Recognition project, focusing on face detection, anti-spoofing, face recognition, and fast embedding comparison. Optimized models for real-time inference on edge devices.',
      skills: ['PyTorch', 'Research Skills', 'Computer Vision', 'Deep Learning', 'Edge Computing']
    }
  ];

  return (
    <section id="work-experience" className="section-padding bg-dark">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Work Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
