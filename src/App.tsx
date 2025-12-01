import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
export function App() {
  return <div className="bg-[#0a0a0a] min-h-screen w-full">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>;
}