import React, { useState, useEffect, useRef } from 'react';
import { MenuItem, MemberProfile } from '../types';
import { MENU_ITEMS, TESTIMONIALS } from '../data';
import { 
  Leaf, ArrowRight, Star, Heart, Calendar, ArrowLeft, Plus, 
  Eye, Sparkles, Flame, Clock, ChevronLeft, ChevronRight, AlertTriangle, ArrowRight as ArrowRightIcon
} from 'lucide-react';

import saladImage from '../assets/images/salad_bowl_1781625701927.jpg';
import wrapImage from '../assets/images/artisan_wrap_1781625718315.jpg';
import smoothieImage from '../assets/images/fruit_smoothies_1781625734300.jpg';
import coffeeImage from '../assets/images/premium_coffees_1781625748410.jpg';
import toastImage from '../assets/images/gourmet_toasts_1781625764968.jpg';
import teaImage from '../assets/images/teas_infusions_1781625780459.jpg';
import hummingbirdLogo from '../assets/images/regenerated_image_1781625058014.webp';
import hummingbirdStampLogo from '../assets/images/regenerated_image_1782303722732.png';

// Preload instantly at module parsing phase to leverage early network socket download allocation
if (typeof window !== 'undefined') {
  const preloadImg1 = new Image();
  preloadImg1.src = smoothieImage;
  const preloadImg2 = new Image();
  preloadImg2.src = hummingbirdLogo;
}

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onAddToCart: (item: MenuItem) => void;
  isLoggedIn?: boolean; 
  memberProfile?: MemberProfile | null;
  onOpenLoginModal?: () => void;
}

// 7 visually beautiful menu item IDs for our premium isometric showcase
const FEATURED_HERO_IDS = ['tst-006', 'hom-002', 'swt-003', 'ice-001', 'sdw-005', 'cak-001', 'bkt-003'];

export default function HomeView({ onNavigate, onAddToCart, isLoggedIn, memberProfile, onOpenLoginModal }: HomeViewProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  
  const [guestName, setGuestName] = useState('');
  const [memberNo] = useState(() => `HMB-${Math.floor(10000 + Math.random() * 90000)}`);

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

  // Preload critical assets for the hero section to prioritize initial loading
  useEffect(() => {
    const imagesToPreload = [
      { src: smoothieImage, type: 'image/jpeg' },
      { src: hummingbirdLogo, type: 'image/webp' }
    ];
    
    const links: HTMLLinkElement[] = [];
    imagesToPreload.forEach(({ src, type }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = type;
      // @ts-ignore
      link.fetchpriority = 'high';
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

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
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
        />

        {/* Deep ambient forest glows in margins */}
        <div className="absolute inset-0 bg-[#060805]/20" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary-green/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#A7CCED]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Dynamic deep glass ambient dark overlays for perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#121212] z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-0 pointer-events-none" />

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
                loading="eager"
                // @ts-ignore
                fetchPriority="high"
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

      {/* =========================================================================
          2. THE VINTAGE MEMBER PASS SHOWCASE (Hummingbird Core Membership)
          ========================================================================= */}
      <section className="w-full bg-[#E5A094] py-16 md:py-24 text-center space-y-8 relative overflow-hidden flex flex-col items-center justify-center border-y border-black/5" id="home-membership-section">
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0.06)_100%)] pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-3 z-10 text-[#5F1D11]">
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight uppercase">
            The Hummingbird Circle Pass
          </h2>
          <p className="text-sm font-medium leading-relaxed max-w-lg mx-auto opacity-90">
            Secure flat daily savings, premium welcome rewards, and exclusive member-only benefits. View your official credential pass below:
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 w-full flex flex-col items-center gap-10 relative z-10">
          
          {/* CARD 1: OFFICIAL MEMBERSHIP IDENTIFICATION CARD */}
          <div className="relative w-full max-w-[620px] bg-[#FAF6EE] text-[#C54E35] p-6 sm:p-10 rounded-[1.75rem] border border-black/[0.05] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.15)] overflow-hidden">
            
            {/* Real Card Scratches, Dust & Texture Overlays */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-multiply select-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise-overlay-home">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise-overlay-home)" />
                
                {/* Fine realistic scratches */}
                <path d="M 40,30 L 65,35 M 480,85 L 450,110 M 210,180 L 220,195" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.65" />
                <path d="M 120,280 L 145,270 M 520,35 L 530,50 M 350,190 L 375,180" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.65" />
                <path d="M 90,130 L 70,150 M 180,60 L 195,50" stroke="#C54E35" strokeWidth="0.5" strokeLinecap="round" opacity="0.25" />
                <path d="M 310,310 L 295,320 M 490,240 L 510,230" stroke="#C54E35" strokeWidth="0.5" strokeLinecap="round" opacity="0.25" />
                
                {/* Subtle splotches */}
                <circle cx="95" cy="210" r="1.5" fill="#B9442D" opacity="0.2" />
                <circle cx="380" cy="50" r="1" fill="#B9442D" opacity="0.15" />
                <circle cx="250" cy="290" r="2" fill="#B9442D" opacity="0.2" />
                <circle cx="540" cy="180" r="1.5" fill="#B9442D" opacity="0.15" />
              </svg>
            </div>

            {/* Vertical Fold Crease Line (Absolute center shadow/highlight) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-black/[0.04] via-black/[0.1] to-black/[0.04] border-r border-white/40 pointer-events-none z-10" />

            {/* Top Header */}
            <div className="text-center space-y-1 relative z-10 pb-6 sm:pb-8">
              <span className="text-[10px] sm:text-xs font-sans font-black tracking-[0.25em] uppercase text-[#C54E35]/70 block leading-none">
                Official Member Of The
              </span>
              <h2 className="text-xl sm:text-3xl font-black tracking-tight uppercase text-[#C54E35] font-sans leading-none">
                Hummingbird Circle
              </h2>
            </div>

            {/* Card Content Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Stamp on the Left (Col 5) */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative select-none filter drop-shadow-md">
                  {/* Custom Stamp Border with 4-side teeth cutouts */}
                  <svg width="130" height="170" viewBox="0 0 130 170" className="w-32 h-40">
                    <path d="
                      M 5,5 
                      Q 5,0 10,0 Q 15,0 15,5
                      Q 15,0 20,0 Q 25,0 25,5
                      Q 25,0 30,0 Q 35,0 35,5
                      Q 35,0 40,0 Q 45,0 45,5
                      Q 45,0 50,0 Q 55,0 55,5
                      Q 55,0 60,0 Q 65,0 65,5
                      Q 65,0 70,0 Q 75,0 75,5
                      Q 75,0 80,0 Q 85,0 85,5
                      Q 85,0 90,0 Q 95,0 95,5
                      Q 95,0 100,0 Q 105,0 105,5
                      Q 105,0 110,0 Q 115,0 115,5
                      Q 115,0 120,0 Q 125,0 125,5
                      
                      L 125,10
                      Q 130,10 130,15 Q 130,20 125,20
                      Q 130,20 130,25 Q 130,30 125,30
                      Q 130,30 130,35 Q 130,40 125,40
                      Q 130,40 130,45 Q 130,50 125,50
                      Q 130,50 130,55 Q 130,60 125,60
                      Q 130,60 130,65 Q 130,70 125,70
                      Q 130,70 130,75 Q 130,80 125,80
                      Q 130,80 130,85 Q 130,90 125,90
                      Q 130,90 130,95 Q 130,100 125,100
                      Q 130,100 130,105 Q 130,110 125,110
                      Q 130,110 130,115 Q 130,120 125,120
                      Q 130,120 130,125 Q 130,130 125,130
                      Q 130,130 130,135 Q 130,140 125,140
                      Q 130,140 130,145 Q 130,150 125,150
                      Q 130,150 130,155 Q 130,160 125,160
                      
                      L 120,165
                      Q 120,170 115,170 Q 110,170 110,165
                      Q 110,170 105,170 Q 100,170 100,165
                      Q 100,170 95,170 Q 90,170 90,165
                      Q 90,170 85,170 Q 80,170 80,165
                      Q 80,170 75,170 Q 70,170 70,165
                      Q 70,170 65,170 Q 60,170 60,165
                      Q 60,170 55,170 Q 50,170 50,165
                      Q 50,170 45,170 Q 40,170 40,165
                      Q 40,170 35,170 Q 30,170 30,165
                      Q 30,170 25,170 Q 20,170 20,165
                      Q 20,170 15,170 Q 10,170 10,165
                      Q 10,170 5,170 Q 0,170 0,165
                      
                      L 5,160
                      Q 0,160 0,155 Q 0,150 5,150
                      Q 0,150 0,145 Q 0,140 5,140
                      Q 0,140 0,135 Q 0,130 5,130
                      Q 0,130 0,125 Q 0,120 5,120
                      Q 0,120 0,115 Q 0,110 5,110
                      Q 0,110 0,105 Q 0,100 5,100
                      Q 0,100 0,95 Q 0,90 5,90
                      Q 0,90 0,85 Q 0,80 5,80
                      Q 0,80 0,75 Q 0,70 5,70
                      Q 0,70 0,65 Q 0,60 5,60
                      Q 0,65 0,60 Q 0,55 5,55
                      Q 0,55 0,50 Q 0,45 5,45
                      Q 0,45 0,40 Q 0,35 5,35
                      Q 0,35 0,30 Q 0,25 5,25
                      Q 0,25 0,20 Q 0,15 5,15
                      Q 0,15 0,10 Q 0,5 5,5
                      Z" fill="#C54E35" />
                    <rect x="12" y="12" width="106" height="146" rx="2" fill="none" stroke="#FAF6EE" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
                  </svg>
                  <div className="absolute inset-0 p-4 flex flex-col justify-between items-center text-center text-[#FAF6EE]">
                    <span className="text-[8px] font-mono tracking-widest uppercase font-bold text-[#FAF6EE]/80 mt-1">EST. 2026</span>
                    <div className="my-1 flex flex-col items-center justify-center">
                      <img 
                        src={hummingbirdStampLogo} 
                        alt="Hummingbird Logo" 
                        className="w-16 h-16 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-center space-y-0.5 mb-2">
                      <span className="text-[11px] font-black tracking-tight uppercase font-serif block leading-none">HUMMINGBIRD</span>
                      <span className="text-[8px] font-mono tracking-wider uppercase opacity-85 block leading-none">GIBRALTAR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fields on the Right (Col 7) */}
              <div className="sm:col-span-7 space-y-6 text-left w-full">
                
                {/* NAME Field */}
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#C54E35]/65 block leading-none">
                    NAME
                  </span>
                  <div className="border-b border-[#C54E35]/40 pb-1 text-base font-serif italic text-[#C54E35] font-semibold min-h-[28px]">
                    {/* Empty line with no input options or interactions */}
                  </div>
                </div>

                {/* MEMBER SINCE Field */}
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#C54E35]/65 block leading-none">
                    MEMBER SINCE
                  </span>
                  <div className="border-b border-[#C54E35]/40 pb-1 text-sm font-serif italic text-[#C54E35] font-semibold min-h-[24px]">
                    {/* Empty line with no input options or interactions */}
                  </div>
                </div>

                {/* MEMBER NO Field */}
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#C54E35]/65 block leading-none">
                    MEMBER NO.
                  </span>
                  <div className="border-b border-[#C54E35]/40 pb-1 text-sm font-serif italic text-[#C54E35] font-semibold min-h-[24px]">
                    {/* Empty line with no input options or interactions */}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CARD 2: THE MEMBERSHIP CREED & BENEFITS CARD */}
          <div className="relative w-full max-w-[620px] bg-[#FAF6EE] text-[#C54E35] p-6 sm:p-10 rounded-[1.75rem] border border-black/[0.05] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.15)] overflow-hidden">
            
            {/* Scratches and noise Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-multiply select-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" filter="url(#noise-overlay-home)" />
                <path d="M 50,45 L 75,40 M 320,80 L 290,105 M 400,220 L 415,235" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.65" />
                <path d="M 110,140 L 90,160 M 280,50 L 295,40" stroke="#C54E35" strokeWidth="0.5" strokeLinecap="round" opacity="0.25" />
                <circle cx="150" cy="270" r="1.5" fill="#B9442D" opacity="0.2" />
                <circle cx="440" cy="80" r="1.5" fill="#B9442D" opacity="0.15" />
              </svg>
            </div>

            {/* Vertical Fold Crease Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-black/[0.04] via-black/[0.1] to-black/[0.04] border-r border-white/40 pointer-events-none z-10" />

            {/* Coffee Mug Ring Stain (Added for ultra-premium vintage fidelity) */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.11] pointer-events-none select-none z-0">
              <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="42" stroke="#C54E35" strokeWidth="1.5" strokeDasharray="30 4 12 6 15 2" />
                <circle cx="48" cy="52" r="41" stroke="#C54E35" strokeWidth="0.5" strokeDasharray="5 15 20" />
              </svg>
            </div>

            {/* Binder Clip resting on top right of the card */}
            <div className="absolute top-4 right-10 rotate-12 pointer-events-none select-none z-20 opacity-95">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14,34 C12,18 20,12 24,12 C28,12 36,18 34,34" stroke="#8E8E93" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M18,34 C16,22 22,16 24,16 C26,16 32,22 30,34" stroke="#AEAEB2" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M10,32 L38,32 L34,44 L14,44 Z" fill="#2C2C2E" />
                <rect x="14" y="34" width="20" height="2" fill="#48484A" />
                <path d="M12,32 L36,32" stroke="#1C1C1E" strokeWidth="1" />
                <text x="24" y="41" fill="#DFBA73" fontSize="5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">HMB CLUB</text>
              </svg>
            </div>

            {/* Card Creed Header */}
            <div className="text-center relative z-10 pb-6 border-b border-[#C54E35]/15">
              <h3 className="text-xs font-sans font-black tracking-[0.22em] uppercase text-[#C54E35]/85">
                The Hummingbird Circle Creed &amp; Perks
              </h3>
            </div>

            {/* Perks Bullets */}
            <ul className="space-y-4 pt-6 text-left relative z-10 pr-4 sm:pr-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C54E35] shrink-0 mt-2" />
                <p className="text-[11px] sm:text-xs font-sans text-[#C54E35]/90 leading-relaxed font-semibold">
                  <strong>Daily Specialty Fuel</strong> — High-end barista coffees, freshly grilled artisan wraps, and custom bowls worth up to £250/month.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C54E35] shrink-0 mt-2" />
                <p className="text-[11px] sm:text-xs font-sans text-[#C54E35]/90 leading-relaxed font-semibold">
                  <strong>Automatic Discounts Applied</strong> — Save 10% on every order instantly upon presenting your card at checkout.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C54E35] shrink-0 mt-2" />
                <p className="text-[11px] sm:text-xs font-sans text-[#C54E35]/90 leading-relaxed font-semibold">
                  <strong>Early Workshop Seats</strong> — VIP priority access to evening barista courses, food design, and wellness masterclasses.
                </p>
              </li>
              <li className="flex items-start gap-3 border-t border-[#C54E35]/15 pt-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C54E35] shrink-0 mt-2" />
                <p className="text-[11px] sm:text-xs font-sans text-[#C54E35] leading-relaxed font-bold italic">
                  All consolidated inside a single physical-digital pass for just £39 per month.
                </p>
              </li>
            </ul>
          </div>

          {/* Interactive JOIN THE CIRCLE CTA Button */}
          <div className="flex justify-center pt-2 relative z-10">
            <button
              onClick={() => {
                if (isLoggedIn) {
                  onNavigate('account');
                } else if (onOpenLoginModal) {
                  onOpenLoginModal();
                }
              }}
              className="px-12 py-4 bg-[#C54E35] hover:bg-[#B1412B] text-[#FAF6EE] font-black uppercase text-xs tracking-widest transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(197,78,53,0.35)] rounded-xl flex items-center gap-3 cursor-pointer"
              id="home-join-now-btn"
            >
              <span>{isLoggedIn ? 'VIEW MY STATUS' : 'JOIN THE CIRCLE NOW'}</span>
              <ArrowRightIcon className="w-4 h-4 text-[#FAF6EE] stroke-[2.5]" />
            </button>
          </div>

        </div>
      </section>

      {/* Main content below Hero/Carousel - constrained to max-w-7xl and centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-16">

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
