import profile from '../assets/user-image3.jpeg';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Hero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pb-25"
    >
     
      {/* Avatar */}
      <motion.img
        variants={itemVariants}
        src={profile}
        alt="profile"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-6 object-cover"
      />

      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-6xl font-bold mb-6"
      >
        Hi, I'm Ishwarsing Girase
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="max-w-2xl text-neutral-600 text-base sm:text-lg leading-relaxed mb-8"
      >
        22, I break things, learn fast, and make shit happen. Deep into code🧑‍💻 & Caffeine🍵
        anything that pushes the limits. History, coding, folk music, exercise and great books shaped me.
        Still chasing mastery.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex gap-4 flex-wrap justify-center"
      >
        <a
          href="https://cal.com/ishwarsing-girase-6fog36"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="
              cursor-pointer
              bg-neutral-900
              text-white
              px-5
              py-2.5
              rounded-lg
              text-sm
              font-medium
              shadow-sm
              hover:bg-black
              transition
            "
          >
            Book a meet
          </button>
        </a>

        <a
          href="https://x.com/dev_Ishwarsing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="
              cursor-pointer
              bg-neutral-900
              text-white
              px-5
              py-2.5
              rounded-lg
              text-sm
              font-medium
              shadow-sm
              hover:bg-black
              transition
            "
          >
            Get in touch
          </button>
        </a>
      </motion.div>

    </motion.section>
  );
};

export default Hero;
