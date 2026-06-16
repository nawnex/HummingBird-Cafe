import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Landmark, CheckCircle, Sparkles, Instagram, Facebook } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="space-y-12 font-sans pb-20">
      {/* Page Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs font-bold text-primary-green uppercase tracking-widest block">Establish Connections</span>
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Drop Into <span className="text-[#A7CCED] italic">The Canopy</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          Have a community group looking for meeting rooms? Or simply want to ask about our ingredients or bulk botanicals? Reach out today; we respond with pure intent.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info & Hours (5/12 width) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#191919] border border-white/5 rounded-2xl p-6 space-y-6">
            <h3 className="text-lg font-serif text-white font-medium border-b border-white/5 pb-3">The Greenhouse Coordinates</h3>
            
            <div className="space-y-4 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-green shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Gibraltar Headquarters</h4>
                  <p className="mt-0.5 font-light text-gray-400 leading-relaxed">
                    Unit 2.0.13 & 2.0.14, Eurotowers, Block 2,<br />
                    Europort Road, Gibraltar, GX111AA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-green shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Telephony Helpline</h4>
                  <p className="mt-0.5 text-gray-400">+1 (503) 555-0143</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-green shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Electronic Post</h4>
                  <p className="mt-0.5 text-gray-400 font-mono text-[11px]">hello@hummingbirdcafe-hub.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-[#191919] border border-white/5 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-serif text-white font-medium border-b border-white/5 pb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-green" />
              Hours of Savoring
            </h3>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/3 pb-1.5 text-gray-400">
                <span>Monday - Friday</span>
                <span className="text-white font-semibold">7:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/3 pb-1.5 text-gray-400">
                <span>Saturday Sessions</span>
                <span className="text-white font-semibold">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/3 pb-1.5 text-gray-400">
                <span>Sunday Gathering (Acoustics)</span>
                <span className="text-white font-semibold">9:00 AM - 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-gray-500 leading-relaxed">
              *Kitchen charcoal grills slow down 45 minutes prior to structural closure. Tea service remains active.
            </div>
          </div>

          {/* Social Links */}
          <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
            <span className="text-xs font-semibold text-white">Follow Community Channels:</span>
            <div className="flex gap-2">
              <a 
                href="#instagram"
                className="p-2 bg-[#121212] hover:bg-primary-green hover:text-white rounded-full text-gray-400 transition-all border border-white/5"
                title="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#facebook"
                className="p-2 bg-[#121212] hover:bg-primary-green hover:text-white rounded-full text-gray-400 transition-all border border-white/5"
                title="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Form Container (7/12 width) */}
        <div className="lg:col-span-7 bg-[#191919] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
          <h3 className="text-xl font-serif text-white font-medium flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-green" />
            Dispatch we a Note
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {isSuccess && (
              <div className="p-4 bg-primary-green/10 border border-primary-green/30 text-white rounded-xl flex items-start gap-2.5 animate-fade-in mb-2">
                <CheckCircle className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#A7CCED]">Message Transmitted Responsibly!</h4>
                  <p className="text-[11px] text-gray-300 mt-1">Our customer stewards have received your parameters and back-logged details. We will email you within 24 hours.</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Rowan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="rowan@community.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Inquiry Target</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all"
              >
                <option value="General Inquiry" className="bg-[#191919]">General Hub Inquiry</option>
                <option value="Event Space Rental" className="bg-[#191919]">Workshop & Greenhouse Space Rental</option>
                <option value="Crops Sourcing" className="bg-[#191919]">Sourcing / Supplier Pitches</option>
                <option value="Membership card issue" className="bg-[#191919]">Membership Benefit / Card Issue</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Your Message</label>
              <textarea
                required
                rows={5}
                placeholder="Write your thoughts or parameters here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-primary-green hover:bg-primary-green/95 text-white rounded-xl text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Transmit Post
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* Styled Map Container */}
      <section className="space-y-4">
        <h3 className="text-xl font-serif text-white font-medium flex items-center gap-2">
          <Landmark className="w-5 h-5 text-primary-green" />
          Hub Location Map
        </h3>
        
        {/* Responsive Map wrapper container */}
        <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/10 relative shadow-xl bg-black/60">
          {/* We use a beautiful OpenStreetMap or standard styled iFrame representational map */}
          <iframe 
            src="https://maps.google.com/maps?q=Eurotowers%20Gibraltar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(0.9) hue-rotate(85deg) contrast(1.1)' }} 
            allowFullScreen={false} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hummingbird Cafe Location Map"
          />
        </div>
      </section>
    </div>
  );
}
