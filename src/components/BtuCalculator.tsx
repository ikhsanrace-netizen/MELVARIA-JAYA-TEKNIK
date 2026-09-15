import React, { useState } from 'react';
import { Calculator, Zap, AlertCircle, CheckCircle2, MessageCircle, ThermometerSnowflake, Users, SunMedium } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

interface BtuCalculatorProps {
  onSelectRecommendedAc: (recommendation: string) => void;
}

export const BtuCalculator: React.FC<BtuCalculatorProps> = ({ onSelectRecommendedAc }) => {
  const [length, setLength] = useState<number>(4);
  const [width, setWidth] = useState<number>(3);
  const [height, setHeight] = useState<number>(3);
  const [occupants, setOccupants] = useState<number>(2);
  const [sunlightExposure, setSunlightExposure] = useState<'normal' | 'sedang' | 'tinggi'>('normal');
  const [roomType, setRoomType] = useState<'kamar' | 'keluarga' | 'kantor' | 'restoran'>('kamar');

  // Calculation formula
  const area = length * width;
  
  // Base BTU per sqm in tropical Indonesia
  let baseBtuPerSqm = 500;
  if (height > 3.2) baseBtuPerSqm += 50;
  if (roomType === 'kantor') baseBtuPerSqm = 550;
  if (roomType === 'restoran') baseBtuPerSqm = 600;

  let totalBtu = area * baseBtuPerSqm;

  // Add occupants (each extra person produces ~500 BTU)
  if (occupants > 1) {
    totalBtu += (occupants - 1) * 450;
  }

  // Sunlight factor
  if (sunlightExposure === 'sedang') {
    totalBtu *= 1.12;
  } else if (sunlightExposure === 'tinggi') {
    totalBtu *= 1.25;
  }

  const roundedBtu = Math.round(totalBtu);

  // Determine Recommended PK
  let recommendedPk = '0.5 PK (1/2 PK)';
  let estWatt = '350 - 400 Watt';
  let tip = 'Cocok untuk kamar tidur kecil atau ruang kerja privat.';

  if (roundedBtu <= 5500) {
    recommendedPk = '0.5 PK (1/2 PK)';
    estWatt = '320 - 390 Watt';
    tip = 'Sangat cukup dan hemat listrik untuk ruangan dengan sirkulasi tertutup.';
  } else if (roundedBtu <= 7500) {
    recommendedPk = '0.75 PK (3/4 PK)';
    estWatt = '500 - 590 Watt';
    tip = 'Pilihan tepat agar AC tidak bekerja terlalu berat dibanding memaksakan 1/2 PK.';
  } else if (roundedBtu <= 10000) {
    recommendedPk = '1 PK';
    estWatt = '680 - 780 Watt';
    tip = 'Kapasitas paling populer untuk kamar utama atau ruang keluarga sedang.';
  } else if (roundedBtu <= 14000) {
    recommendedPk = '1.5 PK';
    estWatt = '950 - 1100 Watt';
    tip = 'Ideal untuk ruang tamu luas atau ruang kantor dengan beberapa komputer.';
  } else if (roundedBtu <= 19500) {
    recommendedPk = '2 PK';
    estWatt = '1450 - 1700 Watt';
    tip = 'Cocok untuk ruang meeting kantor, ruko lantai 1, atau ruang tengah luas.';
  } else if (roundedBtu <= 26000) {
    recommendedPk = '2.5 PK (Split atau Cassette)';
    estWatt = '2000 - 2400 Watt';
    tip = 'Disarankan tipe Cassette Plafon atau Standing Floor untuk semburan angin merata.';
  } else {
    recommendedPk = '3 PK+ atau Multi Unit (2x 1.5 PK)';
    estWatt = '2600+ Watt';
    tip = 'Ruangan luas membutuhkan 2 unit terpisah atau sistem AC Cassette komersial.';
  }

  const consultResultViaWa = () => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, saya sudah hitung ruangan saya ukuran ${length}m x ${width}m (${area} m²), ${roomType}, estimasi ${roundedBtu} BTU/h. Rekomendasi kalkulator adalah ${recommendedPk}. Mohon info pilihan unit dan estimasi biaya pasangnya.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-14 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Alat Bantu Presisi Teknis
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator Kebutuhan PK AC Ruangan
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Hindari salah beli unit yang kekecilan (AC tidak dingin &amp; boros listrik) atau kegedean. Hitung kapasitas pendinginan BTU/h yang tepat untuk ruangan Anda.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Input (Col 7) */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700 p-6 sm:p-8 rounded-2xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ThermometerSnowflake className="w-5 h-5 text-cyan-400" />
              <span>Parameter Ruangan Anda</span>
            </h3>

            {/* Room Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Panjang Ruangan (meter)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="2"
                    max="15"
                    step="0.5"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                  <span className="w-12 text-center font-bold text-cyan-400 text-sm bg-slate-900 py-1 rounded">
                    {length} m
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Lebar Ruangan (meter)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="2"
                    max="15"
                    step="0.5"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                  <span className="w-12 text-center font-bold text-cyan-400 text-sm bg-slate-900 py-1 rounded">
                    {width} m
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Tinggi Plafon (meter)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="2.5"
                    max="5"
                    step="0.2"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                  <span className="w-12 text-center font-bold text-cyan-400 text-sm bg-slate-900 py-1 rounded">
                    {height} m
                  </span>
                </div>
              </div>
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Fungsi &amp; Jenis Ruangan
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'kamar', label: 'Kamar Tidur' },
                  { id: 'keluarga', label: 'Ruang Tamu / Keluarga' },
                  { id: 'kantor', label: 'Ruang Kerja / Kantor' },
                  { id: 'restoran', label: 'Toko / Restoran' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRoomType(item.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-center ${
                      roomType === item.id
                        ? 'bg-cyan-600 text-white border border-cyan-400'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Occupants & Sunlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>Jumlah Orang dalam Ruangan: <strong className="text-white">{occupants} Orang</strong></span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={occupants}
                  onChange={(e) => setOccupants(parseInt(e.target.value, 10))}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <SunMedium className="w-4 h-4 text-amber-400" />
                  <span>Paparan Sinar Matahari Langsung</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setSunlightExposure('normal')}
                    className={`py-1.5 px-2 rounded-lg font-medium transition-colors ${
                      sunlightExposure === 'normal'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Teduh
                  </button>
                  <button
                    type="button"
                    onClick={() => setSunlightExposure('sedang')}
                    className={`py-1.5 px-2 rounded-lg font-medium transition-colors ${
                      sunlightExposure === 'sedang'
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Sedang
                  </button>
                  <button
                    type="button"
                    onClick={() => setSunlightExposure('tinggi')}
                    className={`py-1.5 px-2 rounded-lg font-medium transition-colors ${
                      sunlightExposure === 'tinggi'
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Terik / Atap
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Result Output Card (Col 5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-cyan-950 border border-cyan-700/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                Hasil Analisa Pendinginan
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                {recommendedPk}
              </div>
              <div className="text-xs text-slate-300 mt-1">
                Kebutuhan: <strong className="text-cyan-300 font-bold">±{roundedBtu.toLocaleString('id-ID')} BTU/h</strong> untuk luas <strong className="text-white">{area} m²</strong>
              </div>
            </div>

            {/* Breakdown specs */}
            <div className="bg-slate-900/80 p-4 rounded-xl space-y-2.5 border border-slate-700 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Luas Ruangan:</span>
                <span className="font-bold text-white">{area} m² ({length}m x {width}m)</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Volume Udara:</span>
                <span className="font-bold text-white">{Math.round(area * height)} m³</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Estimasi Daya Listrik:</span>
                <span className="font-bold text-amber-400">{estWatt}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Rekomendasi Jenis AC:</span>
                <span className="font-bold text-cyan-400">
                  {roundedBtu > 20000 ? 'Cassette / Standing' : 'Split Wall Inverter'}
                </span>
              </div>
            </div>

            {/* Technician Advice Note */}
            <div className="bg-cyan-950/70 border border-cyan-600/40 p-3.5 rounded-xl flex items-start gap-2.5 text-xs text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-white">Saran Teknisi Melvaria:</strong> {tip}
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-2">
              <button
                id="btn-wa-calculator-result"
                onClick={consultResultViaWa}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi &amp; Pesan Kapasitas Ini via WA</span>
              </button>

              <button
                id="btn-apply-to-booking"
                onClick={() => onSelectRecommendedAc(`Pengadaan / Pemasangan AC ${recommendedPk} (${roundedBtu} BTU)`)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
              >
                <span>Gunakan di Form Jadwal Kunjungan &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
