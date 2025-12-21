import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const PublicationItem = ({ title, authors, paperPdf, paperLink, conference, year }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="glass-effect p-6 rounded-lg shadow-md hover:shadow-primary/20 transition-all duration-300 mb-6"
  >
    <h3 className="text-xl font-bold text-light mb-2">{title}</h3>
    <p className="text-light/70 mb-3">
      {authors.map((author, index) => (
        <span key={index}>
          {author}
          {index < authors.length - 1 && ', '}
        </span>
      ))}
    </p>
    <p className="text-light/80 mb-4 italic">{conference}, {year}</p>
    <div className="flex gap-4">
      {paperPdf && (
        <a
          href={`/papers/${paperPdf}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-md flex items-center gap-2 transition-colors"
        >
          <FaDownload /> Read Paper
        </a>
      )}
      {paperLink && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-light/30 hover:border-primary/50 text-light hover:text-primary rounded-md flex items-center gap-2 transition-colors"
        >
          <FaExternalLinkAlt /> Paper Link
        </a>
      )}
    </div>
  </motion.div>
);

const Publication = () => {
  const publications = [
    {
      title: "An Interactive System For Visual Data Retrieval From Multimodal Input",
      authors: ["Tu Van Nguyen", "Nghia Trung Duong", "Nhan Thanh Pham", "Thanh Xuan Luong", "Dang Duy Bui"],
      conference: "The Eleventh International Symposium on Integrated Uncertainty in Knowledge Modelling and Decision Making (IUKM)",
      year: "2025",
      paperPdf: "https://link.springer.com/chapter/10.1007/978-981-96-4606-7_29",
      paperLink: "https://link.springer.com/chapter/10.1007/978-981-96-4606-7_29"
    },
    {
      title: "AIthena-Vision: Adaptive Temporal Multimodal Event Retrieval with LLM-generated Multiperspective Fusion",
      authors: ["Tu Van Nguyen", "Nghia Trung Duong", "Nhan Thanh Pham", "Huu Truong Le Nguyen", "Quoc Khoi Le"],
      conference: "The 14th International Conference Symposium on Information and Communication Technology (SoICT 2025)", 
      year: "2025",
      paperPdf: "",
      paperLink: "https://soict.hcmus.edu.vn/2025/proceedings/"
    },
    // Add more publications as needed
  ];

  return (
    <section id="publications" className="section-padding bg-darker">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Publications
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {publications.map((pub, index) => (
            <PublicationItem key={index} {...pub} />
          ))}
          
          {publications.length === 0 && (
            <p className="text-center text-light/60">Publications coming soon...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publication;