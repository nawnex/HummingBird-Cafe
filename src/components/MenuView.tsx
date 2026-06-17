import { useState, useMemo } from 'react';
import { MenuItem, CartItem } from '../types';
import { MENU_ITEMS } from '../data';
import { 
  Search, Info, Check, Plus, AlertTriangle, Eye, Sparkles, X, Clock, ShoppingBag, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuViewProps {
  onAddToCart: (item: MenuItem) => void;
  isLoggedIn: boolean; // Member discount applied automatically!
  onOpenCart?: () => void;
  cart?: CartItem[];
}

// Available toppings with flat 0.80 price matching screenshots
const AVAILABLE_TOPPINGS = [
  { name: 'Tuna', price: 0.80, icon: '🐟', allergens: ['Fish'] },
  { name: 'Ham', price: 0.80, icon: '🍖', allergens: [] },
  { name: 'Onions', price: 0.80, icon: '🧅', allergens: [] },
  { name: 'Tomato', price: 0.80, icon: '🍅', allergens: [] },
  { name: 'Avocado', price: 0.80, icon: '🥑', allergens: [] },
  { name: 'Sweetcorn', price: 0.80, icon: '🌽', allergens: [] },
  { name: 'Cucumber', price: 0.80, icon: '🥒', allergens: [] },
  { name: 'Baked Beans', price: 0.80, icon: '🥫', allergens: [] },
  { name: 'Cheese', price: 0.80, icon: '🧀', allergens: ['Dairy'] }
];

const CATEGORY_SUBTEXTS: Record<string, string> = {
  'Toasts & Toasties': 'Personalise Your Snack: Switch, add or remove ingredients',
  'Sandwiches': 'Freshly sliced farmhouse collection served chilled or pressed toast style',
  'Wraps': 'Hand rolled in standard or wheat wrap, configure options',
  'Breakfast Specials': 'Country farm-fresh elements cooked to order beautifully',
  'Homemade': 'Stone oven baked or pan seared classic bistro recipes',
  'Jacket Potato': 'Oven roasted Russet potatoes served hot in butter',
  'Soups': 'Warm house crafted recipes served with toasted sourdough',
  'Salads': 'Fresh romaine, spinach, or baby greens dressed locally',
  'A Slice of Pie': 'Each served with a side of salad',
  'Ice Cream': 'Range of toppings available',
  'Sweet Corner': 'Pancakes, waffles and fresh yoghurt bowls',
  'Cakes': 'Country layered sponge or baked cheesecakes'
};

const LEFT_CATEGORIES = [
  'Toasts & Toasties',
  'Sandwiches',
  'Wraps',
  'Breakfast Specials',
  'Homemade',
  'Jacket Potato'
];

const RIGHT_CATEGORIES = [
  'Soups',
  'Salads',
  'A Slice of Pie',
  'Ice Cream',
  'Sweet Corner',
  'Cakes'
];

// Specific descriptions matching the screenshot
const ITEM_SPECIFIC_SUBTEXTS: Record<string, string> = {
  'Vegetable Pie': 'Each served with a side of salad',
  'Spinach Pie': 'Each served with a side of salad',
  'Cauliflower Cheese Pie': 'Each served with a side of salad',
  'Chicken Pot Pie': 'Each served with a side of salad',
  'Ice Cream Cone': 'Range of toppings available',
  'Drip Milkshake': 'Strawberry, banana or chocolate milkshake with whipped cream & matching toppings.',
  'Ice Cream Sundae': '3 Scoops of ice cream, sauce, syrup, sprinkles, whipped cream & marshmallows.',
  'Banana Split': 'Banana, 3 scoops of ice cream, sauce or syrup & whipped cream.',
  'Fruit Yoghurt Pot': 'A blend of Fresh Fruit, Oats & Yogurt',
  'Fruit Salad': 'A fruit cocktail containing your favourites sliced into bite sizes pieces.',
  'Pancakes': 'Only to fluffy homemade pancakes.',
  'Waffles': 'Golden brown Belgian waffles.',
  'Waffle Box': '10 Waffles with your choice of ingredients.',
  'Scrambled Eggs on Toast': 'Your choice of up to 3 ingredients scrambled inside, spread out on your choice of toast.',
  'Omelette': 'Your choice of up to 3 ingredients scrambled inside, with a side of toast.',
  'Mini English': 'Sausage, bacon, fried egg, hash brown, baked beans & toast.',
  'Vegan Breakfast': 'Combination of veggies lightly pan fried, with a side of grilled tomatoes, avocado & sourdough.',
  'Large English Breakfast': 'Two sausages, two rashes of bacon, fried mushrooms, grilled tomatoes, two fried eggs, two hash browns, baked beans & toast.'
};

export default function MenuView({ onAddToCart, isLoggedIn, onOpenCart, cart }: MenuViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [feedbackItemName, setFeedbackItemName] = useState<string | null>(null);
  const [activeHighlightTopping, setActiveHighlightTopping] = useState<string | null>(null);
  
  // Custom Toppings Drawer States
  const [drawerQuantity, setDrawerQuantity] = useState<number>(1);
  const [drawerNotes, setDrawerNotes] = useState<string>('');
  const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);
  const [premiumToppings, setPremiumToppings] = useState<string[]>([]);

  // Calculate simulated cart count & price for header compatibility
  const totalCartPrice = useMemo(() => {
    if (!cart) return 0;
    return cart.reduce((sum, item) => {
      const price = isLoggedIn ? item.menuItem.price * 0.9 : item.menuItem.price;
      return sum + (price * item.quantity);
    }, 0);
  }, [cart, isLoggedIn]);

  const cartCount = useMemo(() => {
    if (!cart) return 0;
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setFeedbackItemName(item.name);
    setTimeout(() => {
      setFeedbackItemName(null);
    }, 2500);
  };

  // Helper flags
  const isCustomisableCategory = (category: string) => {
    return ['Toasts & Toasties', 'Sandwiches', 'Wraps', 'Salads', 'Jacket Potato', 'Breakfast Specials'].includes(category);
  };

  const hasLargeOption = (category: string) => {
    return ['Wraps', 'Homemade'].includes(category);
  };

  // Upgrades wrappers
  const handleAddWithLargeOption = (item: MenuItem, premiumPrice: number) => {
    const upgradedItem: MenuItem = {
      ...item,
      id: `${item.id}-large`,
      name: `${item.name} (Large Portion)`,
      price: item.price + premiumPrice,
      description: `${item.description} (Upgraded to our satisfying Large Portion size).`
    };
    handleAddWithFeedback(upgradedItem);
  };

  const openCustomizeDrawer = (item: MenuItem) => {
    setSelectedItem(item);
    setDrawerQuantity(1);
    setDrawerNotes('');
    setExcludedIngredients([]);
    setPremiumToppings([]);
  };

  const getSwitchableIngredients = (item: MenuItem): string[] => {
    if (item.category === 'Salads') {
      return ['Tomato', 'Egg', 'Cucumber', 'Peppers', 'Cheese', 'Lettuce', 'Mayo', 'Spinach'];
    }
    if (item.category === 'Sandwiches') {
      return ['Turkey', 'Cheese', 'Lettuce', 'Mayo', 'Tomato', 'Egg', 'Hummus', 'Peppers'];
    }
    if (item.category === 'Toasts & Toasties') {
      return ['Tomato', 'Garlic', 'Ham', 'Cheese', 'Peppers', 'Spinach', 'Avocado', 'Egg'];
    }
    if (item.category === 'Wraps') {
      return ['Tuna', 'Egg', 'Rice', 'Cheese', 'Cucumber', 'Veggies', 'Hummus', 'Lettuce'];
    }
    if (item.category === 'Jacket Potato') {
      return ['Butter', 'Cheese', 'Beans', 'Tuna'];
    }
    if (item.category === 'Breakfast Specials') {
      return ['Sausage', 'Bacon', 'Egg', 'Hash Brown', 'Beans', 'Toast', 'Mushrooms', 'Tomatoes'];
    }
    return item.ingredients && item.ingredients.length > 0 ? item.ingredients : [];
  };

  const handleAddCustomizedDrawerItem = () => {
    if (!selectedItem) return;

    const PREMIUM_TOPPING_PRICE = 0.80;
    const itemBasePrice = selectedItem.price;
    const toppingsPrice = premiumToppings.length * PREMIUM_TOPPING_PRICE;
    const singleItemPrice = itemBasePrice + toppingsPrice;

    // Build customized details summary
    const notesParts: string[] = [];
    if (excludedIngredients.length > 0) {
      notesParts.push(`Hold: ${excludedIngredients.join(', ')}`);
    }
    if (premiumToppings.length > 0) {
      notesParts.push(`Extra: ${premiumToppings.join(', ')}`);
    }
    if (drawerNotes.trim() !== '') {
      notesParts.push(`Instr: ${drawerNotes.trim()}`);
    }

    const customString = notesParts.join(' | ');

    const customizedItem: MenuItem = {
      ...selectedItem,
      id: `${selectedItem.id}-custom-${Date.now()}`,
      name: selectedItem.name + (premiumToppings.length > 0 ? ` (+${premiumToppings.join(', ')})` : ''),
      price: singleItemPrice,
      description: customString || selectedItem.description,
      selectedDetails: customString || undefined
    };

    // Add selected quantity to cart
    for (let i = 0; i < drawerQuantity; i++) {
      onAddToCart(customizedItem);
    }

    setFeedbackItemName(selectedItem.name);
    setTimeout(() => {
      setFeedbackItemName(null);
    }, 2500);

    setSelectedItem(null);
  };

  // Filters categories and renders items dynamically
  const getCategoryFilteredItems = (catName: string) => {
    return MENU_ITEMS.filter((item) => {
      if (item.category !== catName) return false;
      
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesTopping = true;
      if (activeHighlightTopping) {
        const query = activeHighlightTopping.toLowerCase();
        const itemText = (item.name + ' ' + item.description + ' ' + item.ingredients.join(' ')).toLowerCase();
        const customisable = isCustomisableCategory(item.category);
        matchesTopping = itemText.includes(query) || customisable;
      }
      
      return matchesSearch && matchesTopping;
    });
  };

  const renderCategory = (categoryName: string) => {
    const items = getCategoryFilteredItems(categoryName);
    if (items.length === 0 && searchQuery !== '') return null;

    return (
      <div 
        key={categoryName} 
        className="flex flex-col pb-6"
        id={`cat-section-${categoryName.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {/* Vintage Framed Header exactly as in original menu picture */}
        <div className="text-center mb-5">
          <div className="border border-black px-8 py-3 tracking-widest text-[#2D2926] font-bold font-serif inline-block mx-auto bg-[#F3ECE0]/80 shadow-[2px_2px_0px_#2D2926] text-sm md:text-base uppercase rounded-none select-none">
            {categoryName}
          </div>
          {categoryName === 'Toasts & Toasties' && (
            <p className="text-xs md:text-sm italic text-[#2D2926]/80 font-serif mt-2 select-none">
               Personalise Your Snack: Switch, add or remove ingredients
            </p>
          )}
          {categoryName === 'Salads' && (
            <p className="text-xs md:text-sm italic text-[#2D2926]/80 font-serif mt-2 select-none">
               Personalise Your Salad: Switch, add or remove ingredients
            </p>
          )}
          {categoryName === 'Homemade' && (
            <p className="text-xs md:text-sm italic text-[#2D2926]/80 font-serif mt-2 select-none">
               Make it Large (Larger Portion Size) — +£2.00
            </p>
          )}
          {categoryName === 'Wraps' && (
            <p className="text-xs md:text-sm italic text-[#2D2926]/80 font-serif mt-2 select-none">
               Make it Large (+£1.50) &bull; Personalise your fillings
            </p>
          )}
        </div>

        {/* Items List */}
        <div className="space-y-1 pt-1">
          {items.map((item, index) => {
            const hasOption = hasLargeOption(item.category);
            const isCustomisable = isCustomisableCategory(item.category);
            const specificDesc = ITEM_SPECIFIC_SUBTEXTS[item.name];
            const finalPrice = isLoggedIn ? item.price * 0.9 : item.price;

            return (
              <div 
                key={item.id} 
                onClick={() => {
                  openCustomizeDrawer(item);
                }}
                className="group cursor-pointer rounded-none py-1.5 px-3 -mx-3 hover:bg-[#EFEAE2] border-b border-transparent hover:border-black/5 transition-all duration-200 text-left"
              >
                <div className="flex md:items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-2 flex-1 min-w-0">
                    {/* Item Listing Numbers */}
                    <span className="font-mono text-xs md:text-sm text-black/50 font-bold shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-base md:text-[17px] font-extrabold text-[#2D2926] uppercase tracking-wide group-hover:underline transition-all break-words">
                      {item.name}
                    </h3>
                  </div>
                  
                  {/* Price positioned rigidly to the right */}
                  <div className="flex items-center gap-1.5 shrink-0 select-none">
                    {isLoggedIn && (
                      <span className="text-[11px] sm:text-xs line-through text-stone-400 font-serif">£{item.price.toFixed(2)}</span>
                    )}
                    <span className="font-serif text-base md:text-[17px] font-black text-[#2D2926]">
                      £{finalPrice.toFixed(2)}
                    </span>
                    <ChevronRight className="h-4 w-4 text-black opacity-0 group-hover:opacity-100 transition-all translate-x-1 group-hover:translate-x-0" />
                  </div>
                </div>

                {/* Left Offset details layer */}
                <div className="pl-6 space-y-1 mt-0.5">
                  {/* Specific subtext description */}
                  {specificDesc && (
                    <p className="text-xs md:text-sm text-[#2D2926]/90 font-serif italic leading-relaxed">
                      {specificDesc}
                    </p>
                  )}

                  {/* Config & Upgrades indicators in clean print text form */}
                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    {isCustomisable && (
                      <span className="text-[10px] md:text-xs font-sans tracking-wide font-extrabold text-amber-900 uppercase select-none">
                        CONFIGURE OPTION AVAILABLE
                      </span>
                    )}

                    {hasOption && (
                      <span className="text-[10px] md:text-xs font-mono tracking-wider font-bold text-[#2D2926]/80 border border-black/30 px-1 rounded-none uppercase bg-[#EFEAE2]/40 select-none">
                        LARGE PORTION +£{item.category === 'Wraps' ? '1.50' : '2.00'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="w-full min-h-screen bg-[#F9F6F0] text-[#2D2926] py-12 px-4 sm:px-8 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
      
      {/* Floating Add Feedback Toast Notification */}
      {feedbackItemName && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#2D2926] border-2 border-black text-white text-xs py-3 px-5 rounded-none shadow-xl flex items-center gap-2 animate-fade-in font-serif">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Added <strong className="text-white uppercase">{feedbackItemName}</strong> into your order basket</span>
        </div>
      )}

      {/* Main Central Minimal Title (Double Border Line Design matching printed menu menu card aesthetic) */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 select-none font-serif">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.25em] text-[#2D2926] leading-tight mb-2">
          THE BOTANICAL PANTRY
        </h1>
        <p className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-[#2D2926] mt-2 uppercase font-bold select-none border-t border-b border-black/10 py-1.5 w-full max-w-2xl px-1">
          15 VICTORIA ROAD, PENYFFORDD &nbsp;•&nbsp; TEL: 01244 50678 &nbsp;•&nbsp; W: WWW.THEBOTANICALPANTRY.CO.UK
        </p>

        <p className="text-xs sm:text-sm text-[#2D2926]/75 font-serif italic max-w-2xl mx-auto mt-4 leading-relaxed font-light">
          Welcome to our interactive gourmet menu. Each item is prepared fresh. Click on any dish name to configure ingredients, size, toppings or leaves and add directly to your secure Shopify checkout cart.
        </p>
        
        <div className="w-56 sm:w-80 md:w-[60%] h-[1.5px] bg-[#2D2926] mx-auto my-10 opacity-80" />
      </div>

      {/* Side-by-Side Dual-Column Newspaper Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Category Column */}
        <div className="space-y-12">
          {LEFT_CATEGORIES.map((catName) => renderCategory(catName))}
        </div>

        {/* Right Category Column */}
        <div className="space-y-12">
          {RIGHT_CATEGORIES.map((catName) => renderCategory(catName))}
          
          {/* TOAT / SANDWICH / SALAD TOPPINGS BOARD SYSTEM (Sits right beneath cakes box!) */}
          <div className="rounded-none border-2 border-black bg-[#EFEAE2]/50 p-6 space-y-4 shadow-[3px_3px_0px_#2D2926] select-none">
            <div className="flex items-center justify-between border-b border-black/20 pb-3">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2D2926] font-black flex items-center gap-1.5">
                <Info className="h-3.5 w-3.5 text-[#2D2926]" />
                Select Your Toppings
              </span>
              <span className="text-[9px] font-mono text-[#2D2926]/60 uppercase font-semibold">
                Fresh Fillings Daily
              </span>
            </div>
            
            <p className="text-xs text-[#2D2926]/70 font-serif leading-relaxed">
              These fresh ingredients are available to switch daily, customize or add as satisfying fillings inside any of our customizable <strong>Toasts & Toasties</strong>, <strong>Sandwiches</strong>, <strong>Wraps</strong>, <strong>Salads</strong>, and hot <strong>Jacket Potatoes</strong>:
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Tuna', 'Ham', 'Onions', 'Tomato', 'Avocado', 'Sweetcorn', 'Cucumber', 'Baked Beans', 'Cheese'].map((toppingName) => {
                const isHighlighted = activeHighlightTopping === toppingName;
                return (
                  <button
                    key={toppingName}
                    onClick={() => {
                      setActiveHighlightTopping((prev) => (prev === toppingName ? null : toppingName));
                    }}
                    className={`rounded-none bg-[#F9F6F0] border px-3 py-1.5 text-xs font-serif font-bold text-[#2D2926] shadow-[1px_1px_0px_rgba(0,0,0,0.1)] transition-colors duration-150 cursor-pointer select-none ${
                      isHighlighted
                        ? 'bg-[#2D2926] border-black text-white'
                        : 'border-black/20 hover:bg-[#EFEAE2]'
                    }`}
                  >
                    {toppingName}
                  </button>
                );
              })}
            </div>

            {activeHighlightTopping && (
              <button
                onClick={() => setActiveHighlightTopping(null)}
                className="text-[10px] font-mono font-bold tracking-wider text-amber-900 uppercase hover:underline flex items-center gap-1 cursor-pointer select-none"
              >
                &times; Clear filter highlighting
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Styled double border lines footer matching the screenshot structure */}
      <div className="border-t border-stone-300 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-serif tracking-wider text-stone-600 gap-4">
        <span>© 2026 The Botanical Pantry. All rights reserved.</span>
        <span className="flex items-center gap-1 mb-1 md:mb-0">
          <Clock className="w-3.5 h-3.5 text-[#689628]" />
          Opening Hours: 8:00 AM - 10:00 PM Daily
        </span>
        <span className="uppercase tracking-widest font-black text-stone-850 flex items-center gap-1">
          <Check className="w-3.5 h-3.5 text-[#689628]" />
          Direct Collection & Order Fulfilled
        </span>
      </div>

      </div> {/* End max-w-7xl */}

      {/* Interactive Right-Side Customizer Drawer */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 overflow-hidden font-sans">
            {/* Dark glass overlay with fade-in */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs cursor-pointer animate-fade-in"
            />

            {/* Slide-out Panel container */}
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-screen max-w-[500px] bg-[#F5F2EB] border-l border-stone-300 flex flex-col shadow-2xl relative select-none"
              >
                {/* Header Section */}
                <div className="p-6 border-b border-stone-300 bg-[#EFECE5] shrink-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#8e7651]">
                        {selectedItem.category}
                      </span>
                      <h2 className="font-serif text-2xl font-black uppercase tracking-wider text-stone-900 mt-1">
                        {selectedItem.name}
                      </h2>
                    </div>
                    {/* Square outline Close Button */}
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="border border-stone-800 p-2 text-stone-900 select-none flex items-center justify-center w-8 h-8 rounded-none hover:bg-stone-200 transition-colors cursor-pointer"
                      aria-label="Close panel"
                    >
                      <X className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>
                  {/* Subtle dividing line */}
                  <div className="border-b border-stone-400 mt-4" />
                </div>

                {/* Content Section (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-6 space-y-7">
                  
                  {/* 1. Switch / Remove Ingredients (Only if customizable) */}
                  {isCustomisableCategory(selectedItem.category) && (
                    <div className="space-y-3">
                      <div className="border-b border-stone-300 pb-1.5">
                        <h4 className="font-sans text-xs sm:text-sm font-black tracking-wider uppercase text-stone-900">
                          SWITCH / REMOVE INGREDIENTS
                        </h4>
                      </div>
                      <p className="text-[11px] italic text-stone-500">
                        Hold off on specific ingredients inside this dish:
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-1">
                        {getSwitchableIngredients(selectedItem).map((ingredient) => {
                          const isExcluded = excludedIngredients.includes(ingredient);
                          return (
                            <button
                              key={ingredient}
                              onClick={() => {
                                setExcludedIngredients((prev) => 
                                  prev.includes(ingredient)
                                    ? prev.filter((i) => i !== ingredient)
                                    : [...prev, ingredient]
                                );
                              }}
                              className={`border px-3.5 py-1.5 text-xs font-serif font-bold uppercase transition-all tracking-wider cursor-pointer rounded-none select-none ${
                                isExcluded
                                  ? 'border-red-350 text-stone-400 bg-stone-200/50 line-through opacity-65'
                                  : 'border-stone-400 bg-white text-stone-900 hover:bg-stone-100'
                              }`}
                            >
                              {ingredient}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 2. Add Premium Toppings (+£0.80 per topping) (Only if customizable) */}
                  {isCustomisableCategory(selectedItem.category) && (
                    <div className="space-y-3">
                      <div className="border-b border-stone-300 pb-1.5">
                        <h4 className="font-sans text-xs sm:text-sm font-black tracking-wider uppercase text-stone-900">
                          ADD PREMIUM TOPPINGS
                        </h4>
                      </div>
                      <p className="text-[11px] italic text-stone-500">
                        Enhance your meal (+£0.80 per topping)
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {AVAILABLE_TOPPINGS.map((topping) => {
                          const isSelected = premiumToppings.includes(topping.name);
                          return (
                            <button
                              key={topping.name}
                              onClick={() => {
                                setPremiumToppings((prev) => 
                                  prev.includes(topping.name)
                                    ? prev.filter((t) => t !== topping.name)
                                    : [...prev, topping.name]
                                );
                              }}
                              className={`border p-3 flex items-center justify-between text-[11px] font-sans font-bold uppercase tracking-wider cursor-pointer select-none transition-all rounded-none ${
                                isSelected
                                  ? 'border-[#689628] bg-[#689628]/5 text-stone-900 shadow-xs animate-shake'
                                  : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-50'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-3.5 h-3.5 border flex items-center justify-center rounded-none transition-all ${
                                  isSelected ? 'bg-[#689628] border-transparent text-[#FCFAF5]' : 'border-stone-400 bg-white'
                                }`}>
                                  {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                </div>
                                <span>{topping.name}</span>
                              </div>
                              <span className="font-mono text-[10px] text-[#8e7651]">+£0.80</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 3. Kitchen Instructions Special Box */}
                  <div className="space-y-3">
                    <div className="border-b border-stone-300 pb-1.5">
                      <h4 className="font-sans text-xs sm:text-sm font-black tracking-wider uppercase text-stone-900">
                        KITCHEN INSTRUCTIONS
                      </h4>
                    </div>
                    <textarea
                      placeholder="Any allergy requests, special cooking guidance or dietary adjustments..."
                      value={drawerNotes}
                      onChange={(e) => setDrawerNotes(e.target.value)}
                      className="border border-stone-400 bg-white p-3 text-xs sm:text-sm font-serif outline-none w-full h-24 placeholder-stone-400 text-stone-900 focus:border-stone-800 transition-colors rounded-none"
                    />
                  </div>

                </div>

                {/* Bottom Fixed Section */}
                <div className="p-6 border-t border-stone-300 bg-[#EFECE5] shrink-0 space-y-4">
                  
                  {/* Quantity selector row */}
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs sm:text-sm font-black tracking-wider uppercase text-stone-900">
                      SELECT QUANTITY
                    </span>
                    
                    {/* Incremental Selector Box */}
                    <div className="border border-stone-400 flex items-center bg-white">
                      <button
                        onClick={() => setDrawerQuantity(q => Math.max(1, q - 1))}
                        className="p-2 w-10 text-center font-bold font-mono hover:bg-stone-150 transition-colors border-r border-stone-400 text-stone-800"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-serif text-sm font-extrabold text-stone-900">
                        {drawerQuantity}
                      </span>
                      <button
                        onClick={() => setDrawerQuantity(q => q + 1)}
                        className="p-2 w-10 text-center font-bold font-mono hover:bg-stone-150 transition-colors border-l border-stone-400 text-stone-800"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="border-b border-stone-300" />

                  {/* Price & Add To Basket Shopify CTA */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-stone-500 font-extrabold tracking-widest font-sans">
                        TOTAL (INC VAT)
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-xl sm:text-2xl font-serif font-black text-stone-900">
                          £{((selectedItem.price + (premiumToppings.length * 0.80)) * (isLoggedIn ? 0.9 : 1.0) * drawerQuantity).toFixed(2)}
                        </span>
                        {isLoggedIn && (
                          <span className="text-[9px] text-[#689628] font-sans font-black uppercase tracking-wider">
                            (-10% MEM)
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handleAddCustomizedDrawerItem}
                      className="bg-stone-900 text-[#F5F2EB] py-4 px-6 uppercase font-bold text-xs tracking-widest hover:bg-black transition-colors rounded-none flex items-center gap-2 shadow-md active:translate-y-0.5 select-none shrink-0"
                    >
                      <Plus className="w-4 h-4 text-[#A7CCED]" />
                      ADD TO SHOPIFY CART
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
