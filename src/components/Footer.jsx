export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.04] bg-[#030303]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-zinc-700 text-[9px] uppercase tracking-[0.15em] order-2 md:order-1">
            &copy; {new Date().getFullYear()} Wirebet
          </p>
          <p className="text-zinc-700 text-[8.5px] uppercase tracking-[0.2em] text-center order-1 md:order-2">
            Rare one-word .com · Category-defining · Once acquired, unavailable
          </p>
          <div className="flex items-center gap-5 order-3">
            <a href="#contact" className="text-zinc-700 text-[9px] uppercase tracking-[0.15em] hover:text-zinc-400 transition-colors duration-500">Inquire</a>
            <button
              onClick={() => {
                const e = ['f','o','u','n','d','e','r','@','w','i','r','e','b','e','t','.','c','o','m'];
                window.location.href = 'mailto:' + e.join('');
              }}
              className="text-zinc-700 text-[9px] uppercase tracking-[0.15em] hover:text-zinc-400 transition-colors duration-500 bg-transparent border-none cursor-pointer p-0"
            >
              Email
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
