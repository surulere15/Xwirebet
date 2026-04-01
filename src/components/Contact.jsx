import { motion } from 'framer-motion';

const buyerTypes = [
  { value: "", label: "Select buyer type..." },
  { value: "operator", label: "Operator" },
  { value: "investor", label: "Investor" },
  { value: "strategic", label: "Strategic Acquirer" },
  { value: "broker", label: "Broker / Advisor" },
];

const timelines = [
  { value: "", label: "Select timeline..." },
  { value: "immediate", label: "Immediate" },
  { value: "30days", label: "Within 30 days" },
  { value: "60days", label: "60+ days" },
];

const processSteps = ["Inquiry", "Qualification", "Materials", "Discussion"];

const includedItems = [
  "wirebet.com domain",
  "Brand assets and design system",
  "Strategic acquisition brief",
  "Valuation narrative",
  "Market thesis documentation",
];

export default function Contact() {
  return (
    <section id="contact" className="pt-28 pb-20 px-6 bg-[#030303] flex flex-col items-center border-t border-white/10">
      <div className="max-w-[1120px] mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-12 bg-white/30 mb-8" />
          <h2 className="text-3xl md:text-[2.75rem] font-display font-medium text-white leading-tight max-w-xl mb-6 tracking-wide">
            Submit an Offer
          </h2>
          <p className="text-zinc-300 font-normal text-[15px] tracking-wide max-w-md mb-8 leading-relaxed">
            Serious acquisition interest only. Qualified submissions receive direct founder response and full strategic materials.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            {processSteps.map((step, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span>{step}</span>
                {idx < processSteps.length - 1 && (
                  <span className="text-zinc-600">→</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start"
        >
          <form action={import.meta.env.VITE_FORMSPREE_ENDPOINT} method="POST" className="bg-[#0a0a0a] border border-white/[0.07] p-10 md:p-12 text-left hover:border-white/12 transition-all duration-700">

            <div className="space-y-3 mb-8">
              <label className="text-[11px] uppercase tracking-[0.18em] font-medium text-zinc-400 block">Full Name</label>
              <input type="text" name="name" required className="w-full bg-[#111111] border border-white/[0.12] px-5 py-[14px] text-white text-[15px] focus:outline-none focus:border-white/40 focus:bg-[#141414] transition-all duration-500 rounded-none tracking-wide" />
            </div>

            <div className="space-y-3 mb-8">
              <label className="text-[11px] uppercase tracking-[0.18em] font-medium text-zinc-400 block">Corporate Email</label>
              <input type="email" name="email" required className="w-full bg-[#111111] border border-white/[0.12] px-5 py-[14px] text-white text-[15px] focus:outline-none focus:border-white/40 focus:bg-[#141414] transition-all duration-500 rounded-none tracking-wide" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-5 mb-8">
              <div className="space-y-3">
                <label className="text-[11px] uppercase tracking-[0.18em] font-medium text-zinc-400 block">Offer Amount (USD)</label>
                <input type="text" name="offer_amount" required className="w-full bg-[#111111] border border-white/[0.12] px-5 py-[14px] text-white text-[15px] focus:outline-none focus:border-white/40 focus:bg-[#141414] transition-all duration-500 rounded-none tracking-wide" placeholder="$XX,XXX" />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] uppercase tracking-[0.18em] font-medium text-zinc-400 block">Buyer Type</label>
                <div className="relative">
                  <select name="buyer_type" className="w-full bg-[#111111] border border-white/[0.12] px-5 py-[14px] text-white text-[15px] focus:outline-none focus:border-white/40 focus:bg-[#141414] transition-all duration-500 appearance-none rounded-none tracking-wide outline-none cursor-pointer">
                    {buyerTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#141414] text-zinc-300">{type.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] uppercase tracking-[0.18em] font-medium text-zinc-400 block">Timeline</label>
                <div className="relative">
                  <select name="timeline" className="w-full bg-[#111111] border border-white/[0.12] px-5 py-[14px] text-white text-[15px] focus:outline-none focus:border-white/40 focus:bg-[#141414] transition-all duration-500 appearance-none rounded-none tracking-wide outline-none cursor-pointer">
                    {timelines.map((tl) => (
                      <option key={tl.value} value={tl.value} className="bg-[#141414] text-zinc-300">{tl.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-10">
              <label className="text-[11px] uppercase tracking-[0.18em] font-medium text-zinc-400 block">Message</label>
              <textarea name="message" rows="3" className="w-full bg-[#111111] border border-white/[0.12] px-5 py-[14px] text-white text-[15px] focus:outline-none focus:border-white/40 focus:bg-[#141414] transition-all duration-500 resize-none rounded-none tracking-wide overflow-hidden leading-relaxed" placeholder="Intended use, acquisition context, or relevant background."></textarea>
            </div>

            <div className="border-t border-white/[0.06] pt-8">
              <button type="submit" className="px-20 py-[18px] bg-white text-black font-semibold tracking-[0.12em] text-[13px] uppercase hover:bg-zinc-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 w-full sm:w-auto text-center rounded-none shadow-xl">
                Submit Offer
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-6 text-left">
            <div className="bg-[#0a0a0a] border border-white/[0.07] p-8 hover:border-white/12 transition-all duration-500">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-5 font-medium">Process</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-[11px] text-zinc-600 font-mono mt-px shrink-0">01</span>
                  <span className="text-[13px] text-zinc-300 tracking-wide leading-relaxed">Qualified submissions reviewed by founder</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[11px] text-zinc-600 font-mono mt-px shrink-0">02</span>
                  <span className="text-[13px] text-zinc-300 tracking-wide leading-relaxed">Strategic materials shared privately</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[11px] text-zinc-600 font-mono mt-px shrink-0">03</span>
                  <span className="text-[13px] text-zinc-300 tracking-wide leading-relaxed">Direct discussion with aligned buyers</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[11px] text-zinc-600 font-mono mt-px shrink-0">04</span>
                  <span className="text-[13px] text-zinc-300 tracking-wide leading-relaxed">Response within 24 hours</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0a0a0a] border border-white/[0.07] p-8 hover:border-white/12 transition-all duration-500">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-5 font-medium">Included</p>
              <ul className="space-y-3">
                {includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-[3px] h-[3px] rounded-full bg-zinc-600 mt-[7px] shrink-0" />
                    <span className="text-[13px] text-zinc-300 tracking-wide leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
