

import './index.css'
import Home from './pages/Home'
import Projects from './components/projects'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>

      <div className="min-h-screen bg-white text-neutral-900">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
