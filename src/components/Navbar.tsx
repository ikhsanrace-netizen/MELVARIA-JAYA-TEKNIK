import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Clock, MapPin, Snowflake } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, saya ingin berkonsultasi mengenai layanan AC profesional. Mohon info jadwal teknisi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro bar for quick assurance & phone */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Teknisi Berstandar Tinggi &amp; Bergaransi
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-cyan-400" />
              {COMPANY_INFO.address}
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-amber-400" />
              Respon Cepat Setiap Hari (07.30 - 21.00)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden sm:inline">Hubungi Kami:</span>
            <a
              id="topbar-phone-link"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="font-bold text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-1 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo-button"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 text-white flex items-center justify-center shadow-md shadow-cyan-600/20 group-hover:scale-105 transition-transform">
            <Snowflake className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                MELVARIA
              </span>
              <span className="text-lg sm:text-xl font-bold text-cyan-600 tracking-tight">
                JAYA TEKNIK
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Pengadaan &amp; Perawatan AC Profesional
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            id="nav-link-layanan"
            onClick={() => scrollToSection('layanan')}
            className="hover:text-cyan-700 transition-colors py-1 cursor-pointer"
          >
            Layanan Servis
          </button>
          <button
            id="nav-link-pengadaan"
            onClick={() => scrollToSection('pengadaan')}
            className="hover:text-cyan-700 transition-colors py-1 cursor-pointer"
          >
            Pengadaan Unit AC
          </button>
          <button
            id="nav-link-kalkulator"
            onClick={() => scrollToSection('kalkulator')}
            className="hover:text-cyan-700 transition-colors py-1 cursor-pointer"
          >
            Hitung PK Ruangan
          </button>
          <button
            id="nav-link-diagnosa"
            onClick={() => scrollToSection('diagnosa')}
            className="hover:text-cyan-700 transition-colors py-1 cursor-pointer"
          >
            Cek Masalah AC
          </button>
          <button
            id="nav-link-keunggulan"
            onClick={() => scrollToSection('keunggulan')}
            className="hover:text-cyan-700 transition-colors py-1 cursor-pointer"
          >
            Keunggulan
          </button>
          <button
            id="nav-link-kontak"
            onClick={() => scrollToSection('kontak')}
            className="hover:text-cyan-700 transition-colors py-1 cursor-pointer"
          >
            Alamat &amp; Kontak
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="nav-whatsapp-btn"
            onClick={openWhatsApp}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Kami</span>
          </button>

          <button
            id="nav-booking-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <span>Jadwal Teknisi</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 pt-2 border-b border-slate-100 pb-3">
            <button
              onClick={() => scrollToSection('layanan')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Layanan Servis &amp; Perawatan
            </button>
            <button
              onClick={() => scrollToSection('pengadaan')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Pengadaan &amp; Penjualan AC Baru
            </button>
            <button
              onClick={() => scrollToSection('kalkulator')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Kalkulator Kebutuhan PK Ruangan
            </button>
            <button
              onClick={() => scrollToSection('diagnosa')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Cek Diagnosa Masalah AC
            </button>
            <button
              onClick={() => scrollToSection('keunggulan')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Kenapa Memilih Kami
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Alamat Workshop &amp; Kontak
            </button>
          </div>

          <div className="space-y-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Jadwalkan Kunjungan Teknisi</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: 0813-1889-3657</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-700" />
              <span>Telepon Langsung: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
