import { motion } from 'framer-motion';

const acquirers = [
  {
    title: "Prediction Market Operators",
    description: "If you need a name that explains the category instantly and carries stronger front-end conviction, Wirebet gives you that immediately."
  },
  {
    title: "Crypto Trading Platforms",
    description: "For event-based or outcome-driven products, the name creates a sharper consumer signal than abstract or invented branding."
  },
  {
    title: "Gaming and Wagering Brands",
    description: "A modern, premium identity that does not sound legacy. Wirebet gives you a clean break into prediction markets and crypto-native wagering."
  },
  {
    title: "Web3 Companies Going Consumer",
    description: "You have the infrastructure. You need the front-facing name. Wirebet bridges technical credibility with consumer-grade brand power."
  }
];

export default function StrategicFit() {
  return (
    <section className="py-32 md:py-40 px-6 bg-background flex flex-col items-center border-t border-white/10">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center mb-24"
        >
          <div className="w-[1px] h-16 bg-white/40 mb-10" />
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-wide text-white">Who Should Own This</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {acquirers.map((acquirer, idx) => (
            <div key={idx} className="bg-[#0f0f0f] border border-white/[0.08] p-12 hover:border-white/20 hover:bg-[#121212] transition-all duration-700 ease-out flex flex-col justify-start min-h-[200px] relative group">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-white/20 transition-all duration-700" />
               <div className="w-12 h-12 rounded-none bg-[#111] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:border-white/30 group-hover:bg-[#161616] transition-all duration-500">
                 <div className="w-3 h-3 bg-white/20 group-hover:bg-white/60 transition-all duration-500" />
               </div>
               <h3 className="text-2xl md:text-3xl font-medium tracking-wide text-white mb-5">{acquirer.title}</h3>
               <p className="text-base md:text-lg font-normal text-zinc-300 tracking-wide leading-relaxed">{acquirer.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
