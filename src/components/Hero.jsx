import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="luxury-bg min-h-screen flex flex-col justify-center items-center px-6 relative">
      
      {/* Atmospheric glow behind hero */}
      <div className="hero-glow" />

      {/* Liquid reflection at bottom */}
      <div className="liquid-layer" />

      {/* Edge vignette */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 80% at 50% 50%,
              transparent 40%,
              rgba(0, 0, 0, 0.4) 100%
            )
          `
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        {/* Wordmark */}
        <h1 className="wordmark text-6xl md:text-8xl lg:text-[9.5rem] font-display font-medium tracking-[0.12em] mb-7 leading-none">
          WIREBET
        </h1>

        {/* Subtitle */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-[10.5px] md:text-[11px] uppercase tracking-[0.35em] text-zinc-500 font-medium mb-7"
        >
          PREDICTION MARKETS POWERED BY CRYPTO
        </motion.h2>
        
        {/* Body */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-[13px] md:text-[14px] text-zinc-600 max-w-sm font-sans font-light leading-[2] tracking-wide mb-16"
        >
          A premium brand positioned at the intersection of crypto infrastructure and event markets.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex flex-col items-center gap-3 w-full max-w-[260px]"
        >
          <a 
            href="#" 
            className="glass-btn glass-btn-primary w-full py-[15px] text-white/90 font-medium text-[10.5px] tracking-[0.22em] uppercase text-center relative z-10"
          >
            STRATEGIC ACCESS
          </a>
          <a 
            href="#" 
            className="glass-btn glass-btn-secondary w-full py-[15px] text-zinc-500 font-medium text-[10.5px] tracking-[0.22em] uppercase hover:text-zinc-300 text-center relative z-10"
          >
            DOWNLOAD BRIEF
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom micro-copy */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-10 left-0 w-full text-center z-10"
      >
        <span className="micro-copy text-[9px] uppercase tracking-[0.3em] font-medium">
          Private investment, partnership, and buyout discussions only.
        </span>
      </motion.div>
    </section>
  );
}
