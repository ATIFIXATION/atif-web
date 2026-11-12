import React from 'react';
import { experienceTimeline, certifications } from '../data/experience';
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="timeline" className="py-24 bg-[#FFFDF6] border-b-4 border-[#16120F] text-[#16120F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-fluid-h2 font-black tracking-tight text-[#16120F]">
            Experience & trajectory
          </h2>
          <p className="text-fluid-lead text-[#16120F]/85 font-medium max-w-[65ch] mt-2">
            Where research meets studio execution, and collegiate rigor builds intelligent tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Vertical Timeline */}
          <div className="lg:col-span-7 relative">
            
            {/* Vertical timeline spine */}
            <div className="absolute top-4 bottom-4 left-6 w-1 bg-[#16120F]" />

            <div className="space-y-10 relative">
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="relative pl-14 group">
                  
                  {/* Timeline Node Badge */}
                  <div className="absolute left-3.5 top-1 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FFB703] border-3 border-[#16120F] shadow-[2px_2px_0px_#16120F] flex items-center justify-center text-xs font-black">
                    0{idx + 1}
                  </div>

                  {/* Timeline Card */}
                  <div className="bg-[#FFFDF6] p-6 rounded-lg border-3 border-[#16120F] shadow-[5px_5px_0px_#16120F] hover:shadow-[7px_7px_0px_#16120F] transition-all">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#16120F]/15">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0FB5AE] font-black block">
                          {item.type}
                        </span>
                        <h3 className="text-xl font-black text-[#16120F] mt-0.5">
                          {item.role}
                        </h3>
                        <div className="text-sm font-bold text-[#16120F]/80">
                          {item.company} · {item.location}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="px-2.5 py-1 bg-[#16120F] text-[#FFFDF6] text-xs font-mono font-bold rounded">
                          {item.dates}
                        </span>
                        {item.verify && (
                          <span className="text-[10px] font-mono text-[#16120F]/60 border border-dashed border-[#16120F] px-1 rounded">
                            verify: true
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 text-xs sm:text-sm text-[#16120F]/85">
                      {item.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E5383B] mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Right: Verified Certifications */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-[#16120F] text-[#FFFDF6] p-6 sm:p-8 rounded-lg border-4 border-[#16120F] shadow-[8px_8px_0px_#0FB5AE]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0FB5AE] uppercase mb-1">
                <Award size={15} />
                <span>FOUNDATIONAL CREDENTIALS</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-[#FFFDF6]">
                Certifications & Badges
              </h3>
              <p className="text-xs text-[#FFFDF6]/70 mt-1 mb-6">
                Specialized training in machine learning, cybersecurity, networking, and analytics.
              </p>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#FFFDF6]/5 border border-[#FFFDF6]/15 rounded flex items-center justify-between hover:bg-[#FFFDF6]/10 transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#FFFDF6]">
                        {cert.title}
                      </div>
                      <div className="text-[10px] font-mono text-[#FFB703] mt-0.5">
                        Issuer: {cert.issuer}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-[#FFFDF6]/10 px-2 py-0.5 rounded text-[#FFFDF6]/70">
                      {cert.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

