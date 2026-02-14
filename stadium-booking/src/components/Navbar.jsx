import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black text-white tracking-tighter uppercase italic">
          Stadium<span className="text-blue-500">Book</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-300">
          <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
          <a href="#booking" className="hover:text-blue-500 transition-colors">Book</a>
          <a href="#testimonials" className="hover:text-blue-500 transition-colors">Reviews</a>
        </div>
        <a href="#booking" className="bg-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all">
          Join Now
        </a>
      </div>
    </nav>
  );
}