"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Gilgit App",
    duration: "2023 - Present",
    description:
      "Built responsive UI for web and mobile using React and React Native. Integrated REST APIs, implemented reusable components, and ensured mobile-first design using Tailwind CSS.",
  },
  {
    title: "Web Developer",
    company: "Freelance Projects",
    duration: "2021 - 2023",
    description:
      "Delivered custom web solutions to small businesses and startups. Worked with Next.js, JavaScript/TypeScript, and Express. Focused on performance, accessibility, and user experience.",
  },
  {
    title: "Intern Web Developer",
    company: "Remote Internship",
    duration: "2020 - 2021",
    description:
      "Assisted in developing internal admin panels and dashboard UIs using HTML, CSS, and React. Gained strong foundational experience in component-driven development.",
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen px-5 lg:px-32 py-20 bg-white">
      <h1 className="text-4xl font-semibold text-gray-900 mb-12 text-center">
        Work History
      </h1>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-100 p-6 rounded-md shadow-md transition duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-2">
              <FaBriefcase className="text-orange-500 text-xl" />
              <h2 className="text-2xl font-semibold text-gray-800">
                {exp.title}
              </h2>
            </div>
            <div className="text-gray-600 text-sm mb-2">
              <span className="font-medium">{exp.company}</span> —{" "}
              <span>{exp.duration}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
