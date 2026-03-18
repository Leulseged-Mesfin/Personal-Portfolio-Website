import React from "react";
import { motion } from "framer-motion";
const experiences = [
  {
    period: "2024 - Present",
    company: "Po'o Tecnologies Software Development Agency",
    role: "Backend Developer",
    // description: 'Leading backend architecture for fintech platform. Designed and implemented microservices handling 10M+ daily transactions.',
    description:
      "Developed backend services for inventory management system and garage management system using Django DRF and PostgreSQL.",
    achievements: [
      "Developed RESTful APIs",
      "Implemented database solutions",
      "Optimized performance",
    ],
  },
  {
    period: "2025 - present",
    company: "Po'o Tecnologies Software Development Agency",
    role: "Flutter Developer",
    description:
      "Built inventory management mobile applications, Cafe management mobile applications and Bus Ticketing mobile applications with Flutter and Django backend.",
    // achievements: ['Developed cross-platform mobile app', 'Implemented CI/CD pipeline']
    achievements: [
      "Developed cross-platform mobile app",
      "Optimized performance",
      "Responsive UI",
    ],
  },
];
export function Experience() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {/* <p className="text-amber-500 font-mono text-sm mb-4">
            {' '}
            // Career journey
          </p> */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative pl-8 border-l-2 border-gray-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-500 rounded-full"></div>

              <p className="text-amber-500 font-mono text-sm mb-2">
                {exp.period}
              </p>
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-gray-400"
                  >
                    <span className="text-amber-500 mt-1">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
