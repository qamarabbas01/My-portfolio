"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "React JS/TS", level: 85 },
  { name: "React Native", level: 80 },
  { name: "Next.js", level: 75 },
];

const About = () => {
  return (
    <section className="min-h-screen px-5 lg:px-32 py-24 bg-slate-50">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-20">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h3 className="text-4xl font-semibold">
            I&apos;m <span className="text-red-500">Qamar Abbas</span>
          </h3>
          <p className="text-lg text-gray-700 font-medium">
            Web & Mobile App Developer | 3+ Years Experience
          </p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I specialize in creating fast, responsive, and scalable applications using modern
            web and mobile technologies. From interactive websites to high-performance mobile
            apps, I focus on delivering clean code and intuitive user experiences.
            <br /><br />
            With a deep understanding of tools like <strong>React</strong>, <strong>Next.js</strong>, and <strong>React Native</strong>,
            I’ve worked on live production apps, helping startups and businesses build beautiful products.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-black hover:text-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
          >
            Hire Me <FaArrowRight />
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src={require("../assets/mypic.jpg")}
            width={500}
            height={500}
            alt="Qamar Abbas"
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-3xl font-bold text-rose-700 mb-6 text-center lg:text-left">
          My Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-semibold">{skill.name}</span>
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-2 bg-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
