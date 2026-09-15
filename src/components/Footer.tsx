import React from 'react';
import { Snowflake, MapPin, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/acData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, saya ingin menanyakan layanan perawatan atau pengadaan AC.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center">
                <Snowflake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight">
                  MELVARIA JAYA TEKNIK
                </span>
                <p className="text-[11px] text-cyan-400 font-medium">
                  Pengadaan &amp; Perawatan AC Profesional
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Menyediakan pengadaan dan penjualan unit AC serta layanan perawatan, perbaikan, pencucian, analisa kebocoran, dan pemasangan secara profesional untuk hunian atau pun gedung perkantoran dengan standar teknisi yang tinggi untuk memastikan kenyamanan udara tetap optimal.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Garansi Layanan &amp; Kepuasan Maksimal</span>
            </div>
          </div>

          {/* Core Services (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_LIST.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo('layanan')}
                    className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                  >
                    • {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Menu Cepat
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('layanan')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Layanan Servis
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pengadaan')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Katalog Unit AC
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('kalkulator')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Kalkulator PK
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('diagnosa')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Cek Masalah AC
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('booking')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Jadwal Kunjungan
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('kontak')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Lokasi &amp; Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak &amp; Alamat
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-cyan-400 font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.operationalHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp Teknisi</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>Melvaria Jaya Teknik</strong>. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-4">
            <span>Alamat: {COMPANY_INFO.address}</span>
            <span>•</span>
            <span>No HP: {COMPANY_INFO.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
