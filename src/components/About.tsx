import React from 'react';
import { Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-white/10 flex items-center justify-center">
              <img src="/Asset/AboutMe.png" alt="Profile" className="w-full h-auto rounded-full object-cover shadow-lg" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                Seorang Freelance Graphic Designer dengan lebih dari 3 tahun pengalaman di dunia desain kreatif. Selama perjalanan karier saya, saya telah membantu berbagai brand dan bisnis menciptakan identitas visual yang kuat dan menarik, mulai dari desain logo, kemasan produk, hingga konten visual untuk media sosial.
              </p>
              <p className="leading-relaxed">
                Saya percaya bahwa desain bukan sekadar setetika, tapi cara bercerita dan membangun koneksi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Target className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Mission</h3>
                <p className="text-gray-400 text-sm">
                  Mengubah ide menjadi solusi visual berdampak. Dengan pendekatan startegis dan teknologi, saya membantu brand tampil beda dan relevan.
                </p>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Heart className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Values</h3>
                <p className="text-gray-400 text-sm">
                Inovasi tanpa batas,
                Kolaborasi yang kuat,
                Pembelajaran berlanjut,
                </p>
                <p className="text-gray-400 text-sm">
                Saya percaya dalam membangun hubungan jangka panjang, bukan hanya sekedar proyek sesaat.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
