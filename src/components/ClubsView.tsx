import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  Heart, 
  Calendar, 
  Activity, 
  ShieldCheck, 
  Star,
  Leaf,
  Apple,
  Clock3,
  Flame,
  UserCheck
} from 'lucide-react';

import saladBowlImg from '../assets/images/salad_bowl_1781625701927.jpg';
import artisanWrapImg from '../assets/images/artisan_wrap_1781625718315.jpg';
import premiumCoffeeImg from '../assets/images/premium_coffees_1781625748410.jpg';
import smoothiesImg from '../assets/images/fruit_smoothies_1781625734300.jpg';

export default function ClubsView() {
  const [activeTab, setActiveTab] = useState<'salad' | 'kids'>('salad');

  // Salad Club Data
  const saladClubPerks = [
    {
      title: "Every Weekday Covered",
      desc: "One fresh, high-quality gourmet salad delivered directly to you every single weekday (Monday through Friday). No planning, no grocery runs.",
      icon: Calendar,
      color: "text-emerald-400 bg-emerald-500/10"
    },
    {
      title: "10 Rotating Varieties",
      desc: "To prevent \"lunch fatigue,\" we offer ten distinct artisan salad recipes on rotation: Pasta, Tuna Rice, Chickpea, Chicken Caesar, Goats Cheese, Mediterranean, Avocado, Couscous Pepper, Sweet Potato, and Pesto Pasta.",
      icon: Activity,
      color: "text-amber-400 bg-amber-500/10"
    },
    {
      title: "Zero-Waste Sustainability",
      desc: "Served entirely in a premium, custom reusable container system. This eco-friendly setup eliminates single-use plastic waste and keeps your food beautifully fresh.",
      icon: Leaf,
      color: "text-teal-400 bg-teal-500/10"
    }
  ];

  const saladVarieties = [
    "Pasta Salad", "Tuna Rice", "Chickpea Medley", "Chicken Caesar", 
    "Goats Cheese & Honey", "Mediterranean Olive", "Avocado & Seed", 
    "Couscous Pepper", "Maple Sweet Potato", "Fresh Pesto Pasta"
  ];

  // Kids Lunch Club Data
  const kidsClubPerks = [
    {
      title: "Wholesome & Balanced",
      desc: "Complete, nutritionally balanced school lunchboxes packed fresh with immense care every single morning. Real ingredients, clean fuel.",
      icon: Apple,
      color: "text-rose-400 bg-rose-500/10"
    },
    {
      title: "Exciting Variety",
      desc: "A constantly rotating menu of kid-friendly, homemade-style meals that keep children genuinely excited about their lunches while avoiding repetitive meals.",
      icon: Star,
      color: "text-[#DFBA73] bg-[#DFBA73]/10"
    },
    {
      title: "Time-Saving Convenience",
      desc: "Saves parents valuable hours and entirely eliminates the chaotic morning rush of prepping healthy school lunches from scratch.",
      icon: Clock3,
      color: "text-sky-400 bg-sky-500/10"
    }
  ];

  return (
    <div className="font-sans text-gray-100 bg-[#0F0F11] pb-24 space-y-20 overflow-hidden min-h-screen" id="clubs-view-root">
      
      {/* 1. HERO TITLE SECTION - GOOGLE STYLE TYPOGRAPHY & SPARE DESIGN */}
      <section className="relative w-full pt-20 pb-10 px-4 max-w-7xl mx-auto text-center space-y-8" id="clubs-header-section">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-green/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-primary-green font-mono block">
            The Hummingbird Collective
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal text-white tracking-tight leading-tight max-w-5xl mx-auto font-sans">
            Helpful clubs, built with <br className="hidden md:inline" />
            <span className="text-primary-green italic font-serif">your routines</span> in mind
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Nourishing your daily schedules with zero-friction lunch subscriptions. Select between our professional everyday health plan or stress-free school lunch solutions.
          </p>
        </div>

        {/* 2. LIQUID GLASS TWO-OPTION SELECTOR BAR */}
        <div className="flex justify-center pt-4" id="liquid-glass-selector-container">
          <div className="relative p-1.5 bg-white/[0.03] backdrop-blur-xl rounded-full border border-white/10 shadow-2xl flex items-center gap-1.5 max-w-md w-full sm:w-auto">
            {/* Liquid Glass Glow Effect Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-green/5 via-white/5 to-[#DFBA73]/5 opacity-60 pointer-events-none" />

            {/* Option 1: Salad Club */}
            <button
              onClick={() => setActiveTab('salad')}
              className={`relative flex-1 sm:flex-none px-6 sm:px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'salad'
                  ? 'bg-white text-slate-950 font-black shadow-lg scale-102 border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
              }`}
              id="select-salad-club-btn"
            >
              <span>🥗</span>
              <span>The Salad Club</span>
              {activeTab === 'salad' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-green rounded-full" />
              )}
            </button>

            {/* Option 2: Kids Lunch Club */}
            <button
              onClick={() => setActiveTab('kids')}
              className={`relative flex-1 sm:flex-none px-6 sm:px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'kids'
                  ? 'bg-white text-slate-950 font-black shadow-lg scale-102 border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
              }`}
              id="select-kids-club-btn"
            >
              <span>🎒</span>
              <span>The Kids Lunch Club</span>
              {activeTab === 'kids' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#DFBA73] rounded-full" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT SECTION BASED ON SELECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="club-details-display">
        
        {activeTab === 'salad' ? (
          /* ================= THE SALAD CLUB LAYOUT ================= */
          <div className="space-y-16 animate-fade-in" id="salad-club-content">
            
            {/* Club Split Hero Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#131316] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-green/[0.03] rounded-full blur-[100px] pointer-events-none" />
              
              {/* Left text detail column */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-green/10 border border-primary-green/20 rounded-full text-primary-green text-[10px] font-bold tracking-widest uppercase font-mono">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Premium Weekday Health Subscription</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
                  THE SALAD <br />
                  <span className="text-primary-green italic font-light font-serif">CLUB</span>
                </h2>

                <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                  A premium, hassle-free weekday lunch subscription designed for busy locals who want fresh, nutritious meals without the daily stress of cooking, food prep, or ordering. Enjoy clean fuel that power up your afternoons.
                </p>

                {/* Flat Rate Pricing Block */}
                <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl flex justify-between items-center max-w-md">
                  <div className="text-left">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Flat-rate membership</span>
                    <p className="text-2xl font-mono font-bold text-white">£100 <span className="text-xs text-gray-400">/ month</span></p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-primary-green font-mono font-extrabold bg-primary-green/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Zero Hidden Fees
                    </span>
                  </div>
                </div>

                {/* Target Audience Highlight */}
                <div className="flex items-start gap-3 border-t border-white/5 pt-6 max-w-xl">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-primary-green shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Designed Specifically For</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      Shift workers, medical staff, busy remote developers, and corporate office professionals looking for premium, healthy alternatives to standard fast food without worrying about strict calorie counting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right beautifully curated food visual banner */}
              <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={saladBowlImg} 
                  alt="Delicious Premium Salad Bowl" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                
                {/* Visual Label Details Overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2 text-left">
                  <span className="text-[9px] font-mono tracking-widest text-primary-green uppercase font-bold">
                    ★ Premium Fresh Ingredients
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif leading-tight">
                    Everyday Gourmet Nourishment
                  </h3>
                  <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                    Organically grown produce prepared from scratch daily in our clean kitchens.
                  </p>
                </div>
              </div>

            </div>

            {/* Core Perks Section (3 Cards) */}
            <div className="space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary-green font-bold uppercase tracking-wider">Why Join Salad Club?</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">The Core Perks</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {saladClubPerks.map((perk, idx) => {
                  const Icon = perk.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-[#131316] border border-white/5 hover:border-primary-green/20 rounded-2xl p-6 transition-all duration-300 space-y-4"
                    >
                      <div className={`w-10 h-10 rounded-xl ${perk.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white tracking-tight">{perk.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">{perk.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Variety Display */}
            <div className="bg-[#131316] border border-white/5 rounded-3xl p-8 text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary-green font-bold uppercase tracking-wider">No Lunch Boredom</span>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">10 Rotating Salad Varieties</h3>
                <p className="text-xs text-gray-400 font-light max-w-2xl leading-relaxed">
                  We prepare a rotating selection of ten distinct salad options to ensure you enjoy exciting flavor dynamics throughout the week.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
                {saladVarieties.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-white/[0.02] border border-white/5 hover:border-primary-green/25 rounded-xl text-center text-xs font-medium text-gray-300 transition-all cursor-default"
                  >
                    <span className="text-[10px] font-mono text-primary-green block font-bold mb-1">0{idx + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* ================= THE KIDS LUNCH CLUB LAYOUT ================= */
          <div className="space-y-16 animate-fade-in" id="kids-club-content">
            
            {/* Club Split Hero Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#131316] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
              
              {/* Left text detail column */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-[10px] font-bold tracking-widest uppercase font-mono">
                  <Apple className="w-3.5 h-3.5 text-rose-400" />
                  <span>Stress-Free Morning Routines</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
                  THE KIDS <br />
                  <span className="text-[#DFBA73] italic font-light font-serif">LUNCH CLUB</span>
                </h2>

                <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                  A highly tailored school meal scheme built to give busy parents a well-deserved break from the hectic morning routine while ensuring their children eat fresh, balanced, and delicious lunches at school.
                </p>

                {/* Pricing Tiers Description Block */}
                <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 max-w-xl">
                  <div className="text-left space-y-0.5">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Recurring Meal Plans</span>
                    <p className="text-lg font-mono font-bold text-white">Customized Tiers</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-gray-400 font-light leading-normal block">
                      Priced flexibly based on selected weekly frequency, snack pairings, and student lunch volumes.
                    </span>
                  </div>
                </div>

                {/* Target Audience Highlight */}
                <div className="flex items-start gap-3 border-t border-white/5 pt-6 max-w-xl">
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Designed Specifically For</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      Busy parents in Gibraltar looking for a reliable, nutritious, structured, and tasty school lunch solution that their children will actually look forward to eating every single day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right beautifully curated food visual banner */}
              <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={artisanWrapImg} 
                  alt="Healthy School Lunchbox Wrap" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                
                {/* Visual Label Details Overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2 text-left">
                  <span className="text-[9px] font-mono tracking-widest text-[#DFBA73] uppercase font-bold">
                    ★ Packed with Immense Care
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif leading-tight">
                    A Meal Schoolkids Love
                  </h3>
                  <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                    Nutrient-rich, child-approved organic wraps, fresh fruit slides, and clean healthy cookies.
                  </p>
                </div>
              </div>

            </div>

            {/* Core Perks Section (3 Cards) */}
            <div className="space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#DFBA73] font-bold uppercase tracking-wider">Nourish with Peace of Mind</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">The Core Perks</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {kidsClubPerks.map((perk, idx) => {
                  const Icon = perk.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-[#131316] border border-white/5 hover:border-[#DFBA73]/20 rounded-2xl p-6 transition-all duration-300 space-y-4"
                    >
                      <div className={`w-10 h-10 rounded-xl ${perk.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white tracking-tight">{perk.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">{perk.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Fresh Daily Process Highlight */}
            <div className="bg-[#131316] border border-white/5 rounded-3xl p-8 text-left grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              <div className="space-y-3 md:col-span-1">
                <span className="text-xs font-mono text-[#DFBA73] font-bold uppercase tracking-wider">Morning Preparation</span>
                <h3 className="text-xl font-serif text-white font-semibold">Fresh From Our Kitchen to School Gate</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  We prepare the boxes with absolute hygienic care every morning, sorting fruits, home-baking bread, and wrapping with thermal insulation.
                </p>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl space-y-2">
                  <span className="text-xs font-mono font-bold text-rose-400 block">01 / BALANCED FUEL</span>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    Every lunchbox features clean proteins, whole grain fibers, organic vitamins, and absolutely zero high-fructose corn syrup or artificial dyes.
                  </p>
                </div>
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl space-y-2">
                  <span className="text-xs font-mono font-bold text-[#DFBA73] block">02 / THERMAL PROTECTION</span>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    Sent out inside lightweight, customized eco-friendly thermal insulated school-bags to maintain excellent fresh chill until lunch bells ring.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

      </section>

      {/* 4. INFORMATIONAL CLUB SIGNUP CTA (Non-Interactive / Explanatory) */}
      <section className="max-w-4xl mx-auto px-4 text-center" id="clubs-footer-cta">
        <div className="bg-[#17171C] border border-white/5 rounded-3xl p-8 md:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-green/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-serif text-white font-semibold">
              Ready to Secure Your Subscription?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Subscriptions for both clubs are integrated securely inside our digital portal. Speak directly with our Eurotowers barista team or visit your digital member account profile to activate your lunch plan today.
            </p>
          </div>

          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-xs text-gray-400 font-light leading-relaxed max-w-2xl mx-auto text-left">
            <span className="font-mono text-[10px] uppercase font-bold text-primary-green block mb-1">
              ✓ Active Club Rules
            </span>
            Our clubs operate on a hassle-free automatic recurring subscription. You may pause, adjust menu choices, or toggle delivery addresses at any point via your central member dashboard panel before the billing cycle renews.
          </div>
        </div>
      </section>

    </div>
  );
}
