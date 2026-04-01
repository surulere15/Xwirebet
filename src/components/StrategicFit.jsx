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

const CARD = "bg-[#0b0b0b] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-700 relative overflow-hidden group";

export default function StrategicFit() {
  return (
    <section className="pt-20 pb-16 px-6 bg-[#030303] flex flex-col items-center border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-10 bg-white/[0.20] mb-7" />
          <h2 className="text-[2rem] md:text-[2.5rem] font-display font-medium tracking-[0.01em] text-white">Who Should Own This</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {acquirers.map((acquirer, idx) => (
            <div key={idx} className={`${CARD} p-8`}>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-white/[0.15] transition-all duration-700" />
              <div className="w-8 h-8 bg-[#0d0d0d] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-white/[0.15] transition-all duration-500">
                <div className="w-2 h-2 bg-white/[0.15] group-hover:bg-white/50 transition-all duration-500" />
              </div>
              <h3 className="text-[17px] font-medium tracking-[0.01em] text-white mb-3">{acquirer.title}</h3>
              <p className="text-[13px] text-zinc-400 leading-[1.65] tracking-[0.01em] max-w-[40ch]">{acquirer.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
