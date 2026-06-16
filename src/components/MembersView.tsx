import React, { useState } from 'react';
import { MemberProfile } from '../types';
import { Sparkles, ShieldCheck, Gift, Truck, Leaf, LogIn, Lock, LogOut, Award, TreePine, CreditCard } from 'lucide-react';

interface MembersViewProps {
  isLoggedIn: boolean;
  memberProfile: MemberProfile | null;
  onLogin: (name: string, email: string) => void;
  onLogout: () => void;
}

export default function MembersView({ isLoggedIn, memberProfile, onLogin, onLogout }: MembersViewProps) {
  const [activeTab, setActiveTab] = useState<'benefits' | 'login'>('benefits');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Handle mock manual signup / login
  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Please supply a valid email address.');
      return;
    }
    const displayName = name.trim() || email.split('@')[0];
    onLogin(displayName, email);
    setErrorMsg('');
  };

  // Demo account fastlogin
  const handleDemoSignIn = () => {
    onLogin('Eleanor Vance', 'eleanor.vance@ecology.org');
    setErrorMsg('');
  };

  return (
    <div className="space-y-12 font-sans pb-20">
      {/* Page header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs font-bold text-primary-green uppercase tracking-widest block">Cultivating Shared Wealth</span>
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          The Canopy <span className="text-[#A7CCED] italic font-light">Guild Card</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          We invite you to participate directly in our sustainable model. Join our single-tiered community membership to unlock daily eco-savings, priority workshop credentials, and directly plant trees in reforestation zones.
        </p>
      </div>

      {isLoggedIn && memberProfile ? (
        /* ================= MEMBER PRIVATE DASHBOARD ================= */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card Showcase Column (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-[#1c2e12] to-[#121212] border border-[#689628]/45 rounded-2xl p-6 relative overflow-hidden shadow-2xl h-64 flex flex-col justify-between group">
              {/* Decorative green leaf patterns */}
              <div className="absolute top-1/2 -right-10 w-44 h-44 bg-primary-green/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary-green/15 transition-all" />
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-primary-green uppercase tracking-widest block">Hummingbird Sourced Guild</span>
                  <h3 className="text-lg font-serif font-semibold text-white tracking-tight mt-0.5">The Canopy Leaf</h3>
                </div>
                <div className="p-2.5 bg-primary-green/20 rounded-full border border-primary-green/20">
                  <Leaf className="w-5 h-5 text-primary-green" />
                </div>
              </div>

              {/* RFID Simulation Chip */}
              <div className="w-10 h-7 bg-amber-500/25 border border-amber-500/50 rounded-md my-2" />

              <div className="space-y-1.5 z-10">
                <span className="font-mono text-white text-base md:text-lg tracking-wider block">
                  {memberProfile.cardNumber}
                </span>
                <div className="flex justify-between items-end text-xs text-gray-400">
                  <div>
                    <span className="text-[8px] text-gray-500 block uppercase font-sans">Guild Steward</span>
                    <span className="text-white font-medium">{memberProfile.name}</span>
                  </div>
                  <div>
                    <span className="text-[8px] text-gray-500 block uppercase font-sans">Enrolled Date</span>
                    <span className="text-white font-medium">{memberProfile.joinedDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action button logout */}
            <button
              onClick={onLogout}
              className="mt-6 w-full py-2.5 bg-white/5 hover:bg-red-950/20 text-gray-400 hover:text-red-400 border border-white/5 hover:border-red-500/20 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              Relinquish Guild Session (Log Out)
            </button>
          </div>

          {/* Savings & Metrics (7/12 width) */}
          <div className="lg:col-span-7 bg-[#191919] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#A7CCED]" />
              <h3 className="text-xl font-serif text-white">Stewardship Accounting</h3>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Welcome back, <strong className="text-white">{memberProfile.name}</strong>. Your membership automatically discounts all menu items in the cafe by <span className="text-[#A7CCED] font-semibold">10% today</span>. Present your digital Canopy Card at checkout to instantly sync orders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wide block">Carbon points balance</span>
                <span className="text-2xl font-bold text-primary-green mt-1">{memberProfile.points} pts</span>
                <span className="text-[9px] text-gray-400 mt-2 block">100 points = 1 free beverage</span>
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wide block">Trees Planted For You</span>
                <span className="text-2xl font-bold text-[#A7CCED] mt-1 flex items-center gap-1">
                  <TreePine className="w-5 h-5 text-primary-green shrink-0" />
                  12
                </span>
                <span className="text-[9px] text-gray-400 mt-2 block">In Oregon Conservation Reforest</span>
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wide block">All-time Savings</span>
                <span className="text-2xl font-bold text-white mt-1">$45.60</span>
                <span className="text-[9px] text-gray-400 mt-2 block">10% applied directly on items</span>
              </div>
            </div>

            {/* Simulated exclusive member events news */}
            <div className="p-4 bg-primary-green/10 border border-[#689628]/30 rounded-xl space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary-green" />
                Active Member Exclusive Priority Pass
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                Secure your complimentary priority passes to the <strong className="text-[#A7CCED]">Terrarium Building Class</strong> on June 20. Your member ID acts as your entry pass. No registration fee needed!
              </p>
            </div>
          </div>

        </div>
      ) : (
        /* ================= PUBLIC SIGN UP LANDING & LOG IN PORTAL ================= */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Landing Benefits Info (7/12 width) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary-green uppercase tracking-wide block">The Perfect Canopy Guild Tier</span>
              <h2 className="text-3xl font-serif text-white leading-tight">
                One Single, Transparent Guild Membership. <br />
                <span className="text-[#A7CCED] font-light italic">All of the Rainforest Perks.</span>
              </h2>
              <div className="text-3xl font-bold text-white pt-2">
                $12 <span className="text-sm font-normal text-gray-400">/ month</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-[#191919] border border-white/5 rounded-xl space-y-2.5">
                <div className="p-2.5 bg-primary-green/15 text-primary-green rounded-lg w-fit">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-sm font-semibold text-white">Daily 10% Automated Discount</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Simply log in here or tap your RFID leaf at checkout! Save 10% on every handcrafted sandwich, green bowl, or cold-brew automatically.
                </p>
              </div>

              <div className="p-5 bg-[#191919] border border-white/5 rounded-xl space-y-2.5">
                <div className="p-2.5 bg-[#A7CCED]/15 text-[#A7CCED] rounded-lg w-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-sm font-semibold text-white">Priority Class Permissions</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Enjoy priority registrations and free entrance passes for all acoustics nights, watercolor labs, and urban rewilding panels.
                </p>
              </div>

              <div className="p-5 bg-[#191919] border border-white/5 rounded-xl space-y-2.5">
                <div className="p-2.5 bg-[#A7CCED]/15 text-[#A7CCED] rounded-lg w-fit">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-sm font-semibold text-white">Carbon-Balanced Free Delivery</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Order any lunch directly from our app within 5 miles for free zero-carbon bicycle delivery in customized reusable insulation packs.
                </p>
              </div>

              <div className="p-5 bg-[#191919] border border-white/5 rounded-xl space-y-2.5">
                <div className="p-2.5 bg-primary-green/15 text-primary-green rounded-lg w-fit">
                  <Gift className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-sm font-semibold text-white">Birthday Feast & Planting</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Celebrate your special day with a free forest meal, sweet pastry, and cold brew. Plus, we plant 1 tree on your behalf in Cascade zones monthly.
                </p>
              </div>
            </div>
          </div>

          {/* Login / Setup Portal Card (5/12 width) */}
          <div className="lg:col-span-5 bg-[#191919] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex border-b border-white/5 pb-4">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`flex-1 text-center pb-2.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === 'benefits' 
                    ? 'text-primary-green border-primary-green' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                Join Guild
              </button>
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 text-center pb-2.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === 'login' 
                    ? 'text-primary-green border-primary-green' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                Existing Cardholder
              </button>
            </div>

            {activeTab === 'benefits' ? (
              /* Join Membership Form */
              <form onSubmit={handleManualLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-400 font-semibold">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-primary-green hover:bg-primary-green/90 text-white rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-md mt-4"
                  data-hover="true"
                >
                  Join Canopy Guild & Activate Card
                </button>

                <div className="border-t border-white/5 pt-4">
                  <button
                    type="button"
                    onClick={handleDemoSignIn}
                    className="w-full py-2.5 bg-white/5 border border-white/5 rounded-xl text-xs font-semibold text-[#A7CCED] hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#A7CCED]" />
                    Fast-Login with Eleanor Vance (Demo Pass)
                  </button>
                </div>
              </form>
            ) : (
              /* Existing Members Login */
              <form onSubmit={handleManualLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Password / Card PIN</label>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full bg-black/40 border border-white/10 rounded-xl pl-4 pr-10 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
                    />
                    <Lock className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary-green hover:bg-primary-green/90 text-white rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-md mt-4"
                >
                  Retrieve Digital Guild Card
                </button>

                <div className="border-t border-white/5 pt-4">
                  <button
                    type="button"
                    onClick={handleDemoSignIn}
                    className="w-full py-2.5 bg-white/5 border border-white/5 rounded-xl text-xs font-semibold text-[#A7CCED] hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#A7CCED]" />
                    Fast-Login with Eleanor Vance (Demo Pass)
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
