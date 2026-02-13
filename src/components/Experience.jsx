import stealth from "../assets/stealth.webp"
import freelancer from "../assets/freelancer.webp"

const Experience = () => {
  return (
    <section className="py-10">

      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-center mb-16">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto px-4 space-y-12">

        {/* Freelance */}
        <div className="flex justify-between items-start">

          {/* Left Side */}
          <div className="flex gap-6">

            {/* Logo Circle */}
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
              <img  src={freelancer}/>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Freelance
              </h3>
              <p className="text-neutral-600 text-sm">
                Building full stack apps
              </p>
            </div>

          </div>

          {/* Date */}
          <div className="text-sm text-neutral-600">
            2024 – early 2025
          </div>

        </div>

        {/* Stealth Startup */}
        <div className="flex justify-between items-start">

          {/* Left Side */}
          <div className="flex gap-6">

            {/* Logo Circle */}
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
             <img src={stealth} />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Full Stack Development – TA
              </h3>
              <p className="text-neutral-600 text-sm">
                Stealth Startup
              </p>
            </div>

          </div>

          {/* Date */}
          <div className="text-sm text-neutral-600">
            Feb 2024 – June 2024
          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;
