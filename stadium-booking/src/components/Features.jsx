import { motion } from 'framer-motion';

const features = [
  { icon: "🏟️", title: "Smart Venues", desc: "Data-driven stadium maintenance and premium quality." },
  { icon: "⚡", title: "Instant Booking", desc: "No phone calls needed. Your slot is locked instantly." },
  { icon: "🛡️", title: "Secure Payments", desc: "Fully encrypted transactions with easy cancellations." },
  { icon: "📍", title: "Prime Locations", desc: "Premium stadiums across the major cities." }
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Header with Blue Accent */}
        <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
          <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">
            Engineered for <span className="text-blue-500">Performance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase italic">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}