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
          className="mb-6 flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/[0.02]"
        >
          <span className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse"></span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400">Premium .com · Dubai-Based · Pre-Revenue</span>
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
          PREDICTION MARKETS POWERED BY CRYPTO
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.75 }}
          className="body-text text-[14px] md:text-[15.2px] max-w-[24.5rem] font-sans leading-[2.05] tracking-wide mb-16"
        >
          A premium brand positioned at the intersection of crypto infrastructure and event markets. This domain represents a rare .com opportunity for the right operator.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, delay: 1.05 }}
          className="flex flex-col items-center gap-3 w-full max-w-[264px]"
        >
          <a href="#contact" className="glass-btn glass-btn-primary w-full py-[16px] text-white/[0.95] font-medium text-[10.5px] tracking-[0.24em] uppercase text-center relative z-10">
            FOUNDER ACCESS
          </a>
          <a href="#contact" className="glass-btn glass-btn-secondary w-full py-[16px] text-[rgba(220,220,230,0.8)] font-medium text-[10.5px] tracking-[0.24em] uppercase hover:text-white text-center relative z-10 transition-colors duration-700">
            STRATEGIC BRIEF
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.2, delay: 1.65 }}
        className="absolute bottom-11 left-0 w-full text-center z-10"
      >
        <span className="micro-copy text-[9.5px] uppercase tracking-[0.36em] font-medium">
          Private investment, partnership, and acquisitions discussions only.
        </span>
      </motion.div>
    </section>
  );
}
