import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0 stars-animation opacity-20"></div>
      
      {/* Stadium Background with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/60 to-[#0F172A]"></div>
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic"
        >
          Book Your Stadium. <br/> <span className="text-blue-500 neon-text">Play Like a Pro.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto"
        >
          Instant bookings for premium sports arenas across your city.
        </motion.p>

        <div className="flex gap-6 justify-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking" 
            className="bg-blue-600 neon-glow text-white px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all"
          >
            Book Now
          </motion.a>
          <button className="glass-card text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all">
            Explore Venues
          </button>
        </div>
      </div>
    </header>
  );
}