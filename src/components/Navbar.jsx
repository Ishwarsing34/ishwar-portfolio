import { Home, Code, User, FileText, Github, Linkedin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Projects", icon: Code, path: "/projects" },
    { name: "About", icon: User, path: "/about" },
    {
      name: "GitHub",
      icon: Github,
      external: true,
      url: "https://github.com/Ishwarsing34",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      external: true,
      url: "https://www.linkedin.com/in/ishwarsing-girase-33a036232/",
    },
    {
      name: "Resume",
      icon: FileText,
      external: true,
      url: "www.xyz.com"
    }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div
        className="
          pointer-events-auto
          flex items-center gap-8
          px-10 py-3
          rounded-full
          bg-white/70
          backdrop-blur-md
          border border-neutral-200
          shadow-lg
          w-fit
        "
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive =
            !item.external && location.pathname === item.path;

          return (
            <div
              key={index}
              onClick={() => {
                if (item.external) {
                  window.open(item.url, "_blank");
                } else {
                  navigate(item.path);
                }
              }}
              className="relative flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`
                  flex items-center justify-center
                  w-9 h-9
                  rounded-full
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-neutral-200"
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

              <span
                className="
                  absolute top-12
                  px-3 py-1.5
                  text-xs font-medium
                  text-white
                  bg-black
                  rounded-md
                  opacity-0
                  group-hover:opacity-100
                  transition duration-200
                  whitespace-nowrap
                  shadow-md
                  pointer-events-none
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
