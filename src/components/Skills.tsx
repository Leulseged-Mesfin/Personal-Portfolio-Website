import React from 'react';
import { motion } from 'framer-motion';
import { ServerIcon, SmartphoneIcon, DatabaseIcon, CodeIcon } from 'lucide-react';
const skills = {
  backend: {
    icon: ServerIcon,
    title: 'Backend Engineering',
    items: [ 'Python', 'Django DRF', 'Node.js', 'Express.js', 'REST APIs', 'Microservices']
  },
  mobile: {
    icon: SmartphoneIcon,
    title: 'Mobile Development',
    items: ['Flutter', 'Dart', 'iOS', 'Android', 'State Management', 'Responsive UI']
  },
  database: {
    icon: DatabaseIcon,
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Isar']
  },
  tools: {
    icon: CodeIcon,
    title: 'Tools & Practices',
    items: ['Git', 'CI/CD', 'Testing', 'Agile', 'Code Review', 'Documentation']
  }
};
export function Skills() {
  return <section className="px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          {/* <p className="text-amber-500 font-mono text-sm mb-4">
            {' '}
            // Technical expertise
          </p> */}
          <h2 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-16">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([key, skill], index) => {
          const Icon = skill.icon;
          return <motion.div key={key} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-[#151515] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-amber-500/10 rounded-lg">
                    <Icon className="text-amber-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mt-2">
                    {skill.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => <motion.span key={item} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.3,
                delay: index * 0.1 + i * 0.05
              }} className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-md font-mono border border-gray-800">
                      {item}
                    </motion.span>)}
                </div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}