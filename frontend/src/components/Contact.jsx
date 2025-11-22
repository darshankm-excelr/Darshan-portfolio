import React, { useState } from "react";
import { Mail, MapPin, GithubIcon, LinkedinIcon } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        subject,
        message,
      });

      toast.success("Message sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again!");
    }
  }

  return (
    <div id="Contact" className="bg-[#0a192f] py-10 px-4">
      <p className="text-center text-green-300 text-sm">GET IN TOUCH</p>
      <h1 className="text-center text-white font-bold text-3xl mt-2">
        Let's work together
      </h1>
      <h2 className="text-center text-white mt-2">
        I'm always open to discussing new projects, creative ideas or
        opportunities <br />
        to be part of your vision.
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-start mt-10 gap-10">

       
        <div className="w-full lg:w-1/3 bg-black rounded-xl p-8 flex flex-col justify-between min-h-[480px] shadow-lg shadow-green-500/10">
          
          <div>
            <h1 className="text-white text-2xl font-bold mb-6">
              Contact Information
            </h1>
            <div className="flex items-start text-white mb-8">
              <div className="p-3 bg-gray-800 rounded-full mr-4">
                <Mail className="text-green-400" size={22} />
              </div>
              <div>
                <p className="font-semibold text-green-400">Email Me</p>
                <p className="text-gray-400 text-sm mt-1">
                  darshanmariyanna7@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start text-white mb-8">
              <div className="p-3 bg-gray-800 rounded-full mr-4">
                <MapPin className="text-green-400" size={22} />
              </div>
              <div>
                <p className="font-semibold text-green-400">Location</p>
                <p className="text-gray-400 text-sm mt-1">
                  Bangalore, Karnataka, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-white mb-3">Connect with me</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/darshankm-excelr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="text-white hover:text-green-400 transition" size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/darshan-k-m-692a4a280/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="text-white hover:text-green-400 transition" size={26} />
              </a>
            </div>
          </div>
        </div>

        
        <form onSubmit={handleSubmit} className="w-full lg:w-2/3">
          <div className="bg-black rounded-xl p-6 shadow-lg shadow-green-500/10">
            <h2 className="text-white text-2xl font-bold mb-4">
              Send Me a Message
            </h2>

            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <label className="block text-white mb-1">Your Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  placeholder="John"
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="block text-white mb-1">Your Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white mb-1">Subject</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-1">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                name="message"
                placeholder="Type your message here..."
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-400 text-black font-semibold px-6 py-2 rounded hover:bg-green-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;
