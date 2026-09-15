import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Sparkles, 
  Wrench, 
  CheckCircle2, 
  Building, 
  Banknote,
  Star,
  Quote
} from 'lucide-react';
import { REVIEWS } from '../data/acData';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: <Award className="w-6 h-6 text-cyan-700" />,
      title: 'Standar Teknisi Tinggi & Berpengalaman',
      desc: 'Setiap teknisi Melvaria Jaya Teknik dibekali pemahaman mendalam tentang sirkuit kelistrikan, termodinamika pendinginan, dan sertifikasi penanganan refrigeran berbagai merk.'
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-700" />,
      title: 'Respons Cepat & Siap Kapan Saja',
      desc: 'Kami memahami ruangan yang panas mengganggu produktivitas kantor dan kenyamanan keluarga. Tim teknisi kami siap datang dengan penjadwalan fleksibel hari ini.'
    },
    {
      icon: <Wrench className="w-6 h-6 text-cyan-700" />,
      title: 'Peralatan Modern & SOP Vakum Pabrikan',
      desc: 'Kami tidak memotong jalur keselamatan. Pemasangan AC baru selalu melalui proses pompa vakum digital untuk membuang uap air, dan pencucian menggunakan terpal pelindung rapi.'
    },
    {
      icon: <Banknote className="w-6 h-6 text-cyan-700" />,
      title: 'Harga Terjangkau & Transparan',
      desc: 'Estimasi biaya dijelaskan secara terbuka sebelum pekerjaan dimulai tanpa biaya siluman. Anda membayar sesuai tingkat pekerjaan riil dan komponen yang diganti.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-700" />,
      title: 'Garansi Kepuasan Maksimal',
      desc: 'Kami memberikan garansi pengerjaan nyata hingga 90 hari. Jika dalam masa garansi AC masih bermasalah, teknisi kami akan memeriksa kembali tanpa biaya tambahan.'
    },
    {
      icon: <Building className="w-6 h-6 text-cyan-700" />,
      title: 'Solusi Lengkap Hunian & Gedung Perkantoran',
      desc: 'Mulai dari AC Split 0.5 PK rumah tangga hingga sistem Cassette dan Standing multi-unit gedung bertingkat dengan dukungan faktur invoice resmi.'
    }
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-20 bg-slate-100 text-slate-900 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Komitmen Kualitas Melvaria
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kenapa Memilih Melvaria Jaya Teknik?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Kenyamanan udara ruangan Anda adalah prioritas utama kami. Kami menjamin setiap layanan memberikan kepuasan maksimal bagi pelanggan setia.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-shadow duration-200 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                {adv.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {adv.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Customer Testimonials / Trust Proof */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Kepuasan Pelanggan Setia Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Kepercayaan hunian dan mitra perkantoran yang telah merasakan dingin optimal bersama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="font-bold text-xs sm:text-sm text-slate-900">{rev.name}</div>
                  <div className="text-[11px] text-slate-500">{rev.role}</div>
                  <div className="text-[10px] text-cyan-700 font-semibold mt-1">
                    Layanan: {rev.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
