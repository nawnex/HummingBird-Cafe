import { useState, useEffect } from 'react';
import { MenuItem, Testimonial } from '../types';
import { MENU_ITEMS, TESTIMONIALS } from '../data';
import { Leaf, ArrowRight, Star, Heart, Calendar, ArrowLeft, Plus } from 'lucide-react';

import saladImage from '../assets/images/salad_bowl_1781625701927.jpg';
import wrapImage from '../assets/images/artisan_wrap_1781625718315.jpg';
import smoothieImage from '../assets/images/fruit_smoothies_1781625734300.jpg';
import coffeeImage from '../assets/images/premium_coffees_1781625748410.jpg';
import toastImage from '../assets/images/gourmet_toasts_1781625764968.jpg';
import teaImage from '../assets/images/teas_infusions_1781625780459.jpg';

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
            We believe in the power of connection and creating spaces where relationships flourish. Welcome to Hummingbird—your community hub and specialty cafe.
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

      {/* 2. Join Our Community */}
      <section className="bg-white/5 border border-white/5 rounded-3xl p-12 text-center space-y-6">
        <h2 className="text-4xl font-serif text-white">Join Our Community</h2>
        <p className="text-gray-400 max-w-lg mx-auto">Connect with like-minded creatives through our exclusive membership clubs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-2">
            <h3 className="text-xl font-serif text-white">Explore Our Community</h3>
            <p className="text-gray-400 text-sm">Connect with like-minded creatives through our exclusive clubs</p>
          </div>
          <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-2">
            <h3 className="text-xl font-serif text-white">Book & Writing Clubs</h3>
            <p className="text-gray-400 text-sm">Connect with like-minded creatives through our exclusive clubs</p>
          </div>
        </div>
      </section>

      {/* 3. What do we serve? */}
      <section className="space-y-12 py-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-serif text-white">What do we serve?</h2>
          <p className="text-gray-400">Nourishment for body, mind, and soul</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Fresh Salads', desc: 'Crisp greens and vibrant vegetables', img: saladImage },
            { title: 'Artisan Wraps', desc: 'Crisp greens and vibrant vegetables', img: wrapImage },
            { title: 'Smoothies', desc: 'Crisp greens and vibrant vegetables', img: smoothieImage },
            { title: 'Premium Coffees', desc: 'Crisp greens and vibrant vegetables', img: coffeeImage },
            { title: 'Gourmet Toasts', desc: 'Crisp greens and vibrant vegetables', img: toastImage },
            { title: 'Teas & infusions', desc: 'Crisp greens and vibrant vegetables', img: teaImage },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-green/30 transition-all">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl text-white font-serif mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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
