import Home from './pages/Home'
import Projects from './components/Projects'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-32">
      
      {/* Global Navbar */}
      <Navbar />
      <ScrollToTop/>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
}

export default App
