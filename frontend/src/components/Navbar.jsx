import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0e2446] text-white px-6 md:px-16 lg:px-24 py-4 shadow-md fixed top-0 w-full z-40">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-[#64ffda] animate-pulse">
          Portfolio
        </div>
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#Home" className="hover:text-[#64ffda]">Home</a>
          <a href="#About" className="hover:text-[#64ffda]">About</a>
          <a href="#Skill" className="hover:text-[#64ffda]">Skill</a>
          <a href="#projects" className="hover:text-[#64ffda]">Project</a>
          <a href="#Contact" className="hover:text-[#64ffda]">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} className="text-[#64ffda]" />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} className="text-[#64ffda]" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#0e2446] mt-4 flex flex-col space-y-4 text-lg px-4 py-4 rounded-lg transition-all">
          <a href="#Home" onClick={() => setOpen(false)} className="hover:text-[#64ffda]">Home</a>
          <a href="#About" onClick={() => setOpen(false)} className="hover:text-[#64ffda]">About</a>
          <a href="#Skill" onClick={() => setOpen(false)} className="hover:text-[#64ffda]">Skill</a>
          <a href="#Projects" onClick={() => setOpen(false)} className="hover:text-[#64ffda]">Project</a>
          <a href="#Contact" onClick={() => setOpen(false)} className="hover:text-[#64ffda]">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
