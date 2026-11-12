import React from 'react';
import { links } from '../data/links';
import { identity } from '../data/identity';
import { ArrowUp, Terminal, Film } from 'lucide-react';

export default function Footer({ voice, setVoice }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#16120F] text-[#FFFDF6] border-t-4 border-[#16120F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#FFFDF6]/15">
          
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded bg-[#FFB703] border-2 border-[#16120F] flex items-center justify-center text-sm font-black text-[#16120F]">
                AK
              </span>
              <span className="text-2xl font-black tracking-tight text-[#FFFDF6]">
                Atif Khan
              </span>
            </div>
            <p className="text-xs font-mono text-[#0FB5AE] mt-2">
              Bhopal, Madhya Pradesh, India · {identity.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setVoice(voice === 'engineer' ? 'creator' : 'engineer')}
              className="px-3 py-1.5 rounded-md border border-[#FFFDF6]/30 text-xs font-mono text-[#FFFDF6] hover:bg-[#FFFDF6] hover:text-[#16120F] transition-colors"
            >
              Voice: {voice === 'engineer' ? 'Engineer ⇄' : 'Creator ⇄'}
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFB703] text-[#16120F] rounded-md font-bold text-xs shadow-[2px_2px_0px_#FFFDF6] hover:bg-[#0FB5AE] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#FFFDF6]/60">
          <div>
            © {new Date().getFullYear()} Atif Khan. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={links.previousPortfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFB703] transition-colors underline"
            >
              Earlier version
            </a>
            <a
              href={links.grayvale.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0FB5AE] transition-colors"
            >
              Grayvale Systems
            </a>
            <a
              href={links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFDF6] transition-colors"
            >
              GitHub
            </a>
            <a
              href={links.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5383B] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

