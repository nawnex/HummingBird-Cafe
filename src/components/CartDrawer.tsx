import { useState } from 'react';
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
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  isLoggedIn,
  onClearCart
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shopify-snippet'>('cart');

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
              <h2 className="text-xl font-serif text-white font-medium">Your Harvest Basket</h2>
              <span className="bg-primary-green/20 text-[#A7CCED] text-xs font-medium px-2 py-0.5 rounded-full border border-primary-green/30">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
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
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-primary-green hover:bg-primary-green/90 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            ) : checkoutStep === 'cart' ? (
              <div className="space-y-6">
                {/* Simulated login discount banner for non-members */}
                {!isLoggedIn && (
                  <div className="p-4 bg-primary-green/10 border border-[#689628]/30 rounded-xl flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#A7CCED] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Member Bonus Waiting</h4>
                      <p className="text-xs text-gray-300 mt-1">
                        Hummingbird members unlock <span className="text-[#A7CCED] font-semibold">10% Off Everything</span> automatically. Log in via the account icon to apply discount!
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
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div 
                      key={item.menuItem.id}
                      className="p-3 bg-white/5 border border-white/5 rounded-xl flex gap-3 hover:border-primary-green/20 transition-all duration-300"
                    >
                      <img 
                        src={item.menuItem.image} 
                        alt={item.menuItem.name}
                        className="w-16 h-16 object-cover rounded-lg border border-white/5"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-serif text-white font-medium truncate pr-2">
                            {item.menuItem.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.menuItem.id)}
                            className="text-xs text-gray-500 hover:text-red-400 p-0.5 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="text-xs text-gray-400 capitalize mb-2">{item.menuItem.category}</p>
                        
                        <div className="flex justify-between items-center">
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
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Harvest Subtotal</span>
                      <span>£{subtotal.toFixed(2)}</span>
                    </div>
                    {isLoggedIn && (
                      <div className="flex justify-between text-sm text-[#A7CCED]">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Member Discount (10%)
                        </span>
                        <span>-£{discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Container Deposit</span>
                      <span className="text-[#A7CCED]">FREE</span>
                    </div>
                    <div className="border-t border-white/5 my-2 pt-2 flex justify-between text-base font-medium text-white">
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
              
              <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
                <AlertCircle className="w-3 h-3 text-[#A7CCED]" />
                <span>Local Sourcing & Clean Ingredients Guaranteed</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
