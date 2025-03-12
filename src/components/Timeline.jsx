import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, description, achievements }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
  >
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full glow-effect" />
    <div className="glass-effect p-6 rounded-lg shadow-md hover:shadow-primary/20 transition-all duration-300">
      <span className="text-sm text-primary font-semibold">{year}</span>
      <h3 className="text-xl font-bold mt-2 text-light">{title}</h3>
      <p className="text-light/70 font-medium">{company}</p>
      <p className="mt-2 text-light/80">{description}</p>
      {achievements && (
        <ul className="mt-2 list-disc pl-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-light/80 mt-1">{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const Timeline = () => {
  const experiences = [
    {
      year: 'Jun 2024',
      title: 'Full-Stack Developer',
      company: 'Blue Moonlight Travel & Environment CO., LTD',
      description: 'Full-Stack Developer specializing in designing, developing, and maintaining scalable web systems with Next.js, Reactjs, TypeScript, Tailwind CSS, MongoDB, and Vercel.',
    },
    {
      year: 'Oct 2024',
      title: '1st Place - HCMUS AI INNOVATION 2024',
      company: 'Award issued by The Faculty of Information Technology, VNUHCM-University of Science, Bosch Global Software Technologies',
      description: 'AI-Powered Smart Glasses Project',
      achievements: [
        'Led the development of AI-Powered Smart Glasses for hazard detection and information accessibility for the visually impaired',
        'Responsible for team leadership, product design, and technology research',
      ]
    },
     {
      year: 'Dec 2024',
      title: '7th Place in the Final Round of the SoICT Hackathon 2024',
      company: 'SoICT - HUST',
      description: 'Real-time Monitoring Surveillance System Using Deep Learning Models for Detecting Child Abuse and Sending Alerts and Sending Alerts to Guardians',
      achievements: [
        'Led the team to develop the product',
        'Researched the technology used',
        'Presented the project'
      ]
    }
  ];

  return (
    <section id="timeline" className="section-padding bg-darker">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Experience and Achievements
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;