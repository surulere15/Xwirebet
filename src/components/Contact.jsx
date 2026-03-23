import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 bg-[#030303] text-center flex flex-col items-center border-t border-white/10">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 flex flex-col items-center"
        >
          <div className="text-xs uppercase font-medium text-zinc-300 tracking-[0.2em] mb-12">
            Acquisition Protocol
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-normal text-white leading-relaxed max-w-2xl mb-8 tracking-wide">
            Open to selective discussions with qualified operators, founders, and strategic buyers.
          </h2>
          <p className="text-zinc-400 font-normal text-base tracking-wide">
            A direct and discreet review process is available for aligned buyers.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full space-y-10 text-left"
        >
          <div className="mb-12 border-b border-white/20 pb-6">
             <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-3 tracking-wide">Request Strategic Access</h3>
             <p className="text-zinc-300 text-base font-normal tracking-wide">Reserved for qualified buyers seeking direct discussion regarding Wirebet.com</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-300 block">Principal Name</label>
              <input type="text" className="w-full bg-[#0a0a0a]/50 border border-white/20 px-4 py-4 text-white focus:outline-none focus:border-white transition-colors duration-500 rounded-sm text-base font-normal tracking-wide" />
            </div>
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-300 block">Entity / Fund</label>
              <input type="text" className="w-full bg-[#0a0a0a]/50 border border-white/20 px-4 py-4 text-white focus:outline-none focus:border-white transition-colors duration-500 rounded-sm text-base font-normal tracking-wide" />
            </div>
            <div className="space-y-4 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-300 block">Corporate Email</label>
              <input type="email" className="w-full bg-[#0a0a0a]/50 border border-white/20 px-4 py-4 text-white focus:outline-none focus:border-white transition-colors duration-500 rounded-sm text-base font-normal tracking-wide" />
            </div>
            <div className="space-y-4 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-300 block">Mandate Type</label>
              <div className="relative">
                <select className="w-full bg-[#0a0a0a]/50 border border-white/20 px-4 py-4 text-white focus:outline-none focus:border-white transition-colors duration-500 appearance-none rounded-sm text-base font-normal tracking-wide outline-none cursor-pointer">
                  <option value="" className="bg-[#0f0f0f] text-zinc-300">Select parameter...</option>
                  <option value="acquire" className="bg-[#0f0f0f] text-zinc-300">Outright Acquisition</option>
                  <option value="partner" className="bg-[#0f0f0f] text-zinc-300">Strategic Joint Venture</option>
                  <option value="other" className="bg-[#0f0f0f] text-zinc-300">Capital Allocation</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            <div className="space-y-4 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-300 block">Additional Context</label>
              <textarea rows="3" className="w-full bg-[#0a0a0a]/50 border border-white/20 px-4 py-4 text-white focus:outline-none focus:border-white transition-colors duration-500 resize-none rounded-sm text-base font-normal tracking-wide overflow-hidden"></textarea>
            </div>
            <div className="md:col-span-2 mt-8 flex justify-start border-t border-white/10 pt-12">
              <button type="submit" className="px-14 py-5 bg-white text-black font-semibold tracking-[0.1em] text-xs uppercase hover:bg-zinc-200 transition-colors duration-500 w-full sm:w-auto text-center rounded-sm">
                Submit Inquiry
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
