// src/components/VideoHero.tsx
export default function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="h-full w-full object-cover filter brightness-[0.4] contrast-125"
        >
          {/* CORRECT PATH: public/preview-clip.mp4 becomes /preview-clip.mp4 */}
          <source src="/preview-clip.mp4" type="video/mp4" />
        </video>
        {/* Deep Gradient Overlay for better text legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-[#07070a]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <p className="text-xs tracking-[0.4em] text-white/50 uppercase mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Truth is not told, it is realized
        </p>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white/90 uppercase mb-8 select-none 
          drop-shadow-[0_10px_10px_rgba(0,0,0,1)] 
          hover:tracking-normal transition-all duration-700 ease-in-out cursor-default">
          Zeitgeist
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://drive.google.com/file/d/1dfOiK5uj4dXYP036ofWJ4-LkTfPIG2l9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-red-700/90 hover:bg-red-600 text-white rounded-none font-bold transition-all border-l-4 border-red-500 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none"
          >
            Watch Remastered
          </a>
          <a 
            href="#archive" 
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white/70 rounded-none font-bold border border-white/10 transition-all backdrop-blur-md"
          >
            Archive Info
          </a>
        </div>
      </div>
    </section>
  );
}