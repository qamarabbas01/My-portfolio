import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.webp"
import Project3 from "../assets/project3.png"
import Project4 from "../assets/project4.png"
import Project5 from "../assets/project5.png"
import Project6 from "../assets/project6.png"

const projects = [
  {
    title: "Gilgit App",
    description: "A community-based service platform for Gilgit.",
    image: Project1,
    link: "https://gilgit.app",
  },
  {
    title: "GilgitApp Shops Portal",
    description: "Manage your local business online with ease.",
    image: Project2,
    link: "https://shops.gilgit.app/login",
  },
  {
    title: "School Management System",
    description: "An app to handle students, classes & administration.",
    image: Project3,
    link: "https://school-management-system-roan.vercel.app",
  },
  {
    title: "Hootsuite Clone",
    description: "Frontend clone of Hootsuite for social media management.",
    image: Project4,
    link: "https://hootsuite-cyan.vercel.app",
  },
  {
    title: "Travelling Website",
    description: "A Simple travelling website to explore the Gilgit Baltistan.",
    image: Project5,
    link: "https://my-portfolio-tau-taupe-95.vercel.app/",
  },
  {
    title: 'Persoanl Website',
    description: "A personal portfolio website to showcase my work.",
    image: Project6,
    link: "https://task-manager-rosy.vercel.app/",
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen px-6 lg:px-20 py-20 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">My Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
              <Image
                src={project.image}
                width={600}
                height={400}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
