import React from 'react';
import { Heart, Leaf, Shield } from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      icon: <Leaf className="w-5 h-5 text-primary-green" />,
      title: 'Ethical Supply Chains',
      desc: 'Our coffee and organic teas are shade-grown under forest canopies, sustaining wildlife habitats.'
    },
    {
      icon: <Heart className="w-5 h-5 text-primary-green" />,
      title: 'Grassroots Community',
      desc: 'We donate 15% of net proceeds to neighborhood ecological parks and soil restoration trusts.'
    },
    {
      icon: <Shield className="w-5 h-5 text-primary-green" />,
      title: 'Zero-Waste Framework',
      desc: 'All food waste is composted and distributed to community gardeners absolutely free.'
    },
  ];

  const milestones = [
    {
      year: 'Spring 2024',
      title: 'The Seed is Planted',
      desc: 'Ecologists restore a forgotten warehouse into a thriving soil-free indoor plant sanctuary.'
    },
    {
      year: 'Autumn 2024',
      title: 'The Roots Take Hold',
      desc: 'Local neighbors gather to map out an eco-friendly community hub and safe social ecosystem.'
    },
    {
      year: 'Summer 2025',
      title: 'The Greenhouse Bloom',
      desc: 'Hummingbird officially opens, serving sustainable meals and launching clean transport options.'
    },
    {
      year: '2026 & Beyond',
      title: 'The Majestic Canopy',
      desc: 'Now offsetting tons of carbon while serving as the heart of our neighborhood biophilic union.'
    }
  ];

  return (
    <div className="space-y-16 font-sans pb-20">
      {/* Page Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs font-bold text-primary-green uppercase tracking-widest block">Our Root Story</span>
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          The Hummingbird <span className="text-[#A7CCED] italic">Gathering Idea</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          An urban greenhouse designed to cultivate change, connection, and great flavors.
        </p>
      </div>

      {/* Story Column Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Story Text (7/12 width) */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-serif text-white">Cultivating Change, One Savor at a Time</h2>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            Hummingbird began as a daring experiment. In early 2024, our founders transformed a forgotten industrial warehouse into a flourishing urban rainforest. We engineered a water-recycling indoor biome to bring our community closer to nature.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            Every cup features premium shade-grown coffee sourced directly from independent farmers. We ensure fair wages while supporting wild forest conservation with every purchase.
          </p>
          <div className="p-4 bg-primary-green/5 border-l-4 border-primary-green rounded-r-xl">
            <p className="text-xs italic text-gray-300 leading-relaxed">
              &ldquo;We match the cooperative biodiversity of a real rainforest canopy in everything we cultivate.&rdquo;
            </p>
            <span className="text-[10px] font-bold text-[#A7CCED] block mt-1.5 uppercase tracking-wider">— Marcus Ortiz, Co-Founder</span>
          </div>
        </div>

        {/* Decorative Sourcing Banner (5/12 width) */}
        <div className="lg:col-span-5 relative">
          <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=600" 
            alt="Rainforest plants inside Hummingbird Cafe"
            className="w-full h-[320px] object-cover rounded-2xl border border-white/5 shadow-xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
          
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#191919]/90 border border-primary-green/20 rounded-xl">
            <span className="text-[10px] font-bold text-primary-green uppercase tracking-wider">Sustainable Honor Roll</span>
            <h4 className="text-sm font-serif text-white font-medium mt-1">100% Forest Sourced</h4>
            <p className="text-[11px] text-gray-400 mt-1">From organic bamboo straws to wild-harvested teas, we prioritize the environment.</p>
          </div>
        </div>
      </div>

      {/* Sowing Values */}
      <section className="space-y-6 bg-white/5 border border-white/5 p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-green/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-bold text-primary-green uppercase tracking-wider block">Our Core Pillars</span>
          <h2 className="text-2xl font-serif text-white">How We Tend Our Forest</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {values.map((v, i) => (
            <div key={i} className="space-y-2">
              <div className="p-3 bg-primary-green/10 border border-primary-green/20 rounded-xl w-fit">
                {v.icon}
              </div>
              <h4 className="font-serif text-sm font-semibold text-white">{v.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="space-y-8">
        <div className="text-center md:text-left">
          <span className="text-xs font-bold text-primary-green uppercase tracking-wide block mb-1">Our Growth History</span>
          <h2 className="text-2xl font-serif text-white">The Hummingbird Milestone Journey</h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-8">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-6 md:pl-8 group">
              {/* Timeline outer dot indicator */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-[#121212] border-2 border-primary-green group-hover:bg-[#A7CCED] transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-green" />
              </div>
              
              <div className="space-y-1 p-4 bg-white/3 border border-white/5 rounded-xl group-hover:border-[#689628]/20 transition-all duration-300">
                <span className="text-[10px] font-bold text-[#A7CCED] uppercase tracking-wider">{m.year}</span>
                <h4 className="text-sm font-serif font-semibold text-white group-hover:text-primary-green transition-colors">{m.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light pt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
