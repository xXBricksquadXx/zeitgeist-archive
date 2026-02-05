// src/app/page.tsx
import Image from 'next/image';
import VideoHero from '@/components/VideoHero';
import ArchiveSection from '@/components/ArchiveSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a]">
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

      <VideoHero />
      <ArchiveSection />

      <a 
  href="https://drive.google.com/uc?export=download&id=YOUR_DRIVE_ID" 
  className="text-[10px] border border-white/10 px-4 py-2 rounded-full text-white/40 hover:text-red-500 hover:border-red-500/50 transition-all"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Master .MP4 (7.5GB)
</a>
    </main>
  );
}