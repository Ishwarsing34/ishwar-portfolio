import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProofOfWork from "../components/ProofOfWork";
import Experience from "../components/Experience";
import GitHubContributions from "../components/GitHubContributions";
import Skills from "../components/Skills";
import Connect from "../components/Connect";



 const Home = () => {
  return (
    <div>
       
      <main className="max-w-5xl mx-auto px-4 pt-8">
         <Navbar/>
        <Hero/>
        <ProofOfWork/>
        <Experience/>
        <GitHubContributions/>
        <Skills/>
        <Connect/>
      </main>
    </div>
  );
};


export default Home;
