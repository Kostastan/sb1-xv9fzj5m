import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Menu, MessageSquareMore, Zap, Target, Users, ChevronRight } from 'lucide-react';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-[#1a1a1a]/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/Circle LLC Logo Zoomed-modified (1).png" alt="Connect & Convert" className="h-8" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['Home', 'How It Works', 'Results', 'About', 'Book a Call'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                    className="text-[#D3D3D3] hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-[#D3D3D3]" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Cut Costs. Book More Calls. Reduce Staff.
            </h1>
            <p className="text-xl text-[#D3D3D3] mb-8 max-w-3xl mx-auto">
              Replace manual DM setters with AI systems that qualify leads, book calls, and boost efficiency. The future of sales automation is here.
            </p>
            <a 
              href="https://api.connectconvert.co/widget/booking/GE14yV4n3svoEAbjPmza"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center mx-auto inline-flex"
            >
              Book a Demo Call
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#212121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#D3D3D3]">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: MessageSquareMore, title: 'AI Integration', description: 'Seamlessly integrates with Instagram to handle all DM conversations' },
              { icon: Target, title: 'Smart Qualification', description: 'AI system qualifies prospects and proposes calls to qualified leads' },
              { icon: Zap, title: 'Custom Experience', description: 'Every step customized to match your voice, personality, and needs' }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-[#2a2a2a] border border-gray-800">
                <div className="bg-gradient-to-br from-pink-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#D3D3D3]">{title}</h3>
                <p className="text-[#D3D3D3]">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-[#D3D3D3] text-center mt-8 max-w-3xl mx-auto">
            Unlike human staff, our AI never makes mistakes, calls in sick, or needs time off - ensuring 24/7 consistent performance.
          </p>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#D3D3D3]">Results That Speak</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '30%', description: 'Increase in booking rate' },
              { metric: '75%', description: 'Reduction in operational costs' },
              { metric: '24/7', description: 'Lead generation & qualification' }
            ].map(({ metric, description }) => (
              <div key={metric} className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-blue-500/10 border border-gray-800">
                <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                  {metric}
                </div>
                <p className="text-[#D3D3D3]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-[#212121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#D3D3D3]">Our Vision</h2>
            <p className="text-xl text-[#D3D3D3] mb-8">
              Connect & Convert was built with a singular focus: empowering entrepreneurs to scale their businesses through intelligent automation. We believe in creating systems that work while you sleep.
            </p>
            <Users className="h-16 w-16 mx-auto text-blue-500" />
          </div>
        </div>
      </section>

      {/* Book a Call */}
      <section id="book-a-call" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#D3D3D3]">Ready to Scale?</h2>
            <p className="text-xl text-[#D3D3D3] mb-8">
              Book a demo call to see how Connect & Convert can transform your business with AI-powered lead generation.
            </p>
            <a 
              href="https://api.connectconvert.co/widget/booking/GE14yV4n3svoEAbjPmza"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center mx-auto inline-flex"
            >
              Schedule Your Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-[#D3D3D3]">
              © 2025 Connect & Convert LLC. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-[#D3D3D3] hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-sm text-[#D3D3D3] hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;