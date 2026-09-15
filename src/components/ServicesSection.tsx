import React, { useState } from 'react';
import { 
  Droplets, 
  Search, 
  Wrench, 
  PackageCheck, 
  ArrowLeftRight, 
  Gauge, 
  Building2, 
  ShoppingBag, 
  Check, 
  ArrowRight,
  ShieldAlert,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/acData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');

  const categories = [
    { id: 'semua', label: 'Semua Layanan' },
    { id: 'perawatan', label: 'Perawatan & Cuci' },
    { id: 'perbaikan', label: 'Perbaikan & Kebocoran' },
    { id: 'pemasangan', label: 'Pemasangan & Relokasi' },
    { id: 'pengadaan', label: 'Pengadaan Unit Baru' },
    { id: 'b2b', label: 'Kontrak Gedung & Kantor' },
  ];

  const filteredServices = selectedCategory === 'semua'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6" />;
      case 'ArrowLeftRight': return <ArrowLeftRight className="w-6 h-6" />;
      case 'Gauge': return <Gauge className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  const consultViaWhatsApp = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, saya ingin memesan / berkonsultasi mengenai: ${serviceTitle}. Mohon info ketersediaan teknisi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="layanan" className="py-16 sm:py-20 bg-slate-50 text-slate-900 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Layanan Standar Teknisi Tinggi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Layanan Servis &amp; Perawatan AC Lengkap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Melvaria Jaya Teknik melayani perbaikan, perawatan rutin, pencucian menyeluruh, analisa kebocoran, hingga instalasi untuk hunian tinggal maupun gedung perkantoran.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-service-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-700 text-white shadow-md shadow-cyan-800/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between hover:border-cyan-300 relative group"
            >
              {/* Badge if present */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Cakupan Pekerjaan:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Action footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Estimasi Biaya</span>
                  <span className="text-xs sm:text-sm font-bold text-cyan-800">
                    {service.priceRange}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    id={`book-service-${service.id}`}
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="w-full py-2 px-3 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Pesan Jadwal</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    id={`wa-service-${service.id}`}
                    onClick={() => consultViaWhatsApp(service.title)}
                    className="w-full py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>Tanya WA</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special callout for Analisa Kebocoran */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-cyan-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-cyan-800/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold">
                <Search className="w-3.5 h-3.5" />
                Spesialis Deteksi &amp; Analisa Kebocoran AC
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                AC Anda Sering Kehabisan Freon atau Netes Air di Dalam Ruangan?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Jangan asal tambah freon tanpa mencari titik bocornya! Teknisi Melvaria Jaya Teknik mengidentifikasi micro-leak pada pipa tembaga, evaporator, sambungan flare nut, dan saluran talang drainase sampai tuntas bergaransi.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                id="cta-analisa-kebocoran-booking"
                onClick={() => onSelectServiceForBooking('Analisa & Perbaikan Kebocoran AC')}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all text-center cursor-pointer"
              >
                Jadwalkan Cek Kebocoran
              </button>
              <button
                id="cta-analisa-kebocoran-wa"
                onClick={() => consultViaWhatsApp('Analisa Kebocoran AC')}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi WA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
