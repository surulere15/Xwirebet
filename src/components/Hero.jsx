import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="luxury-bg min-h-screen flex flex-col justify-center items-center px-6 relative">
      
      {/* Triple-layer atmospheric glow */}
      <div className="hero-glow" />

      {/* Liquid reflection floor */}
      <div className="liquid-layer" />

      {/* Cinematic vignette — tighter, darker */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 70% at 50% 48%,
              transparent 25%,
              rgba(0, 0, 0, 0.55) 100%
            )
          `
        }}
      />

      {/* Glass horizon — spatial depth marker */}
      <div 
        className="absolute left-0 right-0 pointer-events-none z-[1]"
        style={{
          top: '63%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 18%, rgba(255,255,255,0.015) 35%, rgba(255,255,255,0.025) 50%, rgba(255,255,255,0.015) 65%, transparent 82%)'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        {/* Wordmark */}
        <h1 className="wordmark text-6xl md:text-8xl lg:text-[9.5rem] font-display font-medium tracking-[0.12em] mb-7 leading-none select-none">
          WIREBET
        </h1>

        {/* Subtitle */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="subtitle-text text-[10.5px] md:text-[11px] uppercase tracking-[0.35em] font-medium mb-7"
        >
          PREDICTION MARKETS POWERED BY CRYPTO
        </motion.h2>
        
        {/* Body */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="body-text text-[13px] md:text-[14px] max-w-sm font-sans font-light leading-[2] tracking-wide mb-16"
        >
          A premium brand positioned at the intersection of crypto infrastructure and event markets.
        </motion.p>
        
        {/* Button stack */}
        <motion.div 
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.95 }}
          className="flex flex-col items-center gap-3 w-full max-w-[258px]"
        >
          <a 
            href="#" 
            className="glass-btn glass-btn-primary w-full py-[15px] text-white/80 font-medium text-[10.5px] tracking-[0.22em] uppercase text-center relative z-10"
          >
            STRATEGIC ACCESS
          </a>
          <a 
            href="#" 
            className="glass-btn glass-btn-secondary w-full py-[15px] text-zinc-500 font-medium text-[10.5px] tracking-[0.22em] uppercase hover:text-zinc-400 text-center relative z-10 transition-colors duration-700"
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
        <span className="micro-copy text-[9px] uppercase tracking-[0.3em] font-medium">
          Private investment, partnership, and buyout discussions only.
        </span>
      </motion.div>
    </section>
  );
}
