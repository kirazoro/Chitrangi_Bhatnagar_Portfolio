import React from 'react';
import { Code, Database, Server, Brain, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: string[];
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    icon: <Code className="w-6 h-6 text-blue-500" />,
    items: ['React.js', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    name: 'Backend Development',
    icon: <Server className="w-6 h-6 text-green-500" />,
    items: ['Node.js', 'Express.js', 'FastAPI', 'RESTful APIs', 'GraphQL']
  },
  {
    name: 'Databases',
    icon: <Database className="w-6 h-6 text-yellow-500" />,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL']
  },
  {
    name: 'AI/ML',
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    items: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'TensorFlow', 'PyTorch']
  },
  {
    name: 'Blockchain',
    icon: <Cpu className="w-6 h-6 text-red-500" />,
    items: ['Smart Contracts', 'Solidity', 'Web3.js', 'Ethereum']
  },
  {
    name: 'Tools & Others',
    icon: <Code className="w-6 h-6 text-indigo-500" />,
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile Methodologies', 'Data Structures & Algorithms']
  }
];

const SkillCard: React.FC<Skill> = ({ name, icon, items }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold ml-2">{name}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;