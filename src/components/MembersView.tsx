import React from 'react';
import { MemberProfile } from '../types';
import { 
  Sparkles, 
  Award, 
  Coffee, 
  Users, 
  Check, 
  Calendar, 
  Gift, 
  Truck, 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  Camera, 
  ChefHat, 
  ArrowRight, 
  Star,
  CheckCircle,
  Clock,
  MapPin,
  Smile,
  Zap
} from 'lucide-react';

import saladBowlImg from '../assets/images/salad_bowl_1781625701927.jpg';
import artisanWrapImg from '../assets/images/artisan_wrap_1781625718315.jpg';
import avocadoToastImg from '../assets/images/avocado_poached_egg_1781872898791.jpg';
import gourmetToastsImg from '../assets/images/gourmet_toasts_1781625764968.jpg';
import premiumCoffeeImg from '../assets/images/premium_coffees_1781625748410.jpg';
import smoothiesImg from '../assets/images/fruit_smoothies_1781625734300.jpg';
import teasImg from '../assets/images/teas_infusions_1781625780459.jpg';
import cafeCommunityImg from '../assets/images/cafe_community_vibe_1781882450931.jpg';

interface MembersViewProps {
  isLoggedIn: boolean;
  memberProfile: MemberProfile | null;
  onOpenLoginModal: () => void;
  onNavigate: (page: string) => void;
}

export default function MembersView({ isLoggedIn, memberProfile, onOpenLoginModal, onNavigate }: MembersViewProps) {
  
  const handleJoinClick = () => {
    if (isLoggedIn) {
      onNavigate('account');
    } else {
      onOpenLoginModal();
    }
  };

  const perkList = [
    {
      icon: Award,
      title: 'Daily 10% Cash-Back',
      desc: 'An automatic 10% discount integrated directly at checkout on all hot culinary meals, custom bowls, and specialty barista drinks.'
    },
    {
      icon: Truck,
      title: 'Complimentary Delivery',
      desc: 'Completely free eco-friendly courier delivery across the whole of Gibraltar, bringing your nourishing meals directly to your door.'
    },
    {
      icon: ShieldCheck,
      title: 'Priority Table Reservation',
      desc: 'Skip the wait with guaranteed early-seat reservations and priority booking windows for our popular seasonal tables.'
    },
    {
      icon: Star,
      title: 'VIP Masterclass Access',
      desc: 'Exclusive access and early seating for restricted-capacity evening culinary workshops and upskilling career classes.'
    }
  ];

  const workshopModules = [
    {
      title: 'Barista & Coffee Machine Operation',
      desc: 'Master commercial espresso machinery, bean calibration, milk steaming microfoam, and basic latte art from certified baristas.',
      hours: '6 Hours',
      level: 'All Levels',
      icon: Coffee
    },
    {
      title: 'Basic Food Prep & Clean Cooking',
      desc: 'Acquire professional knife skills, master healthy clean baking, and learn standard culinary sauces and stocks.',
      hours: '8 Hours',
      level: 'Beginner',
      icon: ChefHat
    },
    {
      title: 'Social Media Photography & Videography',
      desc: 'Learn high-end smartphone food styling, lighting, editing, and publishing for trending Reels and professional posts.',
      hours: '5 Hours',
      level: 'Intermediate',
      icon: Camera
    },
    {
      title: 'Digital Branding & Graphic Tools',
      desc: 'Learn modern visual design basics in Canva to create menu layouts, flyers, and premium social assets.',
      hours: '4 Hours',
      level: 'Beginner',
      icon: BookOpen
    }
  ];

  return (
    <div className="font-sans text-gray-100 bg-[#0F0F11] pb-24 space-y-24 overflow-hidden" id="members-view-root">
      
      {/* ================= 1. PREMIUM HERO SECTION (Boxycharm Inspired Layout) ================= */}
      <section 
        id="members-hero" 
        className="relative w-full bg-gradient-to-br from-[#E2F1FF] via-[#F9E8FF] to-[#FFF1F2] py-16 md:py-24 overflow-hidden border-b border-white/20"
      >
        {/* Background Ambient Ripple Highlights */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-pink-300/20 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Hero Left Content Column */}
          <div className="flex-1 text-left space-y-6 max-w-xl">

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[1.05]">
                Nourishment <br />
                <span className="text-indigo-600 italic font-light font-serif">Delivered</span> <br />
                Daily.
              </h1>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Score daily hand-crafted specialty coffee, artisanal wraps, and fresh organic wellness bowls worth up to <strong className="text-slate-900">£250/month</strong> for only <strong className="text-slate-900">£39/month</strong>. Plus, unlock a beautiful welcome merchandise package, daily automatic 10% savings, and priority networking events.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleJoinClick}
                className="px-10 py-4 bg-slate-950 hover:bg-slate-900 text-white font-extrabold uppercase text-xs tracking-widest transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3 cursor-pointer"
                id="hero-join-now-btn"
              >
                <span>{isLoggedIn ? 'VIEW MY STATUS' : 'JOIN THE CIRCLE NOW'}</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Hero Right Media Collage Column (Layered Luxury Food Photos) */}
          <div className="flex-1 w-full flex items-center justify-center relative min-h-[350px] md:min-h-[420px]">
            {/* Pastel Iridescent Backdrop Orb */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-pink-300 via-indigo-300 to-amber-200 opacity-40 blur-3xl pointer-events-none" />

            {/* Overlapping Image 1: Poached Egg Toast (Left overlay) */}
            <div className="absolute -left-2 md:-left-4 top-16 z-10 w-36 sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-[-8deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300">
              <img 
                src={avocadoToastImg} 
                alt="Avocado Toast with Poached Egg" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <span className="text-[10px] font-serif text-white font-semibold">Poached Egg Avocado Toast</span>
              </div>
            </div>

            {/* Overlapping Image 2: Vibrant Salad Bowl (Center main) */}
            <div className="relative z-20 w-48 sm:w-60 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-2 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300">
              <img 
                src={saladBowlImg} 
                alt="Fresh Organic Salad Bowl" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <span className="text-xs font-serif text-white font-semibold">Organic Rainbow Salad Bowl</span>
              </div>
            </div>

            {/* Overlapping Image 3: Specialty Latte (Right overlay) */}
            <div className="absolute -right-2 md:-right-4 bottom-10 z-10 w-36 sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-[12deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300">
              <img 
                src={premiumCoffeeImg} 
                alt="Specialty Latte Art" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <span className="text-[10px] font-serif text-white font-semibold">Specialty House Latte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. CORE MEMBERSHIP PERKS SECTION ================= */}
      <section id="members-perks" className="space-y-12 max-w-7xl mx-auto px-4">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-primary-green font-mono">
            Everyday Privileges
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-semibold tracking-tight">
            Designed for Your Lifestyle
          </h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Every Hummingbird membership is engineered to deliver seamless botanical luxury, absolute neighborhood utility, and massive economic returns.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perkList.map((perk, idx) => {
            const IconComponent = perk.icon;
            return (
              <div 
                key={idx}
                className="bg-[#151518] border border-white/5 hover:border-primary-green/35 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-left space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{perk.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{perk.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono font-semibold pt-2">
                  <Check className="w-3.5 h-3.5 text-primary-green" />
                  <span>UNLOCKED INSTANTLY</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 3. PHYSICAL WELCOME MERCHANDISE SHOWCASE ================= */}
      <section id="welcome-merchandise" className="relative border-y border-stone-900 bg-[#121215] py-20 px-4">
        {/* Subtle decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-green/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#DFBA73] uppercase tracking-widest">
              <Gift className="w-4 h-4 text-[#DFBA73]" />
              <span>Unbox Sensory Luxury</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-semibold tracking-tight">
              The Flagship Welcome Kit
            </h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Delivered straight to your doorstep within 48 hours of joining. Each premium piece is ethically sourced, custom-woven, and designed to match your daily routines.
            </p>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            
            {/* Box 1: Linen Barista Apron (Double Column) */}
            <div className="md:col-span-2 bg-[#17171B] border border-white/5 hover:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-[340px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-transparent pointer-events-none" />
              <div className="z-10 space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#DFBA73] bg-[#DFBA73]/10 px-2.5 py-1 rounded-full uppercase">
                  Flagship Apparel
                </span>
                <h3 className="text-2xl font-bold font-serif text-white tracking-tight pt-2">
                  Organic Linen Barista Apron
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light max-w-md">
                  Woven from 100% sustainable European linen in Woodland Sage. Decorated with an elegant hand-embossed Hummingbird Cafe monogram crest. Features raw brass strap buckles, adjustable neck loops, and cross-stitched utility pockets.
                </p>
              </div>

              <div className="z-10 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono">
                <span className="text-gray-500">Woodland Sage / Standard Unisex</span>
                <span className="text-[#DFBA73] font-bold text-xs">EST. VALUE £35</span>
              </div>
            </div>

            {/* Box 2: Vacuum Double-Steel Flask */}
            <div className="bg-[#17171B] border border-white/5 hover:border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-[340px] group">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full uppercase">
                  Daily Hydration
                </span>
                <h3 className="text-lg font-bold font-serif text-white tracking-tight pt-2">
                  Premium Travel Tumbler
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  A high-grade, double-walled vacuum insulated travel flask with robust seals. Engineered to keep coffee boiling for 12 hours or cold infusions chilled for 24 hours.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono">
                <span className="text-gray-500">16oz Matte White</span>
                <span className="text-[#DFBA73] font-bold">EST. VALUE £25</span>
              </div>
            </div>

            {/* Box 3: Eucalyptus Leisure Hoodie */}
            <div className="bg-[#17171B] border border-white/5 hover:border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-[340px] group">
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-full uppercase">
                  Heavy Knitwear
                </span>
                <h3 className="text-lg font-bold font-serif text-white tracking-tight pt-2">
                  Eucalyptus Cotton Hoodie
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  Supremely soft organic heavy-knit cotton hoodie in Coordinating Eucalyptus. Finished with elegant stitched embroidery and tailored ribbing for standard athletic wear.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono">
                <span className="text-gray-500">360 GSM Organic Cotton</span>
                <span className="text-[#DFBA73] font-bold">EST. VALUE £45</span>
              </div>
            </div>

            {/* Box 4: Sustainable Canvas Carrier */}
            <div className="bg-[#17171B] border border-white/5 hover:border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-[240px] md:h-auto group">
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-stone-400 bg-white/5 px-2.5 py-1 rounded-full uppercase">
                  Utility Carry
                </span>
                <h3 className="text-lg font-bold font-serif text-white tracking-tight pt-2">
                  Linen Tote bag
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  A heavy-duty canvas shopper bag perfect for carrying whole grain produce, groceries, or hauling your remote work laptop.
                </p>
              </div>
              <span className="text-[#DFBA73] text-xs font-serif font-bold pt-4 block">EST. VALUE £15</span>
            </div>

            {/* Box 5: Custom Camper Cap Duo (Double Column) */}
            <div className="md:col-span-2 bg-[#17171B] border border-white/5 hover:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-[240px] md:h-auto group">
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-stone-400 bg-white/5 px-2.5 py-1 rounded-full uppercase">
                  Caps & Crowns
                </span>
                <h3 className="text-xl font-bold font-serif text-white tracking-tight pt-2">
                  Signature Headwear Duo
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  Includes a structured crisp white canvas baseball snapback and a matching olive green low-profile camper cap for dynamic styling in any climate.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono">
                <span className="text-gray-500">Includes both custom items</span>
                <span className="text-[#DFBA73] font-bold">EST. VALUE £28</span>
              </div>
            </div>

            {/* Box 6: Whole Bean Signature Coffee Bags */}
            <div className="bg-[#17171B] border border-white/5 hover:border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-[240px] md:h-auto group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/[0.02] to-transparent pointer-events-none" />
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#DFBA73] bg-[#DFBA73]/10 px-2.5 py-1 rounded-full uppercase">
                  Fresh Roast
                </span>
                <h3 className="text-lg font-bold font-serif text-white tracking-tight pt-2">
                  The Hummingbird Blend
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  A fresh package of our single-origin whole bean coffee, roasted in small batches by local artisans to highlight sweet floral notes and cacao finishes.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono">
                <span className="text-gray-500">250g Vacuum Valve Bag</span>
                <span className="text-[#DFBA73] font-bold">EST. VALUE £12</span>
              </div>
            </div>

          </div>

          {/* Value Summary footer block */}
          <div className="max-w-xl mx-auto p-5 bg-[#DFBA73]/5 border border-[#DFBA73]/20 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#DFBA73] uppercase tracking-wider block">Total Welcome Pack Value</span>
              <p className="text-stone-300 text-xs font-light leading-relaxed">
                Apron (£35) + Tumbler (£25) + Hoodie (£45) + Tote & Headwear (£43) + Coffee Blend (£12)
              </p>
            </div>
            <div className="py-2.5 px-4 bg-black/50 border border-white/10 rounded-xl font-mono shrink-0">
              <span className="text-[8px] text-gray-400 block uppercase font-bold tracking-wider">Estimated Total</span>
              <span className="text-[#DFBA73] text-xl font-bold">£160.00</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. DIGITAL STAMP CARD SHOWCASE (Non-Interactive) ================= */}
      <section id="stamp-scheme-showcase" className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Written column */}
        <div className="lg:col-span-6 text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-green/10 rounded-full border border-primary-green/20 text-primary-green text-[10px] font-bold tracking-wider uppercase font-mono">
            <Coffee className="w-4 h-4" />
            <span>Frictionless Loyalty Stamp Card</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-semibold tracking-tight leading-none">
            Every Visit, <span className="text-primary-green italic font-light">Rewarded</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            No plastic cards or messy ink stamps required. Our digital stamp sequence is linked directly to your order checkout profile. Every beverage purchased automatically accrues stamps instantly synced to your digital profile.
          </p>
          
          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-primary-green/10 flex items-center justify-center shrink-0 text-primary-green mt-1">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Automatic Stamp Accrual</h4>
                <p className="text-xs text-gray-500 font-light mt-0.5">Simply scan your member QR code or order online. Stamps post immediately.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-primary-green/10 flex items-center justify-center shrink-0 text-primary-green mt-1">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Fill 9, Unlock 10th</h4>
                <p className="text-xs text-gray-500 font-light mt-0.5">Upon accumulating 9 stamps, your 10th visit unlocks a complementary beverage voucher worth £10.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-xs text-gray-400 font-light leading-relaxed">
            <strong className="text-white">Note:</strong> The loyalty stamp card representation on the right is fully synced to your check-ins automatically. No typing, checking, or clicking required.
          </div>
        </div>

        {/* Right Stamp visual card column (Purely Informational / Non-Interactive) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-md bg-[#131317] border border-[#DFBA73]/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-center">
            
            {/* Top gold seal line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBA73]/60 to-transparent" />
            
            {/* Stamp Logo */}
            <div className="flex justify-center items-center gap-1.5 opacity-90 mb-4">
              <svg viewBox="0 0 100 100" className="w-5 h-5 text-[#DFBA73]" fill="currentColor">
                <path d="M48.5,45.2 C46.1,43.2 41.2,40.1 36.5,41.2 C35.2,41.5 31.5,43.1 30.1,44.5 C29.5,45.1 27.5,48.2 27.2,49.1 C26.8,50.1 24.1,54.2 24.5,53.2 C24.9,52.2 25.1,48.1 25.5,47.2 C26.2,44.2 28.5,39.5 31.4,36.5 C35.2,32.6 40.5,30.5 45.2,30.2 C45.5,30.1 46.2,30.5 46.5,30.8 M48.5,45.2 C51.5,47.2 55.4,50.2 60.1,51.5 C61.5,51.9 65.5,52.5 68.2,52.2 C71.2,51.8 74.8,49.5 76.5,47.8 C79.2,45.1 82.5,40.2 84.1,36.5 C85.1,34.2 85.5,31.2 85.2,29.1 L75.2,32.4 C71.2,33.5 66.5,35.2 62.5,37.5 C58.2,39.9 52.5,43.2 48.5,45.2 Z" />
              </svg>
              <span className="text-[9px] font-serif tracking-[0.25em] text-[#DFBA73] font-bold uppercase">Hummingbird Loyalty</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-6">
              Official Member Stamping Card
            </h3>

            {/* Stamp Grid (7 filled, 2 empty, 1 coupon slot) */}
            <div className="grid grid-cols-5 gap-3.5 mb-6">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div 
                  key={num}
                  className="aspect-square rounded-full bg-gradient-to-br from-[#1C1813] to-[#2E2419] border border-[#DFBA73] text-[#DFBA73] shadow-md flex items-center justify-center relative scale-102"
                >
                  <svg viewBox="0 0 100 100" className="w-7 h-7 text-[#DFBA73]" fill="currentColor">
                    <path d="M48.5,45.2 C46.1,43.2 41.2,40.1 36.5,41.2 C35.2,41.5 31.5,43.1 30.1,44.5 C29.5,45.1 27.5,48.2 27.2,49.1 C26.8,50.1 24.1,54.2 24.5,53.2 C24.9,52.2 25.1,48.1 25.5,47.2 C26.2,44.2 28.5,39.5 31.4,36.5 C35.2,32.6 40.5,30.5 45.2,30.2 C45.5,30.1 46.2,30.5 46.5,30.8 M48.5,45.2 C51.5,47.2 55.4,50.2 60.1,51.5 C61.5,51.9 65.5,52.5 68.2,52.2 C71.2,51.8 74.8,49.5 76.5,47.8 C79.2,45.1 82.5,40.2 84.1,36.5 C85.1,34.2 85.5,31.2 85.2,29.1 L75.2,32.4 C71.2,33.5 66.5,35.2 62.5,37.5 C58.2,39.9 52.5,43.2 48.5,45.2 Z" />
                    <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-45" />
                  </svg>
                  <span className="absolute bottom-1 text-[5px] font-mono opacity-40 font-bold">{num}</span>
                </div>
              ))}

              {[8, 9].map((num) => (
                <div 
                  key={num}
                  className="aspect-square rounded-full bg-stone-900 border border-white/15 text-stone-700 flex items-center justify-center relative"
                >
                  <svg viewBox="0 0 100 100" className="w-7 h-7 text-white/5" fill="currentColor">
                    <path d="M48.5,45.2 C46.1,43.2 41.2,40.1 36.5,41.2 C35.2,41.5 31.5,43.1 30.1,44.5 C29.5,45.1 27.5,48.2 27.2,49.1 C26.8,50.1 24.1,54.2 24.5,53.2 C24.9,52.2 25.1,48.1 25.5,47.2 C26.2,44.2 28.5,39.5 31.4,36.5 C35.2,32.6 40.5,30.5 45.2,30.2 C45.5,30.1 46.2,30.5 46.5,30.8 M48.5,45.2 C51.5,47.2 55.4,50.2 60.1,51.5 C61.5,51.9 65.5,52.5 68.2,52.2 C71.2,51.8 74.8,49.5 76.5,47.8 C79.2,45.1 82.5,40.2 84.1,36.5 C85.1,34.2 85.5,31.2 85.2,29.1 L75.2,32.4 C71.2,33.5 66.5,35.2 62.5,37.5 C58.2,39.9 52.5,43.2 48.5,45.2 Z" />
                  </svg>
                  <span className="absolute bottom-1 text-[5px] font-mono opacity-40 font-bold">{num}</span>
                </div>
              ))}

              {/* 10th Spot: Voucher Claim Block */}
              <div 
                className="aspect-square rounded-full bg-stone-900 border border-[#DFBA73]/30 text-[#DFBA73]/70 flex flex-col items-center justify-center text-[7px] font-bold uppercase leading-none p-1"
              >
                <span className="text-center font-bold tracking-tight text-[8px]">FREE</span>
                <span className="text-center font-bold tracking-tight text-[8px] text-[#DFBA73]">£10</span>
                <span className="text-center text-[5px] font-mono mt-0.5 opacity-80">COUPON</span>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-2xl text-left text-[11px] text-gray-400 font-light space-y-1">
              <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-[#DFBA73] block">Active Status Tracker:</span>
              <p>Stamps Accrued: <strong className="text-white font-mono">7 / 10</strong></p>
              <p>Estimated drinks to claim: <strong className="text-primary-green">3 more purchases</strong></p>
            </div>

            <div className="text-[10px] text-gray-500 font-mono pt-4 border-t border-white/5 mt-4">
              📊 Instantly synced with Hummingbird POS card limits.
            </div>
          </div>
        </div>

      </section>

      {/* ================= 5. COMMUNITY EVENTS & CAREER CLASSES SECTION ================= */}
      <section id="community-enrichment" className="space-y-12 max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[#DFBA73] font-mono">
            Social &amp; Professional Co-Learning
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-semibold tracking-tight">
            Events &amp; Upskilling Masterclasses
          </h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Gain immediate booking priorities for Wednesday corporate midday buffets and our evening upskilling culinary career curriculum.
          </p>
        </div>

        {/* Classes Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopModules.map((workshop, idx) => {
            const IconComp = workshop.icon;
            return (
              <div 
                key={idx}
                className="bg-[#151518] border border-white/5 rounded-2xl p-6 hover:border-[#DFBA73]/30 transition-all duration-300 flex flex-col justify-between text-left space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-[#DFBA73]/10 text-[#DFBA73] flex items-center justify-center">
                    <IconComp className="w-4 h-4" />
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-gray-500 uppercase">{workshop.hours} class</span>
                    <span className="text-primary-green font-bold">{workshop.level}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#DFBA73] transition-colors leading-tight">
                    {workshop.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {workshop.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-[#DFBA73] font-mono font-bold uppercase tracking-wider border-t border-white/5 pt-3">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Early-Seat Reservation Included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Noon Network Pass Showcase */}
        <div className="bg-gradient-to-r from-indigo-950/20 via-[#151518] to-indigo-950/20 border border-white/5 rounded-3xl p-8 md:p-12 text-left flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#DFBA73] bg-[#DFBA73]/10 px-2.5 py-1 rounded-full uppercase">
              Corporate &amp; Creative Buffets
            </span>
            <h3 className="text-2xl font-serif text-white font-semibold">
              Wednesday Noon Network Pass
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Every Wednesday from 12:00 to 13:30, Hummingbird hosts a high-end stationary boardroom buffet. Designed for local freelancers, designers, remote developers, and corporate regulars to network over seasonal culinary platters and herbal cordials.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary-green" />
                Wednesdays 12:00-13:30
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary-green" />
                Eurotowers Boardroom
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary-green" />
                Boardroom Stationery Catering
              </span>
            </div>
          </div>
          <div className="py-4 px-6 bg-black/40 border border-white/5 rounded-2xl text-center min-w-[160px]">
            <span className="text-[10px] text-gray-400 font-mono block uppercase">PASS FEE</span>
            <span className="text-[#DFBA73] text-2xl font-bold font-mono">£40 / month</span>
            <span className="text-[8px] text-gray-500 font-mono block mt-1">4 Weekly Entrees Included</span>
          </div>
        </div>

      </section>

      {/* ================= 6. TRUSTED FOOTER BANNER / CTA ================= */}
      <section id="trust-banner" className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#17171C] border border-white/5 rounded-3xl p-8 md:p-12 space-y-6 relative overflow-hidden">
          {/* Gold bleed background effect */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#DFBA73]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-3">
            <Smile className="w-8 h-8 text-[#DFBA73] mx-auto animate-bounce" />
            <h3 className="text-2xl md:text-3xl font-serif text-white font-semibold">
              Ready to Upgrade Your Nourishment?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Become part of a highly curated neighborhood circle. Gain access to premium sustainable gear, delicious daily saving stamps, and custom artisan courses instantly.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleJoinClick}
              className="px-8 py-3.5 bg-gradient-to-r from-[#DFBA73] to-[#B08E4F] hover:brightness-110 active:scale-95 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <span>{isLoggedIn ? 'EXPLORE MY PROFILE' : 'JOIN THE INNER CIRCLE'}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
