import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaAward } from 'react-icons/fa';

const PublicationItem = ({ title, authors, paperPdf, paperLink, conference, year, isHighlighted = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`modern-card group overflow-hidden ${
      isHighlighted ? 'border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5' : ''
    }`}
  >
    {/* Highlighted Badge */}
    {isHighlighted && (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1"
      >
        <FaAward size={10} />
        Latest
      </motion.div>
    )}
    
    {/* Content */}
    <div className="space-y-4">
      <div>
        <h3 className="text-xl md:text-2xl font-display font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {/* Authors */}
        <div className="flex items-start gap-2 mb-3">
          <FaUsers className="text-primary mt-1 flex-shrink-0" size={14} />
          <p className="text-light/70 leading-relaxed">
            {authors.map((author, index) => (
              <span key={index} className={author === "Tu Van Nguyen" ? "text-primary font-semibold" : ""}>
                {author}
                {index < authors.length - 1 && ', '}
              </span>
            ))}
          </p>
        </div>
        
        {/* Conference and Year */}
        <div className="flex items-center gap-2 mb-4">
          <FaCalendarAlt className="text-accent" size={14} />
          <p className="text-light/80 italic font-medium">
            {conference}, {year}
          </p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
        {paperPdf && (
          <motion.a
            href={typeof paperPdf === 'string' && paperPdf.startsWith('http') ? paperPdf : `/papers/${paperPdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload size={14} />
            <span>Read Paper</span>
          </motion.a>
        )}
        {paperLink && (
          <motion.a
            href={paperLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt size={12} />
            <span>Paper Link</span>
          </motion.a>
        )}
      </div>
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
      paperLink: "https://link.springer.com/chapter/10.1007/978-981-96-4606-7_29",
      isHighlighted: true
    },
    // Future publications can be added here
  ];

  const stats = [
    { label: "Publications", value: "1+" },
    { label: "Citations", value: "5+" },
    { label: "Research Areas", value: "3" },
  ];

  return (
    <section id="publications" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-darker to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

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
            Research & Publications
          </motion.h2>
          
          <motion.p
            className="text-lg text-light/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Showcasing cutting-edge research in artificial intelligence, computer vision, 
            and multimodal systems with published works in international conferences.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-light/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <PublicationItem key={index} {...pub} />
          ))}
          
          {publications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaExternalLinkAlt className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-light mb-2">More Publications Coming Soon</h3>
              <p className="text-light/60">
                Currently working on several research papers in AI and computer vision.
              </p>
            </motion.div>
          )}
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
            Interested in Collaboration?
          </h3>
          <p className="text-light/70 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing research opportunities, collaborations, 
            and innovative projects in AI and computer vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:nvtu2305@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Contact for Collaboration</span>
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt size={14} />
              <span>Google Scholar</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publication;