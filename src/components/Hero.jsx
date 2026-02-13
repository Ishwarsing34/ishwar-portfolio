import profile from '../assets/user-image3.jpeg'


const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">

            {/* Avatar */}
            <img
                src={profile} // replace with your image
                alt="profile"
                className="w-25 h-25 rounded-full mb-6 object-cover"
            />

            {/* Heading */}
            <h1 className="text-3xl sm:text-6xl font-bold mb-6">
                Hi, I'm Ishwarsing Girase
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
                21, I break things, learn fast, and make shit happen. Deep into code and CS;
                anything that pushes the limits. History, coding, folk music, exercise and great books shaped me.
                Still chasing mastery. If you’re working on something real, let’s talk.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">

                <a href="https://cal.com/ishwarsing-girase-6fog36"
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


                <a href="https://x.com/dev_Ishwarsing"
                    target="_blank"
                    rel="noopener noreferrer"

                >

                    <button
                        className=" cursor-pointer
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


            </div>


        </section>
    );
};

export default Hero;
