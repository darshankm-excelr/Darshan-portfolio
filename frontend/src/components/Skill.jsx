import React from 'react'



const Skill = () => {
    
const skillsData = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'Mongoose', level: 80 },
      { name: ' MongoDB', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'C/C++', level: 85 },
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 85 },
    ],
  },
];
  return (
    <div id="Skill">
    <section className="bg-[#0a192f]  text-white py-12 px-4" >
      <div className="max-w-7xl mx-auto">
        <h3 className=" text-3xl font-bold mb-8 text-center"> MY SKILLS</h3>
        <h1  className="text-center mb-6  font-bold text-3xl">Technical expertise & proficiency</h1>
        <p  className="text-center mb-10 ">I've developed a strong foundation in both frontend and backend technologies, along with <br></br> excellent problem-solving skills demonstrated through competitive programming.</p>
        

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, i) => (
            <div key={i} className="bg-[#0f1b35] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
              {category.skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div
                      className="bg-[#00f2c3] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};
    
       
      
export default Skill
