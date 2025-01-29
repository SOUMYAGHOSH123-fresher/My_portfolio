import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Award, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg z-50">
      <ul className="flex space-x-12">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center gap-3 text-base font-medium transition-all duration-300 transform hover:scale-110 ${
              isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
            }`
          }
          title="Home - Welcome Page"
        >
          <Home size={24} />
          <span className="hidden md:inline">Home</span>
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `flex items-center gap-3 text-base font-medium transition-all duration-300 transform hover:scale-110 ${
              isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
            }`
          }
          title="Skills & Expertise"
        >
          <User size={24} />
          <span className="hidden md:inline">Skills</span>
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `flex items-center gap-3 text-base font-medium transition-all duration-300 transform hover:scale-110 ${
              isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
            }`
          }
          title="Portfolio Projects"
        >
          <Briefcase size={24} />
          <span className="hidden md:inline">Projects</span>
        </NavLink>
        <NavLink 
          to="/certificates" 
          className={({ isActive }) => 
            `flex items-center gap-3 text-base font-medium transition-all duration-300 transform hover:scale-110 ${
              isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
            }`
          }
          title="Certifications & Achievements"
        >
          <Award size={24} />
          <span className="hidden md:inline">Certificates</span>
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `flex items-center gap-3 text-base font-medium transition-all duration-300 transform hover:scale-110 ${
              isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
            }`
          }
          title="Contact Information"
        >
          <Mail size={24} />
          <span className="hidden md:inline">Contact</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;