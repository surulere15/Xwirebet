export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/[0.08] bg-[#030303]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <p className="text-zinc-400 font-medium text-[10px] uppercase tracking-[0.3em] mb-10">
          Rare One-Word .com · Category-Defining · Once Acquired, Unavailable
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-zinc-400 font-medium text-xs uppercase tracking-[0.15em]">
          <p>&copy; {new Date().getFullYear()} Wirebet.</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <a href="#contact" className="text-zinc-500 hover:text-white transition-colors duration-500">Inquire</a>
            <a href="mailto:founder@wirebet.com" className="text-zinc-500 hover:text-white transition-colors duration-500">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
