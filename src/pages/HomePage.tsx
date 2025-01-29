import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center animated-bg">
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="floating flex flex-col items-center">
          <div className="w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="/Profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text">
            Soumya Ghosh
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
            Web Developer passionate about creating innovative and efficient web solutions
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/SOUMYAGHOSH123-fresher" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/soumya-ghosh-7438b6269/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:gsoumya671@gmail.com" className="text-white hover:text-indigo-200 transition-colors transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
        <Link to="/about" className="animate-bounce absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
          <ChevronDown size={32} className="hover:scale-110 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default HomePage;