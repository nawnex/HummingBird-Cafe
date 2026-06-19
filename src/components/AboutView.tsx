import React from 'react';
import { Heart, Leaf, Users, Shield, Award, Sparkles, MapPin, Coffee, HelpCircle } from 'lucide-react';
import communityImage from '../assets/images/cafe_community_vibe_1781882450931.jpg';

export default function AboutView() {
  const corePillars = [
    {
      icon: <Leaf className="text-primary-green w-5 h-5" />,
      tag: "01 / PURITY",
      title: 'Artisanal Care & Quality',
      desc: 'Every toast, wrap, and blend is prepared fresh using rich, selected organic ingredients and crafted with genuine culinary passion.'
    },
    {
      icon: <Users className="text-[#A7CCED] w-5 h-5" />,
      tag: "02 / SYNERGY",
      title: 'Warm Authentic connection',
      desc: 'We cultivate more than tables; we cultivate community. Our space is warm, welcoming, and designed to foster safe, cozy neighborly ties.'
    },
    {
      icon: <Sparkles className="text-amber-400 w-5 h-5" />,
      tag: "03 / INITIATIVE",
      title: 'Thinking Outside the Nest',
      desc: 'We are proudly unique. We challenge convention by hosting weekly social assemblies, hand-pressing botanicals, and constantly reinventing our menu.'
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 font-sans pb-24 text-gray-200">
      
      {/* 1. Header (Minimalist Sleek Editorial Layout with elegant Cafe Community image) */}
      <section className="relative pt-12 md:pt-16 pb-6 text-center md:text-left">
        {/* Abstract subtle background light overlay */}
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-primary-green/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold text-primary-green uppercase tracking-[0.2em] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse" />
              Our Identity
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-white leading-tight">
              Where creativity <br />
              meets <span className="text-primary-green italic font-light font-serif">community.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-light max-w-xl leading-relaxed">
              The Hummingbird Café is a cozy greenhouse retreat nestled on the Rock of Gibraltar. We believe dining should be an authentic, shared narrative of warmth and imagination.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] aspect-[4/3] md:aspect-[16/10] lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              <img 
                src={communityImage} 
                alt="Hummingbird Cafe Community" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A7CCED] bg-[#A7CCED]/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#A7CCED]/20">
                  Join The Nest
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Story Grid (Sleek Asymmetrical Partition) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start pt-6 border-t border-white/5">
        
        {/* Left Column: Big Statement/Brand Quote */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <span className="font-mono text-xs text-primary-green tracking-widest font-bold block uppercase">
            / THE NARRATIVE
          </span>
          <h2 className="text-2xl md:text-3.5xl font-serif text-white tracking-tight leading-snug">
            “The Hummingbird Café is unique in its own little way — and proudly so.”
          </h2>
          <div className="p-5 bg-white/3 rounded-2xl border border-white/5 flex items-start gap-4">
            <MapPin className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">Main Street, Gibraltar</h4>
              <p className="text-xs text-gray-500 font-light mt-0.5">A safe haven where remote collaborators, dreamers, and friends gather daily.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Divided Story Paragraphs */}
        <div className="lg:col-span-7 space-y-8 text-sm md:text-base text-gray-400 font-light leading-relaxed">
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider text-xs">Our Dream & Origin</h3>
            <p>
              Hummingbird was originally established in <strong>2023</strong> with a bold vision: to carve out a lush, plant-filled creative sanctuary where conversation flows as smoothly as single-origin espresso. 
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider text-xs">A New Chapter Reborn</h3>
            <p>
              On <strong>February 5th, 2024</strong>, that dream entered an exciting new chapter as we proudly reopened our doors. We expanded our culinary catalog, introduced our interactive board games, Spanish circles, and craft clubs, all while remaining stubbornly true to index original core: <em>providing that unmistakable, comforting feeling of absolute belonging.</em>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/5">
            <div className="space-y-0.5 p-3.5 bg-white/2 rounded-xl border border-white/5 text-center">
              <span className="block font-mono text-lg md:text-xl font-bold text-white tracking-tight">2023</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-widest leading-none">Established</span>
            </div>
            <div className="space-y-0.5 p-3.5 bg-white/2 rounded-xl border border-white/5 text-center">
              <span className="block font-mono text-lg md:text-xl font-bold text-primary-green tracking-tight">Feb 2024</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-widest leading-none">New Chapter</span>
            </div>
            <div className="space-y-0.5 p-3.5 bg-white/2 rounded-xl border border-white/5 text-center">
              <span className="block font-mono text-lg md:text-xl font-bold text-[#A7CCED] tracking-tight">4.8 ★</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-widest leading-none">Google Rating</span>
            </div>
            <div className="space-y-0.5 p-3.5 bg-white/2 rounded-xl border border-white/5 text-center">
              <span className="block font-mono text-lg md:text-xl font-bold text-white tracking-tight">100%</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-widest leading-none">Artisanal Care</span>
            </div>
          </div>
        </div>

      </section>

      {/* 3. Core pillars (Bento Grid Style) */}
      <section className="space-y-8 pt-6">
        <div className="space-y-2">
          <span className="font-mono text-xs text-primary-green tracking-widest font-bold block uppercase">
            / THE FOUNDATION
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-tight">
            Our Pillars of the Nest
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-6 md:p-8 bg-[#121212]/70 border border-white/5 rounded-2xl flex flex-col justify-between hover:border-primary-green/30 hover:bg-[#151515] transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 w-fit group-hover:border-primary-green/20 group-hover:bg-primary-green/5 transition-all">
                  {pillar.icon}
                </div>
                <div className="space-y-1.5">
                  <span className="block font-mono text-[9px] text-gray-500 tracking-widest font-bold">
                    {pillar.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">{pillar.title}</h3>
                </div>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Humbling service promise panel */}
      <section className="relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#191919] via-[#121212] to-black p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A7CCED]/3 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="max-w-2xl space-y-4 relative z-10">
          <span className="font-mono text-xs text-[#A7CCED] tracking-widest font-bold block uppercase">
            / OUR ETHOS
          </span>
          <h2 className="text-2xl md:text-3.5xl font-serif text-white tracking-tight">Our Service Promise</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
            At The Hummingbird Café, service is more than carrying a plate—it is an act of intentional hospitality. We pride ourselves on listening, adapting to individual preferences, and finding creative solutions. Every dialogue inside our walls is greeted with warmth, patience, and complete authenticity.
          </p>
          <div className="pt-2 flex items-center gap-1.5 text-xs text-primary-green font-semibold uppercase tracking-widest">
            <Heart className="w-4 h-4 fill-primary-green/20" /> Styled for you, every day.
          </div>
        </div>
      </section>

    </div>
  );
}
