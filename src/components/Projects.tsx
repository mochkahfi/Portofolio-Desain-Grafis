import { ExternalLink, Github, Calendar, Users, PenTool, } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Logo Design | Arba Annur",
      description: "Desain identitas visual untuk perusahaan travel haji dan umrah.",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Illustrator", "Canva",],
      timeline: "15 Project",
      teamSize: "7 Hari",
      achievements: [
        "Logo dengan nuasa islami modern",
        "Warna dominan ungu & coklat sebagai simbol keanggunan dan kehangatan",
        "Digunakan untuk: kartu nama, brosur, banner dan media sosial",
        "Nilai tambahan: Termasuk presentasi brand, desain brosur, dan mockup ",
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Design Event | DIKBUD Tangsel FC",
      description: "Membuat berbagai kebutuhan desain untuk event DIKBUD Tangsel FC. Desain meliputi Poster, Spanduk, Banner, dan Certificate.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Illustrator", "CorelDraw", "Pixellab",],
      timeline: "16 Project",
      teamSize: "3 Hari",
      achievements: [
        "Meningkatkan awareness dan profesionalitas tampil acara, terbukti dari partisipasi aktif peserta event",
        "Meningkatkan engagement media sosial Instagram @dikbudtangsel.fc hingga 60%",
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Branding Toko Shopee | PT NATURINDO",
      description: "Desain visual branding untuk toko resmi PT Naturindo di platfrom Shopee. Proyek ini mencakup 3 akun toko online, masing-masing memiliki 197 aset visual seperti, Logo, Thumbnail, Banner. Seluruh desain dikembangkan berdasarkan identitas brand Naturindo sebagai penyedia jamu herbal modern terpercaya.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Illustrator", "Canva"],
      timeline: "591 Project",
      teamSize: "3 minggu",
      achievements: [
        "Total 591 aset visual untuk 3 akun toko",
        "Desain disesuaikan dengan identitas brand Naturindo",
        "Meningkatkan daya tarik visual toko, mempermudah calon pembeli mengenali produk",
        "Aset digunakan secara aktif di Shopee Store Naturindo dan telah membantu meningkatkan penjualan",
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Vector Art Illustration | Karya Pribadi",
      description: "Eksplorasi seni ilustrasi vektor. Proyek ini bertujuan untuk mengasah keterampilan ilustrasi digital dan menciptakan karya seni yang menarik.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Illustrator", "CorelDraw", "Infinite Design", "Infinite Painter"],
      timeline: "14 Project",
      teamSize: "Eksperimen Pribadi",
      achievements: [
        "Mengasah teknikal pen drawing, line art, dan penggunaan bentuk geometris",
        "Menemukan gaya visual pribadi dalam ranah illustrasi digital",
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sebagian Karya terbaik yang pernah saya kerjakan untuk berbagai kebutuhan desain klien dan brand
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <PenTool className="w-4 h-4 mr-1" />
                      {project.timeline}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.teamSize}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-xs text-gray-400 flex items-center">
                          <div className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;