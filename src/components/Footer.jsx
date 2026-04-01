export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.05] bg-[#030303]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.15em] order-2 md:order-1">
            &copy; {new Date().getFullYear()} Wirebet
          </p>
          <p className="text-zinc-600 text-[9px] uppercase tracking-[0.22em] font-medium text-center order-1 md:order-2">
            Rare one-word .com · Category-defining · Once acquired, unavailable
          </p>
          <div className="flex items-center gap-6 order-3">
            <a href="#contact" className="text-zinc-600 text-[10px] uppercase tracking-[0.15em] hover:text-zinc-300 transition-colors duration-500">Inquire</a>
            <a href="mailto:founder@wirebet.com" className="text-zinc-600 text-[10px] uppercase tracking-[0.15em] hover:text-zinc-300 transition-colors duration-500">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
