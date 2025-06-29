import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Self-Taught Graphic Design Journey",
      institution: "Belajar Mandiri & Online Course (2023 - Sekarang)",
      location: "Online",
      period: "2023 - Sekarang",
      description: "Mendalami dunia desain grafis secara otodidak melalui sumber daring, dan komunitas.",
      achievements: ["Photoshop", "Illusatrator", "CorelDraw", "Pixellab", "Canva" ]
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Tools & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;