import { useState, useEffect } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, ShoppingBag, CreditCard, Sparkles, AlertCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  isLoggedIn: boolean;
  onClearCart: () => void;
  onNavigate?: (view: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  isLoggedIn,
  onClearCart,
  onNavigate
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shopify-snippet'>('cart');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate prices
  const subtotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  
  // Apply 10% member discount if logged in
  const discountRate = isLoggedIn ? 0.10 : 0.00;
  const discountAmount = subtotal * discountRate;
  const finalTotal = subtotal - discountAmount;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const triggerShopifyCheckout = () => {
    setIsCheckingOut(true);
    // Simulate connection to Shopify Buy Button SDK
    setTimeout(() => {
      setCheckoutStep('shopify-snippet');
    }, 1500);
  };

  const completeSimulation = () => {
    setIsCheckingOut(false);
    setCheckoutStep('cart');
    onClearCart();
    onClose();
    // Soft checkout logs instead of window.alert
    console.log("Hummingbird Checkout Simulated successfully!");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#191919] border-l border-[#689628]/20 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary-green" />
              <h2 className="text-xl font-serif text-white font-medium">Your Cart</h2>
              <span className="text-white text-xs font-medium pl-1">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-80 pt-10">
                <div className="p-6 bg-white/5 rounded-full border border-white/5 mb-4 animate-bounce">
                  <ShoppingBag className="w-12 h-12 text-primary-green/50" />
                </div>
                <h3 className="text-lg font-serif text-white mb-2">Your basket is empty</h3>
                <p className="text-sm text-gray-400 max-w-xs">
                  Sip on fresh blends or organic bites! Wander over to our Menu page to gather some forest treasures.
                </p>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('menu');
                    } else {
                      onClose();
                    }
                  }}
                  className="mt-6 px-6 py-2 bg-primary-green hover:bg-primary-green/90 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            ) : checkoutStep === 'cart' ? (
              <div className="space-y-4">
                {/* Simulated login discount banner for non-members */}
                {!isLoggedIn && (
                  <div className="p-2.5 bg-primary-green/10 border border-[#689628]/35 rounded-xl flex items-start gap-2 max-w-full">
                    <Sparkles className="w-4 h-4 text-[#A7CCED] shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-300 leading-normal">
                        Hummingbird members unlock 10% off discount automatically.{' '}
                        <button
                          type="button"
                          onClick={() => {
                            if (onNavigate) onNavigate('members');
                          }}
                          className="text-[#A7CCED] hover:text-white hover:underline cursor-pointer font-bold inline"
                        >
                          Join Now
                        </button>
                      </p>
                    </div>
                  </div>
                )}

                {/* Logged in confirmation */}
                {isLoggedIn && (
                  <div className="p-4 bg-[#689628]/20 border border-[#689628] rounded-xl flex items-start gap-3 animate-pulse">
                    <Sparkles className="w-5 h-5 text-[#A7CCED] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#A7CCED] uppercase tracking-wider">10% Member Discount Active</h4>
                      <p className="text-xs text-gray-200 mt-0.5">
                        Your Hummingbird Card benefits matched! Saved <strong className="text-white">£{discountAmount.toFixed(2)}</strong> on this order.
                      </p>
                    </div>
                  </div>
                )}

                {/* Items List */}
                <div className="space-y-1 divide-y divide-white/5">
                  {cart.map((item) => (
                    <div 
                      key={item.menuItem.id}
                      className="py-3 flex flex-col gap-2 transition-all duration-300 hover:bg-white/[0.01]"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h4 className="text-sm font-sans text-white font-medium pr-1">
                              {item.menuItem.name}
                            </h4>
                            <p className="text-[9px] text-gray-500 uppercase tracking-widest font-sans mt-0.5">{item.menuItem.category}</p>
                          </div>
                          
                          <button
                            onClick={() => onRemoveItem(item.menuItem.id)}
                            className="text-xs text-gray-500 hover:text-red-400 p-0.5 transition-colors cursor-pointer shrink-0"
                          >
                            Remove
                          </button>
                        </div>
                        
                        {/* Display Detailed Customizations - no black background box, clean side border design */}
                        {(item.excludedIngredients || item.menuItem.excludedIngredients || 
                          item.premiumToppings || item.menuItem.premiumToppings || 
                          item.kitchenNotes || item.menuItem.kitchenNotes || 
                          item.selectedDetails || item.menuItem.selectedDetails) && (
                          <div className="my-1.5 font-sans space-y-1 text-left border-l border-primary-green/20 pl-2">
                            {(item.excludedIngredients || item.menuItem.excludedIngredients) && (
                              <div className="flex items-baseline gap-1 text-[11px]">
                                <span className="font-bold text-red-400/90 shrink-0 text-[10px] tracking-wider uppercase">WITHOUT:</span>
                                <span className="text-gray-300 font-mono text-[10px]">
                                  {(item.excludedIngredients || item.menuItem.excludedIngredients || []).join(', ')}
                                </span>
                              </div>
                            )}
                            
                            {(item.premiumToppings || item.menuItem.premiumToppings) && (
                              <div className="flex items-baseline gap-1 text-[11px]">
                                <span className="font-bold text-[#76A8D6] shrink-0 text-[10px] tracking-wider uppercase">ADD:</span>
                                <span className="text-gray-300 font-mono text-[10px]">
                                  {(item.premiumToppings || item.menuItem.premiumToppings || []).join(', ')}
                                </span>
                              </div>
                            )}

                            {(item.kitchenNotes || item.menuItem.kitchenNotes) && (
                              <div className="text-[11px] text-stone-400 italic leading-relaxed">
                                <span className="font-sans not-italic text-[10px] text-amber-500/95 uppercase mr-1 font-bold tracking-wider">NOTE:</span>
                                "{(item.kitchenNotes || item.menuItem.kitchenNotes || '')}"
                              </div>
                            )}

                            {/* Fallback compact layout if structural keys are missing */}
                            {!(item.excludedIngredients || item.menuItem.excludedIngredients) && 
                             !(item.premiumToppings || item.menuItem.premiumToppings) && 
                             !(item.kitchenNotes || item.menuItem.kitchenNotes) && 
                             (item.selectedDetails || item.menuItem.selectedDetails) && (
                              <div className="text-[10px] text-stone-400 tracking-wide font-mono leading-relaxed italic">
                                {item.selectedDetails || item.menuItem.selectedDetails}
                              </div>
                            )}
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center mt-2.5">
                          {/* Price */}
                          <div className="flex items-center gap-1.5">
                            {isLoggedIn ? (
                              <>
                                <span className="text-xs line-through text-gray-500">
                                  £{(item.menuItem.price * item.quantity).toFixed(2)}
                                </span>
                                <span className="text-sm font-semibold text-primary-green">
                                  £{((item.menuItem.price * 0.9) * item.quantity).toFixed(2)}
                                </span>
                              </>
                            ) : (
                              <span className="text-sm font-semibold text-[#A7CCED]">
                                £{(item.menuItem.price * item.quantity).toFixed(2)}
                              </span>
                            )}
                          </div>

                          {/* Stepper controls */}
                          <div className="flex items-center bg-black/40 border border-white/10 rounded-full py-0.5 px-2">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                              className="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs text-white font-medium px-2 min-w-[16px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                              className="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* SDK Integration Instructions Panel */
              <div className="space-y-6 text-sm text-gray-300">
                <div className="p-4 bg-white/5 rounded-xl border border-[#A7CCED]/20">
                  <h3 className="text-base font-serif text-white font-semibold flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-[#A7CCED]" />
                    Shopify Buy Button SDK
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-400">
                    To connect your real Shopify catalog, copy the credentials from your Shopify Admin (Sales Channels &gt; Buy Button) and load the SDK script:
                  </p>
                  <pre className="mt-3 p-3 bg-black/60 rounded-lg text-[10px] font-mono text-primary-green overflow-x-auto">
{`<!-- Loaded in root index.html -->
<script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.js"></script>

// Initialized in your React code:
const client = ShopifyBuy.buildClient({
  domain: 'hummingbird-cafe.myshopify.com',
  storefrontAccessToken: 'YOUR_SHOPIFY_ACCESS_TOKEN'
});`}
                  </pre>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-green mt-2 shrink-0" />
                    <p className="text-xs">
                      The <strong className="text-white">Shopify Buy Button SDK</strong> directly opens a secure checkout overlay, pulling actual prices and inventory live.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-green mt-2 shrink-0" />
                    <p className="text-xs">
                      Alternatively, map customized cart items using the <strong className="text-white">Shopify Storefront Cart API</strong> (POST to <code className="text-[#A7CCED] text-[11px]">/cart/add.js</code>) to support beautiful checkout redirects.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 text-center">
                  <p className="text-xs text-gray-400 mb-4">
                    The item counter, adding modifiers, and member markdown state are fully active right now. Let's finish the simulated transaction!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Checkout Footer (sticky) */}
          {cart.length > 0 && (
            <div className="p-6 bg-black/40 border-t border-white/5 space-y-4">
              {checkoutStep === 'cart' ? (
                <>
                  <div className="space-y-2">
                    {isLoggedIn && (
                      <div className="flex justify-between text-sm text-[#A7CCED]">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Member Discount (10%)
                        </span>
                        <span>-£{discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-medium text-white">
                      <span>Total Price</span>
                      <span className="text-primary-green font-bold">£{finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={triggerShopifyCheckout}
                    disabled={isCheckingOut}
                    className="w-full h-12 bg-primary-green hover:bg-primary-green/95 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#689628]/20 disabled:opacity-50 cursor-pointer"
                  >
                    {isCheckingOut ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5" />
                        Proceed to Shopify Checkout
                      </>
                    )}
                  </button>
                </>
              ) : (
                <button
                  onClick={completeSimulation}
                  className="w-full h-12 bg-[#A7CCED] hover:bg-[#A7CCED]/95 text-black rounded-full font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Confirm Simulation
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
