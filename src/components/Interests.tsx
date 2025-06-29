import React from 'react';
import { Code, Gamepad2, Camera, Mountain, BookOpen, Music, Coffee, PenTool, Brain, Video } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: "Coffe & Creativity",
      icon: <Coffee className="w-8 h-8" />,
      description: "Buat saya, desain dimulai dengan secangkir kopi. Ini bukan hanya rutinitas ini bagian dari proses berpikir dan membangun suasana.",
      color: "from-green-500/20 to-emerald-500/20",
      textColor: "text-green-400"
    },
    {
      title: "Design With Music",
      icon: <Music className="w-8 h-8" />,
      description: "Musik bukan hanya hiburan, tapi temen kerja terbaik. Saat desain butuh fokus, energi, atau suasana musik yang saya dengarkan jadi bagian penting dari proses kreatif.",
      color: "from-purple-500/20 to-violet-500/20",
      textColor: "text-purple-400"
    },
    {
      title: "Photography",
      icon: <Camera className="w-8 h-8" />,
      description: "Mengabadikan momen melalui lensa kamera. Menangkap keindahan visual dan detail yang sering terlewatkan, menginspirasi desain dengan perspektif baru.",
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-blue-400"
    },
    {
      title: "Typography Play",
      icon: <PenTool className="w-8 h-8" />,
      description: "Eksplorasi tipografi sebagai seni visual. Menciptakan desain yang menggabungkan huruf dengan elemen grafis untuk menyampaikan pesan yang kuat.",
      color: "from-orange-500/20 to-red-500/20",
      textColor: "text-orange-400"
    },
    {
      title: "Creative Problem Solving",
      icon: <Brain className="w-8 h-8" />,
      description: "Menikmati tantangan dalam mengubah brief yang kompleks menjadi solusi desain yang sederhana dan efektif. Pendekatan kreatif untuk memecahkan masalah klien.",
      color: "from-indigo-500/20 to-purple-500/20",
      textColor: "text-indigo-400"
    },
    {
      title: "Visual Storytelling",
      icon: <Video className="w-8 h-8" />,
      description: "Menggunakan desain untuk menceritakan kisah yang menarik. Menggabungkan elemen visual dan narasi untuk menciptakan pengalaman yang mendalam bagi audiens.",
      color: "from-pink-500/20 to-rose-500/20",
      textColor: "text-pink-400"
    }
  ];

  const currentFocus = [
    "Belajar desain branding yang berkelanjutan",
    "Eksplorasi AI tools untuk eksplorasi visual",
    "Latihan membuat typografi",
    "Community engagement through design",
    "Meningkatkan keterampilan ilustrasi digital",
    "Eksperimen dengan desain interaktif"
  ];

  return (
    <section id="interests" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Interests & Passions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Saya percaya, hal-hal yang saya suka di luar desain justru sering kasih sudut pandang baru. Dari sana, saya bisa nemuin ide, nuansa, atau pendekatan visual yang mungkin nggak terpikir sebelumnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {interests.map((interest, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] h-full">
                <div className={`p-4 bg-gradient-to-r ${interest.color} rounded-lg mb-4 w-fit`}>
                  <div className={interest.textColor}>
                    {interest.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {interest.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Current Learning Focus</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {currentFocus.map((focus, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0" />
                <span className="text-gray-300">{focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Personal Philosophy</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              "Desain bukan sekedar tampilan, tapi tentang menyampaikan pesan, membangun koneksi, emosional, dan menciptakan pengalaman visual yang berdampak. Saya percaya bahwa kreativitas tumbuh dari eksplorasi tanpa henti, rasa ingin tahu, dan kepekaan terhadap detail. Setiap proyek adalah kesempatan untuk belajar, berinovasi, dan menciptakan sesuatu yang unik." 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;