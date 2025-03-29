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
      year: 'March 2025',
      title: 'Champion of Web3 & AI IDEATHON 2025 (Over 450+ teams)',
      company: 'Web3 HACKFEST, ICT-Ho Chi Minh City, VNG',
      description: 'Build Educhain - Next-gen personalized education platform that combine blockchain and AI technology',
      achievements: [
        'Led the team to develop the product',
        'Researched the technology and used',
        'Designed the platform and the system',
        'Present the idea and the product to the judges'
      ]
    },
    {
      year: 'Feb 2025',
      title: 'Paper Accepted at IUKM 2025',
      company: 'JAIST - HCMUS - IUH',
      description: 'Our first paper "An Interactive System For Visual Data Retrieval from multimodal input" has been accepted at the The Eleventh International Symposium on Integrated Uncertainty in Knowledge Modelling and Decision Making (IUKM 2025)',
      achievements: [
        'Research related works and technology',
        'Develop the system and the model',
        'Experiment and evaluate the system',
        'Write the paper and submit to the conference',
        'Present the paper at the conference'
      ]
    },
    {
      year: 'Oct 2024',
      title: 'Finalist of AI Challenge HCMC 2024',
      company: 'Ho Chi Minh City Department of Science and Technology',
      description: 'Interactive System For Visual Data Retrieval with LLM integration',
      achievements: [
        'Led the team to develop the system that can retrieve event from diverse video data with multi-modal input',
        'Researched and implemented LLM model for query enhancement and Visual Question Answering', 
        'Responsible for team leadership, product design, and technology research',
      ]
    },
    {
      year: 'April 2024',
      title: 'Champion of Line Follower Robot Competition HCMUS (F-RACE) 2024',
      company: 'Fetel - VNUHCM-University of Science',
      description: 'Build a Line Follower Robot with custom frame, PCB and sensors. Use PID algorithm to control the robot, "smart strategy" for maze solving.',
      achievements: [
        'Led the team to develop the product',
        'Researched the algorith and strategy used',
        'Designed the robot frame and PCB',
        'Run and win the competition'
      ]
    },
    {
      year: 'Jan 2024',
      title: 'Champion of Maze Solving Robot Competition HCMUT 2024',
      company: 'CSE - VNUHCM-University of Technology',
      description: 'Build a Maze Solving Robot with custom frame, PCB and sensors. Use PID algorithm to control the robot, Floodfill algorithm for maze solving.',
      achievements: [
        'Researched the algorith and strategy',
        'Designed the robot frame and PCB',
        'Learn STM32 programming and PID algorithm',
        'Learn Floodfill algorithm and implement it'
      ]
    }
  ];

  const universityWorks = [
    
    {
      year: '2023 - NOW',
      title: 'Management Committee Member - Media Club M.A.T',
      company: 'VNUHCM-University of Science',
      description: 'Working as a manager of the Media Club M.A.T',
      achievements: [
        'Manage the club activities',
        'Organize events and activities',
        'Work with people in the club',
        'Learn team management and leadership',
      ]
    },
    {
      year: '2023 - NOW',
      title: 'Technical Committee Member - USAC Astronomy Club',
      company: 'VNUHCM-University of Science',
      description: 'Working as a technical committee member of the USAC Astronomy Club',
      achievements: [
        'Learn how to build a telescope and other technology & astronomy equipment',
        'Work with academic team to organize events and activities',
        'Capture and process images of the sky',
        '...'
      ]
    },
    {
      year: 'Sep 2024',
      title: 'Bản Lĩnh IT - 2024',
      company: 'Falcuty of Information Technology - VNUHCM-University of Science',
      description: 'Working as a part-time photographer and video editor to create interesting media products.',
      achievements: [
        'Create interesting media products',
        'Work with people in the university',
        'Learn a lot of new things',
      ]
    },
    {
      year: 'April 2024',
      title: 'Cuộc Thi Học Thuật Thách Thức 2024',
      company: 'Falcuty of Information Technology - VNUHCM-University of Science',
      description: 'Working as a very dynamic and creative photographer and video editor to create interesting media products.',
      achievements: [
        'Create interesting media products',
        'Work with people in the university',
        'Learn a lot of new things'
      ]
    },
    {
      year: 'Sep 2023',
      title: 'Bản Lĩnh IT - 2023',
      company: 'Falcuty of Information Technology - VNUHCM-University of Science',
      description: 'Working as a part-time photographer and video editor to create interesting media products.',
      achievements: [
        'Create interesting media products',
        'Work with people in the university',
        'Learn a lot of new things',
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
          Achievements & University Activities
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-light">Achievements</h3>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-light">University Activities</h3>
            {universityWorks.map((work, index) => (
              <TimelineItem key={index} {...work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;