import { motion } from 'framer-motion';

const acquirers = [
  {
    title: "Prediction Market Operators",
    description: "Need a name that explains the category instantly. Wirebet gives you front-end conviction on day one.",
    image: "/images/fit/operators.png"
  },
  {
    title: "Crypto Trading Platforms",
    description: "Event-based and outcome-driven products need sharper consumer signal than abstract or invented branding.",
    image: "/images/fit/crypto.png"
  },
  {
    title: "Gaming and Wagering Brands",
    description: "A modern, premium identity that does not sound legacy. Clean entry into prediction markets and crypto wagering.",
    image: "/images/fit/gaming.png"
  },
  {
    title: "Web3 Companies Going Consumer",
    description: "You have the infrastructure. Wirebet bridges technical credibility with consumer-grade brand power.",
    image: "/images/fit/web3.png"
  }
];

const CARD = "bg-[#0c0c0c] border border-white/[0.04] hover:border-white/[0.09] transition-all duration-700 relative overflow-hidden group flex flex-col";

export default function StrategicFit() {
  return (
    <section className="pt-24 pb-20 px-6 bg-[#030303] flex flex-col items-center border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-10 bg-white/[0.15] mb-7" />
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-display font-medium tracking-[0.01em] text-white">Who Should Own This</h2>
          <p className="mt-4 text-zinc-500 text-[14px] tracking-wide max-w-xl">Strategic alignment for entities seeking category authority in prediction markets and digital wagering.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {acquirers.map((acquirer, idx) => (
            <div key={idx} className={`${CARD}`}>
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden border-b border-white/[0.04]">
                <img 
                  src={acquirer.image} 
                  alt={acquirer.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60" />
                
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-black/40 backdrop-blur-md border border-white/[0.1] flex items-center justify-center">
                  <div className="w-[6px] h-[6px] bg-white/40" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 group-hover:bg-white/[0.01] transition-colors duration-700 flex-grow">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:via-white/[0.10] transition-all duration-700" />
                
                <h3 className="text-[17px] font-medium tracking-[0.01em] text-white mb-3 flex items-center gap-3">
                  {acquirer.title}
                  <span className="w-4 h-[1px] bg-white/10 group-hover:bg-white/30 transition-all duration-700" />
                </h3>
                <p className="text-[13px] text-zinc-500 leading-[1.7] tracking-wide font-light">{acquirer.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
