import { Calendar, Clock, Sparkles, AlertCircle } from 'lucide-react';

export default function EventsView() {
  // Strict Business Data Schema for Recurring Events
  const recurringEvents = [
    {
      title: "Noon Network Nibbling",
      tagline: "Where Conversations Become Connections",
      schedule: "Every Wednesday, 12:00 PM - 2:00 PM",
      description: "A vibrant midday gathering bringing professionals, entrepreneurs, and creatives together over great food and fresh ideas. Enjoy a carefully curated buffet while engaging in authentic networking."
    },
    {
      title: "Expresso Your Potential",
      tagline: "Quick Boosts - Lasting Impact",
      schedule: "Thursdays & Fridays (Off-Peak Hours)",
      description: "Hands-on workshops designed to build practical skills. Learn coffee machine operation, basic cooking, digital tools (Canva/Office), photography, and resume building in a supportive environment."
    },
    {
      title: "Traditional Tea Time",
      schedule: "Every Saturday, 2:00 PM - 4:00 PM",
      description: "Experience our core specialty coffee, organic teas, and herbal infusions perfectly paired with a selection of freshly baked desserts and cakes."
    }
  ];

  // Specialized community outreach & local events
  const specializedEvents = [
    {
      title: "The Kids Lunch Club Launch",
      type: "Social & Family",
      description: "A fun small social event introducing our customized, wholesome lunchbox meal schemes designed to keep children's lunchtime balanced and hassle-free."
    },
    {
      title: "Monthly Local Art Showcase",
      type: "Community Event",
      description: "Fostering our vision as a community hub by opening our space to feature beautiful art displays from local creators across Gibraltar."
    }
  ];

  return (
    <div className="space-y-12 font-sans pb-20">
      {/* Page Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs font-bold text-primary-green uppercase tracking-widest block">Connecting Our Community</span>
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Social Hub <span className="text-[#A7CCED] italic">Gatherings</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          More than just a café, we are a living, breathing space for community. Come along, share a conversation, learn a hobby, and connect with friendly neighbors inside our cozy workshop retreat.
        </p>
      </div>

      {/* Main Grid: Google Calendar + Events List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Google Calendar IFrame Embed (8/12 width on large screens) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#191919] border border-white/5 rounded-2xl overflow-hidden shadow-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-green" />
                <h3 className="text-lg font-serif text-white font-medium">Hummingbird Live Calendar</h3>
              </div>
              <span className="text-[10px] bg-primary-green/20 text-[#A7CCED] tracking-wide font-bold uppercase rounded-full px-2.5 py-0.5 border border-primary-green/20">
                UK &amp; Gibraltar Bank Holidays
              </span>
            </div>

            {/* Container for responsive calendar aspect ratio */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-black/40 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
              {/* Responsive Styled Google Calendar Embed with UK/Gibraltar bank holidays and Europe/Gibraltar timezone */}
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=en.uk%23holiday%40group.v.calendar.google.com&ctz=Europe%2FGibraltar&wkst=1&bgcolor=%23191919&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0" 
                style={{ border: 0, width: '100%', height: '100%', filter: 'invert(0.9) hue-rotate(85deg)' }} 
                className="absolute inset-0 w-full h-full"
                title="Hummingbird Cafe Community Hub Google Calendar"
                loading="lazy"
              />
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 flex items-start gap-3 text-xs text-gray-400">
              <AlertCircle className="w-4 h-4 text-[#A7CCED] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold">Hummingbird Live Sync:</span> This calendar exclusively mirrors official Gibraltar and UK Bank Holidays, filtered dynamically to align with our local Eurotowers community schedule.
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Recurring Weekly Events Side Layout (5/12 width) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary-green uppercase tracking-wider block">Weekly Rhythms</span>
            <h3 className="text-xl font-serif text-white tracking-tight">Recurring Hub Events</h3>
          </div>

          <div className="space-y-4">
            {recurringEvents.map((rec, idx) => (
              <div 
                key={idx}
                className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-primary-green/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-2 flex-wrap sm:flex-nowrap">
                  <span className="text-[10px] font-bold text-primary-green bg-[#689628]/15 px-2 py-0.5 rounded uppercase tracking-wide">
                    {rec.schedule}
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-semibold text-white font-serif">{rec.title}</h4>
                {'tagline' in rec && rec.tagline && (
                  <p className="text-[11px] font-serif italic text-[#A7CCED]/90 mt-0.5">
                    {rec.tagline}
                  </p>
                )}
                <p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">
                  {rec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Special Highlights Section */}
      <section className="space-y-6 pt-6">
        <div>
          <span className="text-xs font-bold text-primary-green uppercase tracking-wide block mb-1">Featured Initiatives</span>
          <h2 className="text-2xl font-serif text-white">Specialized Hub Programs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {specializedEvents.map((evt, idx) => {
            const isKidsClub = evt.title.includes('Kids');
            const bgImg = isKidsClub 
              ? 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
              : 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600';
            return (
              <div 
                key={idx}
                className="bg-[#191919] border border-white/5 rounded-xl overflow-hidden flex flex-col group hover:border-[#A7CCED]/20 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden relative shrink-0">
                  <img 
                    src={bgImg} 
                    alt={evt.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 bg-black/75 backdrop-blur-md text-[10px] font-bold tracking-wider text-[#A7CCED] border border-white/10 rounded-full uppercase">
                    {evt.type}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-base font-semibold text-white group-hover:text-primary-green transition-colors leading-snug">
                      {evt.title}
                    </h4>
                    <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest select-none">
                    <Sparkles className="w-3.5 h-3.5 text-primary-green" />
                    <span>Specialized Club Event</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
