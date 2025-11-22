import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from  './components/About'
import Contact from  './components/Contact'
import Skill from  './components/Skill'
import Projects from  './components/Projects'
import { Toaster } from "react-hot-toast";
import './App.css'

function App() {
  
  return (
    <>
     <Toaster position="top-right" />
    <Navbar/> 
    <Hero title="Full Stack Developer,Student"/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
