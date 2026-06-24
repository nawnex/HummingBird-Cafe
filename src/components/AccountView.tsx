import React, { useState } from 'react';
import { MemberProfile } from '../types';
import { Sparkles, ArrowRight, Lock, Award, LogOut, Mail, AlertCircle, Loader2 } from 'lucide-react';
import { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  googleProvider 
} from '../lib/firebase';

interface AccountViewProps {
  isLoggedIn: boolean;
  memberProfile: MemberProfile | null;
  onLogout: () => void;
  onOpenLoginModal: () => void;
  onNavigate: (page: string) => void;
}

export default function AccountView({ 
  isLoggedIn, 
  memberProfile, 
  onLogout, 
  onNavigate
}: AccountViewProps) {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      let friendlyMessage = 'Authentication failed. Please check details.';
      if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        friendlyMessage = 'Incorrect email or password.';
      } else if (err.code === 'auth/user-not-found') {
        friendlyMessage = 'No account found with this email.';
      } else if (err.code === 'auth/email-already-in-use') {
        friendlyMessage = 'This email address is already in use.';
      } else if (err.code === 'auth/weak-password') {
        friendlyMessage = 'Password must be at least 6 characters.';
      } else if (err.code === 'auth/invalid-email') {
        friendlyMessage = 'Please enter a valid email address.';
      } else if (err.message) {
        friendlyMessage = err.message;
      }
      setError(friendlyMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError('');

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      console.error('Google popup failure:', err);
      setError('Google Sign-In failed or was cancelled.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 font-sans pb-20">
      {/* Page header */}
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          {isLoggedIn ? (
            <>
              Welcome Back, <span className="text-[#A7CCED] italic font-light">{memberProfile?.name}</span>
            </>
          ) : (
            <>
              Loyalty <span className="text-[#A7CCED] italic font-light">Member Portal</span>
            </>
          )}
        </h1>
        {isLoggedIn && (
          <p className="text-sm text-gray-400 max-w-2xl">
            Access your profile, check reward stamps, or view exclusive daily menu savings.
          </p>
        )}
      </div>

      {isLoggedIn && memberProfile ? (
        /* ================= MEMBER PRIVATE DASHBOARD ================= */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card Showcase Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-[#1c2e12] to-[#121212] border border-[#689628]/45 rounded-2xl p-6 relative overflow-hidden shadow-2xl h-64 flex flex-col justify-between group">
              <div className="absolute top-1/2 -right-10 w-44 h-44 bg-primary-green/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary-green/15 transition-all" />
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-primary-green uppercase tracking-widest block">Hummingbird Cafe</span>
                  <h3 className="text-lg font-serif font-semibold text-white tracking-tight mt-0.5">Hummingbird Member Card</h3>
                </div>
                <div className="p-2.5 bg-primary-green/20 rounded-full border border-primary-green/20">
                  <span className="w-5 h-5 block text-primary-green shrink-0">🌿</span>
                </div>
              </div>

              {/* RFID chip graphic */}
              <div className="w-10 h-7 bg-amber-500/25 border border-amber-500/50 rounded-md my-2" />

              <div className="space-y-1.5 z-10">
                <span className="font-mono text-white text-base md:text-lg tracking-wider block">
                  {memberProfile.cardNumber}
                </span>
                <div className="flex justify-between items-end text-xs text-gray-400">
                  <div>
                    <span className="text-[8px] text-gray-500 block uppercase font-sans">Member name</span>
                    <span className="text-white font-medium">{memberProfile.name}</span>
                  </div>
                  <div>
                    <span className="text-[8px] text-gray-500 block uppercase font-sans">Enrolled Date</span>
                    <span className="text-white font-medium">{memberProfile.joinedDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action logout button */}
            <button
              onClick={onLogout}
              className="mt-6 w-full py-2.5 bg-white/5 hover:bg-red-950/20 text-gray-400 hover:text-red-400 border border-white/5 hover:border-red-500/20 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Log Out of Session
            </button>
          </div>

          {/* Savings & Metrics */}
          <div className="lg:col-span-7 bg-[#191919] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#A7CCED]" />
              <h3 className="text-xl font-serif text-white">Your Benefits Summary</h3>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Welcome back, <strong className="text-white">{memberProfile.name}</strong>. Your loyalty profile automatically applies a <span className="text-[#A7CCED] font-semibold">10% discount</span> to all menu items today. Present your digital card at checkout to sync rewards points.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wide block">Points balance</span>
                <span className="text-2xl font-bold text-primary-green mt-1">{memberProfile.points} pts</span>
                <span className="text-[9px] text-gray-400 mt-2 block">100 points = 1 free beverage</span>
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wide block">Cafe Visits</span>
                <span className="text-2xl font-bold text-[#A7CCED] mt-1">
                  12
                </span>
                <span className="text-[9px] text-gray-400 mt-2 block">Visits tracked this year</span>
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wide block">All-time Savings</span>
                <span className="text-2xl font-bold text-white mt-1">$45.60</span>
                <span className="text-[9px] text-gray-400 mt-2 block">10% saved on orders</span>
              </div>
            </div>

            {/* Exclusive perks promo banner */}
            <div className="p-4 bg-[#689628]/10 border border-[#689628]/30 rounded-xl space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary-green" />
                Loyalty Reward: Free Birthday Beverage & treats
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                Simply showcase this active digital card on your device on your birthday to redeem a complimentary handcrafted beverage and artisan pastry from our bakery counter!
              </p>
            </div>
          </div>

        </div>
      ) : (
        /* ================= PUBLIC DIRECT ON-PAGE SIGN IN (LIGHT COMPLEMENTARY PORTAL AREA) ================= */
        <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-10 shadow-xl text-slate-800">
          <div className="space-y-6 text-center max-w-sm mx-auto">
            {/* Extremely simple and clean welcome header without distracting taglines */}
            <div className="space-y-1.5">
              <h3 className="font-serif text-3xl font-bold text-slate-950 tracking-tight">
                {isSignUp ? 'Create your Account' : 'Sign In'}
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                {isSignUp 
                  ? 'Join Hummingbird Cafe rewards to track order stamps and redeem drinks.' 
                  : 'Access your saved cards and orders.'}
              </p>
            </div>

            {/* Sign In Box - Slightly darker than full white (e.g. bg-slate-150 / bg-slate-100) */}
            <div className="bg-slate-100/90 border border-slate-200 rounded-xl p-5 md:p-6 space-y-4 shadow-inner text-slate-700">
              {/* 1. Continue with Google at the top */}
              <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={loading}
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 disabled:opacity-50 text-slate-800 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm border border-slate-200 flex items-center justify-center gap-3 select-none cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
                Sign In with Google
              </button>

              {/* Elegant simple divider */}
              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-4 text-slate-400 text-[10px] uppercase font-bold tracking-wider">or</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              <form onSubmit={handleEmailAuth} className="space-y-4 text-left">
                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="w-full bg-white border border-slate-250 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-all"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                      className="w-full bg-white border border-slate-250 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-all"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2 text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                    <span className="text-[11px] leading-relaxed font-semibold">{error}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-xl text-xs font-bold tracking-wide transition-all shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Toggle between login or sign up */}
              <div className="text-center pt-2 border-t border-slate-200/50 mt-2">
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError('');
                  }}
                  className="text-xs text-slate-600 hover:text-slate-950 hover:underline transition-all font-medium cursor-pointer"
                >
                  {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </button>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 text-center font-mono">
              🔒 Secure Verification Protected
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
