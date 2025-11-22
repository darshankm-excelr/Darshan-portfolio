import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { MoveDown } from 'lucide-react';
import { Github ,Linkedin} from 'lucide-react';

const Hero = () => {
  return (
    <div id="Home">
    <section id="home" className="bg-[#0a192f] text-white h-screen flex flex-col justify-center items-center text-center pt-10 px-4 ">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-[#64ffda]">DARSHAN K.M</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        I'm a{' '}
        <span className="text-yellow-400">
          <Typewriter 
            words={["Full Stack Developer", "Student", "Programmer"]}
            loop={true}
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <p className="max-w-2xl text-gray-50 mb-8 ">
        A passionate full-stack developer and CSE student, crafting modern web experiences with clean code and creative solutions.
      </p>

      <div className="flex space-x-4">
        <a href="#Contact">
         <button className="bg-[#64ffda] hover:bg-[#077259] text-black px-6 py-2 rounded-md font-semibold">
         Get in Touch
         </button>
          </a>
          <a href="#projects">
          <button className="border rounded-full hover:border-gray-500 border-gray-400 px-6 py-2  font-semibold hover:bg-gray-700">
          View My Work
        </button>
          </a>
        
      </div>
      <div className="mt-15  flex space-x-10">
        <div>
         <a href="https://github.com/darshankm-excelr" target="_blank" rel="noopener noreferrer">
         <Github />
          </a>
     </div>
     <div>
       <a href="https://www.linkedin.com/in/darshan-k-m-692a4a280/" target="_blank" rel="noopener noreferrer">
       <Linkedin /></a>
     </div>  
     </div>
      
      <div className="mt-10 animate-bounce">
    <a href="#About" rel="noopener noreferrer">
      <MoveDown/></a>
    </div>
    </section>
    </div>
  );
};

export default Hero;
