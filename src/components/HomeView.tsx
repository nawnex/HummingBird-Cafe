import React, { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS, TESTIMONIALS } from '../data';
import { 
  Leaf, ArrowRight, Star, Heart, Calendar, ArrowLeft, Plus, 
  Eye, Sparkles, Flame, Clock, ChevronLeft, ChevronRight, AlertTriangle 
} from 'lucide-react';

import saladImage from '../assets/images/salad_bowl_1781625701927.jpg';
import wrapImage from '../assets/images/artisan_wrap_1781625718315.jpg';
import smoothieImage from '../assets/images/fruit_smoothies_1781625734300.jpg';
import coffeeImage from '../assets/images/premium_coffees_1781625748410.jpg';
import toastImage from '../assets/images/gourmet_toasts_1781625764968.jpg';
import teaImage from '../assets/images/teas_infusions_1781625780459.jpg';
import hummingbirdLogo from '../assets/images/regenerated_image_1781625058014.webp';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onAddToCart: (item: MenuItem) => void;
  isLoggedIn?: boolean; 
}

// 7 visually beautiful menu item IDs for our premium isometric showcase
const FEATURED_HERO_IDS = ['tst-006', 'hom-002', 'swt-003', 'ice-001', 'sdw-005', 'cak-001', 'bkt-003'];

export default function HomeView({ onNavigate, onAddToCart, isLoggedIn }: HomeViewProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Isometric Scroll calculations & drag state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(800);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);

  // High-precision refs for frame animations to prevent state-delay bugs
  const isMouseDownRef = useRef(false);
  const isHoveredRef = useRef(false);
  const scrollAccumulatorRef = useRef(0);

  // Ref tracking whether a button scroll animation is in progress to pause auto-scrolling
  const isAnimatingRef = useRef(false);

  // Retrieve actual menu items for our hero carousel
  const heroItems = FEATURED_HERO_IDS.map(id => MENU_ITEMS.find(item => item.id === id)).filter(Boolean) as MenuItem[];

  // Replicate heroItems 15 times for a beautifully seamless infinite scroll carousel
  const infiniteRepeats = 15;
  const finalCarouselItems = Array.from({ length: infiniteRepeats }, (_, idx) => 
    heroItems.map((item, i) => ({
      ...item,
      uniqueId: `${item.id}-dup-${idx}-${i}`,
      globalI: idx * heroItems.length + i,
    }))
  ).flat();

  // Auto-rotate testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Update viewport width measurement on load and resize
  useEffect(() => {
    if (scrollContainerRef.current) {
      setViewportWidth(scrollContainerRef.current.clientWidth);
      const handleResize = () => {
        if (scrollContainerRef.current) {
          setViewportWidth(scrollContainerRef.current.clientWidth);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Center the scroll to show the middle card on loading
  useEffect(() => {
    setTimeout(() => {
      if (scrollContainerRef.current) {
        const cardWidth = 260;
        const cardGap = 24;
        const itemSpacing = cardWidth + cardGap;
        const singleSetWidth = heroItems.length * itemSpacing;
        
        // Start precisely at the 7th repetition set for infinite scrolling space in both directions
        const initialScroll = singleSetWidth * 7;
        scrollContainerRef.current.scrollLeft = initialScroll;
        setScrollAmount(initialScroll);
        scrollAccumulatorRef.current = initialScroll;
      }
    }, 250);
  }, [heroItems.length]);

  // Gentle, continuous slow spin effect - empty deps to avoid teardown/restart pauses
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 0.035; // Pixels per millisecond (extremely smooth, elegant drifting)

    const tick = (now: number) => {
      if (scrollContainerRef.current && !isMouseDownRef.current && !isAnimatingRef.current) {
        const delta = now - lastTime;
        scrollAccumulatorRef.current += scrollSpeed * delta;
        scrollContainerRef.current.scrollLeft = scrollAccumulatorRef.current;
      } else {
        lastTime = now;
      }
      lastTime = now;
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setScrollAmount(target.scrollLeft);

    // Keep accumulator synchronized during active dragging/scrolling
    if (isMouseDownRef.current || isAnimatingRef.current) {
      scrollAccumulatorRef.current = target.scrollLeft;
    }

    // Skip warp checks while arrow navigation sliding is actively animating
    if (isAnimatingRef.current) return;

    // Infinite wrapping logic
    const cardWidth = 260;
    const cardGap = 24;
    const itemSpacing = cardWidth + cardGap;
    const singleSetWidth = heroItems.length * itemSpacing;

    // Warp the scroll offset seamlessly to keep them inside the middle sets
    const minScroll = singleSetWidth * 5;
    const maxScroll = singleSetWidth * 9;

    if (target.scrollLeft < minScroll) {
      const diff = minScroll - target.scrollLeft;
      const setsToShift = Math.ceil(diff / singleSetWidth) + 2;
      const newScroll = target.scrollLeft + (setsToShift * singleSetWidth);
      target.scrollLeft = newScroll;
      scrollAccumulatorRef.current = newScroll;
    } else if (target.scrollLeft > maxScroll) {
      const diff = target.scrollLeft - maxScroll;
      const setsToShift = Math.ceil(diff / singleSetWidth) + 2;
      const newScroll = target.scrollLeft - (setsToShift * singleSetWidth);
      target.scrollLeft = newScroll;
      scrollAccumulatorRef.current = newScroll;
    }
  };

  // Mouse drag handlers to scroll horizontally on desktop beautifully
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    isMouseDownRef.current = true;
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollStartLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    isMouseDownRef.current = false;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    isMouseDownRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !isMouseDownRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed coefficient
    const nextScroll = scrollStartLeft - walk;
    scrollContainerRef.current.scrollLeft = nextScroll;
    scrollAccumulatorRef.current = nextScroll;
  };

  // Custom high-performance JS scroll animator that side-steps native smooth-scroll conflicts
  const animateScroll = (targetOffset: number) => {
    if (!scrollContainerRef.current || isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    
    const container = scrollContainerRef.current;
    const start = container.scrollLeft;
    const change = targetOffset - start;
    const duration = 280; // 280ms quick slide transition
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Quadratic ease-out formula
      const ease = progress * (2 - progress);
      
      const newScroll = start + change * ease;
      container.scrollLeft = newScroll;
      scrollAccumulatorRef.current = newScroll;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
        // Check wrapping boundaries immediately after animation is complete
        handleScroll({ currentTarget: container } as any);
      }
    };

    requestAnimationFrame(animate);
  };

  // Click-to-scroll button actions
  const slideLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 260;
      const cardGap = 24;
      const itemSpacing = cardWidth + cardGap;
      const targetOffset = scrollContainerRef.current.scrollLeft - itemSpacing;
      animateScroll(targetOffset);
    }
  };

  const slideRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 260;
      const cardGap = 24;
      const itemSpacing = cardWidth + cardGap;
      const targetOffset = scrollContainerRef.current.scrollLeft + itemSpacing;
      animateScroll(targetOffset);
    }
  };

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemName(item.name);
    setTimeout(() => setAddedItemName(null), 2500);
  };

  return (
    <div className="space-y-0 pb-20 font-sans relative">
      
      {/* Dynamic Toast Feedback Notification */}
      {addedItemName && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#191919] border border-primary-green text-white text-xs py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A7CCED] animate-bounce" />
          Added <strong className="text-primary-green">{addedItemName}</strong> to basket!
        </div>
      )}

      {/* =========================================================================
          1. IMMERSIVE HERO SECTION WITH ABSTRACT BOTANICAL DESIGN
          ========================================================================= */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-36 pb-28 border-b border-white/5 bg-[#0a0a0a] shadow-2xl min-h-[620px] flex flex-col justify-center z-10 transition-all duration-300 text-center">
        
        {/* The beautiful gourmet smoothies backdrop image */}
        <img 
          src={smoothieImage} 
          alt="Gourmet botanical smoothies" 
          className="absolute inset-0 w-full h-full object-cover opacity-65 pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* Deep ambient forest glows in margins */}
        <div className="absolute inset-0 bg-[#060805]/40" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary-green/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#A7CCED]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Dynamic deep glass ambient dark overlays for perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#121212] z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0 pointer-events-none" />

        {/* Center Container bounding the content */}
        <div className="max-w-4xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-6">
          
          {/* Hero Content Layer */}
          <div className="space-y-6 max-w-3xl text-center pt-8 pb-10 flex flex-col items-center">
            
            {/* Elegant luxury hummingbird logo big in the center */}
            <div className="w-36 h-36 md:w-44 md:h-44 mb-4 relative flex items-center justify-center animate-fade-in select-none">
              <img 
                src={hummingbirdLogo} 
                alt="Hummingbird Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(130,195,65,0.65)] transition-all duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.12] font-semibold max-w-3xl">
              A creative space for <br className="hidden sm:inline" />
              <span className="text-primary-green italic font-light font-serif">dreamers & innovators</span>
            </h1>

            {isLoggedIn && (
              <div className="inline-flex items-center gap-1 text-xs text-primary-green bg-primary-green/10 px-3 py-1.5 rounded-full border border-primary-green/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Card Membership active! <strong className="text-white">10% Automated Savings</strong> is applied.</span>
              </div>
            )}

            {/* Hero Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 justify-center">
              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-2.5 bg-primary-green hover:bg-primary-green/95 text-white text-xs font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                View Menu
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('members')}
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold rounded-full transition-all backdrop-blur-sm cursor-pointer"
              >
                See Membership Perks
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          1.5 DYNAMIC INFINITE ISOMETRIC HORIZONTAL CAROUSEL SECTION (100% Full-bleed width)
          ========================================================================= */}
      <section id="featured-bites-carousel" className="w-full relative overflow-hidden py-20 bg-[#161616]/40 border-b border-t border-white/5 text-center space-y-10">
        
        {/* Subtle glow highlights strictly for the carousel section */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Dynamic Heading Elements */}
        <div className="text-center space-y-2 max-w-2xl mx-auto px-4">
          <span className="text-[10px] font-bold text-primary-green uppercase tracking-widest block">Signature Harvest</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight leading-tight">
            Featured <span className="text-[#A7CCED] italic font-serif">Sourced Bites</span>
          </h2>
          <p className="text-xs text-gray-400">
            Hand-selected culinary specialties served fresh inside our botanical lodge. Drag to explore!
          </p>
        </div>

        {/* The Horizontal Isometric Track with Liquid Glass Border styling */}
        <div className="perspective-1500 relative w-full select-none z-10 py-6">

          {/* Liquid Glass Ground Ribbon Path behind cards */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-44 bg-white/3 backdrop-blur-xs border-y border-white/5 opacity-40 pointer-events-none z-0" />

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => {
              setIsHovered(true);
              isHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              isHoveredRef.current = false;
              handleMouseLeave();
            }}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex items-center gap-6 overflow-x-auto scrollbar-none py-10 px-4 md:px-8 cursor-grab active:cursor-grabbing scroll-auto"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/* Loop through duplicated Menu Items and calculate 3D skew / rotation dynamically */}
            {finalCarouselItems.map((item) => {
              const cardWidth = 260;
              const cardGap = 24;
              
              // Absolute card center position on track
              const cardCenter = item.globalI * (cardWidth + cardGap) + cardWidth / 2;
              
              const viewportCenter = scrollAmount + viewportWidth / 2;
              const diffFromCenter = cardCenter - viewportCenter;
              
              // Normalized fraction: -1.8 means far left, +1.8 means far right
              const norm = Math.max(-1.8, Math.min(1.8, diffFromCenter / (viewportWidth / 2 || 400)));
              
              // 3D Isometric / curved parameters dynamically calculated
              const rotateX = 14; // Constant isometric backward tilt
              const rotateY = norm * -22; // Focus inward toward center (concave curvature)
              const rotateZ = norm * 4.5; // Fan layout alignment
              const translateY = Math.abs(norm) * -24 + (norm * norm * -16); // Arching up at outer boundaries
              const scale = 1 - Math.min(Math.abs(norm) * 0.1, 0.25); // Zoom-in centered highlights
              const opacity = 1 - Math.min(Math.abs(norm) * 0.25, 0.5); // Gently dim trailing wings
              const zIndex = 20 - Math.round(Math.abs(norm) * 8);

              return (
                <div
                  key={item.uniqueId}
                  onClick={() => {
                    // Only expand detail if user clicked rather than dragged
                    if (Math.abs(diffFromCenter) < 100) {
                      setSelectedItem(item);
                    }
                  }}
                  className="shrink-0 transition-opacity duration-150 relative cursor-pointer"
                  style={{
                    width: `${cardWidth}px`,
                    height: '350px',
                    transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px) scale(${scale})`,
                    zIndex,
                    opacity,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  
                  {/* Outer Wrapper: Soft subtle translucent white frosted border with tuned down opacity */}
                  <div className="p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-white/8 rounded-[32px] shadow-[0_12px_36px_rgba(0,0,0,0.35)] hover:shadow-white/5 transition-all duration-300 h-full w-full">
                    
                    {/* Inner Content Card Container: Elegant faint obsidian dark background with low-intensity white border */}
                    <div className="bg-[#121212]/80 hover:bg-[#1a1a1a]/95 backdrop-blur-md rounded-[30px] p-5 h-full flex flex-col justify-between border border-white/5 relative overflow-hidden text-left transition-all duration-300 shadow-md">
                      
                      {/* Inside Backdrop light glow: extremely soft and micro ambient white glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-full blur-2xl pointer-events-none" />
                      
                      {/* Card Content block */}
                      <div className="space-y-4 relative z-10">
                        {/* Interactive Image Frame */}
                        <div className="h-44 w-full rounded-[22px] overflow-hidden relative shadow-inner border border-white/5 bg-black/40">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
                            referrerPolicy="no-referrer"
                          />
                        </div>
 
                        {/* Text Titles - Faint high-end neutral text pairing */}
                        <div className="space-y-1.5">
                          <h3 className="font-serif text-base font-extrabold text-slate-100 tracking-tight line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-[10px] text-primary-green uppercase tracking-widest font-bold">
                            {item.category} • Freshly Prepared
                          </p>
                          <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
 
                    </div>
                  </div>
 
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content below Hero/Carousel - constrained to max-w-7xl and centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-16">

      {/* =========================================================================
          2. JOIN OUR COMMUNITY SECTIONS
          ========================================================================= */}
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

      {/* =========================================================================
          3. WHAT DO WE SERVE? SECTIONS
          ========================================================================= */}
      <section className="space-y-12 py-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-serif text-white">What do we serve?</h2>
          <p className="text-gray-400">Nourishment for body, mind, and soul</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Fresh Salads', desc: 'Crisp greens, organic ingredients, and bright dressings', image: saladImage },
            { title: 'Artisan Wraps', desc: 'Savoury house-rolled premium grains with gourmet fillings', image: wrapImage },
            { title: 'Smoothies', desc: 'Vibrant direct-press fruits & superfood botanicals', image: smoothieImage },
            { title: 'Premium Coffees', desc: 'Ethically sourced, masterfully roasted shade-grown espresso', image: coffeeImage },
            { title: 'Gourmet Toasts', desc: 'Thick cut artisanal sourdough with rich plant spreads', image: toastImage },
            { title: 'Teas & infusions', desc: 'Hand-picked organic loose leaf blends and herbal tonics', image: teaImage },
          ].map((item, i) => (
            <div key={i} className="bg-[#121212]/90 border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-primary-green/35 transition-all duration-300 relative group min-h-[300px]">
              <div className="h-40 w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 relative z-10">
                <div className="space-y-2">
                  <Leaf className="w-5 h-5 text-primary-green group-hover:text-primary-green transition-colors shrink-0" />
                  <h3 className="text-lg text-white font-serif font-extrabold uppercase tracking-wide leading-snug">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. TESTIMONIALS CAROUSEL
          ========================================================================= */}
      <section className="bg-[#191919] border border-white/5 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Glow backdrop shadow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-green/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="absolute -top-10 left-10 text-[100px] text-white/2 font-serif select-none pointer-events-none">&ldquo;</div>
        
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          
          {/* Google Reviews Badge Header */}
          <div className="flex flex-col items-center gap-1.5 pb-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-white tracking-tight flex items-center">
                Guest Reviews on <span className="text-[#4285F4] ml-1">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
              </span>
              <span className="text-[10px] bg-primary-green/15 text-primary-green px-2.5 py-0.5 rounded-full font-mono font-bold border border-primary-green/15">
                4.8 ★★★★★
              </span>
            </div>
            <p className="text-xs text-gray-500 font-light">Real guest accounts from our Gibraltar establishment at Eurocity Passage</p>
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

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://www.google.com/search?q=The+Hummingbird+Caf%C3%A9+Reviews+gibraltar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-green text-white hover:bg-primary-green/90 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary-green/10"
            >
              Read Our Google Reviews
            </a>
            <a
              href="https://www.google.com/search?q=The+Hummingbird+Caf%C3%A9+Reviews+gibraltar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-xs font-semibold text-gray-300 transition-all"
            >
              Write a Review
            </a>
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

      {/* =========================================================================
          5. RECIPE DETAIL MODAL (HIGH INTENSITY LUXURY MASK)
          ========================================================================= */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop screen filter */}
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-xs"
            onClick={() => setSelectedItem(null)}
          />

          {/* Modal Platform Card */}
          <div className="bg-[#191919] border border-white/10 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col">
            {/* Cover header block */}
            <div className="h-56 w-full relative shrink-0">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191919] to-transparent" />
              
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full border border-[#191919]/40 transition-all flex items-center justify-center font-bold text-lg leading-none cursor-pointer z-20"
                aria-label="Close modal"
              >
                &times;
              </button>

              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[10px] font-bold text-primary-green uppercase tracking-widest bg-[#191919]/90 px-2.5 py-1 border border-primary-green/20 rounded-full">{selectedItem.category}</span>
                <h2 className="text-2xl font-serif text-white font-bold tracking-tight mt-2">{selectedItem.name}</h2>
              </div>
            </div>

            {/* Modal Body Info details */}
            <div className="p-6 space-y-6 flex-1 overflow-y-auto text-left">
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                {selectedItem.description}
              </p>

              {/* Ingredients Cloud tag collection */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Harvested Sourced Ingredients</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.ingredients.map((ing, i) => (
                    <span key={i} className="text-xs bg-white/5 border border-white/5 text-gray-300 py-1 px-2.5 rounded-md">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Allergen Callout Warning */}
              <div className="p-3.5 bg-yellow-400/5 border border-yellow-400/20 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Allergen Safety Callout</h4>
                  <div className="text-xs text-gray-300 mt-1">
                    {selectedItem.allergens.length > 0 ? (
                      <span>This product contains: <strong className="text-white">{selectedItem.allergens.join(', ')}</strong>. Please speak with our barista regarding severe tolerances.</span>
                    ) : (
                      <span>Soothed clean! <strong className="text-white">Contains zero common allergens</strong>. Clean kitchen handling protocols are meticulously kept.</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Nutritional value grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Nutritional Data</h4>
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 bg-black/35 rounded-lg border border-white/5">
                    <span className="text-gray-500 block text-[10px]">Calories</span>
                    <span className="text-white font-bold">{selectedItem.nutritionalValue.calories} cal</span>
                  </div>
                  <div className="p-2 bg-black/35 rounded-lg border border-white/5">
                    <span className="text-gray-500 block text-[10px]">Protein</span>
                    <span className="text-white font-bold">{selectedItem.nutritionalValue.protein}</span>
                  </div>
                  <div className="p-2 bg-black/35 rounded-lg border border-white/5">
                    <span className="text-gray-500 block text-[10px]">Carbohydrates</span>
                    <span className="text-white font-bold">{selectedItem.nutritionalValue.carbs}</span>
                  </div>
                  <div className="p-2 bg-black/35 rounded-lg border border-white/5">
                    <span className="text-gray-500 block text-[10px]">Healthy Fat</span>
                    <span className="text-white font-bold">{selectedItem.nutritionalValue.fat}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-6 bg-black/40 border-t border-white/5 flex items-center justify-between shrink-0">
              <div className="flex flex-col text-left">
                {isLoggedIn ? (
                  <>
                    <span className="text-sm line-through text-gray-500">£{selectedItem.price.toFixed(2)}</span>
                    <span className="text-lg font-bold text-primary-green">£{(selectedItem.price * 0.9).toFixed(2)} <span className="text-[10px] text-[#A7CCED] tracking-wide ml-1 font-bold">10% OFF</span></span>
                  </>
                ) : (
                  <span className="text-xl font-bold text-[#A7CCED]">£{selectedItem.price.toFixed(2)}</span>
                )}
                <span className="text-[10px] text-gray-400 font-mono">Recipe Database</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 border border-white/10 hover:bg-white/5 text-gray-300 text-xs font-semibold rounded-full transition-all cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleAddWithFeedback(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="px-6 py-2 bg-primary-green hover:bg-primary-green/95 text-white text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Add to basket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
