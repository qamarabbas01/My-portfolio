"use client";

import React from "react";
import { SiJavascript, SiTypescript, SiReact, SiExpo, SiNodedotjs } from "react-icons/si";
import { FaMobileAlt, FaTerminal } from "react-icons/fa";

const skills = [
  {
    title: "JavaScript",
    icon: <SiJavascript size={40} className="text-yellow-400" />,
    description: "Core scripting language for web and app development.",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-500" />,
    description: "Typed superset of JavaScript for scalable codebases.",
  },
  {
    title: "React JS",
    icon: <SiReact size={40} className="text-cyan-500" />,
    description: "Modern frontend framework for building UIs.",
  },
  {
    title: "React Native",
    icon: <FaMobileAlt size={40} className="text-purple-500" />,
    description: "Cross-platform mobile apps for iOS and Android.",
  },
  {
    title: "Expo",
    icon: <SiExpo size={40} className="text-black" />,
    description: "Framework and platform for universal React Native apps.",
  },
  {
    title: "CLI Tools",
    icon: <FaTerminal size={40} className="text-gray-600" />,
    description: "Powerful development with command-line interfaces.",
  },
];

const Skills = () => {
  return (
    <section className="min-h-full bg-white px-5 lg:px-32 py-20">
      <h1 className="text-4xl font-semibold text-center mb-12">Tech Stack</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-100 w-full sm:w-[45%] lg:w-1/4 p-6 rounded-lg text-center shadow-sm transition-transform hover:-translate-y-2 hover:shadow-md"
          >
            <div className="mb-4 flex justify-center">{skill.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {skill.title}
            </h2>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
