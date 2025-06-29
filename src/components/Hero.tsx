import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center"
      aria-label="Hero section introduction"
    >
      {/* Animated Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8">
          {/* Animated greeting */}
          <div className="overflow-hidden">
            <h2 className="text-lg sm:text-xl text-gray-300 animate-fade-in-up font-light tracking-wider">
              Hello, I'm
            </h2>
          </div>

          {/* Main name with gradient */}
          <div className="overflow-hidden">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold animate-fade-in-up animation-delay-200 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              Moch Kahfi
            </h1>
          </div>

          {/* Professional title */}
          <div className="overflow-hidden">
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 animate-fade-in-up animation-delay-400 font-light">
              Graphic Design
            </h3>
          </div>

          {/* Description */}
          <div className="overflow-hidden">
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed">
              Mengubah ide sederhana menjadi karya visual yang menarik
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-800">
            <a
              href="#contact"
              aria-label="Send email"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-kahfi-2ab104297/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://id.pinterest.com/mochkahfi1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest profile"
              title="Pinterest profile"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="0"
                stroke="none"
                className="w-6 h-6 text-gray-300 group-hover:text-white"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.14 8.06 7.38 8.88-.1-.75-.19-1.9.04-2.72.21-.72 1.37-4.6 1.37-4.6s-.35-.7-.35-1.73c0-1.62.94-2.83 2.11-2.83 1 0 1.48.75 1.48 1.65 0 1-.64 2.5-.97 3.9-.28 1.18.6 2.14 1.78 2.14 2.14 0 3.8-2.26 3.8-5.52 0-2.86-2.06-4.87-5-4.87-3.41 0-5.41 2.56-5.41 5.21 0 1.06.4 2.2.9 2.82.1.12.11.22.08.34-.09.37-.3 1.18-.34 1.34-.05.22-.17.27-.39.16-1.45-.68-2.35-2.8-2.35-4.52 0-3.68 2.68-7.06 7.73-7.06 4.05 0 7.2 2.93 7.2 6.84 0 4.08-2.57 7.37-6.15 7.37-1.2 0-2.33-.62-2.72-1.35l-.74 2.82c-.27 1.05-1 2.36-1.49 3.16 1.12.35 2.3.54 3.53.54 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-1000">
            <button
              onClick={scrollToAbout}
              aria-label="Explore my work"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Explore My Work
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-float-delayed"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
