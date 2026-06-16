import { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import { Search, Info, Check, Plus, AlertTriangle, Eye, Sparkles } from 'lucide-react';

interface MenuViewProps {
  onAddToCart: (item: MenuItem) => void;
  isLoggedIn: boolean; // Member discount applied automatically!
}

export default function MenuView({ onAddToCart, isLoggedIn }: MenuViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [feedbackItemName, setFeedbackItemName] = useState<string | null>(null);

  // Dynamic Categories gathered from MENU_ITEMS
  const categories = useMemo(() => {
    const list = Array.from(new Set(MENU_ITEMS.map((item) => item.category)));
    return [
      { value: 'all', label: 'All Sourced Bites' },
      ...list.map(cat => ({ value: cat, label: cat }))
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
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setFeedbackItemName(item.name);
    setTimeout(() => {
      setFeedbackItemName(null);
    }, 2500);
  };

  return (
    <div className="space-y-8 font-sans pb-20">
      {/* Intro Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs font-bold text-primary-green uppercase tracking-widest block">What we serve</span>
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Nourishment <span className="text-[#A7CCED] italic">With Purpose</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          Sourced and grown locally, 100% organic, for you to enjoy. Look for regional allergens listed inside each interactive card.
        </p>

        {/* Dynamic Discount Alert Indicator */}
        {isLoggedIn ? (
          <div className="mt-3 p-3 bg-primary-green/10 border border-[#689628]/30 rounded-xl inline-flex items-center gap-2 text-xs text-[#A7CCED]">
            <Sparkles className="w-4 h-4 text-primary-green animate-spin" />
            <span>🎉 Hummingbird card active! <strong className="text-white">10% Automated Member Discount</strong> is marked on all listed prices below.</span>
          </div>
        ) : (
          <div className="mt-2 text-xs text-gray-400">
            <span>Are you an existing cardholder? Log in under the <strong className="text-white">Members</strong> tab to unlock immediate, automatic savings.</span>
          </div>
        )}
      </div>

      {/* Floating Add Feedback toast */}
      {feedbackItemName && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#191919] border border-primary-green text-white text-xs py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A7CCED] animate-bounce" />
          Added <strong className="text-primary-green">{feedbackItemName}</strong> to harvest basket!
        </div>
      )}

      {/* Control Bar: Search & Category pills */}
      <div className="flex flex-col gap-6 md:gap-4 md:flex-row md:items-center md:justify-between bg-white/5 border border-white/5 p-4 rounded-2xl">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search items, ingredients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121212]/80 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
          />
        </div>

        {/* Tabs pills list */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-primary-green border-primary-green text-white shadow-lg'
                  : 'bg-white/5 border-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const discountPrice = item.price * 0.9;
          return (
            <div
              key={item.id}
              className="bg-[#191919] border border-white/5 rounded-2xl overflow-hidden hover:border-[#689628]/25 transition-all duration-300 flex flex-col group"
            >
              {/* Card visual header */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Click me eye hover */}
                <div 
                  onClick={() => setSelectedItem(item)}
                  className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  data-hover="true"
                >
                  <span className="px-3.5 py-1.5 bg-[#191919]/90 text-white text-xs font-semibold rounded-full border border-white/10 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#A7CCED]" />
                    Inspect Recipe
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 
                      onClick={() => setSelectedItem(item)}
                      className="font-serif text-lg text-white font-medium cursor-pointer hover:text-primary-green transition-colors leading-snug line-clamp-1"
                    >
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{item.category}</p>
                  
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    {isLoggedIn ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-[#689628]">£{discountPrice.toFixed(2)}</span>
                        <span className="text-xs line-through text-gray-500">£{item.price.toFixed(2)}</span>
                        <span className="text-[9px] font-bold text-[#A7CCED] uppercase">Card</span>
                      </div>
                    ) : (
                      <span className="text-base font-bold text-[#A7CCED]">£{item.price.toFixed(2)}</span>
                    )}
                    <span className="text-[9px] text-gray-500 font-mono tracking-tighter">ID: {item.id}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-xs text-[#A7CCED] hover:text-white px-2 py-1 hover:bg-white/5 rounded transition-all cursor-pointer"
                      title="Inspect recipe"
                    >
                      Recipe
                    </button>
                    <button
                      onClick={() => handleAddWithFeedback(item)}
                      className="px-3 py-1.5 bg-primary-green/25 text-primary-green hover:bg-primary-green hover:text-white rounded-full text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer"
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
          <div className="col-span-full py-16 text-center opacity-80">
            <h3 className="text-lg font-serif text-white mb-2">No forest bites found</h3>
            <p className="text-xs text-gray-400">
              Try adjusting your text search query or select another category filters above.
            </p>
          </div>
        )}
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
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/10 transition-all"
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
                <div className="flex flex-wrap gap-1.5Packed">
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
                      <span>This product contains: <strong className="text-white">{selectedItem.allergens.join(', ')}</strong>. Please speak with our barista regarding severe airborne tolerances.</span>
                    ) : (
                      <span>Soothed clean! <strong className="text-white">Contains zero common food allergens</strong>. Clean kitchen handling protocols are meticulously kept.</span>
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
                <span className="text-[10px] text-gray-400">Nutritional Information</span>
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
