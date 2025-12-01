import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
const projects = [ 
  {
  title: 'Inventory Management System',
  description: ' Designed and deployed a Django-based inventory management system that automated stock tracking and reduced human error, improving inventory accuracy by 95%, cutting operational costs and reducing order processing times by 50%.',
  tech: ['Python', 'Django DRF', 'MySQL', 'CPanel', 'Git'],
  github: 'https://github.com',
  highlight: 'Backend'
}, 
{
  title: 'Inventory Management App',
  description: 'Built a Full Stack Flutter inventory management app using Flutter and Django DRF, improving performance and Integrated real-time product, order, stock and other data with RESTful APIs while delivering a smooth and responsive user experience',
  tech: ['Flutter', 'Dart', 'Bloc', 'Django DRF', 'MySQL', 'CPanel', 'Git'],
  github: 'https://github.com',
  highlight: 'Mobile'
}, {
  title: 'Garage Management System',
  description: 'Designed and developed a custom Garage Management System backend using Django RESTFramework, enabling the client to automate vehicle intake, service tracking, mechanics’ assignments, and billing, increasing operational efficiency.',
  tech: ['Python', 'Django DRF', 'MySQL', 'CPanel', 'Git'],
  github: 'https://github.com',
  highlight: 'Backend'
}];
export function Projects() {
  return <section className="px-6 md:px-12 lg:px-24 py-32 bg-[#151515]">
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
            // Featured work
          </p> */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
            Selected Projects
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="group bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-xs font-mono rounded">
                      {project.highlight}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-3">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-colors">
                      <GithubIcon size={20} className="text-gray-400" />
                    </a>}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-md font-mono">
                    {tech}
                  </span>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}