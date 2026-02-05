// src/components/ArchiveSection.tsx
export default function ArchiveSection() {
  return (
    <section id="archive" className="py-24 bg-[#07070a] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-red-600 text-2xl font-bold tracking-widest mb-12 uppercase">
          Archive Documentation
        </h2>
        
        <div className="grid gap-12 text-gray-400 leading-relaxed">
          <div className="border-l-2 border-red-900 pl-8 space-y-4">
            <h3 className="text-white font-bold uppercase text-sm tracking-widest">The Intent</h3>
            <p>
              Zeitgeist, produced by Peter Joseph, was created as a nonprofit expression to 
              inspire people to start looking at the world from a more critical perspective.
            </p>
            <p className="text-sm italic">
              &quot;The information was established over a year long period of research... 
              very often things are not what the population at large think they are.&quot;
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl border border-white/5">
            <h3 className="text-white font-bold mb-4">Research Note</h3>
            <p className="text-sm mb-6">
              Information contained in Part 1 and Part 3 is not obtained by simple keyword 
              searches. Online encyclopedias often do not contain the depth presented here. 
              The work is based on documented evidence.
            </p>
            <div className="flex gap-4 opacity-50 text-[10px] uppercase tracking-widest">
              <span>Publication: 2007</span>
              <span>•</span>
              <span>Size: 1.9GB</span>
              <span>•</span>
              <span>Format: MP4 1080P Remastered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}