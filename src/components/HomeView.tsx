import { useState, useEffect } from 'react';
import { MenuItem, Testimonial } from '../types';
import { MENU_ITEMS, TESTIMONIALS } from '../data';
import { Leaf, ArrowRight, Star, Heart, Calendar, ArrowLeft, Plus } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onAddToCart: (item: MenuItem) => void;
}

export default function HomeView({ onNavigate, onAddToCart }: HomeViewProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  // Filter out weekly highlights from MENU_ITEMS
  const highlights = MENU_ITEMS.filter(it => it.isWeeklyHighlight);

  // Auto-rotate testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemName(item.name);
    setTimeout(() => setAddedItemName(null), 2500);
  };

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* 1. Rainforest Header Background Section directly under main header */}
      <div className="relative h-[480px] w-full overflow-hidden rounded-3xl border border-[#689628]/20 shadow-2xl">
        {/* Rich atmospheric forest cover */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1600')",
            backgroundPosition: '50% 35%'
          }}
        />
        {/* Layered botanical fog, dark neutral & green gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-black/35" />
        
        {/* Ambient Pulsing Glow inside image */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-green/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Content Box */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-green/20 border border-[#689628]/40 backdrop-blur-md rounded-full text-xs font-semibold text-[#A7CCED] tracking-wide mb-4 w-fit">
            <Leaf className="w-3.5 h-3.5 text-primary-green animate-pulse" />
            Nurtured by Nature, Cultivated for Community
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight">
            A Creative Space for <br />
            <span className="text-[#A7CCED] font-light italic">Dreamers & Innovators</span>
          </h1>
          
          <p className="mt-4 text-sm md:text-base text-gray-200 font-light max-w-2xl leading-relaxed">
            We believe in the power of connection and creating spaces where relationships flourish. Welcome to Hummingbird—your carbon-balanced, rainforest-themed community hub and specialty cafe.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-3 bg-primary-green hover:bg-primary-green/90 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-[1.03] shadow-lg flex items-center gap-2 cursor-pointer"
            >
              Wander the Menu
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('members')}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              Gain Membership Access
            </button>
          </div>
        </div>
      </div>

      {/* 2. Community Hub Spotlight */}
      <section className="relative overflow-hidden bg-white/5 border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#A7CCED]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-primary-green/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold text-primary-green uppercase tracking-widest flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary-green fill-primary-green" />
              The Hummingbird Core Mission Statement
            </div>
            
            <h2 className="text-3xl font-serif text-white tracking-tight">
              A Living Classroom <span className="text-[#A7CCED]">& Gathering Space</span>
            </h2>
            
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              At Hummingbird, our passion reaches far beyond pulling the perfect shade-grown espresso stream. We envision the cafe as a <strong>vital social ecosystem</strong>. Here, urban dwellers re-establish connections with living ecosystems in our micro-greenhouse, share forward-thinking ideas at open panels, and build local trust.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#689628]/15 text-primary-green rounded-lg shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <span>100% Carbon-Neutral Bites</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#A7CCED]/15 text-[#A7CCED] rounded-lg shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>Weekly Eco-Workshops</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#A7CCED]/15 text-[#A7CCED] rounded-lg shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span>15% Proceeds to Conservation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#689628]/15 text-primary-green rounded-lg shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <span>Thriving Soil-free Indoor Biomes</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('events')}
                className="text-primary-green font-semibold inline-flex items-center gap-1 hover:text-[#A7CCED] transition-colors cursor-pointer"
              >
                Learn about upcoming meetups & events
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img 
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" 
              alt="Community spotlight gatherings at Hummingbird" 
              className="rounded-2xl border border-white/10 shadow-lg object-cover h-[340px] w-full"
              referrerPolicy="no-referrer"
            />
            {/* Visual floating badge */}
            <div className="absolute -bottom-5 -right-5 p-4 bg-[#191919] border border-primary-green/20 rounded-xl max-w-[190px] shadow-2xl">
              <span className="text-[10px] font-bold text-[#A7CCED] uppercase block tracking-wider">Hummingbird Impact</span>
              <span className="text-xl font-bold font-serif text-white">4,850+ kgs</span>
              <span className="text-[11px] text-gray-400 block mt-1">Carbon offset by our local community so far.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Weekly Highlights Grid */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-primary-green uppercase tracking-widest block mb-2">Ready for Your Perfect Cup? Order something tasty today!</span>
            <h2 className="text-3xl font-serif text-white">Hummingbird Weekly Highlights</h2>
          </div>
          <button 
            onClick={() => onNavigate('menu')}
            className="px-5 py-2 border border-[#689628]/30 hover:border-primary-green/80 hover:bg-[#689628]/10 text-white rounded-full text-xs font-semibold tracking-wide transition-all self-start md:self-auto cursor-pointer"
          >
            See Full Gatherings Menu
          </button>
        </div>

        {/* Floating Add Toast Feedback */}
        {addedItemName && (
          <div className="fixed bottom-6 left-6 z-50 bg-[#121212] border border-primary-green text-white text-xs py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary-green animate-ping" />
            Added <strong className="text-primary-green">{addedItemName}</strong> to harvest basket!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div 
              key={item.id}
              className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-[#689628]/30 transition-all duration-300 flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-medium text-[#A7CCED] border border-white/10 rounded-full">
                  Weekly Hit
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-white font-semibold group-hover:text-primary-green transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 capitalize mt-0.5">{item.category}</p>
                  <p className="mt-2.5 text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-base font-bold text-[#A7CCED]">${item.price.toFixed(2)}</span>
                  <button 
                    onClick={() => handleAddWithFeedback(item)}
                    className="p-2 bg-primary-green/15 text-primary-green hover:bg-primary-green hover:text-white rounded-full transition-all duration-300 cursor-pointer"
                    title="Add to Basket"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonial / Community Quote Carousel */}
      <section className="bg-[#191919] border border-white/5 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Subtle leafy overlay details */}
        <div className="absolute -top-10 left-10 text-[100px] text-white/2 font-serif select-none pointer-events-none">&ldquo;</div>
        
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-primary-green fill-primary-green" />
            ))}
          </div>

          <div className="min-h-[120px] flex items-center justify-center">
            <p className="text-lg md:text-xl font-serif text-gray-200 italic leading-relaxed">
              &ldquo;{TESTIMONIALS[activeTestimonial].text}&rdquo;
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img 
              src={TESTIMONIALS[activeTestimonial].avatar} 
              alt={TESTIMONIALS[activeTestimonial].name} 
              className="w-12 h-12 rounded-full object-cover border-2 border-primary-green shadow-md"
              referrerPolicy="no-referrer"
            />
            <h4 className="mt-2.5 text-sm font-semibold text-white">
              {TESTIMONIALS[activeTestimonial].name}
            </h4>
            <span className="text-xs text-[#A7CCED]">
              {TESTIMONIALS[activeTestimonial].role}
            </span>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === activeTestimonial ? 'bg-primary-green w-6' : 'bg-white/20'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
