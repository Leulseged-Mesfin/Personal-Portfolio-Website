import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-6">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* <p className="text-amber-500 font-mono text-sm mb-4">
            {' '}
            // Portfolio v2.0
          </p> */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none">
            Leulseged Mesfin
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
            Backend & Mobile Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="grid md:grid-cols-2 gap-12 mt-16"
        >
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I build scalable backend systems and beautiful mobile experiences.
              Specializing in API design, and Flutter development.
            </p>
            {/* <p className="text-gray-400 leading-relaxed">
              Currently crafting high-performance systems that serve millions of
              users, with a focus on clean code, thoughtful architecture, and
              delightful UX.
            </p> */}
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex gap-4">
              <motion.a
                href="mailto:alex@example.com"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-400 transition-colors"
              >
                <MailIcon size={18} />
                Get in touch
              </motion.a>
              <motion.a
                href="https://github.com/Leulseged-Mesfin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-colors"
              >
                <GithubIcon size={18} />
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
