import React from 'react';
import { Code } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="w-8 h-8 mr-2 text-gold-500" />
          <h1 className="text-2xl font-bold font-mono text-gold-500">CB</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gold-500 transition-colors duration-200">About Me</a></li>
            <li><a href="#projects" className="hover:text-gold-500 transition-colors duration-200">Projects</a></li>
            <li><a href="#internships" className="hover:text-gold-500 transition-colors duration-200">Internships</a></li>
            <li><a href="#skills" className="hover:text-gold-500 transition-colors duration-200">Skills</a></li>
            <li><a href="#blog" className="hover:text-gold-500 transition-colors duration-200">Blog</a></li>
            <li><a href="#contact" className="hover:text-gold-500 transition-colors duration-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;