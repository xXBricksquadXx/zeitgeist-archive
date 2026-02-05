import Image from 'next/image';
import VideoHero from '@/components/VideoHero';
import ArchiveSection from '@/components/ArchiveSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a] flex flex-col">
      {/* Global Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between p-6 items-center bg-linear-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <Image 
            src="/favicon.png" 
            alt="Z.A Logo" 
            width={40} 
            height={40} 
            className="object-contain brightness-90 hover:brightness-110 transition-all"
            priority 
          />
          <span className="font-bold tracking-tighter text-xl hidden md:block text-white/90">Z.A</span>
        </div>
      </header>

      {/* Main Content Sections */}
      <VideoHero />
      <ArchiveSection />

      {/* Global Footer */}
      <footer className="py-12 flex flex-col items-center gap-6 border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="text-red-600 text-[10px] tracking-[0.5em] uppercase text-center px-4">
          Non-Profit Preservation • 2026 Digital Archive
        </div>
        
        <a 
          href="https://drive.google.com/uc?export=download&id=1dfOiK5uj4dXYP036ofWJ4-LkTfPIG2l9" 
          className="group relative text-[10px] border border-white/10 px-6 py-2 rounded-full text-white/40 hover:text-red-500 hover:border-red-500/50 transition-all overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10 font-bold uppercase tracking-widest">
            Download Master .MP4 (7.5GB)
          </span>
          <div className="absolute inset-0 bg-red-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>

        <p className="text-[9px] text-white/50 max-w-xs text-center leading-relaxed">
          This archive is maintained for historical preservation. All rights belong to the original creators.
        </p>
      </footer>
    </main>
  );
}