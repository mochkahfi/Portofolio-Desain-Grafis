import React from 'react';
import { Code, Users, Settings, TrendingUp, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Expertise",
      icon: <PenTool className="w-6 h-6" />,
      skills: [
        { name: "Adobe Photoshop", level: 90 },
        { name: "Adobe Illustrator", level: 88 },
        { name: "CorelDraw", level: 80 },
        { name: "Pixellab", level: 75 },
        { name: "Canva", level: 78 }
      ]
    },
    {
      title: "Creative Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Visual Storytelling", level: 78 },
        { name: "Typography", level: 88 },
        { name: "Psikolog Warna", level: 85 },
        { name: "Branding & Identity", level: 88 },
        { name: "Layout Design", level: 90 }
      ]
    },
    {
      title: "Technical Proficiency",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Logo Design", level: 80 },
        { name: "Print Designr", level: 90 },
        { name: "Branding Identity", level: 85 },
        { name: "Vector Illustration", level: 75 },
        { name: "Poster", level: 88 }
      ]
    },
    {
      title: "Professional Skills",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving Visual", level: 86 },
        { name: "Creative Thinking", level: 89 },
        { name: "Communication Skills", level: 80 },
        { name: "Client Presentation", level: 87 },
        { name: "Revisions & Feedback Handling", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ringkasan keahlian teknis dan estetika saya dalam desain grafis, dibangun dari pengalaman nyata dan eksplorasi kreatif secara konsisten
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg mr-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Adobe Photoshop", "Adobe Illustration", "CorelDraw", "Adobe Lightroom", "Snapseed", "Infinite Design",
              "Infinite Painter", "Pixellab", "Canva", "IbisPaint X"
            ].map((tool, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-300 font-medium text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;