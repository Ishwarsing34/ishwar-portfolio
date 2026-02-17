import { useState } from "react";
import { Globe, Github } from "lucide-react";

import corsica from "../assets/corsilogo.png";
import Thumgen from "../assets/thumbgenie.svg";
import mernauth from "../assets/mern.auth.svg";
import teamwork from "../assets/projectmanagerlogo.png";
import sticky from "../assets/stickynotelogo.png";
import invoice from "../assets/invoice.png";
import expenspo from "../assets/expensologo.png"
import shorturlogo from "../assets/urlshort.png"

const projects = [
  {
    title: "Corsica",
    type: "frontend",
    description:
      "Corsica is a modern EdTech platform where users explore courses, preview lectures, and follow structured learning paths designed to help developers upskill efficiently across tech domains.",
    tech: ["React.js", "Redux", "React Context API", "JavaScript"],
    logo: corsica,
    Git: "https://github.com/Ishwarsing34/Corsica---Upskill-YourSelf",
    Website: "https://corsica-upskill-your-self-xlab.vercel.app",
  },
  {
    title: "ThumbGenie",
    type: "fullstack",
    description:
      "ThumbGenie is an AI-powered thumbnail generator that helps creators produce optimized thumbnails in multiple aspect ratios, delivering fast, engaging, and visually strong designs instantly.",
    tech: ["React.js", "TypeScript", "MongoDB", "Node.js", "Google Gemini"],
    logo: Thumgen,
    Git: "https://github.com/Ishwarsing34/Corsica---Upskill-YourSelf",
    Website: "https://thumb-genie-2ief.vercel.app",
  },
  {
    title: "Expenso",
    type: "fullstack",
    description:
      "Expenso is a full-stack finance management app that enables users to track expenses, monitor income trends, and visualize financial insights through interactive dashboards and reports.",
    tech: ["React", "Nodejs", "MongoDB", "Recharts"],
    logo: expenspo,
    Git: "https://github.com/Ishwarsing34/Expenso-Your-Personal-Expense-Traacker",
    Website: "https://expenso-your-personal-expense-track.vercel.app",
  },
  {
    title: "E-Invoice",
    type: "frontend",
    description:
      "E-Bill is a modern invoice management system built with React and Redux Toolkit, allowing users to efficiently create, manage, and track invoices with structured state handling.",
    tech: ["React", "Tailwind", "Redux Toolkit"],
    logo: invoice,
    Git: "https://github.com/Ishwarsing34/Invoice-Generator",
    Website: "https://invoice-generator-omega-ashy.vercel.app/",
  },
  {
    title: "Mern Auth",
    type: "fullstack",
    description:
      "MERN Auth is a production-ready authentication system built using the MERN stack, implementing secure login flows, email verification, password resets, and real-world security practices.",
    tech: ["React", "Nodejs", "Nodemailer", "MongoDB"],
    logo: mernauth,
    Git: "https://github.com/Ishwarsing34/Mern-Auth",
    Website: "https://mern-auth-xv8l.vercel.app/",
  },
  {
    title: "TeamWork",
    type: "fullstack",
    description:
      "TeamWork is a collaborative project management platform enabling teams to manage tasks, organize workspaces, assign responsibilities, and automate notifications for streamlined productivity.",
    tech: ["React", "Nodejs", "Inngest", "Postgres", "Prisma", "Clerk"],
    logo: teamwork,
    Git: "https://github.com/Ishwarsing34/projecto-manager",
    Website: "https://projecto-manager-frontend.vercel.app",
  },
  {
    title: "Sticky-Notes",
    type: "frontend",
    description:
      "Sticky Notes is a lightweight task management app allowing users to create, manage, and organize notes with smooth UI interactions and animation-driven visual feedback.",
    tech: ["React", "Framer Motion"],
    logo: sticky,
    Git: "https://github.com/Ishwarsing34/Sticky-Notes",
    Website: "https://sticky-notes-chi.vercel.app/",
  },
  {
  title: "Short Me",
  type: "fullstack",
  description:
    "Short Me is a URL shortening application that allows users to convert long URLs into clean, shareable short links and instantly generate QR codes for quick access. It provides fast redirection, smooth UI interactions, and seamless link management.",
  tech: ["React", "Node.js", "Express", "MongoDB", "QR Code Generator"],
  logo: shorturlogo,
  Git: "https://github.com/Ishwarsing34/SHORTME", 
  Website: "https://shortme-a8oc.vercel.app",
},

];

const ProofOfWork = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  const [visibleCount, setVisibleCount] = useState(2);

  const filteredProjects = projects.filter(
    (project) => project.type === activeTab
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="py-16 sm:py-20 md:py-24">

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10">
        Proof of Work
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-12 px-4">
        <div className="flex bg-white p-1 rounded-xl border border-neutral-300 max-w-xs w-full sm:w-auto">
          <button
            onClick={() => {
              setActiveTab("fullstack");
              setVisibleCount(2);
            }}
            className={`flex-1 sm:flex-none px-5 py-2 text-sm font-medium rounded-lg transition ${
              activeTab === "fullstack"
                ? "bg-white shadow-sm border"
                : "text-neutral-600"
            }`}
          >
            Full Stack
          </button>

          <button
            onClick={() => {
              setActiveTab("frontend");
              setVisibleCount(2);
            }}
            className={`flex-1 sm:flex-none px-5 py-2 text-sm font-medium rounded-lg transition ${
              activeTab === "frontend"
                ? "bg-white shadow-sm border"
                : "text-neutral-600"
            }`}
          >
            Frontend
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 ">

        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white border border-neutral-500 rounded-xl p-6 flex flex-col justify-between transition hover:shadow-xl "
          >

            {/* Logo */}
            <div className="mb-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-neutral-100 border border-neutral-200">
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="max-w-[70%] max-h-[70%] object-contain"
                  />
                ) : (
                  <div className="w-6 h-6 rounded bg-neutral-400" />
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-neutral-700 text-sm leading-6 mb-6">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border border-neutral-300 rounded-md bg-neutral-100 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-black transition">
                <Globe size={14} />
                <a href={project.Website} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </button>

              <button className="flex items-center gap-2 bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-black transition">
                <Github size={14} />
                <a href={project.Git} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* Load More */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="bg-neutral-900 text-white px-6 py-2.5 rounded-md text-sm hover:bg-black transition"
          >
            Load More
          </button>
        </div>
      )}

    </section>
  );
};

export default ProofOfWork;
