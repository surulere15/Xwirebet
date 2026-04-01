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

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 bg-[#030303] flex flex-col items-center border-t border-white/10">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-16 bg-white/40 mb-10" />
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-relaxed max-w-2xl mb-8 tracking-wide">
            Submit an Offer
          </h2>
          <p className="text-zinc-300 font-normal text-lg tracking-wide max-w-lg mb-10">
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
          className="w-full flex flex-col lg:flex-row gap-8"
        >
          <form action={import.meta.env.VITE_FORMSPREE_ENDPOINT} method="POST" className="flex-1 bg-[#0a0a0a] border border-white/[0.08] p-10 md:p-14 text-left space-y-10 hover:border-white/12 transition-all duration-700">
            <div className="space-y-4">
              <label className="text-sm uppercase tracking-[0.15em] font-medium text-zinc-300 block">Full Name</label>
              <input type="text" name="name" required className="w-full bg-[#111111] border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-white/60 focus:bg-[#151515] transition-all duration-500 rounded-none text-base font-normal tracking-wide" />
            </div>
            <div className="space-y-4">
              <label className="text-sm uppercase tracking-[0.15em] font-medium text-zinc-300 block">Corporate Email</label>
              <input type="email" name="email" required className="w-full bg-[#111111] border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-white/60 focus:bg-[#151515] transition-all duration-500 rounded-none text-base font-normal tracking-wide" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <label className="text-sm uppercase tracking-[0.15em] font-medium text-zinc-300 block">Offer Amount (USD)</label>
                <input type="text" name="offer_amount" required className="w-full bg-[#111111] border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-white/60 focus:bg-[#151515] transition-all duration-500 rounded-none text-base font-normal tracking-wide" placeholder="$XX,XXX" />
              </div>
              <div className="space-y-4">
                <label className="text-sm uppercase tracking-[0.15em] font-medium text-zinc-300 block">Buyer Type</label>
                <div className="relative">
                  <select name="buyer_type" className="w-full bg-[#111111] border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-white/60 focus:bg-[#151515] transition-all duration-500 appearance-none rounded-none text-base font-normal tracking-wide outline-none cursor-pointer">
                    {buyerTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#151515] text-zinc-300">{type.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm uppercase tracking-[0.15em] font-medium text-zinc-300 block">Timeline</label>
                <div className="relative">
                  <select name="timeline" className="w-full bg-[#111111] border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-white/60 focus:bg-[#151515] transition-all duration-500 appearance-none rounded-none text-base font-normal tracking-wide outline-none cursor-pointer">
                    {timelines.map((tl) => (
                      <option key={tl.value} value={tl.value} className="bg-[#151515] text-zinc-300">{tl.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-sm uppercase tracking-[0.15em] font-medium text-zinc-300 block">Message</label>
              <textarea name="message" rows="3" className="w-full bg-[#111111] border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-white/60 focus:bg-[#151515] transition-all duration-500 resize-none rounded-none text-base font-normal tracking-wide overflow-hidden" placeholder="Intended use, acquisition context, or relevant background."></textarea>
            </div>
            <div className="pt-2">
              <button type="submit" className="px-16 py-5 bg-white text-black font-semibold tracking-[0.1em] text-sm uppercase hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-500 w-full sm:w-auto text-center rounded-none shadow-xl">
                Submit Offer
              </button>
            </div>
          </form>

          <div className="lg:w-64 shrink-0 flex flex-col gap-8 text-left">
            <div className="bg-[#0a0a0a] border border-white/[0.08] p-8 hover:border-white/15 transition-all duration-500">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-4 font-medium">Process</p>
              <ul className="space-y-3 text-sm text-zinc-300 tracking-wide">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-0.5">01</span>
                  <span>Qualified submissions reviewed by founder</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-0.5">02</span>
                  <span>Strategic materials shared privately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-0.5">03</span>
                  <span>Direct discussion with aligned buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-0.5">04</span>
                  <span>Response within 24 hours</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0a0a0a] border border-white/[0.08] p-8 hover:border-white/15 transition-all duration-500">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-4 font-medium">Included</p>
              <ul className="space-y-3 text-sm text-zinc-300 tracking-wide">
                <li>wirebet.com domain</li>
                <li>Brand assets and design system</li>
                <li>Strategic acquisition brief</li>
                <li>Valuation narrative</li>
                <li>Market thesis documentation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
