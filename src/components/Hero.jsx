import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#050505] flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Ultra subtle ambient center lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="text-center z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.h1 
          className="text-5xl md:text-[8rem] lg:text-[10rem] font-display font-medium text-white tracking-[0.15em] leading-none mb-8 md:mb-12 ml-4 md:ml-8"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          WIREBET
        </motion.h1>

        <motion.h2 
          className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-zinc-400 font-medium mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
        >
          PREDICTION MARKETS POWERED BY CRYPTO
        </motion.h2>
        
        <motion.p 
          className="text-sm md:text-base text-zinc-500 max-w-lg mx-auto font-sans font-normal leading-relaxed tracking-wide mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
        >
          A premium brand positioned at the intersection of crypto infrastructure and event markets.
        </motion.p>
        
        <motion.div 
          className="flex flex-col items-center gap-5 w-full max-w-[280px] mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
        >
          <a href="#" className="w-full px-10 py-4 border border-white/60 text-white font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500 text-center">
            STRATEGIC ACCESS
          </a>
          <a href="#" className="w-full px-10 py-4 border border-white/10 text-zinc-400 font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase hover:border-white/30 hover:text-white transition-colors duration-500 text-center">
            DOWNLOAD BRIEF
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      >
        <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-medium">
          STRATEGIC COLLABORATION DISCUSSIONS ONLY.
        </span>
      </motion.div>

    </section>
  );
}
