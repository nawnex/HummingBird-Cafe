import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Instagram, 
  Facebook, 
  Linkedin, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  AlertCircle,
  HelpCircle,
  Award,
  BookOpen,
  Coffee,
  Heart
} from 'lucide-react';

export default function ContactView() {
  // Inquiry form states
  const [inquiryType, setInquiryType] = useState('General Table Reservation / Afternoon Tea');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    workshopModule: 'Barista Skills',
    vegan: false,
    glutenFree: false,
    nutAllergies: false,
    notes: ''
  });

  // UI States
  const [showHistorical, setShowHistorical] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email structure.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for reservations.';
    }
    if (!formData.date) {
      newErrors.date = 'Please pick a chosen date.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate premium API transport dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        inquiryType: inquiryType,
        workshopModule: formData.workshopModule,
        dietary: {
          vegan: formData.vegan,
          glutenFree: formData.glutenFree,
          nutAllergies: formData.nutAllergies,
        },
        notes: formData.notes
      });

      // Clear fields gently
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        workshopModule: 'Barista Skills',
        vegan: false,
        glutenFree: false,
        nutAllergies: false,
        notes: ''
      });
      setErrors({});
    }, 1200);
  };

  return (
    <div className="space-y-12 font-sans pb-24">
      
      {/* Intro Brand Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs font-bold text-primary-green uppercase tracking-widest block flex items-center gap-1.5 justify-center md:justify-start">
          <Sparkles className="w-3.5 h-3.5 text-primary-green animate-pulse" />
          COMMUNITY INQUIRY &amp; SANCTUARY PORTAL
        </span>
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Visit the <span className="text-[#A7CCED] italic">Sanctuary</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          Step into a world crafted for coffee excellence, sensory botanical teas, inclusive local menus, and career-advancing workshops. We welcome your booking with standard-setting grace.
        </p>
      </div>

      {/* Styled Earthy Glass Wrapper with no box backgrounds, borders, or blurs to match user's minimalist request */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          
          {/* Left Column: Operational Data, Location Details & Hours (5/12 width) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            
            {/* Primary Headquarters Details - backgroundless */}
            <div className="space-y-5 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-green shrink-0 animate-bounce" />
                <h3 className="text-lg font-serif text-white font-medium">Bespoke Coordinates</h3>
              </div>

              {/* Direct Location Address */}
              <div className="space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="text-[10px] font-bold text-primary-green bg-[#689628]/15 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                    New Eurocity Area Sanctuary
                  </span>
                  <h4 className="font-semibold text-white text-sm">Main Destination:</h4>
                  <p className="text-gray-300 mt-1">
                    Units 3 &amp; 4 Eurocity Passage,<br />
                    Gibraltar, GX11 1AA
                  </p>
                </div>

                {/* Interactive Expandable Historical Address details */}
                <div className="pt-2 border-t border-white/5">
                  <button 
                    onClick={() => setShowHistorical(!showHistorical)}
                    className="flex items-center justify-between w-full text-left text-gray-400 hover:text-white transition-colors py-1 cursor-pointer"
                  >
                    <span className="font-semibold text-[11px] flex items-center gap-1.5 uppercase tracking-wider">
                      <HelpCircle className="w-3.5 h-3.5 text-secondary-blue" />
                      Looking for Eurotowers?
                    </span>
                    {showHistorical ? (
                      <ChevronUp className="w-4 h-4 text-primary-green" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </button>

                  {showHistorical && (
                    <div className="mt-2 text-gray-300 text-[11px] leading-relaxed space-y-1.5 animate-slide-down">
                      <p className="font-semibold text-white">Historical Reference Workspace:</p>
                      <p className="text-gray-400">
                        Units 2.0.13 &amp; 2.0.14 Eurotowers, Block 2, Europort Road, Gibraltar.
                      </p>
                      <p className="text-gray-400 italic text-[10px]">
                        Our primary culinary and cafe operations have shifted into the larger, beautiful Eurocity Passage to serve you with custom comfort!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Direct Channels - backgroundless */}
            <div className="space-y-4 pb-6 border-b border-white/10">
              <h3 className="text-sm font-serif text-white font-semibold uppercase tracking-wider border-b border-white/5 pb-2">
                Telecomm Channels
              </h3>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary-green shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-500 block">Mobile Hotline / WhatsApp</span>
                    <a href="tel:+35054095722" className="text-white hover:text-primary-green transition-colors font-mono font-medium">
                      +350 54095722
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary-green shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-500 block">Sanctuary Reception Line</span>
                    <a href="tel:+35020050220" className="text-white hover:text-primary-green transition-colors font-mono font-medium">
                      +350 200 50220
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary-green shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-500 block">Electronic Post</span>
                    <a href="mailto:hello@thehummingbirdcafegib.com" className="text-white hover:text-primary-green transition-colors font-mono text-[11px]">
                      hello@thehummingbirdcafegib.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Opening Hours Block - backgroundless */}
            <div className="space-y-4 pb-6 border-b border-white/10">
              <h3 className="text-sm font-serif text-white font-semibold uppercase tracking-wider border-b border-white/5 pb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-green" />
                Verified Hours of Savoring
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2 text-gray-400">
                  <span>Monday – Friday</span>
                  <span className="text-white font-semibold">8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2 text-gray-400">
                  <span>Saturday Session</span>
                  <span className="text-white font-semibold">9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Sunday Gathering</span>
                  <span className="text-[#e15b5b] font-bold italic uppercase tracking-wider text-[10px] px-2 py-0.5 rounded">
                    Closed
                  </span>
                </div>
              </div>

              <div className="pt-1.5 text-[10px] text-gray-500 leading-relaxed font-light">
                * Our high-pressure espresso bars power down 15 minutes before closing to perform sanitary flushes. Tea infusion remains available up to the final minute!
              </div>
            </div>

            {/* Minimal Premium Social Anchors - backgroundless */}
            <div className="flex items-center justify-between py-2">
              <span className="text-xs font-semibold text-white">Digital Anchors:</span>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1 hover:text-[#d8a035] text-gray-400 transition-all"
                  title="Instagram Page"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1 hover:text-[#d8a035] text-gray-400 transition-all"
                  title="Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1 hover:text-[#d8a035] text-gray-400 transition-all"
                  title="LinkedIn Page"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Purpose Dynamic Form (7/12 width) - transparent/backgroundless */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            
            <div className="space-y-1.5">
              <h3 className="text-xl md:text-2xl font-serif text-white font-medium flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-green" />
                Connect, Book, or Collaborate
              </h3>
              <p className="text-xs text-gray-400 font-light">
                Secure your experience with us. Choose your desired business or social journey pathway below:
              </p>
            </div>

            {/* Success state overview output - backgroundless */}
            {isSuccess && submittedData && (
              <div className="space-y-4 animate-fade-in py-4">
                <div className="flex items-center gap-2.5 text-primary-green">
                  <CheckCircle className="w-6 h-6 shrink-0" />
                  <h4 className="font-serif text-base md:text-lg font-bold text-white">
                    Request Aligned with Harmony!
                  </h4>
                </div>
                
                <div className="text-xs text-gray-300 leading-relaxed font-light space-y-3">
                  <p>
                    Greetings, <strong className="text-white">{submittedData.name}</strong>. Your setup is now synchronized with our live scheduler. Here are your booking data fields:
                  </p>
                  
                  <ul className="space-y-1.5 py-3 border-t border-b border-white/10 text-[11px] font-mono">
                    <li><span className="text-gray-500">Selected Path:</span> <span className="text-primary-green">{submittedData.inquiryType}</span></li>
                    <li><span className="text-gray-500">Contact Email:</span> {submittedData.email}</li>
                    <li><span className="text-gray-500">Phone Code:</span> {submittedData.phone}</li>
                    <li><span className="text-gray-500">Target Date:</span> {submittedData.date}</li>
                    
                    {submittedData.inquiryType.includes('Club') && (
                      <li>
                        <span className="text-gray-500">Dietary Preferences:</span>{' '}
                        {Object.entries(submittedData.dietary)
                          .filter(([_, val]) => val)
                          .map(([key]) => key.replace(/([A-Z])/g, ' $1').toUpperCase())
                          .join(', ') || 'No Specific Declarations'}
                      </li>
                    )}

                    {submittedData.inquiryType.includes('Potential') && (
                      <li><span className="text-gray-500">Workshop Stream:</span> {submittedData.workshopModule}</li>
                    )}
                  </ul>

                  <p className="text-[11px] text-[#A7CCED]">
                    A representative from our Gibraltar team will follow up at <strong className="text-white">{submittedData.email}</strong> or key mobile <strong className="text-white">{submittedData.phone}</strong> in short order.
                  </p>
                </div>
                
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-1.5 border border-white/25 hover:border-white text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            )}

            {/* Main Form Fields */}
            {!isSuccess && (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs text-gray-300">
                
                {/* 1. Inquiry Type Dropdown Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">
                    Choose Your Journey Pathway:
                  </label>
                  <div className="relative">
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-primary-green transition-all appearance-none cursor-pointer pr-10"
                    >
                      <option className="bg-[#121212] text-white" value="General Table Reservation / Afternoon Tea">
                        General Table Reservation / Afternoon Tea
                      </option>
                      <option className="bg-[#121212] text-white" value="Join a Club (Salad Club / Kids Lunch Club)">
                        Join a Club (Salad Club / Kids Lunch Club)
                      </option>
                      <option className="bg-[#121212] text-white" value="Register for 'Noon Network Nibbling' (Weekly Event)">
                        Register for &apos;Noon Network Nibbling&apos; (Weekly Event)
                      </option>
                      <option className="bg-[#121212] text-white" value="Enroll in 'Expresso Your Potential' (Community Workshop)">
                        Enroll in &apos;Expresso Your Potential&apos; (Community Workshop)
                      </option>
                      <option className="bg-[#121212] text-white" value="Bespoke Catering &amp; Private Tea Party Bookings">
                        Bespoke Catering &amp; Private Tea Party Bookings
                      </option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 italic mt-1">
                    * Fits directly with our local neighborhood social outreach goals.
                  </p>
                </div>

                {/* 2. Contact Fields Gird */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="E.g. Rowan Foster"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-transparent border rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-all ${
                        errors.name ? 'border-[#e15b5b]' : 'border-white/25 focus:border-primary-green'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-[#e15b5b] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email address */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rowan@community.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-transparent border rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-all ${
                        errors.email ? 'border-[#e15b5b]' : 'border-white/25 focus:border-primary-green'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-[#e15b5b] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Phone Number & Date Picker Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">
                      Phone Number (For Sync notifications)
                    </label>
                    <input
                      type="tel"
                      placeholder="+350 XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-transparent border rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-all ${
                        errors.phone ? 'border-[#e15b5b]' : 'border-white/25 focus:border-primary-green'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-[#e15b5b] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Date picker */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary-green" />
                      Desired Reservation Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full bg-transparent border rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-all ${
                        errors.date ? 'border-[#e15b5b]' : 'border-white/25 focus:border-primary-green'
                      }`}
                    />
                    {errors.date && (
                      <span className="text-[10px] text-[#e15b5b] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.date}
                      </span>
                    )}
                  </div>
                </div>

                {/* 4. CONDITIONAL 1: Joining a Club? Display dietary requirement switches */}
                {inquiryType.includes('Join a Club') && (
                  <div className="py-3 border-t border-b border-white/10 space-y-3 animate-fade-in">
                    <div className="flex items-center gap-2 text-[#A7CCED]">
                      <Heart className="w-4 h-4 text-primary-green" />
                      <span className="font-semibold text-xs uppercase tracking-wider">
                        Dietary Declaration &amp; Absolute Inclusivity
                      </span>
                    </div>
                    
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      To support our community promise of health integration, please select any culinary adjustments we should log with your club membership:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      {/* Vegan options */}
                      <label className="flex items-center gap-2.5 p-2 border border-white/20 hover:border-white/40 rounded-lg cursor-pointer transition-colors select-none text-[11px]">
                        <input 
                          type="checkbox" 
                          checked={formData.vegan}
                          onChange={(e) => setFormData({ ...formData, vegan: e.target.checked })}
                          className="accent-primary-green w-4 h-4 rounded cursor-pointer animate-none"
                        />
                        <span>Vegan / Plant-Based</span>
                      </label>

                      {/* Gluten free */}
                      <label className="flex items-center gap-2.5 p-2 border border-white/20 hover:border-white/40 rounded-lg cursor-pointer transition-colors select-none text-[11px]">
                        <input 
                          type="checkbox" 
                          checked={formData.glutenFree}
                          onChange={(e) => setFormData({ ...formData, glutenFree: e.target.checked })}
                          className="accent-primary-green w-4 h-4 rounded cursor-pointer animate-none"
                        />
                        <span>Gluten-Free</span>
                      </label>

                      {/* Nut allergy */}
                      <label className="flex items-center gap-2.5 p-2 border border-[#ff0000]/25 rounded-lg cursor-pointer transition-colors select-none text-[11px]">
                        <input 
                          type="checkbox" 
                          checked={formData.nutAllergies}
                          onChange={(e) => setFormData({ ...formData, nutAllergies: e.target.checked })}
                          className="accent-[#e15b5b] w-4 h-4 rounded cursor-pointer animate-none"
                        />
                        <span className="text-gray-300">Severe Nut Allergies</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* 5. CONDITIONAL 2: Expresso Your Potential? Display workshop module selection */}
                {inquiryType.includes('Potential') && (
                  <div className="py-3 border-t border-b border-white/10 space-y-3 animate-fade-in">
                    <div className="flex items-center gap-2 text-primary-green">
                      <Award className="w-4 h-4 text-primary-green" />
                      <span className="font-semibold text-xs uppercase tracking-wider">
                        Select Your Specialized Workshop Stream:
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      Choose one of our dedicated hands-on coaching and career boosting programs:
                    </p>

                    <div className="relative">
                      <select
                        value={formData.workshopModule}
                        onChange={(e) => setFormData({ ...formData, workshopModule: e.target.value })}
                        className="w-full bg-transparent border border-white/25 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary-green transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option className="bg-[#121212] text-white" value="Barista Training">Barista Training &amp; Espresso Calibration</option>
                        <option className="bg-[#121212] text-white" value="Digital Literacy &amp; Canva">Digital Literacy &amp; Canva Marketing Layouts</option>
                        <option className="bg-[#121212] text-white" value="Food Preparation">Culinary Arts &amp; Wholesome Food Prep</option>
                        <option className="bg-[#121212] text-white" value="Photography">Mobile Photography &amp; Framing Mechanics</option>
                        <option className="bg-[#121212] text-white" value="Resume Building">Professional Resume Building &amp; Mentorship</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary-green">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Text Area: Custom Accommodations / Special notes */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">
                    Special Notes, Intent, or Custom Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="E.g. Let us know if you need high chairs for kids, wheel-chair accessibility, or specific buffet requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-primary-green transition-all resize-none font-sans"
                  />
                </div>

                {/* Submit button decorated with honey gold (--primary equivalence) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#d8a035] hover:bg-[#ebd077] text-black rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      Submit
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>

      {/* Styled Map section - Strictly NO customized visual custom filters */}
      <section className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="space-y-1">
            <span className="text-xs font-bold text-primary-green uppercase tracking-wide block">VISUAL CORNERSTONE MAP</span>
            <h3 className="text-xl md:text-2xl font-serif text-white font-medium">
              Explore Our Live Neighborhood
            </h3>
          </div>
          <div className="text-[11px] text-gray-400 flex items-center gap-1.5">
            <span className="w-2 col-span-1 h-2 rounded-full bg-primary-green inline-block animate-ping" />
            <span>Actual Location Coordinates: Eurocity Passage</span>
          </div>
        </div>
        
        {/* Responsive Map container with NO filter/special visual custom theming */}
        <div className="w-full h-96 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl bg-black">
          <iframe 
            src="https://maps.google.com/maps?q=Units%203%20%26%204%20Eurocity%20Passage%2C%20Gibraltar&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Hummingbird Cafe Sanctuary Eurocity Passage Location Map"
          />
        </div>
      </section>

    </div>
  );
}
