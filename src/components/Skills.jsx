import {
  Code2,
  FileJson,
  Atom,
  Smartphone,
  Figma,
  Database,
  Server,
  Cloud,
  Box,
  Layers,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: FileJson },
  { name: "Next.js", icon: Atom },
  { name: "React Native", icon: Smartphone },
  { name: "React", icon: Atom },
  { name: "Figma", icon: Figma },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Supabase", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "Turborepo", icon: Layers },
  { name: "Docker", icon: Box },
  { name: "AWS", icon: Cloud },
  { name: "Redux", icon: Layers },
];

const Skills = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24">

      {/* Title */}
      <h2 className="
        text-2xl
        sm:text-3xl
        md:text-4xl
        font-semibold
        text-center
        mb-10 sm:mb-12
      ">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="
          flex flex-wrap
          justify-center
          gap-3 sm:gap-4 md:gap-5
        ">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <span
                key={index}
                className="
                  flex items-center gap-2
                  bg-neutral-900
                  text-white
                  text-xs sm:text-sm
                  font-medium
                  px-3 sm:px-4
                  py-1.5 sm:py-2
                  rounded-md
                  shadow-sm
                  hover:bg-black
                  transition
                "
              >
                <Icon size={14} className="sm:w-4 sm:h-4" />
                {skill.name}
              </span>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
