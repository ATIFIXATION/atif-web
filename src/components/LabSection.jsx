import React, { useState } from 'react';
import { technicalSkills } from '../data/skills';
import { projects, earlierWork } from '../data/projects';
import { Terminal, ExternalLink, Github, ChevronDown, ChevronUp, Cpu, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export default function LabSection() {
  const [activeTier, setActiveTier] = useState('core');
  const [expandedProjectId, setExpandedProjectId] = useState('reelforge-ai');

  // Filter out pending projects
  const visibleProjects = projects.filter(p => !p.pending);
  const featuredCrossover = visibleProjects.find(p => p.crossover);
  const regularProjects = visibleProjects.filter(p => !p.crossover);

  return (
    <section id="lab" className="py-24 bg-[#0FB5AE] border-b-4 border-[#16120F] text-[#16120F] relative">
      
      {/* Visual Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-fluid-h2 font-black tracking-tight text-[#16120F]">
              Engineered with logic.
            </h2>
            <p className="text-fluid-lead text-[#16120F]/90 font-medium max-w-[65ch] mt-3">
              Full-stack MERN systems, computer vision classifiers, and autonomous pipelines. Built with rigor and deployed to the world.
            </p>
          </div>

          <div className="bg-[#FFFDF6] p-4 rounded-md border-2 border-[#16120F] shadow-[4px_4px_0px_#16120F] max-w-xs">
            <span className="text-xs font-mono text-[#16120F]/70 block font-bold">
              Engineering philosophy
            </span>
            <p className="text-xs font-bold text-[#16120F] mt-1">
              "No black boxes. Trace from raw packets to database schemas to the pixel."
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. Skill Tiers (Core / Working / Exploring) */}
        <div className="bg-[#FFFDF6] p-6 sm:p-8 rounded-lg border-4 border-[#16120F] shadow-[8px_8px_0px_#16120F]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b-2 border-[#16120F] gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#16120F]">
                Technical stack & capabilities
              </h3>
              <p className="text-xs sm:text-sm text-[#16120F]/70 font-mono mt-0.5">
                Structured in honest proficiency tiers without deceptive percentage bars.
              </p>
            </div>

            {/* Tier Select Buttons */}
            <div className="flex items-center gap-2 bg-[#16120F] p-1 rounded-md">
              <button
                onClick={() => setActiveTier('core')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                  activeTier === 'core'
                    ? 'bg-[#0FB5AE] text-[#16120F]'
                    : 'text-[#FFFDF6] hover:text-[#0FB5AE]'
                }`}
              >
                Core (Daily)
              </button>
              <button
                onClick={() => setActiveTier('working')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                  activeTier === 'working'
                    ? 'bg-[#FFB703] text-[#16120F]'
                    : 'text-[#FFFDF6] hover:text-[#FFB703]'
                }`}
              >
                Working (Built Real)
              </button>
              <button
                onClick={() => setActiveTier('exploring')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                  activeTier === 'exploring'
                    ? 'bg-[#5B2EE0] text-[#FFFDF6]'
                    : 'text-[#FFFDF6] hover:text-[#5B2EE0]'
                }`}
              >
                Exploring (Learning)
              </button>
            </div>
          </div>

          {/* Active Tier Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {technicalSkills[activeTier].map((sk) => (
              <div
                key={sk.name}
                className="p-3 bg-[#FFFDF6] border-2 border-[#16120F] rounded-md shadow-[3px_3px_0px_#16120F] hover:-translate-y-0.5 transition-transform"
              >
                <div className="font-black text-sm text-[#16120F]">{sk.name}</div>
                <div className="text-[10px] font-mono text-[#16120F]/60 mt-0.5 truncate">
                  {sk.focus}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 2. Flagship Crossover Feature Slot: REELFORGE AI */}
        {featuredCrossover && (
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5B2EE0] text-[#FFFDF6] text-xs font-mono font-bold rounded-t-md border-t-2 border-x-2 border-[#16120F] ml-4">
              <Sparkles size={13} className="text-[#FFB703]" />
              <span>Flagship crossover project</span>
            </div>

            <div className="bg-[#FFFDF6] p-6 sm:p-10 rounded-lg border-4 border-[#16120F] shadow-[10px_10px_0px_#16120F] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Cover Side */}
                <div className="lg:col-span-5 relative group">
                  <div className="relative overflow-hidden rounded-md border-3 border-[#16120F] shadow-[4px_4px_0px_#16120F] bg-[#16120F]">
                    <img
                      src={featuredCrossover.cover}
                      alt="ReelForge AI 20-module autonomous video editing pipeline graphic"
                      width="600"
                      height="338"
                      className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#E5383B] text-[#FFFDF6] font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-[#16120F]">
                      20 modules active
                    </div>
                  </div>
                </div>

                {/* Details Side */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-[#FFB703] text-[#16120F] text-xs font-bold rounded border border-[#16120F]">
                        {featuredCrossover.category}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#16120F] text-[#FFFDF6] text-xs font-mono font-bold rounded">
                        Status: {featuredCrossover.status}
                      </span>
                      {featuredCrossover.verify && (
                        <span className="px-2 py-0.5 bg-[#FFFDF6] text-[#16120F]/60 text-[10px] font-mono border border-dashed border-[#16120F] rounded">
                          verify: true
                        </span>
                      )}
                    </div>

                    <h3 className="text-fluid-h3 font-black text-[#16120F] tracking-tight">
                      {featuredCrossover.title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#16120F]/80 mt-1">
                      {featuredCrossover.tagline}
                    </p>

                    {/* Context -> Idea -> Result short story */}
                    <div className="mt-5 space-y-3 bg-[#0FB5AE]/15 p-4 rounded-md border-2 border-[#16120F]">
                      <div>
                        <span className="text-[11px] font-mono font-black text-[#16120F] uppercase block">
                          ▸ THE CONTEXT:
                        </span>
                        <p className="text-xs sm:text-sm text-[#16120F]/85 mt-0.5 leading-relaxed">
                          {featuredCrossover.story.context}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-black text-[#5B2EE0] uppercase block">
                          ▸ THE IDEA:
                        </span>
                        <p className="text-xs sm:text-sm text-[#16120F]/85 mt-0.5 leading-relaxed">
                          {featuredCrossover.story.idea}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-black text-[#E5383B] uppercase block">
                          ▸ THE RESULT:
                        </span>
                        <p className="text-xs sm:text-sm text-[#16120F]/85 mt-0.5 leading-relaxed">
                          {featuredCrossover.story.result}
                        </p>
                      </div>
                    </div>

                    {/* Tech Chips */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {featuredCrossover.stack.map(stk => (
                        <span
                          key={stk}
                          className="px-2.5 py-1 bg-[#FFFDF6] text-[#16120F] border border-[#16120F] text-xs font-mono font-bold rounded shadow-[2px_2px_0px_#16120F]"
                        >
                          {stk}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 3. Project Showcase Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl sm:text-3xl font-black text-[#16120F]">
              Technical project showcase
            </h3>
            <span className="text-xs font-mono text-[#16120F]/70 font-bold">
              Story: Context → Idea → Result
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularProjects.map((proj) => {
              const isExpanded = expandedProjectId === proj.id;

              return (
                <div
                  key={proj.id}
                  className="bg-[#FFFDF6] rounded-lg border-4 border-[#16120F] shadow-[6px_6px_0px_#16120F] flex flex-col justify-between overflow-hidden hover:shadow-[8px_8px_0px_#16120F] transition-all"
                >
                  <div>
                    {/* Project Cover image */}
                    <div className="relative overflow-hidden border-b-3 border-[#16120F] bg-[#16120F]">
                      <img
                        src={proj.cover}
                        alt={`${proj.title} project preview`}
                        width="600"
                        height="338"
                        className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#FFB703] text-[#16120F] text-[10px] font-black uppercase px-2 py-0.5 rounded border border-[#16120F]">
                        {proj.category}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-[#16120F] text-[#FFFDF6] text-[10px] font-mono px-2 py-0.5 rounded">
                        {proj.status}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xl sm:text-2xl font-black text-[#16120F] tracking-tight">
                          {proj.title}
                        </h4>
                        {proj.verify && (
                          <span className="text-[10px] font-mono text-[#16120F]/60 border border-dashed border-[#16120F] px-1.5 py-0.5 rounded">
                            verify: true
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#16120F]/80 font-bold mt-1">
                        {proj.tagline}
                      </p>

                      {/* Story Reveal / Expandable */}
                      <div className="mt-4 bg-[#0FB5AE]/10 p-3.5 rounded border-2 border-[#16120F] space-y-2 text-xs">
                        <div>
                          <span className="font-mono font-bold text-[#16120F] uppercase">▸ CONTEXT: </span>
                          <span className="text-[#16120F]/85">{proj.story.context}</span>
                        </div>
                        <div>
                          <span className="font-mono font-bold text-[#5B2EE0] uppercase">▸ IDEA: </span>
                          <span className="text-[#16120F]/85">{proj.story.idea}</span>
                        </div>
                        <div>
                          <span className="font-mono font-bold text-[#E5383B] uppercase">▸ RESULT: </span>
                          <span className="text-[#16120F]/85">{proj.story.result}</span>
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="mt-4 flex flex-wrap gap-1">
                        {proj.stack.map(stk => (
                          <span
                            key={stk}
                            className="px-2 py-0.5 bg-[#FFFDF6] border border-[#16120F] text-[11px] font-mono font-bold rounded shadow-[1px_1px_0px_#16120F]"
                          >
                            {stk}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Card Bottom Bar & Action Buttons */}
                  <div className="p-4 bg-[#FFFDF6] border-t-2 border-[#16120F] flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#16120F]/70">
                      Role: {proj.role}
                    </span>

                    <div className="flex items-center gap-2">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#16120F] text-[#FFFDF6] text-xs font-bold rounded shadow-[2px_2px_0px_#FFB703] hover:bg-[#0FB5AE] hover:text-[#16120F] transition-colors"
                        >
                          <Github size={12} />
                          <span>Code</span>
                        </a>
                      )}

                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#0FB5AE] text-[#16120F] text-xs font-bold rounded border border-[#16120F] shadow-[2px_2px_0px_#16120F] hover:bg-[#FFB703] transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Earlier Work Strip */}
        <div className="p-6 bg-[#16120F] text-[#FFFDF6] rounded-lg border-4 border-[#16120F] shadow-[8px_8px_0px_#FFB703]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#FFFDF6]/20">
            <h4 className="text-lg font-bold font-mono text-[#0FB5AE]">
              // EARLIER_FOUNDATION_WORK
            </h4>
            <span className="text-xs font-mono text-[#FFFDF6]/60">
              Stepping stones in React, Spring Boot & APIs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {earlierWork.map((ew, idx) => (
              <div key={idx} className="p-3 bg-[#FFFDF6]/5 border border-[#FFFDF6]/15 rounded">
                <div className="font-bold text-sm text-[#FFB703]">{ew.name}</div>
                <div className="text-xs text-[#FFFDF6]/80 mt-1">{ew.desc}</div>
                <div className="text-[10px] font-mono text-[#0FB5AE] mt-2">{ew.stack}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

