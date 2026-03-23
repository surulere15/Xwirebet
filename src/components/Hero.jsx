import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="luxury-bg min-h-screen flex flex-col justify-center items-center px-6 relative">
      
      {/* Atmospheric glow */}
      <div className="hero-glow" />

      {/* Liquid reflection */}
      <div className="liquid-layer" />

      {/* Cinematic vignette */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(
              ellipse 75% 75% at 50% 46%,
              transparent 32%,
              rgba(0, 0, 0, 0.42) 100%
            )
          `
        }}
      />

      {/* Glass horizon */}
      <div 
        className="absolute left-0 right-0 pointer-events-none z-[1]"
        style={{
          top: '63%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 18%, rgba(255,255,255,0.022) 35%, rgba(255,255,255,0.032) 50%, rgba(255,255,255,0.022) 65%, transparent 82%)'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        {/* Wordmark (strongest) */}
        <h1 className="wordmark text-6xl md:text-8xl lg:text-[9.5rem] font-display font-medium tracking-[0.12em] mb-9 leading-none select-none">
          WIREBET
        </h1>

        {/* Subtitle (clear focus) */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="subtitle-text text-[10.5px] md:text-[11.8px] uppercase tracking-[0.34em] font-medium mb-9"
        >
          PREDICTION MARKETS POWERED BY CRYPTO
        </motion.h2>
        
        {/* Layer 3 — Body copy (100% Polish) */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="body-text text-[14px] md:text-[15px] max-w-[24rem] font-sans leading-[2] tracking-wide mb-16"
        >
          A premium brand positioned at the intersection of crypto infrastructure and event markets.
        </motion.p>
        
        {/* Button stack */}
        <motion.div 
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.95 }}
          className="flex flex-col items-center gap-3 w-full max-w-[264px]"
        >
          <a 
            href="#" 
            className="glass-btn glass-btn-primary w-full py-[16px] text-white/[0.94] font-medium text-[10.5px] tracking-[0.24em] uppercase text-center relative z-10"
          >
            STRATEGIC ACCESS
          </a>
          <a 
            href="#" 
            className="glass-btn glass-btn-secondary w-full py-[16px] text-[rgba(215,215,224,0.78)] font-medium text-[10.5px] tracking-[0.24em] uppercase hover:text-white text-center relative z-10 transition-colors duration-700"
          >
            DOWNLOAD BRIEF
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom micro-copy */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.8, delay: 1.5 }}
        className="absolute bottom-10 left-0 w-full text-center z-10"
      >
        <span className="micro-copy text-[9px] uppercase tracking-[0.32em] font-medium">
          Private investment, partnership, and buyout discussions only.
        </span>
      </motion.div>
    </section>
  );
}
