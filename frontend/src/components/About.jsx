import React from "react";
import Image from "../assets/Darshan.jpg";
import { ChevronsLeftRight, Globe, Award, Palette } from "lucide-react";

const About = () => {
  return (
    <div id="About" className="flex flex-col md:flex-row bg-[#0a192f] p-10">
      
      {/* Image Section */}
      <div className="flex justify-center md:justify-start mb-10 md:mb-0 md:mr-10">
        <img
          src={Image}
          alt="Darshan"
          className="w-full max-w-lg h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text & Skills Section */}
      <div className="flex-1 text-white">
        {/* Header */}
        <h3 className="text-green-400 font-bold text-xl mb-2">ABOUT ME</h3>
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          A passionate developer and student creating modern web experiences
        </h1>
        <p className="text-base md:text-lg mb-6">
          Hello! I'm Darshan, a full-stack developer and final year Computer
          Science Engineering student from Sambhram Institute of Technology -
          Bangalore, Karnataka. I'm passionate about creating user-centered web
          applications and solving complex problems. With a strong foundation
          in both frontend and backend technologies, I enjoy bringing ideas to
          life through code.
        </p>

        {/* Skills / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border-2 border-transparent hover:border-green-400 p-5 rounded-lg flex flex-col items-start transition-all duration-300">
            <ChevronsLeftRight className="text-green-300 mb-3" size={24} />
            <h2 className="text-lg font-semibold mb-2">Full Stack Development</h2>
            <p>
              Building complete web applications using React, Node.js,
              Express, and various databases.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-transparent hover:border-green-400 p-5 rounded-lg flex flex-col items-start transition-all duration-300">
            <Globe className="text-green-300 mb-3" size={24} />
            <h2 className="text-lg font-semibold mb-2">Web Development</h2>
            <p>
              Creating responsive and modern web interfaces using React, Tailwind
              CSS, and JavaScript.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-transparent hover:border-green-400 p-5 rounded-lg flex flex-col items-start transition-all duration-300">
            <Award className="text-green-300 mb-3" size={24} />
            <h2 className="text-lg font-semibold mb-2">Achievements</h2>
            <p>
              Participated in coding competitions and successfully built
              multiple full-stack projects.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-2 border-transparent hover:border-green-400 p-5 rounded-lg flex flex-col items-start transition-all duration-300">
            <Palette className="text-green-300 mb-3" size={24} />
            <h2 className="text-lg font-semibold mb-2">UI/UX Design</h2>
            <p>
              Designing user-friendly and visually appealing interfaces that
              enhance user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
