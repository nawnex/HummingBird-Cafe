import { useState } from 'react';
import { MenuItem, CartItem, MemberProfile } from './types';

// Component Views
import CustomCursor from './components/CustomCursor';
import CartDrawer from './components/CartDrawer';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import EventsView from './components/EventsView';
import MembersView from './components/MembersView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

// Icons
import { Leaf, ShoppingBag, User, Clock, MapPin, Heart, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [memberProfile, setMemberProfile] = useState<MemberProfile | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Nav pages mapping
  const navLinks = [
    { key: 'home', label: 'Home' },
    { key: 'menu', label: 'Menu' },
    { key: 'events', label: 'Events' },
    { key: 'members', label: 'Members' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];

  // Members registration flow
  const handleLogin = (name: string, email: string) => {
    setIsLoggedIn(true);
    setMemberProfile({
      name,
      email,
      cardNumber: `HMB-2409-${Math.floor(1000 + Math.random() * 9000)}`,
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      points: 120
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMemberProfile(null);
  };

  // Cart Management
  const handleAddToCart = (menuItem: MenuItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((it) => it.menuItem.id === menuItem.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }
      return [...prevCart, { menuItem, quantity: 1 }];
    });
  };

  const handleUpdateCartQuantity = (itemId: string, delta: number) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((it) => it.menuItem.id === itemId);
      if (existingIndex === -1) return prevCart;

      const updated = [...prevCart];
      const nextQty = updated[existingIndex].quantity + delta;

      if (nextQty <= 0) {
        // Remove item from cart
        updated.splice(existingIndex, 1);
      } else {
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: nextQty
        };
      }
      return updated;
    });
  };

  const handleRemoveCartItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((it) => it.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 flex flex-col relative select-none">
      {/* 1. Custom Interactive Cursor */}
      <CustomCursor />

      {/* Atmospheric Background Glows */}
      <div className="ambient-glow top-0 left-10 w-[450px] h-[450px] bg-[#689628]/15" />
      <div className="ambient-glow bottom-20 right-10 w-[550px] h-[550px] bg-[#A7CCED]/10" />

      {/* 2. Global Header */}
      <header className="sticky top-0 z-40 bg-[#191919]/90 backdrop-blur-md border-b border-[#689628]/15 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Cafe Title & Branding */}
          <div 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Hummingbird Cafe Logo */}
            <img src="bird small.png" alt="Hummingbird Cafe Logo" className="h-12 w-auto" />
            <div>
              <span className="font-serif text-xl font-bold text-white tracking-tight group-hover:text-primary-green transition-colors">
                Hummingbird
              </span>
              <span className="text-[9px] text-[#A7CCED] block font-semibold uppercase tracking-wider -mt-1">
                Cafe & Community Hub
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => setCurrentView(link.key)}
                className={`py-2 px-1 relative transition-colors cursor-pointer ${
                  currentView === link.key 
                    ? 'text-primary-green' 
                    : 'text-gray-300 hover:text-[#A7CCED]'
                }`}
              >
                {link.label}
                {currentView === link.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-green rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Actions: Cart, Profile Icons */}
          <div className="flex items-center gap-4">
            
            {/* Account Icon System */}
            <button
              onClick={() => setCurrentView('members')}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center relative cursor-pointer ${
                isLoggedIn 
                  ? 'bg-primary-green/20 border-[#689628]/40 text-[#A7CCED]' 
                  : 'bg-white/5 border-white/5 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              title={isLoggedIn ? `Logged in as ${memberProfile?.name}` : 'Login / Member portal'}
            >
              <User className="w-4 h-4" />
              {isLoggedIn && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary-green rounded-full border-2 border-[#191919]" />
              )}
            </button>

            {/* Shopify Cart system Icon count */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2.5 bg-white/5 border border-white/5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center relative cursor-pointer"
              title="View your harvest basket"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#A7CCED] text-[#191919] text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#191919] animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* 3. Mobile Navigation Quick-Action Bar */}
      <div className="md:hidden sticky top-[80px] z-30 bg-[#121212]/95 border-b border-white/5 overflow-x-auto">
        <div className="flex gap-1.5 px-4 py-2.5 scrollbar-none">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => setCurrentView(link.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 ${
                currentView === link.key
                  ? 'bg-primary-green text-white font-semibold'
                  : 'bg-white/5 text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Main Atmospheric Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10 z-10">
        
        {/* Animated view transitions based on currentView state */}
        <div className="transition-opacity duration-300">
          {currentView === 'home' && (
            <HomeView 
              onNavigate={(page) => setCurrentView(page)} 
              onAddToCart={handleAddToCart}
            />
          )}

          {currentView === 'menu' && (
            <MenuView 
              onAddToCart={handleAddToCart}
              isLoggedIn={isLoggedIn}
            />
          )}

          {currentView === 'events' && (
            <EventsView />
          )}

          {currentView === 'members' && (
            <MembersView 
              isLoggedIn={isLoggedIn}
              memberProfile={memberProfile}
              onLogin={handleLogin}
              onLogout={handleLogout}
            />
          )}

          {currentView === 'about' && (
            <AboutView />
          )}

          {currentView === 'contact' && (
            <ContactView />
          )}
        </div>
      </main>

      {/* 5. Shopify Cart Drawer Overlays */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        isLoggedIn={isLoggedIn}
        onClearCart={handleClearCart}
      />

      {/* 6. Footer section */}
      <footer className="bg-[#191919] border-t border-[#689628]/15 py-12 px-4 sm:px-6 lg:px-8 mt-auto z-10 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo Brand Brand info Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-primary-green" />
              <span className="font-serif text-lg font-bold text-white tracking-tight">Hummingbird</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              Designing living green retreats filled with premium botanical tea elixirs, sustainable bites, and neighborhood carbon-balancing initiatives.
            </p>
            <div className="text-[10px] text-gray-500 font-mono tracking-tighter">
              CO2 Neutral Certification ID: HMB-ECO-2026
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-serif text-white font-medium">Page Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <button 
                    onClick={() => {
                      setCurrentView(link.key);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-primary-green transition-colors text-left"
                  >
                    {link.label} Page
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sourcing credentials */}
          <div className="space-y-3">
            <h4 className="font-serif text-white font-medium">Sourcing Ethics</h4>
            <ul className="space-y-2 text-gray-400 font-light">
              <li>100% Organic, Pesticide-Free</li>
              <li>Shade-Grown Rainforest Arabicas</li>
              <li>Sustaining Forest Cooperatives</li>
              <li>Reusable Eco-Casing Depositories</li>
            </ul>
          </div>

          {/* Quick Hours / Contact summary */}
          <div className="space-y-3">
            <h4 className="font-serif text-white font-medium">The Greenhouse Location</h4>
            <p className="text-gray-400 leading-relaxed font-light">
              Unit 2.0.13 & 2.0.14, Eurotowers, Block 2, Europort Road, Gibraltar, GX111AA<br />
              +350 200 70000
            </p>
            <div className="pt-1.5 flex items-center gap-1.5 text-[#A7CCED]">
              <Clock className="w-3.5 h-3.5 text-primary-green" />
              <span>Weekdays: 7 AM - 7 PM</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[10px]">
          <div>
            &copy; {new Date().getFullYear()} Hummingbird Cafe LLC. All rights harvested ethically.
          </div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Safety Regulations</a>
            <a href="#terms" className="hover:text-white transition-colors">Sourcing Terms</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Composting</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
