import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {


    //  window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth", 
    // });
  return (
     <div>

    

       <section className="py-32">

        <h1 className="mx auto flex items-center justify-center text-3xl mb-3 ">About Me</h1>

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Ishwarsing’s Journey
          </h1>
          <p className="mt-4 text-neutral-500 text-lg">
            Curiosity → Obsession → Discipline
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Column */}
          <div className="space-y-6 text-neutral-800 leading-7 text-[15px]">

            <p>
              In my <span className="font-semibold">second year</span>, I picked up coding 
              just trying to figure things out.
            </p>

            <p>
              I went deep into <span className="font-semibold">DSA</span>.  
              Broke problems. Rebuilt logic. Understood systems.
            </p>

            <p>
              In my final year, I shifted into <span className="font-semibold">development</span>.  
              That’s where everything clicked.
            </p>

            <p>
              Building products. Shipping features. Watching ideas turn into 
              something real.
            </p>

            <p className="font-medium text-neutral-900">
              That feeling? Addictive.
            </p>

          </div>

          {/* Right Column */}
          <div className="space-y-8">

            <p className="text-neutral-800 leading-7 text-[15px]">
              Since then, it’s been about staying dangerously curious.  
              Building fast. Iterating faster.  
              Not chasing hype — chasing depth.
            </p>

            <p className="text-neutral-800 leading-7 text-[15px]">
              Right now, I’m focused on leveling up — not just as a developer, 
              but as someone who builds things that actually matter.
            </p>

            {/* Highlight Box */}
            <div className="bg-neutral-100 rounded-2xl p-8">
              <p className="text-neutral-800 font-medium">
                Always hungry. Always shipping.  
                <br />
                No gatekeeping. No excuses.
              </p>
            </div>

          </div>

        </div>

        {/* Goals Section */}
        <div className="mt-28">

          <h2 className="text-2xl font-semibold mb-12 text-center">
            2026 Focus
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="font-semibold mb-2">DevOps</h3>
              <p className="text-sm text-neutral-600">
                Diving deep into infrastructure, automation, and scalable systems.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Web3</h3>
              <p className="text-sm text-neutral-600">
                Exploring beyond surface-level hype — focusing on real architecture.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="font-semibold mb-2">SaaS Products</h3>
              <p className="text-sm text-neutral-600">
                Shipping products that solve real problems.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Community Impact</h3>
              <p className="text-sm text-neutral-600">
                Building tools that genuinely add value.
              </p>
            </div>

          </div>

        </div>

        {/* Closing */}
        <div className="mt-28 text-center">
          <p className="text-neutral-700 text-lg">
            Still learning. Still experimenting. Still building.
          </p>
        </div>

      </div>

    </section>
     <Footer/>
     </div>
  );
};

export default About;
