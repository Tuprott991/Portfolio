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
      title: "VPFlow - AI-Powered Process Redesign",
      description: "A serverless web application that leverages AI to optimize and redesign business processes in dynamic swimlane diagrams.",
      technologies: ["React", "FastAPI", "AWS S3, DynamoDB, Neptune", "AWS SageMaker, Bedrock, Lambda"],
      githubUrl: "https://github.com/Tuprott991/VPFlow",
      image: "https://github.com/Tuprott991/VPFlow/blob/main/document/AWS%20Cloud%20Architechture.png?raw=true"
    },
    {
      title: "Educhain - Next-gen Personalized Learning Platform",
      description: "A Full-stack web application that combines blockchain and AI technology for efficient and personalized education, that have functions like lightRAG-chatbot, creating courses, taking quizzes, and more.",
      technologies: ["FastAPI", "React", "Langchain", "Solidity", "Azure", "PostgreSQL"],
      githubUrl: "https://github.com/Tuprott991/Educhain-AI",
      image: "https://github.com/Tuprott991/Educhain-AI/blob/main/frontend/public/CourseDetails/courseimage.png?raw=true"
    },
    {
      title: "Eventslens - Multi-label photo album event recognition",
      description: "Developing and training a transformer-based model for photo album event recognition. Achieved mAP >85% for 4 Testset",
      technologies: ["Pytorch", "Transformer", "Scikit-learn", "Huggingface"],
      githubUrl: "https://github.com/Tuprott991/EventLens-Computer-Vision-Final-Project",
      image: "https://github.com/Tuprott991/EventLens-Computer-Vision-Final-Project/blob/main/architecture.png?raw=true"
    },
    {
      title: "Multimodal Video Retrieval System",
      description: "An innovative system that retrieves videos event based on different modalities such as text, image, and audio",
      technologies: ["Flask", "React", "CLIP", "FAISS", "Underthesea", "OpenAI"],
      githubUrl: "https://github.com/Tuprott991/AIthena-Multimodal-Video-Retrieval-System",
      image: "https://github.com/Tuprott991/AIthena-Multimodal-Video-Retrieval-System/blob/main/images/UI.drawio.png?raw=true"
    },
    {
      title: "Bone Disease Visual Question & Answering",
      description: "Developing and training a multimodal transformer model for Bone Disease Visual Question Answering (VQA). Achieved Precision of >90% for validation set",
      technologies: ["Pytorch", "Transformer", "Scikit-learn", "Huggingface"],
      githubUrl: "https://github.com/Tuprott991/BoneDiseaseVQA-2",
      image: "https://tuktu-portfolio.netlify.app/arch.png"
    },
    {
      title: "Vision Language Object Tracking",
      description: "A system that tracks objects in videos based on the text description",
      technologies: ["YOLO", "CLIP", "OpenCV", "DeepSORT"],
      githubUrl: "https://github.com/Tuprott991/Object-tracking-Natural-Language",
      image: "https://github.com/Tuprott991/Object-tracking-Natural-Language/blob/main/images/image.png?raw=true"
    },
    {
      title: "IntelBin - AIot Garbage Classification Bin",
      description: "A smart garbage bin that uses AI to classify waste into 4 categories: Metal, Plastic, Organic, and Hazardous",
      technologies: ["YOLO", "Node-RED", "Wokwi", "ESP32", "Arduino"],
      githubUrl: "https://github.com/Tuprott991/IntelBin-AIoT-Garbage-Classification",
      image: "https://github.com/Tuprott991/IntelBin-AIoT-Garbage-Classification/raw/main/images/intelbin.png"
    }
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