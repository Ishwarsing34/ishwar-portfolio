import { useState } from "react";
import { Globe, Github } from "lucide-react";

const projects = [
  {
    title: "Credit Buddy",
    type: "fullstack",
    description:
      "Credit Buddy simplifies credit card queries with AI-powered insights, offering quick and reliable solutions for users to manage their finances better and make informed decisions effortlessly.",
    tech: ["Next.js", "Puppeteer", "Google Gemini", "TypeScript"],
  },
  {
    title: "Flick.AI",
    type: "fullstack",
    description:
      "An AI-Powered tool with 200+ users designed to refine your tweets with full customizations and make them stand out—because GPT just doesn’t get it.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    title: "GhostGram",
    type: "fullstack",
    description:
      "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique authenticated links.",
    tech: ["Next.js", "MongoDB", "NextAuth"],
  },
  {
    title: "Portfolio UI",
    type: "frontend",
    description:
      "Modern responsive portfolio built with clean UI and smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Landing Page",
    type: "frontend",
    description:
      "High-converting marketing landing page with clean component design.",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Dashboard UI",
    type: "frontend",
    description:
      "Admin dashboard UI with charts, responsive layout and reusable components.",
    tech: ["React", "Tailwind", "Recharts"],
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

      {/* Section Title */}
      <h2 className="
        text-2xl
        sm:text-3xl
        md:text-4xl
        font-semibold
        text-center
        mb-8 sm:mb-10 md:mb-12
      ">
        Proof of Work
      </h2>

      {/* Segmented Tabs */}
      <div className="flex justify-center mb-10 sm:mb-12 px-4">
        <div className="
          flex
          bg-white
          p-1
          rounded-xl
          border border-neutral-300
          w-full
          sm:w-auto
          max-w-xs
        ">
          <button
            onClick={() => {
              setActiveTab("fullstack");
              setVisibleCount(2);
            }}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-lg transition ${
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
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-lg transition ${
              activeTab === "frontend"
                ? "bg-white shadow-sm border"
                : "text-neutral-600"
            }`}
          >
            Frontend
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-6 sm:gap-8
        px-4 sm:px-6
      ">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="
              relative
              bg-white
              border border-neutral-300
              rounded-xl
              p-5 sm:p-6 md:p-7
              overflow-hidden
              group
              transition
            "
          >
            {/* Ripple Effect */}
            <span
              className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition duration-500
                pointer-events-none
              "
            >
              <span
                className="
                  absolute
                  w-72 h-72
                  bg-blue-400/10
                  rounded-full
                  blur-3xl
                  top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  scale-50
                  group-hover:scale-100
                  transition duration-700
                "
              />
            </span>

            {/* Logo */}
            <div className="mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-gradient-to-br from-blue-900 to-blue-600" />
            </div>

            {/* Title */}
            <h3 className="
              text-lg sm:text-xl
              font-semibold
              mb-3
              tracking-tight
            ">
              {project.title}
            </h3>

            {/* Description */}
            <p className="
              text-neutral-700
              text-sm sm:text-[14px]
              leading-6
              mb-5 sm:mb-6
            ">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="
                    text-[11px] sm:text-[12px]
                    px-2.5 sm:px-3
                    py-1
                    border border-neutral-400
                    rounded-md
                    bg-neutral-100
                    font-medium
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="
              flex
              flex-col sm:flex-row
              gap-3
            ">
              <button
                className="
                  flex items-center justify-center gap-2
                  bg-neutral-900
                  text-white
                  text-xs
                  font-medium
                  px-4
                  py-2
                  rounded-md
                  hover:bg-black
                  transition
                "
              >
                <Globe size={14} />
                Website
              </button>

              <button
                className="
                  flex items-center justify-center gap-2
                  bg-neutral-900
                  text-white
                  text-xs
                  font-medium
                  px-4
                  py-2
                  rounded-md
                  hover:bg-black
                  transition
                "
              >
                <Github size={14} />
                Source
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 2)}
            className="
              bg-neutral-900
              text-white
              px-6 py-2.5
              rounded-md
              text-sm
              hover:bg-black
              transition
            "
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProofOfWork;
