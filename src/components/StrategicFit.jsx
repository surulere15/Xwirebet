import { motion } from 'framer-motion';

const acquirers = [
  {
    title: "Prediction Market Operators",
    description: "Need a name that explains the category instantly. Wirebet gives you front-end conviction on day one."
  },
  {
    title: "Crypto Trading Platforms",
    description: "Event-based and outcome-driven products need sharper consumer signal than abstract or invented branding."
  },
  {
    title: "Gaming and Wagering Brands",
    description: "A modern, premium identity that does not sound legacy. Clean entry into prediction markets and crypto wagering."
  },
  {
    title: "Web3 Companies Going Consumer",
    description: "You have the infrastructure. Wirebet bridges technical credibility with consumer-grade brand power."
  }
];

const CARD = "bg-[#0c0c0c] border border-white/[0.04] hover:border-white/[0.09] transition-all duration-700 relative overflow-hidden group";

export default function StrategicFit() {
  return (
    <section className="pt-20 pb-16 px-6 bg-[#030303] flex flex-col items-center border-t border-white/[0.05]">
      <div className="max-w-[1100px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-10 bg-white/[0.15] mb-7" />
          <h2 className="text-[2rem] md:text-[2.5rem] font-display font-medium tracking-[0.01em] text-white">Who Should Own This</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {acquirers.map((acquirer, idx) => (
            <div key={idx} className={`${CARD} p-7`}>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:via-white/[0.10] transition-all duration-700" />
              <div className="w-7 h-7 bg-[#0e0e0e] border border-white/[0.04] flex items-center justify-center mb-5 group-hover:border-white/[0.10] transition-all duration-500">
                <div className="w-[6px] h-[6px] bg-white/[0.12] group-hover:bg-white/40 transition-all duration-500" />
              </div>
              <h3 className="text-[15px] font-medium tracking-[0.01em] text-white mb-2.5">{acquirer.title}</h3>
              <p className="text-[12.5px] text-zinc-500 leading-[1.6] tracking-[0.01em]">{acquirer.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
