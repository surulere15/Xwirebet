import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="luxury-bg min-h-screen flex flex-col justify-center items-center px-6 relative">
      
      <div className="hero-glow" />
      <div className="liquid-layer" />

      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(ellipse 75% 75% at 50% 46%, transparent 32%, rgba(0, 0, 0, 0.38) 100%)`
        }}
      />

      <div 
        className="absolute left-0 right-0 pointer-events-none z-[1]"
        style={{ top: '63%', height: '1px', background: 'linear-gradient(90deg, transparent 18%, rgba(255,255,255,0.024) 35%, rgba(255,255,255,0.035) 50%, rgba(255,255,255,0.024) 65%, transparent 82%)' }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-6 flex items-center gap-3 px-5 py-2.5 border border-white/[0.12] rounded-full bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-300 font-medium">Rare One-Word .com · Category-Aligned · Available for Acquisition</span>
        </motion.div>

        <h1 className="wordmark text-6xl md:text-8xl lg:text-[9.5rem] font-display font-medium tracking-[0.12em] mb-9 leading-none select-none">
          WIREBET
        </h1>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.55 }}
          className="subtitle-text text-[10.5px] md:text-[11.8px] uppercase tracking-[0.35em] font-medium mb-9"
        >
          A RARE ONE-WORD .COM BUILT FOR PREDICTION MARKETS, CRYPTO-NATIVE TRADING, AND MODERN WAGERING PLATFORMS
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.75 }}
          className="body-text text-[14px] md:text-[15.2px] max-w-[28rem] font-sans leading-[2.05] tracking-wide mb-16"
        >
          Instant category signal. Stronger recall. Premium market positioning from day one.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, delay: 1.05 }}
          className="flex flex-col items-center gap-5 w-full max-w-[280px]"
        >
          <a href="#contact" className="glass-btn glass-btn-primary w-full py-[16px] text-white font-medium text-[10.5px] tracking-[0.24em] uppercase text-center relative z-10">
            MAKE AN OFFER
          </a>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            Serious inquiries only. Founder-led review.
          </span>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.2, delay: 1.65 }}
        className="absolute bottom-11 left-0 w-full text-center z-10"
      >
        <span className="micro-copy text-[9.5px] uppercase tracking-[0.36em] font-medium">
          Serious acquisition discussions are limited. Once placed, this asset is unavailable.
        </span>
      </motion.div>
    </section>
  );
}
