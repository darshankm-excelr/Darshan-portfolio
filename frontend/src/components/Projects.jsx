
import React, { useState } from "react";
import { projects } from "../data/projects";

const categories = ["All", "Web", "Mobile", "ML"];

const Projects = () => {
  const [active, setActive] = useState("All");

 
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-12 bg-gray-900 text-white" id="projects">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm 
                ${active === cat ? "bg-blue-500" : "bg-gray-700"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded-md h-48 w-full object-cover"
              />

              <h2 className="text-xl font-semibold mt-4">{p.title}</h2>

              <p className="text-gray-400 text-sm mt-2">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-700 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

