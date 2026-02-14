import { useState } from "react";
import stealth from "../assets/stealth.webp";
import freelancer from "../assets/freelancer.webp";

const Experience = () => {
  const [ripple, setRipple] = useState(null);

  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 60;
    const y = e.clientY - rect.top - 60;

    setRipple({ x, y });
    setTimeout(() => setRipple(null), 600);
  };

  const ExperienceRow = ({ logo, title, subtitle, date }) => (
    <div
      onMouseEnter={handleRipple}
      className="
        relative
        flex flex-col sm:flex-row
        sm:justify-between
        sm:items-center
        gap-4 sm:gap-6
        p-4 sm:p-6
        rounded-xl
        transition
        hover:bg-neutral-50
        overflow-hidden
      "
    >
      {ripple && (
        <span
          className="ripple-effect"
          style={{ top: ripple.y, left: ripple.x }}
        />
      )}

      {/* Left Side */}
      <div className="flex gap-4 sm:gap-6 items-center">

        {/* Logo */}
        <div className="
          w-12 h-12
          sm:w-14 sm:h-14
          rounded-full
          bg-black
          flex items-center justify-center
          overflow-hidden
          shrink-0
        ">
          <img
            src={logo}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="
            text-base sm:text-lg
            font-semibold
          ">
            {title}
          </h3>
          <p className="
            text-neutral-600
            text-xs sm:text-sm
          ">
            {subtitle}
          </p>
        </div>

      </div>

      {/* Date */}
      <div className="
        text-xs sm:text-sm
        text-neutral-600
        sm:text-right
      ">
        {date}
      </div>

    </div>
  );

  return (
    <section className="py-16 sm:py-20 md:py-24">

      <h2 className="
        text-2xl sm:text-3xl md:text-4xl
        font-semibold
        text-center
        mb-12 sm:mb-16
      ">
        Experience
      </h2>

      <div className="
        max-w-4xl
        mx-auto
        px-4 sm:px-6
        space-y-6 sm:space-y-8
      ">
        

        <ExperienceRow
          logo={stealth}
          title="Full Stack Developer"
          subtitle="Stealth Startup"
          date="June 2025 – December 2025"
        />

        <ExperienceRow
          logo={freelancer}
          title="Freelance"
          subtitle="Building full stack apps"
          // date="2024 – early 2025"
        />
      </div>

    </section>
  );
};

export default Experience;
