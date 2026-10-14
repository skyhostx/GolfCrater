import React, { useState } from 'react';

export const FloatingContactWidget: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<'telegram' | 'whatsapp' | null>(null);

  const telegramUsername = 'Go2Rapid';
  const telegramUrl = 'https://t.me/Go2Rapid?text=Hello%20GolfCrater%2C%20I%20need%20assistance%20with%20an%20inquiry';
  const whatsappNumber = '+12534080049';
  const whatsappUrl = 'https://wa.me/12534080049?text=Hello%20GolfCrater,%20I%20need%20assistance%20with%20an%20inquiry.';

  return (
    <aside 
      aria-label="Direct Instant Contact Channels"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-40 flex flex-col items-end gap-3.5 pointer-events-auto"
    >
      {/* ===================== TELEGRAM BUTTON ===================== */}
      <div className="relative flex items-center justify-end group">
        {/* Tooltip on hover / focus */}
        <div 
          className={`absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white backdrop-blur-md border border-slate-700/80 shadow-xl transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex flex-col items-end text-right ${
            hoveredButton === 'telegram'
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-2'
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-bold text-white">Telegram: @{telegramUsername}</span>
          </div>
          <span className="text-[10px] text-cyan-300 font-medium">Click to chat • 24/7 Priority Support</span>
        </div>

        {/* Telegram Action Button */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('telegram')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-label="Contact support on Telegram @Go2Rapid"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#029be5] flex items-center justify-center border-[2.5px] border-white shadow-[0_10px_25px_rgba(2,155,229,0.45)] hover:shadow-[0_12px_32px_rgba(2,155,229,0.7)] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-cyan-300/50"
        >
          {/* Subtle outer aura/glow */}
          <span className="absolute -inset-1 rounded-full bg-[#029be5]/30 blur-md -z-10 group-hover:bg-[#029be5]/50 transition-all"></span>

          {/* White inner circular disc */}
          <span className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-xs">
            {/* Telegram Paper Plane Icon */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 sm:w-5 sm:h-5 fill-[#029be5] translate-x-[-0.5px] translate-y-[-0.5px]"
              aria-hidden="true"
            >
              <path d="M20.665 3.717a1.05 1.05 0 0 0-1.077-.152L1.858 10.402a1.054 1.054 0 0 0-.083 1.956l4.552 1.42 1.34 4.39a1.05 1.05 0 0 0 1.83.33l2.42-2.355 4.6 3.4c.54.4 1.3.2 1.52-.45l3.019-14.228a1.05 1.05 0 0 0-.391-1.148zM8.01 13.56l9.96-6.28-7.89 7.12-.22 3.3-1.85-4.14z"/>
            </svg>
          </span>

          {/* Online status indicator dot with white rim and neon glow */}
          <span 
            className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#00e5ff] rounded-full border-2 border-white shadow-[0_0_8px_#00e5ff]"
            title="Online Now"
          >
            <span className="absolute inset-0 rounded-full bg-cyan-300 animate-ping opacity-75"></span>
          </span>
        </a>
      </div>

      {/* ===================== WHATSAPP BUTTON ===================== */}
      <div className="relative flex items-center justify-end group">
        {/* Tooltip on hover / focus */}
        <div 
          className={`absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white backdrop-blur-md border border-slate-700/80 shadow-xl transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex flex-col items-end text-right ${
            hoveredButton === 'whatsapp'
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-2'
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-white">WhatsApp: {whatsappNumber}</span>
          </div>
          <span className="text-[10px] text-emerald-300 font-medium">Click to chat • Instant Handover Support</span>
        </div>

        {/* WhatsApp Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-label="Contact support on WhatsApp +12534080049"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center border-[2.5px] border-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.7)] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-300/50"
        >
          {/* Subtle outer aura/glow */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-md -z-10 group-hover:bg-[#25D366]/50 transition-all"></span>

          {/* White inner circular disc */}
          <span className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-xs">
            {/* WhatsApp Phone Inside Speech Bubble Icon */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 sm:w-5 sm:h-5 fill-[#25D366]"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </span>

          {/* Online status indicator dot with white rim and neon glow */}
          <span 
            className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#00e676] rounded-full border-2 border-white shadow-[0_0_8px_#00e676]"
            title="Online Now"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping opacity-75"></span>
          </span>
        </a>
      </div>
    </aside>
  );
};
