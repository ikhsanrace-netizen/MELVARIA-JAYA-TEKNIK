import React, { useState } from 'react';
import { 
  SearchCheck, 
  ThermometerSnowflake, 
  Droplet, 
  Wind, 
  Volume2, 
  AlertTriangle, 
  Snowflake, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';
import { TROUBLESHOOT_ISSUES, COMPANY_INFO } from '../data/acData';
import { TroubleshootIssue } from '../types';

interface TroubleshooterSectionProps {
  onSelectIssueForBooking: (issueTitle: string) => void;
}

export const TroubleshooterSection: React.FC<TroubleshooterSectionProps> = ({ onSelectIssueForBooking }) => {
  const [activeIssueId, setActiveIssueId] = useState<string>(TROUBLESHOOT_ISSUES[0].id);

  const activeIssue = TROUBLESHOOT_ISSUES.find(i => i.id === activeIssueId) || TROUBLESHOOT_ISSUES[0];

  const getIssueIcon = (icon: string) => {
    switch (icon) {
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-5 h-5" />;
      case 'Droplet': return <Droplet className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      case 'Volume2': return <Volume2 className="w-5 h-5" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5" />;
      case 'Snowflake': return <Snowflake className="w-5 h-5" />;
      default: return <HelpCircle className="w-5 h-5" />;
    }
  };

  const consultProblemViaWa = (issue: TroubleshootIssue) => {
    const text = encodeURIComponent(
      `Halo Melvaria Jaya Teknik, AC saya mengalami kendala: "${issue.title}". Mohon bantuan analisa dan jadwal kunjungan teknisi ke lokasi saya.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="diagnosa" className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-t border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <SearchCheck className="w-3.5 h-3.5 text-amber-700" />
            Analisa Masalah &amp; Kebocoran AC
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cek Gejala Kerusakan AC Anda
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Ketahui kemungkinan penyebab kendala AC Anda sebelum teknisi datang. Kami siap memberikan penanganan akurat untuk segala merk dan tipe pendingin ruangan.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Issue list buttons (Col 5) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-2 mb-1">
              Pilih Gejala yang Sedang Terjadi:
            </span>
            {TROUBLESHOOT_ISSUES.map((issue) => {
              const isActive = issue.id === activeIssueId;
              return (
                <button
                  key={issue.id}
                  id={`troubleshoot-btn-${issue.id}`}
                  onClick={() => setActiveIssueId(issue.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-cyan-900 text-white border-cyan-800 shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100/80 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {getIssueIcon(issue.icon)}
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {issue.title}
                      </h4>
                      <span className={`text-[11px] ${isActive ? 'text-cyan-200' : 'text-slate-500'}`}>
                        Tingkat Urgensi: {issue.urgency}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Diagnosis Card (Col 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
                  {getIssueIcon(activeIssue.icon)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {activeIssue.title}
                  </h3>
                  <span className="text-xs text-slate-500">
                    Hasil Diagnosa Teknis Awal
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  activeIssue.urgency === 'Darurat'
                    ? 'bg-red-100 text-red-800 border border-red-200'
                    : activeIssue.urgency === 'Segera'
                    ? 'bg-amber-100 text-amber-900 border border-amber-200'
                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  Perlu Ditangani: {activeIssue.urgency}
                </span>
              </div>
            </div>

            {/* Symptoms list */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Tanda / Gejala yang Kerap Dialami:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                {activeIssue.symptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Likely Causes */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Kemungkinan Penyebab di Lapangan:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeIssue.likelyCauses.map((cause, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{cause}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action by Melvaria */}
            <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-xl text-xs sm:text-sm text-cyan-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-cyan-900">
                <CheckCircle className="w-4 h-4 text-cyan-700" />
                <span>Solusi Penanganan Teknisi Melvaria Jaya Teknik:</span>
              </div>
              <p className="text-xs text-cyan-900 pl-5 leading-relaxed">
                {activeIssue.recommendedAction}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                id="btn-fix-problem-booking"
                onClick={() => onSelectIssueForBooking(`Perbaikan Masalah: ${activeIssue.title}`)}
                className="flex-1 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Jadwalkan Kunjungan Teknisi untuk Kendala Ini</span>
              </button>

              <button
                id="btn-fix-problem-wa"
                onClick={() => consultProblemViaWa(activeIssue)}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
