import React from 'react';
import { achievements } from '../data/achievements';
import { Trophy, Award, Sparkles, Flag } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-[#FFFDF6] border-b-4 border-[#16120F] text-[#16120F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="text-fluid-h2 font-black tracking-tight text-[#16120F]">
              Milestones & podiums
            </h2>
            <p className="text-fluid-lead text-[#16120F]/85 font-medium max-w-[65ch] mt-2">
              Collegiate hackathons, innovation showcases, and creative completions.
            </p>
          </div>

          <div className="text-xs font-mono text-[#16120F]/60">
            Strict policy: Zero fabricated metrics
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border-3 border-[#16120F] flex flex-col justify-between transition-all hover:-translate-y-1 ${
                item.highlight
                  ? 'bg-[#FFB703] shadow-[6px_6px_0px_#16120F]'
                  : 'bg-[#FFFDF6] shadow-[4px_4px_0px_#16120F]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-[#16120F] text-[#FFFDF6] text-[11px] font-mono font-black uppercase rounded shadow-[1px_1px_0px_#FFFDF6]">
                    {item.tag}
                  </span>
                  {item.verify && (
                    <span className="text-[10px] font-mono text-[#16120F]/60 border border-dashed border-[#16120F] px-1 rounded">
                      verify: true
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-[#16120F] tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-mono font-bold text-[#16120F]/80 mt-1">
                  {item.event}
                </div>

                <p className="text-xs sm:text-sm text-[#16120F]/85 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#16120F]/20 flex items-center justify-between text-[11px] font-mono">
                <span className="font-bold">STATUS: CONFIRMED</span>
                <span>AK // 2024-2026</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

