import { CafeEvent } from '../types';
import { EVENTS } from '../data';
import { Calendar, Clock, MapPin, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';

export default function EventsView() {
  // Weekly recurring meetups
  const recurringEvents = [
    {
      day: 'Every Monday',
      title: 'Green Oasis Mindful Co-Working',
      time: '9:00 AM - 5:00 PM',
      desc: 'High-speed Wi-Fi and ambient rain soundscapes for remote collaborators.'
    },
    {
      day: 'Every Wednesday',
      title: 'Rainforest Canopy Acoustics',
      time: '6:30 PM - 9:30 PM',
      desc: 'Local folk songwriter open mic performances inside our greenhouse room.'
    },
    {
      day: 'Every Friday',
      title: 'Slow Coffee Cuppings',
      time: '8:00 AM - 10:00 AM',
      desc: 'Learn single-origin tasting profiling notes with our lead barista.'
    },
    {
      day: 'Every Saturday',
      title: 'Botanical Biome Repair Lab',
      time: '11:00 AM - 1:00 PM',
      desc: 'Soil mixing tutorials, hand-potting ferns, and terrarium health support.'
    }
  ];

  return (
    <div className="space-y-12 font-sans pb-20">
      {/* Page Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs font-bold text-primary-green uppercase tracking-widest block">Nurturing Forest Ties</span>
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Community Hub <span className="text-[#A7CCED] italic">Gatherings</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          We are more than just a cafe—we are a living, breathing community incubator. Gather with neighbors, share ideas, and discover practical techniques to foster conservation in our daily urban lives.
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
                Google Calendar Live Link
              </span>
            </div>

            {/* Container for responsive calendar aspect ratio */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-black/40 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
              {/* Responsive Styled Google Calendar Embed */}
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles&wkst=1&bgcolor=%23191919&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0" 
                style={{ border: 0, width: '100%', height: '100%', filter: 'invert(0.9) hue-rotate(85deg)' }} 
                className="absolute inset-0 w-full h-full"
                title="Hummingbird Cafe Community Hub Google Calendar"
                loading="lazy"
              />
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 flex items-start gap-3 text-xs text-gray-400">
              <AlertCircle className="w-4 h-4 text-[#A7CCED] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold">Hummingbird Dev Note:</span> To swap in your cafe&apos;s real calendar, replace the <code className="text-[#A7CCED] text-[11px] bg-black/40 px-1 py-0.5 rounded">src</code> query parameter in this frame&apos;s source with your private/public Google Calendar ID inside <code className="text-primary-green text-[11px] font-mono">/src/components/EventsView.tsx</code>. Output colors are balanced automatically!
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
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] font-bold text-primary-green bg-[#689628]/15 px-2 py-0.5 rounded uppercase tracking-wide">
                    {rec.day}
                  </span>
                  <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {rec.time}
                  </span>
                </div>
                <h4 className="mt-2.5 text-sm font-semibold text-white font-serif">{rec.title}</h4>
                <p className="mt-1.5 text-xs text-gray-400 leading-relaxed font-light">
                  {rec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Special Highlights Section */}
      <section className="space-y-6 pt-6">
        <div>
          <span className="text-xs font-bold text-primary-green uppercase tracking-wide block mb-1">Featured Summits</span>
          <h2 className="text-2xl font-serif text-white">Upcoming Summer Specialties</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((evt) => (
            <div 
              key={evt.id}
              className="bg-[#191919] border border-white/5 rounded-xl overflow-hidden flex flex-col group hover:border-[#A7CCED]/20 transition-all"
            >
              <div className="h-40 overflow-hidden relative shrink-0">
                <img 
                  src={evt.image} 
                  alt={evt.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/60 backdrop-blur-md text-[10px] font-medium text-[#A7CCED] border border-white/5 rounded-full capitalize">
                  {evt.category}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white group-hover:text-[#A7CCED] transition-colors leading-snug">
                    {evt.title}
                  </h4>
                  <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed line-clamp-3">
                    {evt.description}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-white/5 space-y-1.5 text-[11px] text-gray-400">
                  <div className="flex items-center gap-1.5 text-primary-green font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
