export default function ArchiveSection() {
  return (
    <section id="archive" className="py-32 bg-[#07070a] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-red-600 text-2xl font-bold tracking-[0.2em] mb-16 uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
          Archive Documentation
        </h2>
        
        <div className="grid gap-16 text-gray-400 leading-relaxed">
          <div className="border-l-2 border-red-900/50 pl-8 space-y-6">
            <h3 className="text-white font-bold uppercase text-xs tracking-[0.3em]">The Intent</h3>
            <p className="text-lg text-gray-300/80">
              Zeitgeist, produced by Peter Joseph, was created as a nonprofit expression to 
              inspire people to start looking at the world from a more critical perspective.
            </p>
            <p className="text-sm italic text-white/40 border-l border-white/10 pl-4 py-1">
              &quot;The information was established over a year long period of research... 
              very often things are not what the population at large think they are.&quot;
            </p>
          </div>

          <div className="bg-white/2 p-10 rounded-none border border-white/5 relative overflow-hidden group">
            {/* Edge accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-red-900/40 group-hover:border-red-600 transition-colors" />
            
            <h3 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Research Note</h3>
            <p className="text-sm mb-8 leading-loose">
              Information contained in Part 1 and Part 3 is not obtained by simple keyword 
              searches. Online encyclopedias often do not contain the depth presented here. 
              The work is based on documented evidence.
            </p>
            
            <div className="flex flex-wrap gap-6 opacity-40 text-[9px] font-mono tracking-widest uppercase">
              <div className="flex flex-col">
                <span className="text-red-600">Original Pub.</span>
                <span className="text-white">2007</span>
              </div>
              <div className="flex flex-col">
                <span className="text-red-600">Archive Size</span>
                <span className="text-white">7.52 GB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-red-600">Archive Format</span>
                <span className="text-white">MP4 1080P Remastered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}