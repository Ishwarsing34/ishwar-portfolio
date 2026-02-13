import { useState } from "react";
import { Home, Code, User, FileText, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", icon: Home },
    { name: "Projects", icon: Code },
    { name: "About", icon: User },
    { name: "Experience", icon: FileText },
    { name: "GitHub", icon: Github },
    { name: "LinkedIn", icon: Linkedin },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div
        className="
          flex items-center gap-9
          px-18 py-3
          rounded-full
          bg-white/60
          backdrop-blur-sm
          border border-neutral-200/60
          shadow-lg
        "
      >
   {navItems.map((item, index) => {
  const Icon = item.icon;
  const isActive = active === item.name;

  return (
    <div
      key={index}
      onClick={() => setActive(item.name)}
      className="relative flex flex-col items-center group cursor-pointer"
    >
      {/* Icon Wrapper */}
      <div
        className={`
          flex items-center justify-center
          w-9 h-9
          rounded-full
          transition-all duration-200
          ${
            isActive
              ? ""
              : "group-hover:bg-neutral-200"
          }
        `}
      >
        <Icon
          size={18}
          className={`
            transition-colors duration-200
            ${
              isActive
                ? "text-amber-500"
                : "text-neutral-700 group-hover:text-black"
            }
          `}
        />
      </div>

      {/* Tooltip BELOW */}
     <span
  className="
    absolute top-11
    px-3 py-1.5
    text-xs font-medium
    text-white
    bg-black/80
    backdrop-blur-sm
    rounded-md
    opacity-0
    group-hover:opacity-100
    transition duration-200
    whitespace-nowrap
    shadow-md
  "
>
  {item.name}
</span>

    </div>
  );
})}


      </div>
    </nav>
  );
};

export default Navbar;
