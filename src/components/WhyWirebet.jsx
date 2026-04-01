import { motion } from 'framer-motion';

const reasons = [
  {
    label: "01",
    title: "Ownable One-Word .com",
    description: "Short, clean, memorable, and difficult to replace. The kind of asset that rarely becomes available at this level."
  },
  {
    label: "02",
    title: "Instant Category Signal",
    description: "Wirebet immediately connects to prediction, trading, and wager-based products. The market fit is obvious on first contact."
  },
  {
    label: "03",
    title: "Brand Authority on Day One",
    description: "A strong category name reduces friction with users, partners, investors, and acquirers. You launch with credibility, not against it."
  },
  {
    label: "04",
    title: "Built for Expansion",
    description: "Works across consumer betting products, event markets, trading interfaces, market infrastructure, and portfolio deployment. One name, multiple strategies."
  },
  {
    label: "05",
    title: "Scarcity Creates Leverage",
    description: "Premium one-word .com assets in emerging financial categories are limited. Once acquired, this positioning is gone."
  },
  {
    label: "06",
    title: "Not Just a Parked Domain",
    description: "Comes with strategic framing, market rationale, and acquisition-ready thinking. This is a real asset with real positioning behind it."
  }
];

export default function WhyWirebet() {
  return (
    <section className="py-32 md:py-40 px-6 bg-background text-center flex flex-col items-center border-t border-white/10">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-white/40 mb-10" />
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-wide text-white">Why Wirebet Wins</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-[#0f0f0f] border border-white/[0.08] p-12 hover:border-white/20 hover:bg-[#121212] transition-all duration-700 ease-out flex flex-col items-start text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-white/20 transition-all duration-700" />
              <span className="text-xs font-mono text-zinc-400 mb-6 group-hover:text-zinc-300 transition-colors">{reason.label} {'//'}</span>
              <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-4 tracking-wide">{reason.title}</h3>
              <p className="text-zinc-300 font-normal leading-relaxed tracking-wide text-base">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
