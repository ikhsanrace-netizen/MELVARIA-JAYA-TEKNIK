import React, { useState } from 'react';
import { ShoppingBag, Zap, Wind, ShieldCheck, Check, MessageCircle, Filter, ArrowUpRight } from 'lucide-react';
import { AC_CATALOG, COMPANY_INFO } from '../data/acData';
import { AcProduct } from '../types';

interface AcCatalogSectionProps {
  onSelectForProcurement: (modelInfo: string) => void;
}

export const AcCatalogSection: React.FC<AcCatalogSectionProps> = ({ onSelectForProcurement }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('Semua');
  const [selectedType, setSelectedType] = useState<string>('Semua');

  const brands = ['Semua', 'Daikin', 'Panasonic', 'Gree', 'Sharp', 'LG', 'Mitsubishi'];
  const types = ['Semua', 'Split Inverter', 'Split Wall Standard', 'Cassette Plafon', 'Floor Standing'];

  const filteredProducts = AC_CATALOG.filter((item) => {
    const matchBrand = selectedBrand === 'Semua' || item.brand === selectedBrand;
    const matchType = selectedType === 'Semua' || item.type === selectedType;
    return matchBrand && matchType;
  });

  const consultUnitViaWhatsApp = (item: AcProduct) => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, saya tertarik untuk pengadaan/pembelian unit AC: ${item.brand} ${item.modelName} (${item.capacity} - ${item.type}). Mohon info harga paket unit + pasang dan stoknya.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="pengadaan" className="py-16 sm:py-20 bg-white text-slate-900 border-t border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              Pengadaan &amp; Penjualan Unit AC Baru
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solusi Pengadaan AC Semua Merk &amp; Tipe
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Kami melayani pengadaan unit AC 100% baru bergaransi resmi untuk kebutuhan hunian pribadi, apartemen, ruko, hingga gedung perkantoran dan proyek skala besar.
            </p>
          </div>

          <div className="shrink-0">
            <button
              id="pengadaan-custom-quote-btn"
              onClick={() => {
                const text = encodeURIComponent(
                  `Halo Melvaria Jaya Teknik, saya membutuhkan penawaran harga pengadaan unit AC untuk proyek rumah / gedung kantor saya.`
                );
                window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Minta Penawaran B2B / Proyek</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase shrink-0">
              <Filter className="w-3.5 h-3.5 text-cyan-600" />
              <span>Filter Merk:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedBrand === b
                      ? 'bg-cyan-700 text-white font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 border-t border-slate-200/70">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase shrink-0">
              <Wind className="w-3.5 h-3.5 text-cyan-600" />
              <span>Tipe AC:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedType === t
                      ? 'bg-slate-800 text-white font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              id={`ac-item-${item.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-cyan-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-[11px] font-extrabold uppercase tracking-wider">
                    {item.brand}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-100 text-cyan-800 text-[11px] font-bold">
                    {item.capacity}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-cyan-800 transition-colors line-clamp-1">
                  {item.modelName}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-3">{item.type}</p>

                {/* Key specs badge */}
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl text-xs mb-3 border border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Kapasitas</span>
                    <span className="font-bold text-slate-700">{item.btu.toLocaleString('id-ID')} BTU/h</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Daya Listrik</span>
                    <span className="font-bold text-slate-700">{item.powerWatt} Watt</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Refrigerant</span>
                    <span className="font-semibold text-emerald-700">{item.refrigerant} Ramah</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Garansi</span>
                    <span className="font-semibold text-cyan-700">Pabrik Resmi</span>
                  </div>
                </div>

                {/* Suitable For */}
                <div className="text-xs text-slate-600 mb-3 bg-cyan-50/50 p-2 rounded-lg border border-cyan-100">
                  <span className="font-semibold text-slate-700 block text-[11px]">Ideal Untuk:</span>
                  <span className="text-[11px] text-slate-600">{item.suitableFor}</span>
                </div>

                {/* Features */}
                <div className="space-y-1 text-xs text-slate-500 mb-4">
                  {item.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-cyan-600 shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <button
                  id={`wa-inquire-${item.id}`}
                  onClick={() => consultUnitViaWhatsApp(item)}
                  className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Tanya Harga &amp; Stok Unit</span>
                </button>
                <button
                  id={`procure-booking-${item.id}`}
                  onClick={() => onSelectForProcurement(`${item.brand} ${item.modelName} (${item.capacity})`)}
                  className="w-full py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Minta Paket Pasang Baru</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial & Office Procurement Banner */}
        <div className="mt-12 bg-slate-100 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-700 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Pengadaan Unit untuk Gedung Perkantoran, Proyek Ruko &amp; Instansi
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Butuh AC Cassette 4-Way, Floor Standing berkapasitas besar, atau instalasi puluhan unit Split untuk ruang meeting &amp; divisi? Melvaria Jaya Teknik menyediakan faktur pajak resmi, survei lokasi teknis gratis, dan instalasi terencana.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const text = encodeURIComponent(
                `Halo Melvaria Jaya Teknik, kami dari perusahaan/instansi membutuhkan survei pengadaan unit AC gedung kantor.`
              );
              window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
            }}
            className="shrink-0 px-5 py-3 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs whitespace-nowrap"
          >
            Hubungi Tim Proyek B2B
          </button>
        </div>
      </div>
    </section>
  );
};
