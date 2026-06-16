import { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import { 
  Search, Info, Check, Plus, AlertTriangle, Eye, Sparkles,
  Flame, Sandwich, Egg, Soup, ChefHat, Cookie, IceCream, Candy, Salad, Cake, HelpCircle, RefreshCw, Utensils
} from 'lucide-react';

interface MenuViewProps {
  onAddToCart: (item: MenuItem) => void;
  isLoggedIn: boolean; // Member discount applied automatically!
}

// Available toppings with friendly prices & icons matching user-provided details
const AVAILABLE_TOPPINGS = [
  { name: 'Tuna', price: 1.00, icon: '🐟', allergens: ['Fish'] },
  { name: 'Ham', price: 1.20, icon: '🍖', allergens: [] },
  { name: 'Onions', price: 0.45, icon: '🧅', allergens: [] },
  { name: 'Tomato', price: 0.50, icon: '🍅', allergens: [] },
  { name: 'Avocado', price: 1.50, icon: '🥑', allergens: [] },
  { name: 'Sweetcorn', price: 0.40, icon: '🌽', allergens: [] },
  { name: 'Cucumber', price: 0.40, icon: '🥒', allergens: [] },
  { name: 'Baked Beans', price: 0.60, icon: '🥫', allergens: [] },
  { name: 'Cheese', price: 0.90, icon: '🧀', allergens: ['Dairy'] }
];

const BASE_SNACKS = [
  { name: 'Artisan Toastie', basePrice: 3.50, category: 'Toasts & Toasties', img: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800' },
  { name: 'Premium Wrap', basePrice: 3.90, category: 'Wraps', img: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800' },
  { name: 'Vibrant Green Salad', basePrice: 4.50, category: 'Salads', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800' },
  { name: 'Baked Jacket Potato', basePrice: 5.50, category: 'Jacket Potato', img: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800' }
];

export default function MenuView({ onAddToCart, isLoggedIn }: MenuViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [feedbackItemName, setFeedbackItemName] = useState<string | null>(null);
  
  // Toppings & Sandboxing State
  const [activeHighlightTopping, setActiveHighlightTopping] = useState<string | null>(null);
  const [sandboxBaseIndex, setSandboxBaseIndex] = useState(0);
  const [sandboxToppings, setSandboxToppings] = useState<string[]>([]);

  // Category Icon Sorter
  const getCategoryIcon = (categoryName: string) => {
    const norm = categoryName.toLowerCase();
    if (norm.includes('toast')) return <Flame className="w-4 h-4 text-amber-500" />;
    if (norm.includes('sandwich')) return <Sandwich className="w-4 h-4 text-orange-400" />;
    if (norm.includes('breakfast')) return <Egg className="w-4 h-4 text-yellow-500" />;
    if (norm.includes('soup')) return <Soup className="w-4 h-4 text-teal-400" />;
    if (norm.includes('homemade')) return <ChefHat className="w-4 h-4 text-emerald-400" />;
    if (norm.includes('wrap')) return <HelpCircle className="w-4 h-4 text-rose-400" />;
    if (norm.includes('pie')) return <Cookie className="w-4 h-4 text-amber-600" />;
    if (norm.includes('ice cream')) return <IceCream className="w-4 h-4 text-purple-400" />;
    if (norm.includes('sweet')) return <Candy className="w-4 h-4 text-pink-400" />;
    if (norm.includes('salad')) return <Salad className="w-4 h-4 text-green-400" />;
    if (norm.includes('cake')) return <Cake className="w-4 h-4 text-rose-500" />;
    if (norm.includes('potato')) return <Flame className="w-4 h-4 text-indigo-400" />;
    return <Utensils className="w-4 h-4 text-[#A7CCED]" />;
  };

  // Dynamic Categories gathered from MENU_ITEMS
  const categories = useMemo(() => {
    const list = Array.from(new Set(MENU_ITEMS.map((item) => item.category)));
    return [
      { value: 'all', label: 'All Sourced Bites', icon: <Sparkles className="w-4 h-4 text-yellow-400" /> },
      ...list.map(cat => ({ value: cat, label: cat, icon: getCategoryIcon(cat) }))
    ];
  }, []);

  // Filter & Search logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // If a specific topping highlight is active, prioritize items containing that ingredient or belonging to customisable categories
      let matchesTopping = true;
      if (activeHighlightTopping) {
        const query = activeHighlightTopping.toLowerCase();
        const itemText = (item.name + ' ' + item.description + ' ' + item.ingredients.join(' ')).toLowerCase();
        matchesTopping = itemText.includes(query) || 
          (['Toasts & Toasties', 'Wraps', 'Salads', 'Jacket Potato'].includes(item.category));
      }

      return matchesCategory && matchesSearch && matchesTopping;
    });
  }, [selectedCategory, searchQuery, activeHighlightTopping]);

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setFeedbackItemName(item.name);
    setTimeout(() => {
      setFeedbackItemName(null);
    }, 2500);
  };

  // Sandbox calculations
  const currentBase = BASE_SNACKS[sandboxBaseIndex];
  const toppingsCost = useMemo(() => {
    return sandboxToppings.reduce((sum, topName) => {
      const found = AVAILABLE_TOPPINGS.find(t => t.name === topName);
      return sum + (found ? found.price : 0);
    }, 0);
  }, [sandboxToppings]);

  const sandboxTotalPrice = currentBase.basePrice + toppingsCost;
  const sandboxDiscountPrice = sandboxTotalPrice * 0.9;

  const handleToggleSandboxTopping = (toppingName: string) => {
    setSandboxToppings(prev => 
      prev.includes(toppingName) 
        ? prev.filter(t => t !== toppingName) 
        : [...prev, toppingName]
    );
  };

  const handleAddCustomSandboxItem = () => {
    const chosenToppingsObjs = sandboxToppings.map(name => AVAILABLE_TOPPINGS.find(t => t.name === name)).filter(Boolean);
    const calculatedAllergens = Array.from(new Set(chosenToppingsObjs.flatMap(o => o ? o.allergens : []))) as string[];
    
    const customItem: MenuItem = {
      id: `custom-${selectedBaseName().toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      name: `Custom ${currentBase.name}`,
      price: Number(sandboxTotalPrice.toFixed(2)),
      category: currentBase.category,
      description: `Harvest-customized freshly prepared snack topped beautifully with: ${sandboxToppings.length > 0 ? sandboxToppings.join(', ') : 'Plain Butter & Seasoning'}.`,
      ingredients: ['Fresh Base', ...sandboxToppings],
      allergens: calculatedAllergens,
      nutritionalValue: { 
        calories: 250 + (sandboxToppings.length * 45), 
        protein: `${8 + (sandboxToppings.length * 2)}g`, 
        carbs: '34g', 
        fat: `${6 + (sandboxToppings.length * 3)}g` 
      },
      image: currentBase.img
    };

    onAddToCart(customItem);
    setFeedbackItemName(customItem.name);
    setTimeout(() => setFeedbackItemName(null), 2500);
    // Reset toppings selection
    setSandboxToppings([]);
  };

  function selectedBaseName() {
    return currentBase.name;
  }

  return (
    <div className="space-y-8 font-sans pb-20">
      {/* Intro Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs font-bold text-primary-green uppercase tracking-widest block">Harvest Fare & Craft Plates</span>
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Sourced <span className="text-[#A7CCED] italic">With Care</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          Freshly compiled organic ingredients handled with respect. Filter by category, search specific elements, or design your own culinary treat with our custom sandbox below.
        </p>

        {/* Dynamic Discount Alert Indicator */}
        {isLoggedIn ? (
          <div className="mt-3 p-3 bg-primary-green/10 border border-[#689628]/30 rounded-xl inline-flex items-center gap-2 text-xs text-[#A7CCED]">
            <Sparkles className="w-4 h-4 text-primary-green animate-spin" />
            <span>🎉 Hummingbird Card Active! <strong className="text-white">10% Automated Member Discount</strong> applied to all custom and standard items.</span>
          </div>
        ) : (
          <div className="mt-2 text-xs text-gray-400">
            <span>Are you a cardholder? Log in in the <strong className="text-white">Members</strong> section to unlock your automated, site-wide premium savings block.</span>
          </div>
        )}
      </div>

      {/* Floating Add Feedback toast */}
      {feedbackItemName && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#191919] border border-primary-green text-white text-xs py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A7CCED] animate-bounce" />
          Added <strong className="text-primary-green">{feedbackItemName}</strong> to basket!
        </div>
      )}

      {/* Control Bar: Search & Category pills */}
      <div className="flex flex-col gap-6 md:gap-4 md:flex-row md:items-center md:justify-between bg-white/5 border border-white/5 p-4 rounded-2xl">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search sourdough, wrap fillings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121212]/80 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
          />
        </div>

        {/* Tabs pills list */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat.value
                  ? 'bg-primary-green border-primary-green text-white shadow-lg'
                  : 'bg-white/5 border-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Structural Twin Columns: Left Grid, Right Chalkboard Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Column: Menu Cards */}
        <div className="flex-1 w-full space-y-6">
          
          {/* Active Filter Helper Alert */}
          {activeHighlightTopping && (
            <div className="p-3 bg-primary-green/10 border border-[#689628]/35 rounded-xl flex items-center justify-between text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-sm">🔍</span>
                <span>Showing items matching or customized with: <strong className="text-white">{activeHighlightTopping}</strong></span>
              </div>
              <button 
                onClick={() => setActiveHighlightTopping(null)}
                className="text-xs text-[#A7CCED] hover:underline hover:text-white"
              >
                Clear filter
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const discountPrice = item.price * 0.9;
              
              // Check if item contains the highlighted topping
              const containsHighlighted = activeHighlightTopping && (
                item.name.toLowerCase().includes(activeHighlightTopping.toLowerCase()) ||
                item.description.toLowerCase().includes(activeHighlightTopping.toLowerCase()) ||
                item.ingredients.some(ing => ing.toLowerCase().includes(activeHighlightTopping.toLowerCase()))
              );

              return (
                <div
                  key={item.id}
                  className={`bg-[#191919] border rounded-2xl overflow-hidden hover:border-[#689628]/40 transition-all duration-300 flex flex-col group relative ${
                    containsHighlighted ? 'ring-2 ring-primary-green/70 border-primary-green/40 shadow-lg shadow-primary-green/5' : 'border-white/5'
                  }`}
                  id={`menuitem-${item.id}`}
                >
                  {/* Category illustrative icon badge in corner */}
                  <div className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-sm">
                    {getCategoryIcon(item.category)}
                    <span className="text-[9px] uppercase tracking-wider text-gray-300 font-bold">{item.category}</span>
                  </div>

                  {/* Card visual header */}
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Click me eye hover */}
                    <div 
                      onClick={() => setSelectedItem(item)}
                      className="absolute inset-0 bg-black/45 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                      data-hover="true"
                    >
                      <span className="px-3.5 py-1.5 bg-[#191919]/95 text-white text-xs font-semibold rounded-full border border-white/10 flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#A7CCED]" />
                        Inspect Recipe
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 
                        onClick={() => setSelectedItem(item)}
                        className="font-serif text-base text-white font-medium cursor-pointer hover:text-primary-green transition-colors leading-snug line-clamp-1"
                      >
                        {item.name}
                      </h3>
                      
                      <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        {isLoggedIn ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-sm font-bold text-[#689628]">£{discountPrice.toFixed(2)}</span>
                            <span className="text-[10px] line-through text-gray-500">£{item.price.toFixed(2)}</span>
                          </div>
                        ) : (
                          <span className="text-sm font-semibold text-[#A7CCED]">£{item.price.toFixed(2)}</span>
                        )}
                        <span className="text-[9px] text-gray-500 font-mono">ID: {item.id}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="text-[11px] text-[#A7CCED] hover:text-white px-2 py-1.5 hover:bg-white/5 rounded-full transition-all cursor-pointer"
                        >
                          Recipe
                        </button>
                        <button
                          onClick={() => handleAddWithFeedback(item)}
                          className="px-3 py-1.5 bg-primary-green/20 text-primary-green hover:bg-primary-green hover:text-white rounded-full text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="col-span-full py-16 text-center opacity-80 bg-white/2 p-8 rounded-2xl border border-white/5">
                <span className="text-2xl block mb-2">🍽️</span>
                <h3 className="text-base font-serif text-white mb-1">No items found</h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  Try clearing your toppings filter or adjust search terms to find matching creations.
                </p>
                {activeHighlightTopping && (
                  <button 
                    onClick={() => setActiveHighlightTopping(null)}
                    className="mt-4 px-4 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded-full text-xs transition-colors"
                  >
                    Clear Toppings Filter
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Chalkboard Toppings Customizer Box (Bottom Right) */}
        <div className="w-full lg:w-80 shrink-0 space-y-6 self-stretch lg:sticky lg:top-24">
          
          {/* 1. TOUGH ROBUST CHALKBOARD BOX FOR TOPPING SELECTIONS */}
          <div className="bg-[#161d12] border-4 border-[#322316] rounded-2xl shadow-2xl p-5 relative overflow-hidden text-gray-100">
            {/* Wooden frame outline look */}
            <div className="absolute inset-0 border border-black/45 rounded-xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10 font-sans">
              
              {/* Header */}
              <div className="border-b border-[#689628]/20 pb-3">
                <span className="text-[10px] tracking-widest text-[#A7CCED] font-bold uppercase block">Chalkboard Studio</span>
                <h3 className="text-xl font-serif text-white flex items-center gap-2">
                  Select Your Toppings
                </h3>
                <p className="text-[11px] text-gray-300 mt-1">
                  Click any ingredient below to toggle and find items on the menu containing it, or scroll further to assemble your own plate!
                </p>
              </div>

              {/* Toppings Chalk List */}
              <div className="flex flex-wrap gap-2 pt-1">
                {AVAILABLE_TOPPINGS.map((topping) => {
                  const isHighlighted = activeHighlightTopping === topping.name;
                  return (
                    <button
                      key={topping.name}
                      onClick={() => {
                        setActiveHighlightTopping(prev => prev === topping.name ? null : topping.name);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer border transition-all ${
                        isHighlighted 
                          ? 'bg-primary-green border-primary-green text-white font-bold shadow-md'
                          : 'bg-[#1e2819] border-[#2d3a25] text-gray-300 hover:border-primary-green/40 hover:bg-[#25321f]'
                      }`}
                      title={`Filter menu by ${topping.name}`}
                    >
                      <span>{topping.icon}</span>
                      <span>{topping.name}</span>
                      <span className="text-[10px] text-gray-400 font-mono font-normal">
                        +£{topping.price.toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Reset Highlights Alert indicator */}
              {activeHighlightTopping && (
                <button
                  onClick={() => setActiveHighlightTopping(null)}
                  className="w-full text-center py-1 text-[10px] text-primary-green hover:underline flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reset highlights filter
                </button>
              )}
            </div>
          </div>

          {/* 2. CHALKBOARD CUSTOM SANDBOX (DESIGN YOUR OWN SNACK!) */}
          <div className="bg-[#1c1c1c] border border-white/5 rounded-2xl p-5 shadow-xl space-y-4">
            
            <div className="border-b border-white/5 pb-3">
              <span className="text-[9px] tracking-widest text-[#A7CCED] font-bold uppercase block">Personalisation Table</span>
              <h4 className="text-base font-serif text-white">Assemble Custom Plate</h4>
              <p className="text-xs text-gray-400">
                Switch, add or remove ingredients. Build your own toast, wrap, salad, or jacket potato!
              </p>
            </div>

            {/* Base Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-gray-400">Choose a Base</label>
              <div className="grid grid-cols-2 gap-1.5">
                {BASE_SNACKS.map((base, idx) => (
                  <button
                    key={base.name}
                    onClick={() => {
                      setSandboxBaseIndex(idx);
                    }}
                    className={`p-2 text-left rounded-lg border text-xs cursor-pointer transition-all ${
                      sandboxBaseIndex === idx
                        ? 'bg-[#191919] border-primary-green text-white font-semibold'
                        : 'bg-white/2 border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="block text-[9px] text-[#A7CCED] uppercase font-mono">£{base.basePrice.toFixed(2)}</span>
                    <span className="truncate block mt-0.5">{base.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sandbox Toppings Checklist */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-gray-400 block">Select Toppings</label>
              <div className="max-h-48 overflow-y-auto pr-1 space-y-1 scrollbar-thin">
                {AVAILABLE_TOPPINGS.map((top) => {
                  const isChecked = sandboxToppings.includes(top.name);
                  return (
                    <div
                      key={top.name}
                      onClick={() => handleToggleSandboxTopping(top.name)}
                      className="flex items-center justify-between p-2 rounded-lg bg-white/2 hover:bg-white/5 cursor-pointer transition-all border border-transparent hover:border-white/5 text-xs text-gray-300"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-primary-green border-primary-green text-white' : 'border-gray-500'
                        }`}>
                          {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span>{top.icon} {top.name}</span>
                      </div>
                      <span className="font-mono text-gray-400 text-[11px]">+£{top.price.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price block & Add action button */}
            <div className="pt-3 border-t border-white/5 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-450">Estimated Total:</span>
                <div className="text-right">
                  {isLoggedIn ? (
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-bold text-[#689628]">£{sandboxDiscountPrice.toFixed(2)}</span>
                      <span className="text-[9px] line-through text-gray-500">Regular: £{sandboxTotalPrice.toFixed(2)}</span>
                    </div>
                  ) : (
                    <span className="text-base font-bold text-[#A7CCED]">£{sandboxTotalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>

              <button
                onClick={handleAddCustomSandboxItem}
                className="w-full py-2 bg-primary-green hover:bg-primary-green/95 text-white font-bold rounded-full text-xs transition-transform hover:scale-[1.01] active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-primary-green/10"
              >
                <Plus className="w-4 h-4" />
                Add Custom Biscuit to Basket
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Recipe Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-xs"
            onClick={() => setSelectedItem(null)}
          />

          {/* Modal Container */}
          <div className="bg-[#191919] border border-white/10 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col">
            {/* Header image placeholder */}
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
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/10 transition-all flex items-center justify-center"
                aria-label="Close modal"
              >
                &times;
              </button>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold text-primary-green uppercase tracking-widest bg-[#191919]/90 px-2.5 py-1 border border-primary-green/20 rounded-full">{selectedItem.category}</span>
                <h2 className="text-2xl font-serif text-white font-bold tracking-tight mt-2">{selectedItem.name}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 flex-1 overflow-y-auto">
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                {selectedItem.description}
              </p>

              {/* Ingredients Cloud */}
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

              {/* Allergens Warn */}
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

              {/* Nutritional Grid */}
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

            {/* Modal Footer */}
            <div className="p-6 bg-black/40 border-t border-white/5 flex items-center justify-between shrink-0">
              <div className="flex flex-col">
                {isLoggedIn ? (
                  <>
                    <span className="text-sm line-through text-gray-500">£{selectedItem.price.toFixed(2)}</span>
                    <span className="text-lg font-bold text-primary-green">£{(selectedItem.price * 0.9).toFixed(2)} <span className="text-[10px] text-[#A7CCED] tracking-wide ml-1 font-bold">10% OFF</span></span>
                  </>
                ) : (
                  <span className="text-xl font-bold text-[#A7CCED]">£{selectedItem.price.toFixed(2)}</span>
                )}
                <span className="text-[10px] text-gray-400 font-mono">Recipe Lookup</span>
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
