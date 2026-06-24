import React, { useState } from 'react';
import { MemberProfile } from '../types';
import { 
  Lock, 
  CreditCard, 
  AlertCircle, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ShopifyCheckoutProps {
  memberProfile: MemberProfile | null;
  onClose: () => void;
}

export default function ShopifyCheckout({ memberProfile, onClose }: ShopifyCheckoutProps) {
  // Shopify Checkout States
  const [shippingAddress, setShippingAddress] = useState<string>('');
  const [shippingCity, setShippingCity] = useState<string>('Gibraltar');
  const [shippingZip, setShippingZip] = useState<string>('GX11 1AA');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvv, setCardCvv] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<string | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('');

  const [studentName, setStudentName] = useState<string>(memberProfile?.name || 'James Sterling');
  const [studentEmail, setStudentEmail] = useState<string>(memberProfile?.email || 'james@sterling.com');

  const handleShopifyPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentEmail.trim() || !shippingAddress.trim() || !shippingCity.trim() || !shippingZip.trim()) {
      setFormErrors('Please complete all contact and shipment address details.');
      return;
    }
    if (!cardNumber.trim() || !cardExpiry.trim() || !cardCvv.trim()) {
      setFormErrors('Please supply your credit card details before initiating Shopify payment gateways.');
      return;
    }
    
    setFormErrors(null);
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setOrderId(`HMB-SHPFY-${Math.floor(10000 + Math.random() * 90000)}`);
      setCheckoutSuccess(true);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 1800);
  };

  if (checkoutSuccess) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-6 text-slate-800 font-sans animate-fade-in" id="checkout-success-view">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-500 to-teal-400" />
          
          <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#689628] font-bold uppercase">Shopify Checkout Completed</span>
            <h1 className="text-3xl font-serif font-bold text-slate-950">Membership Enrolled!</h1>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Order receipt sequence <span className="font-mono text-slate-900 font-bold">{orderId}</span> processed. Thank you for subscribing to our community wellness loop, <span className="font-semibold text-slate-900">{studentName || 'Member'}</span>.
            </p>
          </div>

          <div className="bg-white border border-slate-150 p-6 rounded-2xl max-w-md mx-auto text-left space-y-4 shadow-sm">
            <div className="flex justify-between border-b border-slate-100 pb-2 text-xs">
              <span className="text-slate-400">Merchant Code:</span>
              <span className="font-mono text-slate-900 font-semibold">Hummingbird Cafe (Shopify IP)</span>
            </div>
            
            <div className="space-y-1.5 text-xs">
              <label className="text-[9px] uppercase tracking-wide text-slate-400 font-bold font-mono">Subscribed Service</label>
              <div className="font-serif font-bold text-slate-950">Core Café Membership Pass</div>
              <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                Activated 1-year privilege access key. Flat 10% cash-back automatically linked to your logged account, with immediate priority seat access at Eurotowers.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
              <span className="text-slate-500">Recurrent Rate:</span>
              <span className="font-mono text-slate-950 font-bold text-base bg-emerald-500/10 text-emerald-700 px-2.5 py-1 rounded-lg">
                £120.00 / year
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl text-[10px] text-slate-500 space-y-1.5 border border-slate-150">
              <span className="font-bold text-slate-700 block uppercase tracking-wider font-mono text-[9px]">Next Steps & Delivery Details</span>
              <p className="m-0 leading-relaxed font-light">
                Your premium Welcome Pack containing the sage-green barista apron, insulated travel bottle, community hoodie, and craft coffee blend will be prepared and delivered to <span className="font-semibold text-slate-800">{shippingAddress}, {shippingCity}</span>. We have also sent your confirmation voucher details to <span className="font-semibold text-slate-800">{studentEmail}</span>.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer"
            >
              Return to Benefits Guide
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 font-sans text-slate-800 animate-fade-in text-left" id="shopify-secure-checkout-page">
      {/* Back navigation option */}
      <button
        onClick={onClose}
        className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-slate-700 transition-all cursor-pointer mb-8 font-medium"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        <span>Return to Membership Benefits Guide</span>
      </button>

      {/* Outer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Input Details (7 Cols) */}
        <form onSubmit={handleShopifyPayment} className="lg:col-span-7 bg-white border border-slate-200/85 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl relative text-left">
          
          {/* Shopify Branding Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 gap-3">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 text-white w-7 h-7 rounded-lg flex items-center justify-center font-bold font-serif text-sm">S</div>
              <div>
                <span className="text-[9px] uppercase font-bold text-emerald-600 block leading-none font-mono tracking-wider">Secured Storefront</span>
                <span className="text-sm font-semibold text-slate-950">Shopify Checkout</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-150">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>SSL Encrypted gateway enabled</span>
            </div>
          </div>

          {formErrors && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{formErrors}</span>
            </div>
          )}

          {/* 1. Customer Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-950 font-serif border-b border-slate-100 pb-2">
              <span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">1</span>
              <h3>Billing & Account Contact</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="E.g. James Sterling"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="james@sterling.com"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* 2. Delivery Address */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-950 font-serif border-b border-slate-100 pb-2">
              <span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">2</span>
              <h3>Shipping Address (Welcome Pack delivery)</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">Street Address</label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Eurotowers, Block A, Apt 401"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">City / State</label>
                  <input
                    type="text"
                    required
                    placeholder="Gibraltar"
                    value={shippingCity}
                    onChange={(e) => setShippingCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">Postal Code / Zip</label>
                  <input
                    type="text"
                    required
                    placeholder="GX11 1AA"
                    value={shippingZip}
                    onChange={(e) => setShippingZip(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Card Billing */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-950 font-serif border-b border-slate-100 pb-2">
              <span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">3</span>
              <h3>Credit Card Information</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">Card Holder Number</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="4242 4242 4242 4242"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all font-mono"
                  />
                  <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">Expiry Date</label>
                  <input
                    type="text"
                    required
                    placeholder="MM / YY"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all font-mono text-center"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">CVV Security</label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    placeholder="•••"
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all font-mono text-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Active activation triggers */}
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-2xl text-xs tracking-widest uppercase transition-all shadow-xl shadow-emerald-600/10 cursor-pointer flex items-center justify-center gap-2 font-mono"
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Contacting Shopify Servers...</span>
              </>
            ) : (
              <>
                <span>Authorize & Pay £120.00 via Shopify</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* RIGHT COLUMN: Order Summary (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-100 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 text-left shadow-md">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-slate-200 pb-3">
            Shopify Order Summary
          </h3>

          {/* Product Box */}
          <div className="space-y-4">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="font-serif font-bold text-slate-950 text-base">Core Café Membership</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Continuous annual support plan. Activated automatic 10% cash-backs at till, unlimited free couriers, and priority seat reservation channels.
                </p>
              </div>
              <span className="font-mono text-sm font-bold text-slate-950 shrink-0">£120.00</span>
            </div>

            {/* Welcome pack inclusion callout list */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 space-y-3 shadow-inner">
              <span className="text-[8px] bg-amber-100 border border-amber-300 text-amber-800 font-bold font-mono tracking-widest uppercase px-2.5 py-1 rounded-full block w-fit leading-none">
                🎁 Welcome Goods Box Included
              </span>
              
              <div className="text-[10px] space-y-2 text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Woodland Sage Barista Linen Apron (£32 value)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Double-steel Reusable Growler Bottle (£24 value)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Eucalyptus Green community crop hoodie (£48 value)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Classic custom cap series + coffee pouch (£65 value)</span>
                </div>
              </div>
              
              <div className="border-t border-slate-100 pt-2.5 flex justify-between items-center text-[9px] font-mono text-slate-400">
                <span>Combined physical goods value:</span>
                <span className="text-amber-700 font-bold">£158.00 FREE</span>
              </div>
            </div>
          </div>

          {/* Cost layout */}
          <div className="border-t border-slate-200 pt-4 space-y-2.5 text-xs font-sans">
            <div className="flex justify-between text-slate-500">
              <span>Annual Core Pass:</span>
              <span className="font-mono text-slate-900">£120.00</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Welcome Pack Shipping:</span>
              <span className="font-mono text-emerald-600 font-semibold uppercase">Free</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>VAT / local taxes:</span>
              <span className="font-mono text-slate-900">£0.00</span>
            </div>
            
            <div className="border-t border-slate-200 pt-3 flex justify-between items-center font-bold text-slate-950 text-base">
              <span>Total Charge:</span>
              <span className="font-mono text-emerald-700">£120.00</span>
            </div>
          </div>

          <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-150 rounded-xl text-[10px] text-center font-mono leading-relaxed">
            🌿 Backed by the secure Shopify Guarantee. You can cancel or modify your plan prior to any subsequent annual renewals with absolute zero penalties.
          </div>
        </div>

      </div>
    </div>
  );
}
