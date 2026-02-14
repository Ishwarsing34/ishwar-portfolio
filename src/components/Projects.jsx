import ProofOfWork from './ProofOfWork'
import Footer from './Footer'

function Projects() {
  window.scrollTo({
    top : 0,
    left : 0,
    behavior : "smooth"
  })
  return (
    <section className="max-w-5xl mx-auto px-4">
      <ProofOfWork />
       <Footer/>
    </section>
  )
}

export default Projects
