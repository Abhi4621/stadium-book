import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Bookings", value: "500+" },
  { label: "Stadiums", value: "50+" },
  { label: "Players", value: "10k+" },
  { label: "Rating", value: "4.9/5" }
];

export default function Stats() {
  return (
    <section className="py-12 bg-slate-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-black text-blue-500 mb-2">{stat.value}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}