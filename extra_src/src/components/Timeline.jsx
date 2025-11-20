import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const TimelineItem = ({ year, title, company, description, achievements, type = "achievement" }) => {
  const Icon = type === "achievement" ? FaTrophy : FaGraduationCap;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative pl-12 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30 last:hidden" />
      
      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-3 top-4 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-glow"
      >
        <Icon className="text-white text-xs" />
      </motion.div>
      
      {/* Content Card */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="modern-card group"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <FaCalendarAlt className="text-primary" size={14} />
            <span className="text-primary font-bold text-sm uppercase tracking-wide">
              {year}
            </span>
          </div>
          {company && (
            <div className="flex items-center gap-2 text-light/60">
              <FaMapMarkerAlt size={12} />
              <span className="text-sm">{company}</span>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-display font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-light/70 leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-light/80 uppercase tracking-wide mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-light/80"
                >
                  <FaChevronRight size={12} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      year: 'March 2025',
      title: 'Champion of Web3 & AI IDEATHON 2025 (National - Among 450+ teams)',
      company: 'Web3 HACKFEST, ICT-Ho Chi Minh City, VNG',
      description: 'Built Educhain - Next-gen personalized education platform that combines blockchain and AI technology, winning first place among 450+ competing teams.',
      achievements: [
        'Led cross-functional team to develop full-stack solution',
        'Implemented blockchain-based certification system',
        'Integrated AI-powered personalized learning algorithms',
        'Delivered compelling presentation to industry judges'
      ],
      type: 'achievement'
    },
    {
      year: 'August 2025',
      title: 'Top 1 Track 4 & Finalist @ VPBank Technology Hackathon 2025 (National)',
      company: 'VPBank',
      description: 'Developed VPFlow - a serverless web application leveraging AI to optimize and redesign business processes in dynamic swimlane diagrams.',
      achievements: [
        'Architected serverless solution using AWS services',
        'Implemented AI-driven process optimization algorithms',
        'Created intuitive drag-and-drop process designer',
        'Secured first place in Process Innovation track'
      ],
      type: 'achievement'
    },
    {
      year: 'August 2025',
      title: 'Third Prize @ Intel AI Training Program 2025 (National)',
      company: 'Intel Corp',
      description: 'Developed Intel Glasses - AI-driven assistive technology for visually impaired individuals with advanced computer vision capabilities.',
      achievements: [
        'Led team of 3 developers in hardware-software integration',
        'Optimized deep learning models for edge deployment',
        'Implemented real-time object detection and OCR systems',
        'Achieved 95% accuracy in hazard detection scenarios'
      ],
      type: 'achievement'
    },
    {
      year: 'Feb 2025',
      title: 'Paper Accepted at IUKM 2025',
      company: 'JAIST - HCMUS - IUH',
      description: 'First research paper "An Interactive System For Visual Data Retrieval from Multimodal Input" accepted at the Eleventh International Symposium on Integrated Uncertainty in Knowledge Modelling and Decision Making.',
      achievements: [
        'Conducted comprehensive literature review and analysis',
        'Developed novel multimodal retrieval architecture',
        'Achieved 87% accuracy on benchmark datasets',
        'Presented findings at international conference'
      ],
      type: 'achievement'
    },
    {
      year: 'Oct 2024',
      title: 'Finalist of AI Challenge HCMC 2024',
      company: 'Ho Chi Minh City Department of Science and Technology',
      description: 'Advanced to finals with Interactive System for Visual Data Retrieval featuring cutting-edge LLM integration and multimodal search capabilities.',
      achievements: [
        'Designed end-to-end multimodal retrieval pipeline',
        'Integrated state-of-the-art language models for query enhancement',
        'Led technical development and system architecture',
        'Demonstrated system scalability with 10K+ video corpus'
      ],
      type: 'achievement'
    },
    {
      year: 'April 2024',
      title: 'Champion of Line Follower Robot Competition HCMUS (F-RACE) 2024',
      company: 'Fetel - VNUHCM-University of Science',
      description: 'Designed and built champion line-following robot with custom PCB design, advanced sensor fusion, and intelligent maze-solving algorithms.',
      achievements: [
        'Engineered custom robot chassis and PCB design',
        'Implemented advanced PID control algorithms',
        'Developed intelligent maze-solving strategies',
        'Achieved fastest completion time in final race'
      ],
      type: 'achievement'
    },
    {
      year: 'Jan 2024',
      title: 'Champion of Maze Solving Robot Competition HCMUT 2024',
      company: 'CSE - VNUHCM-University of Technology',
      description: 'Built championship-winning maze-solving robot featuring custom hardware design, advanced sensor integration, and optimized pathfinding algorithms.',
      achievements: [
        'Mastered STM32 microcontroller programming',
        'Implemented Floodfill algorithm for optimal pathfinding',
        'Designed custom PCB with sensor array integration',
        'Achieved fastest maze completion time'
      ],
      type: 'achievement'
    }
  ];

  const universityWorks = [
    {
      year: '2023 - Present',
      title: 'Vice President - Media Club M.A.T',
      company: 'VNUHCM-University of Science',
      description: 'Lead media production and creative initiatives while managing club operations and fostering collaborative learning environment.',
      achievements: [
        'Managed 50+ club members and coordinated activities',
        'Organized multimedia workshops and training sessions',
        'Led creative projects and content production',
        'Developed leadership and project management skills'
      ],
      type: 'university'
    },
    {
      year: '2023 - Present',
      title: 'Technical Committee Member - USAC Astronomy Club',
      company: 'VNUHCM-University of Science',
      description: 'Contribute to technical projects involving telescope construction, astrophotography, and astronomical equipment development.',
      achievements: [
        'Built and calibrated custom telescope systems',
        'Developed astrophotography processing pipelines',
        'Organized stargazing events and educational workshops',
        'Collaborated on astronomy research projects'
      ],
      type: 'university'
    },
    {
      year: 'Sep 2024',
      title: 'Media Producer - Bản Lĩnh IT 2024',
      company: 'Faculty of Information Technology - VNUHCM-US',
      description: 'Created engaging multimedia content for major university technology event, showcasing student achievements and innovations.',
      achievements: [
        'Produced high-quality video content for 1000+ attendees',
        'Managed live event photography and documentation',
        'Collaborated with diverse teams across departments',
        'Enhanced creative and technical production skills'
      ],
      type: 'university'
    },
    {
      year: 'April 2024',
      title: 'Creative Director - Academic Challenge Competition 2024',
      company: 'Faculty of Information Technology - VNUHCM-US',
      description: 'Led multimedia production for prestigious academic competition, creating dynamic visual content and event documentation.',
      achievements: [
        'Directed comprehensive visual storytelling campaign',
        'Produced promotional and documentary content',
        'Managed real-time event coverage and live streaming',
        'Mentored junior students in media production'
      ],
      type: 'university'
    }
  ];

  const allItems = [...experiences, ...universityWorks].sort((a, b) => {
    // Convert year strings to comparable format for sorting
    const getYear = (yearStr) => {
      if (yearStr.includes('Present') || yearStr.includes('-')) {
        return 2025; // Current year for ongoing items
      }
      return parseInt(yearStr.split(' ')[1] || yearStr) || 0;
    };
    return getYear(b.year) - getYear(a.year);
  });

  return (
    <section id="timeline" className="section-padding bg-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-width relative">
        {/* Section Header */}
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
            Journey & Achievements
          </motion.h2>
          
          <motion.p
            className="text-lg text-light/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A timeline of significant milestones, competitive achievements, 
            and meaningful contributions to the academic and tech community.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {[
            { label: "National Awards", value: "6+" },
            { label: "Competition Wins", value: "4" },
            { label: "Leadership Roles", value: "3+" },
            { label: "Years Experience", value: "2+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-light/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {allItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <h3 className="text-2xl font-semibold text-light mb-4">
            Ready for New Challenges
          </h3>
          <p className="text-light/70 mb-6 max-w-2xl mx-auto">
            Always seeking opportunities to push boundaries, learn new technologies, 
            and contribute to meaningful projects in AI and software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;