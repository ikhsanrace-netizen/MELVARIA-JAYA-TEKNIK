import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Wrench, 
  Building2, 
  Home,
  Sparkles,
  SearchCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, saya ingin tanya layanan AC untuk rumah/kantor saya. Bisa jadwalkan teknisi hari ini?`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-cyan-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Solusi Pendingin Ruangan Terbaik &amp; Terpercaya</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Layanan &amp; Pengadaan AC Profesional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Hunian &amp; Gedung Perkantoran
              </span>
            </h1>

            {/* Description matching prompt */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-white font-semibold">Melvaria Jaya Teknik</strong> menghadirkan standar teknisi tinggi untuk memastikan kenyamanan udara tetap optimal. Kami melayani pengadaan unit baru, pemasangan, perbaikan, analisa kebocoran, serta pembersihan rutin dengan respons cepat, harga terjangkau, dan garansi kepuasan maksimal.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                id="hero-whatsapp-cta"
                onClick={openWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat WhatsApp: {COMPANY_INFO.phone}</span>
              </button>

              <button
                id="hero-booking-cta"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-900/40 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Jadwal Kunjungan Teknisi Hari Ini</span>
              </button>

              <a
                id="hero-call-cta"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Telepon Langsung</span>
              </a>
            </div>

            {/* Address & Quick note */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Alamat: <strong className="text-slate-200">{COMPANY_INFO.address}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Siap Membantu Anda Kapan Saja</span>
              </div>
            </div>

            {/* Key benefits ticks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Semua Merk &amp; Tipe AC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Analisa Kebocoran Presisi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Pembersihan Rapi &amp; Bersih</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Standar Teknisi Berpengalaman</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hunian &amp; Kantor/Gedung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Garansi Kepuasan Maksimal</span>
              </div>
            </div>
          </div>

          {/* Quick interactive highlight card (Col 5) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl shadow-cyan-950/40 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Layanan Siaga Teknisi</h3>
                    <p className="text-[11px] text-slate-400">Panggilan Hari Ini Siap Meluncur</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online
                </span>
              </div>

              {/* Service scope mini tabs */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1">
                    <Home className="w-3.5 h-3.5" />
                    <span>Untuk Hunian</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Rumah tinggal, apartemen, kos-kosan dengan pengerjaan higienis &amp; tidak mengotori interior.</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Gedung Kantor</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Gedung bertingkat, ruko komersial, kontrak perawatan B2B, Cassette, Ducting, Standing.</p>
                </div>
              </div>

              {/* Service shortcuts */}
              <div className="space-y-2 pt-1">
                <div 
                  onClick={onExploreServices}
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 transition-colors border border-slate-700/40 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        Cuci Rutin &amp; Pembersihan
                      </div>
                      <div className="text-[10px] text-slate-400">Indoor, outdoor, blower &amp; talang air</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400">Mulai 65rb &rarr;</span>
                </div>

                <div 
                  onClick={onExploreServices}
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 transition-colors border border-slate-700/40 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        Analisa Kebocoran &amp; Freon
                      </div>
                      <div className="text-[10px] text-slate-400">Deteksi pipa bocor, pengelasan, isi freon</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400">Cek Detil &rarr;</span>
                </div>

                <div 
                  onClick={onExploreServices}
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 transition-colors border border-slate-700/40 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        Pengadaan Unit Baru &amp; Pasang
                      </div>
                      <div className="text-[10px] text-slate-400">Daikin, Panasonic, Gree, Sharp + Vakum</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400">Katalog &rarr;</span>
                </div>
              </div>

              {/* Direct Booking CTA in card */}
              <div className="pt-2">
                <button
                  id="hero-card-booking-btn"
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Isi Form Booking Kunjungan Teknisi</span>
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-400">
                  Respons cepat melalui WhatsApp <strong className="text-slate-300">0813-1889-3657</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
