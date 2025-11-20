import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaHeart, FaRocket, FaCode, FaDownload } from 'react-icons/fa';

const SocialLink = ({ href, icon: Icon, label, color }) => (
  <motion.a
    href={href}
    target={href.startsWith('mailto:') ? undefined : "_blank"}
    rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
    className={`group relative w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-light/70 hover:text-white hover:border-${color}/50 hover:bg-${color}/10 transition-all duration-300 hover:scale-110 hover:shadow-glow`}
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={20} />
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-dark/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {label}
    </div>
  </motion.a>
);

const QuickLink = ({ href, children, external = false }) => (
  <motion.a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="text-light/60 hover:text-primary transition-colors duration-300 text-sm"
    whileHover={{ x: 5 }}
  >
    {children}
  </motion.a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer id="contact" className="bg-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/3 rounded-full blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-width relative py-16"
      >
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-8">
              <motion.h2 
                className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4"
                variants={itemVariants}
              >
                Let's Connect & Create
              </motion.h2>
              <motion.p 
                className="text-lg text-light/70 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply connect with fellow developers and researchers. Let's build something amazing together!
              </motion.p>
            </div>

            {/* Call to Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="mailto:nvtu2305@gmail.com"
                className="btn-primary inline-flex items-center gap-3"
              >
                <FaEnvelope />
                <span>Get In Touch</span>
              </a>
              <a
                href="/papers/NguyenVanTu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-3"
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-light mb-4">Follow My Journey</h3>
              <div className="flex gap-4">
                <SocialLink
                  href="https://github.com/tuprott991"
                  icon={FaGithub}
                  label="GitHub"
                  color="primary"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/nguyen-van-tu/"
                  icon={FaLinkedin}
                  label="LinkedIn"
                  color="accent"
                />
                <SocialLink
                  href="mailto:nvtu2305@gmail.com"
                  icon={FaEnvelope}
                  label="Email"
                  color="secondary"
                />
                <SocialLink
                  href="https://www.facebook.com/ktu.tu.75"
                  icon={FaFacebook}
                  label="Facebook"
                  color="primary"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links & Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            
            {/* Personal Info Card */}
            <div className="modern-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-display font-bold text-light mb-1">Nguyễn Văn Tú</h3>
                <p className="text-primary font-medium">AI Engineer & Researcher</p>
                <p className="text-light/60 text-sm">HCMUS Student</p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-accent">7+</div>
                  <div className="text-xs text-light/60 uppercase tracking-wide">Projects</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-secondary">6+</div>
                  <div className="text-xs text-light/60 uppercase tracking-wide">Awards</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-light mb-4">Quick Links</h4>
              <div className="space-y-3">
                <QuickLink href="#hero">About Me</QuickLink>
                <QuickLink href="#projects">Projects</QuickLink>
                <QuickLink href="#publications">Publications</QuickLink>
                <QuickLink href="#timeline">Achievements</QuickLink>
                <QuickLink href="https://github.com/tuprott991" external>GitHub</QuickLink>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-light/60 text-sm">
              <span>© {currentYear} Nguyễn Văn Tú. Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" size={14} />
              </motion.div>
              <span>and</span>
              <FaCode className="text-primary" size={14} />
            </div>
            
            <div className="flex items-center gap-2 text-light/60 text-sm">
              <FaRocket className="text-accent" size={14} />
              <span>Always building the future</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;