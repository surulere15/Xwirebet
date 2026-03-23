import { motion } from 'framer-motion';

const features = [
  {
    title: "Brand Authority",
    description: "A concise, universally recognizable identity built for global scale and massive market visibility."
  },
  {
    title: "Market Alignment",
    description: "Precision-engineered for on-chain wagering, fast-settlement forecasting, and transaction flow."
  },
  {
    title: "Premium Transferability",
    description: "Establishes immediate operational gravity and high execution leverage upon acquisition."
  }
];

export default function WhyWirebet() {
  return (
    <section className="py-32 md:py-40 px-6 bg-background text-center flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-white/30 mb-8" />
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-wide text-white">Strategic Advantage</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-[#0a0a0a] border border-white/20 p-10 hover:border-white/40 hover:bg-[#111111] transition-all duration-500 flex flex-col items-center text-center shadow-2xl"
            >
              <h3 className="text-xl font-display font-medium text-white mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-zinc-300 font-normal leading-relaxed tracking-wide text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
