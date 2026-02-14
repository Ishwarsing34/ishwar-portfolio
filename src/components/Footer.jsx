const Footer = () => {
  return (

    <>

    
       <div className="mt-24 text-center text-neutral-400 text-sm italic animate-fade-up">
            Always building. Always evolving.
        </div>
      <footer className="mt-32 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">

        <p className="text-sm text-neutral-600">
          Designed & coded by{" "}
          <span className="font-medium text-neutral-900">
            Ishwarsing
          </span>
        </p>

        <p className="mt-2 text-xs text-neutral-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
    </>
   
  );
};

export default Footer;
