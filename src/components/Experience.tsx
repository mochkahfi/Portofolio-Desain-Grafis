import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Graphic Design",
      company: "Jasa Design Graphic",
      location: "Remote",
      period: "2024 - Sekarang",
      description: "Membantu brand lokal dan UMKM membangun identitas visual yang kuat dan profesional.",
      achievements: [
        "Merancang 20+ logo dan identitas merek",
        "Mendesain lebih dari 50+ karya visual seperti banner, poster, dan flayer design ",
        "Berkontribusi dalam branding dan promosi untuk lebih dari 15 UMKM",
        "Mengelola seluruh proses desain: dari brefing, sketsa, eksekusi, revisi, hingga file final"
      ],
      technologies: ["Photoshop", "Illustrator", "CorelDraw", "Pixellab", "Canva"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-300 text-sm">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Tools & Skillset:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;