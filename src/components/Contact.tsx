import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
const contacts = [{
  icon: MailIcon,
  label: 'Email',
  value: 'leulsegedmesfin11@gmail.com',
  href: 'mailto:leulsegedmesfin11@gmail.com'
}, {
  icon: GithubIcon,
  label: 'GitHub',
  value: '@Leulseged-Mesfin',
  href: 'https://github.com/Leulseged-Mesfin'
}, {
  icon: LinkedinIcon,
  label: 'LinkedIn',
  value: 'leulsegedmesfin',
  href: 'https://www.linkedin.com/in/leulsegedmesfin'
}];
export function Contact() {
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
      }} className="text-center mb-16">
        {/* <p className="text-amber-500 font-mono text-sm mb-4">
          {' '}
            // Let's connect
        </p> */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return <motion.a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="flex items-center gap-4 p-6 bg-[#0a0a0a] border border-gray-800 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
            <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
              <Icon className="text-amber-500" size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-mono">
                {contact.label}
              </p>
              <p className="text-white font-medium">{contact.value}</p>
            </div>
          </motion.a>;
        })}
      </div>

      {/* <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-center mt-20 pt-12 border-t border-gray-800">
        <p className="text-gray-500 font-mono text-sm">
          © 2024 Alex Chen. Built with React, TypeScript & Tailwind CSS.
        </p>
      </motion.div> */}
    </div>
  </section>;
}