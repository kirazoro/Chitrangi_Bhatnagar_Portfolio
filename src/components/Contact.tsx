import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-md" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect with me</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:chitrangi.bhatnagar@example.com" className="flex items-center text-blue-500 hover:text-blue-600">
                  <Mail className="w-6 h-6 mr-2" /> chitrangi.bhatnagar@example.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/chitrangibhatnagar" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600">
                  <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/chitrangibhatnagar" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600">
                  <Github className="w-6 h-6 mr-2" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dineandialect" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600">
                  <Instagram className="w-6 h-6 mr-2" /> Dine and Dialect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;