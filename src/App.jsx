import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pages = {
  home: (
    <div className="flex flex-col items-center gap-6">
      <motion.img
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.8 }}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
        alt="Salesforce Logo"
        className="w-48 animate-pulse"
      />
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-center text-lg max-w-xl">
        Explore my journey as a developer, discover the skills I bring to the table, and check out some of the exciting projects I’ve worked on. Let’s build something amazing together!
      </p>
    </div>
  ),
  about: (
    <div className="text-center text-xl space-y-4">
      <h2 className="text-3xl font-bold mb-2">About Me</h2>
      <p>
        I'm a dedicated and curious Salesforce Developer with a strong foundation in customizing CRM systems, building Lightning Components, and automating business processes.
        My journey in the tech world started with a love for building things that solve real problems. Over time, I’ve honed my skills in Apex, LWC, and integrating third-party APIs to deliver scalable and efficient solutions.
      </p>
      <p>
        I believe in writing clean, maintainable code and continuously learning new tools and technologies to stay ahead. Whether it's designing a user-friendly UI or diving deep into complex business logic, I enjoy every part of the development cycle.
      </p>
      <p>
        Outside of coding, I enjoy collaborating with like-minded professionals, contributing to open-source, and exploring new ways to make technology more impactful.
      </p>
    </div>
  ),
  skills: (
    <div className="text-center text-xl">
      <h2 className="text-3xl font-bold mb-2">My Skills</h2>
      <p>Salesforce, Apex, LWC, JavaScript, HTML, CSS, Git, REST APIs</p>
    </div>
  ),
  certifications: (
    <div className="text-center text-xl">
      <h2 className="text-3xl font-bold mb-2">Certifications</h2>
      <p>Salesforce Certified Data Cloud Consultant, Salesforce Platform Developer I, Salesforce Admin, and more...</p>
    </div>
  ),
};

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#FFE5B4] text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" />

      {/* Decorative floating developer stickers using external URLs */}
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="absolute top-10 left-10 w-12 opacity-20 rotate-12" alt="HTML" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="absolute bottom-20 left-24 w-10 opacity-20 -rotate-12" alt="CSS" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="absolute top-24 right-10 w-12 opacity-20 rotate-6" alt="JavaScript" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="absolute bottom-10 right-10 w-12 opacity-20" alt="React" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="absolute top-1/2 left-5 w-10 opacity-20" alt="GitHub" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" className="absolute bottom-1/2 right-5 w-12 opacity-20" alt="Salesforce" />
      <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" className="absolute top-1/3 left-1/3 w-10 opacity-20 rotate-3" alt="Terminal" />

      <nav className="relative z-10 flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <Button onClick={() => setCurrentPage("home")} className="hover:scale-105 transition-transform">Home</Button>
          <Button onClick={() => setCurrentPage("about")} className="hover:scale-105 transition-transform">About Me</Button>
          <Button onClick={() => setCurrentPage("skills")} className="hover:scale-105 transition-transform">Skills</Button>
          <Button onClick={() => setCurrentPage("certifications")} className="hover:scale-105 transition-transform">Certifications</Button>
          <Button className="hover:scale-105 transition-transform" variant="ghost">
            <Github className="w-5 h-5" />
          </Button>
          <Button className="hover:scale-105 transition-transform" variant="ghost">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
        <Button className="hover:scale-105 transition-transform" variant="outline">Edit</Button>
      </nav>

      <div className="relative z-10 flex justify-center items-center min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl p-6 bg-blue-600/80 backdrop-blur-md rounded-2xl shadow-xl"
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
