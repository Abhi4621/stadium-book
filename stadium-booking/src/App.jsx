import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import BookingForm from './components/BookingForm';

export default function App() {
  return (
    <div className="bg-slate-950 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      {/* Visual Section Divider */}
      <div className="h-32 bg-gradient-to-b from-slate-950 to-slate-900"></div>
      <div id="features"><Features /></div>
      <BookingForm />
      
      <footer className="py-20 bg-slate-950 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-black text-white tracking-tighter uppercase italic">
            Stadium<span className="text-blue-500">Book</span>
          </div>
          <div className="flex gap-8 text-slate-500 font-bold text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Support</a>
          </div>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 StadiumBook. Crafted by Abhi Pandey.
          </p>
        </div>
      </footer>
    </div>
  );
}