import Hero from "../components/Hero";
import ProofOfWork from "../components/ProofOfWork";
import Experience from "../components/Experience";
import GitHubContributions from "../components/GitHubContributions";
import Skills from "../components/Skills";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

const Home = () => {
 
  return (
    <main className="max-w-5xl mx-auto px-4">
      <Hero/>
      <ProofOfWork/>
      <Experience/>
      <GitHubContributions/>
      <Skills/>
      <Connect/>
      <Footer/>
    </main>
  );
};

export default Home;
