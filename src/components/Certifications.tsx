import { useState } from 'react';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';

const Certifications = () => {
  const [showImage, setShowImage] = useState<string | null>(null);
  
  const certifications = [
    {
      name: "Kelas Desain Bareng Akbar Ardhean (Online Class)",
      issuer: "Esports Branding",
      date: "15 Juni 2025",
      credentialId: "-",
      description: "Kursus Kelas Desain Esports Untuk Pemula dan menunjukkan komitmen dan dedikasi dalam pembelajaran dasar-dasar desain grafis di industri esports.",
      image: "/Asset/Muhammad Kahfi E-Certificate_page-0001.jpg"
    },
    {
      name: "Unpix | Universitas PixelLab (Online Class)",
      issuer: "Community PixelLab",
      date: "03 Februari 2024",
      credentialId: "-",
      description: "Sharing time special dari designer kita akan jadi apa.",
      image: "/Asset/SERTIFIKAT SHARING BRANDING Muhammad Kahfi.jpg"
    },
    {
      name: "Community Desain Grafis (Online Class)",
      issuer: "Workshop Ramadhan",
      date: "17 Maret 2024",
      credentialId: "-",
      description: "Cara memenangkan ramadhan sebagai desain grafis.",
      image: "/Asset/Sertifikat Peserta Workshop.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sertifikat yang menguatkan kompetensi saya sebagai desainer grafis dan mencerminkan dedikasi terhadap pengembangan keterampilan secara konsisten di dunia desain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-300 font-medium mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    Issued {cert.date}
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={`Certificate for ${cert.name}`}
                      className="cursor-pointer rounded-md shadow-md max-h-40 object-contain"
                      onClick={() => setShowImage(cert.image)}
                    />
                  )}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Continuous Learning Commitment</h3>
            <p className="text-gray-300 leading-relaxed">
              Saya percaya bahwa kreativitas dan keahlian desain tidak hanya berasal dari bakat, tetapi juga dari pembelajaran yang konsisten. Sertifikasi dan pelatihan yang saya ambil mencerminkan komitmen saya untuk terus mengikuti tren desain terbaru, menguasai software baru, dan memperkuat pemahaman tentang estetika visual serta komunitas merek.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div>Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">40+</div>
                <div>Training Hours/Year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div>Consistent Skill Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowImage(null)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              className="absolute top-2 right-2 text-white hover:text-yellow-300"
              onClick={() => setShowImage(null)}
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={showImage}
              alt="Certificate enlarged"
              className="max-w-full max-h-[80vh] rounded-md shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
