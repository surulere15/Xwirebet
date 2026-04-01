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

const FIELD = "w-full bg-[#111] border border-white/[0.12] px-5 py-[13px] text-white text-[15px] focus:outline-none focus:border-white/35 focus:bg-[#141414] transition-all duration-500 rounded-none tracking-wide";
const LABEL = "text-[11px] uppercase tracking-[0.18em] font-medium text-zinc-500 block mb-3";
const CARD = "bg-[#0b0b0b] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-700";

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-16 px-6 bg-[#030303] flex flex-col items-center border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-10 bg-white/[0.20] mb-7" />
          <h2 className="text-[2rem] md:text-[2.5rem] font-display font-medium text-white leading-[1.15] max-w-lg mb-5 tracking-[0.01em]">
            Submit an Offer
          </h2>
          <p className="text-zinc-400 font-normal text-[14px] tracking-[0.02em] max-w-md mb-7 leading-[1.7]">
            Serious acquisition interest only. Qualified submissions receive direct founder response and full strategic materials.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[9.5px] uppercase tracking-[0.25em] text-zinc-500">
            {processSteps.map((step, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span>{step}</span>
                {idx < processSteps.length - 1 && (
                  <span className="text-zinc-700">→</span>
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
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-5 items-start"
        >
          <form action={import.meta.env.VITE_FORMSPREE_ENDPOINT} method="POST" className={`${CARD} p-9 md:p-10 text-left`}>

            <div className="mb-7">
              <label className={LABEL}>Full Name</label>
              <input type="text" name="name" required className={FIELD} />
            </div>

            <div className="mb-7">
              <label className={LABEL}>Corporate Email</label>
              <input type="email" name="email" required className={FIELD} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-4 mb-7">
              <div>
                <label className={LABEL}>Offer Amount (USD)</label>
                <input type="text" name="offer_amount" required className={FIELD} placeholder="$XX,XXX" />
              </div>
              <div>
                <label className={LABEL}>Buyer Type</label>
                <div className="relative">
                  <select name="buyer_type" className={`${FIELD} appearance-none outline-none cursor-pointer`}>
                    {buyerTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#141414] text-zinc-300">{type.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-600">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className={LABEL}>Timeline</label>
                <div className="relative">
                  <select name="timeline" className={`${FIELD} appearance-none outline-none cursor-pointer`}>
                    {timelines.map((tl) => (
                      <option key={tl.value} value={tl.value} className="bg-[#141414] text-zinc-300">{tl.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-600">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-9">
              <label className={LABEL}>Message</label>
              <textarea name="message" rows="3" className={`${FIELD} resize-none overflow-hidden leading-relaxed`} placeholder="Intended use, acquisition context, or relevant background."></textarea>
            </div>

            <div className="border-t border-white/[0.05] pt-7 flex items-center justify-between">
              <button type="submit" className="px-16 py-[16px] bg-white text-black font-semibold tracking-[0.12em] text-[12px] uppercase hover:bg-zinc-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition-all duration-500 rounded-none">
                Submit Offer
              </button>
              <span className="text-[9.5px] uppercase tracking-[0.2em] text-zinc-600 hidden sm:block">Qualified acquirers only</span>
            </div>
          </form>

          <div className="flex flex-col gap-5 text-left">
            <div className={`${CARD} p-7`}>
              <p className="text-[9.5px] uppercase tracking-[0.25em] text-zinc-600 mb-5 font-medium">Process</p>
              <ul className="space-y-3.5">
                {[
                  "Qualified submissions reviewed by founder",
                  "Strategic materials shared privately",
                  "Direct discussion with aligned buyers",
                  "Response within 24 hours",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="text-[10px] text-zinc-700 font-mono mt-[2px] shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-[12.5px] text-zinc-400 tracking-[0.01em] leading-[1.55]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${CARD} p-7`}>
              <p className="text-[9.5px] uppercase tracking-[0.25em] text-zinc-600 mb-5 font-medium">Included</p>
              <ul className="space-y-2.5">
                {includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-[3px] h-[3px] rounded-full bg-zinc-700 mt-[6px] shrink-0" />
                    <span className="text-[12.5px] text-zinc-400 tracking-[0.01em] leading-[1.55]">{item}</span>
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
