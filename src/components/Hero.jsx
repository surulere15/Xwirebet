import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center px-6 relative overflow-hidden">

      <div className="text-center z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.h1 
          className="text-5xl md:text-[7rem] lg:text-[8rem] font-display font-normal text-white tracking-[0.2em] leading-none mb-12 ml-6 md:ml-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          WIREBET
        </motion.h1>

        <motion.h2 
          className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-normal mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
        >
          PREDICTION MARKETS POWERED BY CRYPTO
        </motion.h2>
        
        <motion.p 
          className="text-[11px] md:text-xs text-zinc-500 max-w-md mx-auto font-sans font-light leading-Loose tracking-[0.05em] mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
        >
          A premium brand positioned at the intersection of crypto infrastructure and event markets.
        </motion.p>
        
        <motion.div 
          className="flex flex-col items-center gap-4 w-full max-w-[240px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.1, ease: 'easeOut' }}
        >
          <a href="#" className="w-full px-8 py-3 bg-transparent border border-white/20 text-white font-normal text-[9px] md:text-[10px] tracking-[0.25em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-700 text-center">
            STRATEGIC ACCESS
          </a>
          <a href="#" className="w-full px-8 py-3 bg-transparent border border-white/5 text-zinc-500 font-normal text-[9px] md:text-[10px] tracking-[0.25em] uppercase hover:border-white/20 hover:text-white transition-all duration-700 text-center">
            DOWNLOAD BRIEF
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <span className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-normal">
          STRATEGIC COLLABORATION DISCUSSIONS ONLY.
        </span>
      </motion.div>

    </section>
  );
}
