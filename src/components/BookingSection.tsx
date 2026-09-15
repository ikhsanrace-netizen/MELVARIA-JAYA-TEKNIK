import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Send, 
  Clock, 
  CheckCircle, 
  MapPin, 
  Home, 
  Building2, 
  Phone, 
  MessageCircle, 
  AlertCircle, 
  Trash2, 
  FileCheck, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';
import { BookingFormState, SavedBooking } from '../types';

interface BookingSectionProps {
  initialService?: string;
  onClearInitialService?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ 
  initialService,
  onClearInitialService 
}) => {
  // Get today's date formatted as YYYY-MM-DD
  const getTodayDate = () => {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
  };

  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    address: '',
    propertyType: 'Rumah Hunian',
    serviceType: initialService || 'Pembersihan & Cuci Rutin AC',
    acCount: 1,
    acBrand: 'Daikin',
    preferredDate: getTodayDate(),
    preferredTime: 'Pagi (08:00 - 12:00)',
    notes: ''
  });

  const [savedBookings, setSavedBookings] = useState<SavedBooking[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Sync initialService when changed from parent
  useEffect(() => {
    if (initialService) {
      setForm(prev => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  // Load bookings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('melvaria_bookings');
      if (stored) {
        setSavedBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load bookings', e);
    }
  }, []);

  const saveToLocalStorage = (newBooking: SavedBooking) => {
    const updated = [newBooking, ...savedBookings];
    setSavedBookings(updated);
    try {
      localStorage.setItem('melvaria_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save booking', e);
    }
  };

  const deleteSavedBooking = (id: string) => {
    const updated = savedBookings.filter(b => b.id !== id);
    setSavedBookings(updated);
    try {
      localStorage.setItem('melvaria_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to delete booking', e);
    }
  };

  // Generate clean WhatsApp template
  const generateWaMessage = () => {
    return (
      `*FORM JADWAL KUNJUNGAN TEKNISI - MELVARIA JAYA TEKNIK*\n` +
      `-----------------------------------------\n` +
      `👤 *Nama*: ${form.fullName || '(Belum diisi)'}\n` +
      `📱 *No. HP/WA*: ${form.phone || '(Belum diisi)'}\n` +
      `🏠 *Jenis Properti*: ${form.propertyType}\n` +
      `📍 *Alamat Lengkap*: ${form.address || '(Belum diisi)'}\n\n` +
      `🛠️ *Layanan*: ${form.serviceType}\n` +
      `❄️ *Merk & Unit*: ${form.acBrand} (${form.acCount} Unit)\n` +
      `📅 *Tanggal Kunjungan*: ${form.preferredDate}\n` +
      `⏰ *Waktu*: ${form.preferredTime}\n` +
      (form.notes ? `📝 *Keluhan / Catatan*: ${form.notes}\n` : '') +
      `-----------------------------------------\n` +
      `_Mohon konfirmasi ketersediaan jadwal teknisi hari ini. Terima kasih!_`
    );
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.address) {
      alert('Mohon lengkapi Nama, No. WhatsApp, dan Alamat Anda terlebih dahulu.');
      return;
    }

    const message = generateWaMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;

    // Save to local history
    const bookingRecord: SavedBooking = {
      ...form,
      id: `BK-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toLocaleString('id-ID'),
      status: 'Terkirim via WhatsApp'
    };
    saveToLocalStorage(bookingRecord);

    setSuccessMessage(`Jadwal atas nama ${form.fullName} siap dikirimkan ke WhatsApp teknisi Melvaria Jaya Teknik!`);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="booking" className="py-16 sm:py-20 bg-white text-slate-900 border-t border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            Jadwal Kunjungan Teknisi Hari Ini
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pesan Layanan AC Rumah &amp; Gedung Kantor
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Teknisi kami siap datang tepat waktu. Isi formulir di bawah ini untuk mengirimkan detail pemesanan langsung ke WhatsApp teknisi kami di <strong className="text-slate-900">0813-1889-3657</strong>.
          </p>
        </div>

        {/* Form and Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Form (Col 7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSendWhatsApp} className="space-y-5">
              {/* Service selected highlight */}
              {initialService && (
                <div className="bg-cyan-50 border border-cyan-200 p-3 rounded-xl flex items-center justify-between text-xs text-cyan-900">
                  <span>Layanan dipilih: <strong>{initialService}</strong></span>
                  {onClearInitialService && (
                    <button 
                      type="button" 
                      onClick={onClearInitialService}
                      className="text-cyan-700 hover:text-cyan-900 font-semibold cursor-pointer underline"
                    >
                      Ubah
                    </button>
                  )}
                </div>
              )}

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    id="booking-fullname"
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Budi Santoso"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    No. WhatsApp / HP Aktif *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    placeholder="Contoh: 0812-xxxx-xxxx"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Property Type & Full Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Jenis Properti / Lokasi *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Rumah Hunian', 'Gedung Kantor', 'Ruko / Usaha', 'Apartemen'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, propertyType: type })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-center ${
                        form.propertyType === type
                          ? 'bg-cyan-700 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Alamat Lengkap Kunjungan &amp; Patokan Lokasi *
                </label>
                <textarea
                  id="booking-address"
                  required
                  rows={2}
                  placeholder="Contoh: Jl. Anggrek No. 12, Perumahan Asri Blok C, dekat Masjid / Pos Satpam..."
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Service & Unit Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Layanan Dibutuhkan
                  </label>
                  <select
                    id="booking-service-type"
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="Pembersihan & Cuci Rutin AC">Pembersihan &amp; Cuci Rutin AC</option>
                    <option value="Analisa & Perbaikan Kebocoran AC">Analisa &amp; Perbaikan Kebocoran AC</option>
                    <option value="Perbaikan Kerusakan / Tidak Dingin">Perbaikan Kerusakan / Tidak Dingin</option>
                    <option value="Pemasangan & Instalasi AC Baru">Pemasangan &amp; Instalasi AC Baru</option>
                    <option value="Bongkar Pasang & Relokasi AC">Bongkar Pasang &amp; Relokasi AC</option>
                    <option value="Isi & Tambah Freon (R32 / R410A / R22)">Isi &amp; Tambah Freon</option>
                    <option value="Maintenance Kontrak Gedung / Kantor">Maintenance Kontrak Gedung / Kantor</option>
                    <option value="Pengadaan & Penjualan Unit Baru">Pengadaan &amp; Penjualan Unit Baru</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Merk AC
                  </label>
                  <select
                    id="booking-ac-brand"
                    value={form.acBrand}
                    onChange={(e) => setForm({ ...form, acBrand: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="Daikin">Daikin</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Sharp">Sharp</option>
                    <option value="Gree">Gree</option>
                    <option value="LG">LG</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Polytron">Polytron</option>
                    <option value="AUX">AUX</option>
                    <option value="Midea / Lainnya">Midea / Lainnya</option>
                    <option value="Campuran (Banyak Merk)">Campuran (Banyak Merk)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Jumlah Unit
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={form.acCount}
                      onChange={(e) => setForm({ ...form, acCount: parseInt(e.target.value, 10) || 1 })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <span className="text-xs font-medium text-slate-500 shrink-0">Unit</span>
                  </div>
                </div>
              </div>

              {/* Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tanggal Kunjungan Diharapkan
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Waktu / Sesi Kunjungan
                  </label>
                  <select
                    id="booking-time"
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="Pagi (08:00 - 12:00)">Pagi (08:00 - 12:00)</option>
                    <option value="Siang (12:00 - 15:00)">Siang (12:00 - 15:00)</option>
                    <option value="Sore (15:00 - 18:00)">Sore (15:00 - 18:00)</option>
                    <option value="Malam / Darurat">Malam / Siaga Darurat</option>
                  </select>
                </div>
              </div>

              {/* Notes / Symptoms */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Catatan Tambahan / Gejala Keluhan (Opsional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  placeholder="Contoh: AC kamar anak menetes air, remote tidak respon, butuh tangga tinggi..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  id="btn-submit-booking-wa"
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Kirim Jadwal via WhatsApp ({COMPANY_INFO.phone})</span>
                </button>
              </div>

              {successMessage && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Live Preview & Saved Bookings (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Message Preview Card */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                  <span>Pratinjau Pesan WhatsApp Otomatis</span>
                </div>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                  Format Siap Kirim
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 whitespace-pre-line leading-relaxed border border-slate-800/80 max-h-72 overflow-y-auto">
                {generateWaMessage()}
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Teknisi Melvaria Jaya Teknik merespons dalam hitungan menit.</span>
              </div>
            </div>

            {/* Saved Bookings / Booking History */}
            {savedBookings.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-800 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-cyan-700" />
                    <span>Riwayat Pemesanan Anda</span>
                  </h4>
                  <span className="text-xs text-slate-500">
                    {savedBookings.length} Jadwal Tersimpan
                  </span>
                </div>

                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {savedBookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1 relative"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-cyan-800">{b.id} • {b.serviceType}</span>
                        <button
                          onClick={() => deleteSavedBooking(b.id)}
                          className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                          title="Hapus riwayat"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-slate-600">
                        {b.fullName} ({b.propertyType}) - {b.acCount} Unit {b.acBrand}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                        <span>Jadwal: {b.preferredDate} ({b.preferredTime.split(' ')[0]})</span>
                        <span className="text-emerald-700 font-semibold">{b.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Call Quick Help */}
            <div className="bg-cyan-50 border border-cyan-200 p-5 rounded-2xl text-xs space-y-2">
              <h4 className="font-bold text-cyan-900 text-sm flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-cyan-700" />
                <span>Butuh Teknisi Datang Segera Hari Ini?</span>
              </h4>
              <p className="text-cyan-800">
                Untuk keadaan darurat atau penanganan cepat AC kantor/rumah yang mati mendadak, Anda bisa langsung melakukan panggilan telepon ke nomor hotline teknisi kami:
              </p>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 font-bold text-cyan-800 hover:text-cyan-950 text-sm pt-1"
              >
                <span>📞 {COMPANY_INFO.phone}</span>
                <span className="text-xs bg-cyan-200/80 px-2 py-0.5 rounded-full text-cyan-900">Tekan untuk Telepon</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
