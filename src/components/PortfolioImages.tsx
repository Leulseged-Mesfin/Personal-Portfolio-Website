import React from "react";

type Project = {
  title: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Bus Ticket Booking System",
    image: "/images/bus-project.png",
    technologies: ["Flutter", "Django", "Chapa API"],
  },
  {
    title: "Inventory Management System",
    image: "/images/inventory.png",
    technologies: ["Django", "PostgreSQL", "REST API"],
  },
  {
    title: "Multi-Tenant SaaS App",
    image: "/images/saas.png",
    technologies: ["Django Tenants", "Docker", "Nginx"],
  },
  {
    title: "Garage Management System",
    image: "/images/garage.png",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
];

const PortfolioProjects: React.FC = () => {
  return (
    <section className="bg-black text-white px-8 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Projects & Portfolio</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition"
          >
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-3">{project.title}</h2>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#1a1a1a] text-sm px-3 py-1 rounded-md border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioProjects;
