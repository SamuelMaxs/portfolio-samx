import React, { useState } from "react";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Kasetto",
      description: "Kasetto is a website for playing songs",
      image: "./images/kasetto.png",
      category: "Web",
    },
    {
      id: 2,
      title: "WemenGotchi",
      description: "Wemen Gotchi is a minigame website",
      image: "./images/wemengotchi.png",
      category: "Web",
    },
    {
      id: 3,
      title: "Gereja Isa Almasih Jemaat Rajawali",
      description: "Isa Almasih Jemaat Rajawali Church is a church website",
      image: "./images/isaalmasih.png",
      category: "Web",
    },
    {
      id: 4,
      title: "Throwing Ball Game",
      description: "A simple game where you throw a ball to the ring and get the score, this game created by using Unity",
      image: "./images/throwing basketball game.png",
      category: "Game",
    },
    {
      id: 5,
      title: "Amogus Dash Game",
      description: "A game where you run and avoid obstacle, this game created by using Scratch",
      image: "./images/amogusdash.png",
      category: "Game",
    },
    {
      id: 6,
      title: "Tipket",
      description: "An application to know your package is arrive, if in the residence area that courier cant enter, this app created by using Android Studio",
      image: "./images/tipketimg.png",
      category: "Mobile",
    },
  ];

  const categories = ["All", "Web", "Game", "Mobile"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="bg-slate-300 pt-36 pb-1">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
              Projects
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              There are my recent Group-Projects
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full font-medium text-white ${
                selectedCategory === category
                  ? "bg-primary"
                  : "bg-gray-400 hover:bg-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={project.image} alt={project.title} className="w-full" />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark">
                {project.title}
              </h3>
              <p className="text-base font-medium text-secondary">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
