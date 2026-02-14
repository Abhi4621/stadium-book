import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', sport: 'Cricket', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="booking" className="py-24 bg-slate-950 px-6 relative overflow-hidden">
      <div className="bg-stadium-glow absolute inset-0"></div>
      
      <motion.div 
        className="max-w-4xl mx-auto glass-card rounded-[3rem] p-10 md:p-16 relative z-10"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      >
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div key="form" exit={{ opacity: 0, scale: 0.9 }}>
              <h2 className="text-4xl font-black text-white text-center mb-12 uppercase italic">Reserve Your <span className="text-blue-500">Slot</span></h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-2">Full Name</label>
                  <input 
                    required type="text" 
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-2">Sport Type</label>
                  <select className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none appearance-none">
                    <option>Cricket</option>
                    <option>Football</option>
                    <option>Tennis</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-2">Preferred Date</label>
                  <input required type="date" className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none [color-scheme:dark]" />
                </div>
                <button 
                  disabled={loading}
                  className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/40 uppercase tracking-widest flex justify-center items-center"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : "Confirm Booking"}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10"
            >
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-3xl font-black text-white mb-2 uppercase italic">Slot Confirmed!</h3>
              <p className="text-slate-400">Get ready to play like a pro, {form.name}.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}