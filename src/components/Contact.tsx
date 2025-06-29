import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    setStatusMessage(null);

    // TODO: Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceID = 'service_4q8q12i'; // Updated with user provided service ID
    const templateID = 'template_6i3qryt'; // Updated with user provided template ID
    const userID = '6pAbUHI39zxnQ8IPW'; // Updated with user provided API key

    // Make sure your EmailJS template is configured to send emails to muhammadkahfi160204@gmail.com

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response: any) => {
        console.log('Email sent successfully:', response.status, response.text);
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSending(false);
      }, (error: any) => {
        console.error('Failed to send email:', error);
        setStatusMessage('Failed to send message. Please try again later.');
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <h2 className="text-white-400 mt-6 max-w-2xl mx-auto">
                Punya ide brand? Butuh desain yang kuat dan Estetika?
              </h2>
              <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                Saya selalu terbuka untuk kolaborasi, Freelance project, atau sekedar ngobrol tentang desain. Yuk, ngobrol dan lihat bagaimana kita bisa bikin visual yang impactful bersama!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">muhammadkahfi160204@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+62 (858) 6323-5422</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">Gading Serpong, Tangerang-Banten</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/muhammad-kahfi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a 
                  href="https://instagram.com/kahfi.graphy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-6 h-6 text-gray-400 group-hover:text-white" />
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
            <a 
                  href="https://github.com/mochkahfi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project Collaboration Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-center text-white">{statusMessage}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2025 Moch Kahfi. Portofolio Freelance Graphic Design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
