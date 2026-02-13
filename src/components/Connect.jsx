import { MessageCircle, Linkedin } from "lucide-react";

const Connect = () => {
  return (
    <section className="py-24">

      <div className="max-w-4xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-10">
          Say Hello
        </h2>

        {/* DM Recommendation */}
        
        <p className="text-neutral-700 mb-6">
          x dm is recommended
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">

          {/* Book a meet */}

          <a href="https://cal.com/ishwarsing-girase-6fog36"
           target="_blank"
            rel="noopener noreferrer"
          
          >
              <button
            className="cursor-pointer
              flex items-center gap-2
              bg-emerald-500
              text-white
              text-sm
              font-medium
              px-5 py-2.5
              rounded-lg
              hover:bg-emerald-600
              transition
            "
          >
            <MessageCircle size={16} />
            book a meet
          </button>

          </a>
        

          {/* X Button */}
          <a
            href="https://x.com/dev_Ishwarsing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className=" cursor-pointer
                flex items-center gap-2
                bg-sky-500
                text-white
                text-sm
                font-medium
                px-5 py-2.5
                rounded-lg
                hover:bg-sky-600
                transition
              "
            >
              dm on x
            </button>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/ishwarsing-girase-33a036232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className=" cursor-pointer
                flex items-center gap-2
                bg-[#0A66C2]
                text-white
                text-sm
                font-medium
                px-5 py-2.5
                rounded-lg
                hover:bg-[#004182]
                transition
              "
            >
              <Linkedin size={16} />
              linkedin
            </button>
          </a>

        </div>

        {/* Email Section */}
        <p className="text-neutral-700 mb-4">
          you can mail also
        </p>

        <div className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="johndoe69@xyz.com"
              className="
                w-full
                border border-neutral-400
                rounded-lg
                px-4 py-3
                focus:outline-none
                focus:ring-2
                focus:ring-neutral-800
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Your message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here."
              className="
                w-full
                border border-neutral-400
                rounded-lg
                px-4 py-3
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-neutral-800
              "
            />
          </div>

          {/* Submit Button */}
          <button
            className="
              w-full
              bg-neutral-900
              text-white
              font-medium
              py-3
              rounded-lg
              hover:bg-black
              transition
              cursor-pointer
            "
          >
            Send message
          </button>

        </div>

      </div>

    </section>
  );
};

export default Connect;
