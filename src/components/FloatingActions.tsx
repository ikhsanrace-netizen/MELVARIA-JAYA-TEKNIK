import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, saya butuh bantuan teknisi AC untuk rumah / kantor saya. Mohon infonya.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showBackToTop && (
        <button
          id="btn-back-to-top"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700 shadow-md flex items-center justify-center transition-all cursor-pointer"
          aria-label="Kembali ke Atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Booking Quick Trigger */}
      <button
        id="floating-booking-btn"
        onClick={onOpenBooking}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-lg transition-all hover:scale-105 cursor-pointer border border-cyan-500/50"
      >
        <Calendar className="w-4 h-4 text-cyan-300" />
        <span>Jadwal Teknisi</span>
      </button>

      {/* Floating WhatsApp Pill with Pulse Indicator */}
      <button
        id="floating-wa-btn"
        onClick={openWhatsApp}
        className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/40 transition-all hover:scale-105 cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp: {COMPANY_INFO.phone}</span>
        <span className="sm:hidden">Chat WA</span>
      </button>
    </div>
  );
};
