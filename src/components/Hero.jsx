import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background pt-32 pb-24 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="px-6 py-2.5 rounded-sm border border-white/10 bg-white/[0.02] text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-zinc-300">
            Private Acquisition Opportunity
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-7xl md:text-[9rem] font-display font-light tracking-tighter text-white mb-8 leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
        >
          WIREBET
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl font-display text-zinc-200 font-light mb-8 leading-relaxed max-w-3xl mx-auto tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          A Definitive Brand Asset for the Next Era of Decentralized Wagering and Prediction Markets
        </motion.p>
        
        <motion.p 
          className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-16 font-sans font-light leading-loose tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Positioned exclusively for tier-one operators scaling high-velocity transaction platforms and instant settlement infrastructure.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <a href="#contact" className="w-full sm:w-auto px-12 py-4 bg-white text-black font-medium tracking-wide hover:bg-zinc-200 transition-colors duration-500 text-center text-sm md:text-base border border-white">
            Initiate Discussion
          </a>
          <a href="#" className="w-full sm:w-auto px-12 py-4 bg-transparent border border-white/20 text-white font-medium tracking-wide hover:border-white transition-colors duration-500 text-center text-sm md:text-base">
            Review Asset Prospectus
          </a>
        </motion.div>
      </div>
    </section>
  );
}
