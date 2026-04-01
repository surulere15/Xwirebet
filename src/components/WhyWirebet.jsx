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

const CARD = "bg-[#0b0b0b] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-700 relative overflow-hidden group";

export default function WhyWirebet() {
  return (
    <section className="pt-20 pb-16 px-6 bg-background flex flex-col items-center border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-10 bg-white/[0.20] mb-7" />
          <h2 className="text-[2rem] md:text-[2.5rem] font-display font-medium tracking-[0.01em] text-white">Why Wirebet Wins</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
              className={`${CARD} p-8`}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-white/[0.15] transition-all duration-700" />
              <span className="text-[10px] font-mono text-zinc-600 mb-4 block">{reason.label}</span>
              <h3 className="text-lg font-display font-medium text-white mb-3 tracking-[0.01em]">{reason.title}</h3>
              <p className="text-[13px] text-zinc-400 leading-[1.65] tracking-[0.01em] max-w-[38ch]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
