import { motion } from 'framer-motion';

const targets = [
  { title: "Crypto Betting Operators", description: "Secure definitive market positioning and accelerate global user acquisition." },
  { title: "Prediction & Event Markets", description: "Anchor complex forecasting algorithms with a highly accessible consumer identity." },
  { title: "Tokenized Gaming Platforms", description: "Signal institutional-grade execution speed and instantaneous settlement architecture." },
  { title: "Web3 Infrastructure Brands", description: "Deliver comprehensive platform solutions under a tier-one moniker." }
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
          className="text-center flex flex-col items-center mb-20"
        >
          <div className="w-[1px] h-12 bg-white/30 mb-8" />
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-wide text-white">Target Acquirers</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {targets.map((target, idx) => (
            <div key={idx} className="bg-[#0a0a0a] border border-white/20 p-10 hover:border-white/50 hover:bg-[#111111] transition-all duration-500 flex flex-col justify-center min-h-[200px] shadow-xl">
               <h3 className="text-2xl font-medium tracking-wide text-white mb-4">{target.title}</h3>
               <p className="text-base font-normal text-zinc-300 tracking-wide leading-relaxed">{target.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
