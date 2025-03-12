import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-darker py-12">
      <div className="container-width px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Me</h2>
            <p className="mb-4 text-light/80">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/tuprott991"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light/80 hover:text-primary transition-colors"
              >
                <FaGithub size={24} className="hover:animate-pulse" />
              </a>
              <a
                href="https://www.linkedin.com/in/nguyen-van-tu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light/80 hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} className="hover:animate-pulse" />
              </a>
              <a
                href="mailto:nvtu2305@gmail.com"
                className="text-light/80 hover:text-primary transition-colors"
              >
                <FaEnvelope size={24} className="hover:animate-pulse" />
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-bold mb-2 text-light">Nguyễn Văn Tú</h3>
            <p className="text-light/60">AI Developer</p>
            <p className="text-light/60">HCMUS Student</p>
          </div>
        </div>
        
        <div className="border-t border-dark-accent mt-8 pt-8 text-center">
          <p className="text-light/60">
            © {new Date().getFullYear()} Nguyễn Văn Tú. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;