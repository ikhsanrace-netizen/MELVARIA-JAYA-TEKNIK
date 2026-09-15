import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AcCatalogSection } from './components/AcCatalogSection';
import { BtuCalculator } from './components/BtuCalculator';
import { TroubleshooterSection } from './components/TroubleshooterSection';
import { BookingSection } from './components/BookingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('layanan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    scrollToBooking();
  };

  const handleClearInitialService = () => {
    setSelectedServiceForBooking('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-cyan-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={scrollToBooking} 
          onExploreServices={scrollToServices} 
        />

        {/* Layanan Servis & Perawatan */}
        <ServicesSection 
          onSelectServiceForBooking={handleSelectService} 
        />

        {/* Pengadaan & Penjualan Unit AC Baru */}
        <AcCatalogSection 
          onSelectForProcurement={handleSelectService} 
        />

        {/* Kalkulator Kebutuhan PK Ruangan */}
        <BtuCalculator 
          onSelectRecommendedAc={handleSelectService} 
        />

        {/* Cek Masalah & Analisa Kebocoran AC */}
        <TroubleshooterSection 
          onSelectIssueForBooking={handleSelectService} 
        />

        {/* Form Booking Jadwal Kunjungan Teknisi */}
        <BookingSection 
          initialService={selectedServiceForBooking}
          onClearInitialService={handleClearInitialService}
        />

        {/* Kenapa Memilih Melvaria Jaya Teknik & Testimoni */}
        <WhyChooseUs />

        {/* Alamat Workshop, Peta, Kontak & FAQ */}
        <ContactLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={scrollToBooking} />
    </div>
  );
}
