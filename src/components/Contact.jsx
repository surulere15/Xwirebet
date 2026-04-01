import { motion } from 'framer-motion';
import { useEffect } from 'react';

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

const FIELD = "w-full bg-[#0e0e0e] border border-white/[0.08] px-5 py-[13px] text-white text-[14px] focus:outline-none focus:border-white/30 focus:bg-[#121212] transition-all duration-500 rounded-none tracking-wide";
const LABEL = "text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-600 block mb-2.5";
const CARD = "bg-[#0c0c0c] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-700";

export default function Contact() {
  useEffect(() => {
    const form = document.getElementById('offer-form');
    const statusEl = document.getElementById('form-status');
    const btn = document.getElementById('submit-btn');

    if (!form) return;

    const handleSubmit = async (e) => {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = 'SUBMITTING...';

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('/api/submit-offer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await res.json();

        if (res.ok) {
          statusEl.className = 'mb-4 text-center text-[12px] tracking-[0.05em] py-3 text-green-400 bg-green-400/5 border border-green-400/10';
          statusEl.textContent = '✓ Offer submitted. Check your email for confirmation.';
          form.reset();
        } else {
          statusEl.className = 'mb-4 text-center text-[12px] tracking-[0.05em] py-3 text-red-400 bg-red-400/5 border border-red-400/10';
          statusEl.textContent = result.error || 'Submission failed. Please try again.';
        }
      } catch {
        statusEl.className = 'mb-4 text-center text-[12px] tracking-[0.05em] py-3 text-red-400 bg-red-400/5 border border-red-400/10';
        statusEl.textContent = 'Network error. Please email founder@wirebet.com directly.';
      }

      btn.disabled = false;
      btn.textContent = 'SUBMIT OFFER';
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

  return (
    <section id="contact" className="pt-20 pb-14 px-6 bg-[#030303] flex flex-col items-center border-t border-white/[0.05]">
      <div className="max-w-[1080px] mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="w-[1px] h-10 bg-white/[0.15] mb-7" />
          <h2 className="text-[2rem] md:text-[2.5rem] font-display font-medium text-white leading-[1.15] max-w-lg mb-5 tracking-[0.01em]">
            Submit an Offer
          </h2>
          <p className="text-zinc-500 font-normal text-[13px] tracking-[0.02em] max-w-md mb-6 leading-[1.7]">
            Serious acquisition interest only. Qualified submissions receive direct founder response and full strategic materials.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
            {processSteps.map((step, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span>{step}</span>
                {idx < processSteps.length - 1 && (
                  <span className="text-zinc-800">→</span>
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
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-4 items-start"
        >
          <form id="offer-form" className={`${CARD} p-8 md:p-9 text-left`}>

            <div id="form-status" className="hidden mb-4 text-center text-[12px] tracking-[0.05em] py-3"></div>

            <div className="mb-6">
              <label className={LABEL}>Full Name</label>
              <input type="text" name="name" required className={FIELD} />
            </div>

            <div className="mb-6">
              <label className={LABEL}>Corporate Email</label>
              <input type="email" name="email" required className={FIELD} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-4 mb-6">
              <div>
                <label className={LABEL}>Offer Amount (USD)</label>
                <input type="text" name="offer_amount" required className={FIELD} placeholder="$XX,XXX" />
              </div>
              <div>
                <label className={LABEL}>Buyer Type</label>
                <div className="relative">
                  <select name="buyer_type" className={`${FIELD} appearance-none outline-none cursor-pointer`}>
                    {buyerTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#121212] text-zinc-300">{type.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-700">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className={LABEL}>Timeline</label>
                <div className="relative">
                  <select name="timeline" className={`${FIELD} appearance-none outline-none cursor-pointer`}>
                    {timelines.map((tl) => (
                      <option key={tl.value} value={tl.value} className="bg-[#121212] text-zinc-300">{tl.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-700">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className={LABEL}>Message</label>
              <textarea name="message" rows="3" className={`${FIELD} resize-none overflow-hidden leading-relaxed`} placeholder="Intended use, acquisition context, or relevant background."></textarea>
            </div>

            <div className="border-t border-white/[0.04] pt-6 flex items-center justify-between">
              <button type="submit" id="submit-btn" className="px-14 py-[15px] bg-white text-black font-semibold tracking-[0.12em] text-[11px] uppercase hover:bg-zinc-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 rounded-none">
                Submit Offer
              </button>
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-700 hidden sm:block">Qualified acquirers only</span>
            </div>
          </form>

          <div className="flex flex-col gap-4 text-left">
            <div className={`${CARD} p-6`}>
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-700 mb-4 font-medium">Process</p>
              <ul className="space-y-3">
                {[
                  "Qualified submissions reviewed by founder",
                  "Strategic materials shared privately",
                  "Direct discussion with aligned buyers",
                  "Response within 24 hours",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[10px] text-zinc-800 font-mono mt-[2px] shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-[12px] text-zinc-500 tracking-[0.01em] leading-[1.5]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${CARD} p-6`}>
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-700 mb-4 font-medium">Included</p>
              <ul className="space-y-2">
                {includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-[2px] h-[2px] rounded-full bg-zinc-800 mt-[6px] shrink-0" />
                    <span className="text-[12px] text-zinc-500 tracking-[0.01em] leading-[1.5]">{item}</span>
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
