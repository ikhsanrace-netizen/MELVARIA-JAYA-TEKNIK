import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Navigation, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck,
  Building2,
  Mail
} from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/acData';

export const ContactLocationSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const openGoogleMapsDirections = () => {
    const query = encodeURIComponent(`Jalan Rajawali 1 No 10`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, saya ingin menanyakan lokasi workshop atau jadwalkan teknisi ke alamat saya.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-white text-slate-900 border-t border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Alamat Workshop &amp; Kontak Resmi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Melvaria Jaya Teknik Kapan Saja
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Kami siap datang ke lokasi rumah hunian maupun gedung kantor Anda dengan teknisi berpengalaman.
          </p>
        </div>

        {/* Contact info and Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Contact Details (Col 5) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Informasi Usaha
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  Melvaria Jaya Teknik
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Penyedia pengadaan &amp; layanan perawatan unit AC profesional
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium">Alamat Workshop / Kantor:</span>
                    <strong className="text-white text-sm font-semibold">{COMPANY_INFO.address}</strong>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Melayani panggilan teknisi ke seluruh hunian &amp; gedung perkantoran.
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium">Nomor HP &amp; WhatsApp:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-white font-bold text-base hover:text-cyan-400 transition-colors block"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      Tersedia via Telepon &amp; WhatsApp Aktif
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-medium">Jam Operasional Layanan:</span>
                    <strong className="text-white text-sm font-semibold">Setiap Hari (Senin - Minggu)</strong>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      07.30 - 21.00 WIB • Layanan Panggilan Darurat Siap Membantu Kapan Saja
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                id="contact-wa-direct-btn"
                onClick={openWhatsApp}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </button>

              <a
                id="contact-tel-direct-btn"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700 text-center"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Telepon Kami</span>
              </a>
            </div>
          </div>

          {/* Location & Coverage Map Representation (Col 7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-cyan-700" />
                  <h4 className="font-bold text-slate-900 text-base">
                    Peta Lokasi &amp; Jangkauan Panggilan Teknisi
                  </h4>
                </div>
                <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2.5 py-1 rounded-full">
                  Layanan On-Site
                </span>
              </div>

              {/* Visual Map Representation */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-inner border border-slate-800 mb-6">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-lg shadow-cyan-600/50">
                      <MapPin className="w-6 h-6 animate-bounce" />
                    </div>
                    <div>
                      <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider block">
                        Base Workshop Melvaria Jaya Teknik
                      </span>
                      <div className="text-lg sm:text-xl font-bold text-white">
                        {COMPANY_INFO.address}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
                    Teknisi kami siap meluncur langsung dengan peralatan kerja komplit (mesin steam jet, manifold gauge, pompa vakum, tabung freon R32/R410A/R22, dan suku cadang cadangan).
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-[11px] text-slate-300">
                    <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Hunian &amp; Rumah</span>
                    </div>
                    <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Gedung Perkantoran</span>
                    </div>
                    <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Ruko &amp; Area Usaha</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button to open directions */}
              <button
                id="btn-open-google-maps"
                onClick={openGoogleMapsDirections}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <Navigation className="w-4 h-4 text-cyan-700" />
                <span>Buka Petunjuk Arah di Google Maps ({COMPANY_INFO.address})</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-6">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-cyan-700" />
              <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Seputar layanan perawatan, perbaikan kebocoran, dan pengadaan unit AC
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-800 hover:text-cyan-800 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
