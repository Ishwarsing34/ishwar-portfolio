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

  // Filter projects based on tab
  const filteredProjects = projects.filter(
    (project) => project.type === activeTab
  );

  // Slice based on visible count
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="py-17">

      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        Proof of Work
      </h2>

      {/* Segmented Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white p-1 rounded-xl border border-neutral-400">

          <button
            onClick={() => {
              setActiveTab("fullstack");
              setVisibleCount(2);
            }}
            className={`px-6 py-2 text-sm font-medium rounded-lg transition ${activeTab === "fullstack"
                ? "bg-white border    shadow-sm"
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
            className={`px-6 py-2 text-sm font-medium rounded-lg transition ${activeTab === "frontend"
                ? "bg-white border shadow-sm"
                : "text-neutral-600"
              }`}
          >
            Frontend
          </button>

        </div>
      </div>

      {/* Cards Grid */}
     <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 cursor-pointer">
  {visibleProjects.map((project, index) => (
    <div
      key={index}
      className="
        relative
        bg-white
        border border-neutral-300
        rounded-xl
        p-7
        overflow-hidden
        group
        transition
      
      "
    >

      {/* Ripple Effect Layer */}
      <span
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
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

      {/* Dummy Logo */}
      <div className="mb-5">
        <div className="w-10 h-10 rounded-md bg-linear-to-br from-blue-900 to-blue-600" />
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-semibold mb-3 tracking-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-neutral-700 text-[14px] leading-6 mb-6">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((item, i) => (
          <span
            key={i}
            className="
              text-[12px]
              px-3 py-[5px]
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
      <div className="flex gap-3" >
        <button
          className=" cursor-pointer
            flex items-center gap-2
            bg-neutral-900
            text-white
            text-[12px]
            font-medium
            px-4
            py-[6px]
            rounded-md
            shadow-[0_1px_4px_rgba(0,0,0,0.2)]
            hover:bg-black
            transition
          "
        >
          <Globe size={14} />
          Website
        </button>

        <button
          className=" cursor-pointer
            flex items-center gap-2
            bg-neutral-900
            text-white
            text-[12px]
            font-medium
            px-4
            py-[6px]
            rounded-md
            shadow-[0_1px_4px_rgba(0,0,0,0.2)]
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


      {/* Load More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-12 ">
          <button
            onClick={() => setVisibleCount((prev) => prev + 2)}
            className="bg-neutral-900 text-white px-6 py-2 rounded-md text-sm hover:bg-black transition cursor-pointer"
          >
            Load More 
          </button>
        </div>
      )}

    </section>
  );
};

export default ProofOfWork;
