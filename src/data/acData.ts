import { ServiceItem, AcProduct, TroubleshootIssue } from '../types';

export const COMPANY_INFO = {
  name: 'Melvaria Jaya Teknik',
  shortName: 'Melvaria AC',
  tagline: 'Solusi Pengadaan & Perawatan AC Profesional Bergaransi',
  phone: '0813-1889-3657',
  phoneRaw: '081318893657',
  whatsappNumber: '6281318893657',
  address: 'Jalan Rajawali 1 No 10',
  city: 'Indonesia',
  operationalHours: 'Senin - Minggu: 07.30 - 21.00 WIB (Layanan Darurat Siap 24 Jam)',
  experienceYears: '10+ Tahun',
  technicianStandard: 'Standar Teknisi Bersertifikat & Berpengalaman',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'cuci-rutin',
    title: 'Pembersihan & Cuci Rutin AC',
    category: 'perawatan',
    shortDesc: 'Deep cleaning unit indoor & outdoor untuk sirkulasi udara bersih, bebas kuman, dan dingin maksimal.',
    fullDesc: 'Layanan pencucian berkala dengan cover pelindung anti-tumpah, steam jet bertekanan terukur, pembersihan filter bakteri, evaporator indoor, baling-baling fan, serta kondensor outdoor untuk menurunkan konsumsi listrik.',
    features: [
      'Pembersihan evaporator indoor & filter antibakteri',
      'Pencucian unit kondensor outdoor bertekanan',
      'Pembersihan selang pembuangan & talang air',
      'Pengecekan tekanan freon & arus ampere kompresor',
      'Pengecekan suhu hembusan udara (optimal 16°-20°C)'
    ],
    priceRange: 'Mulai Rp 65.000 / unit',
    badge: 'Paling Populer',
    iconName: 'Droplets'
  },
  {
    id: 'analisa-kebocoran',
    title: 'Analisa & Perbaikan Kebocoran AC',
    category: 'perbaikan',
    shortDesc: 'Deteksi presisi kebocoran freon dan rembesan air pada pipa atau talang indoor.',
    fullDesc: 'Pemeriksaan komprehensif menggunakan leak detector dan soap-bubble test pada sambungan flare nut, evaporator, pipa tembaga, dan kondensor. Termasuk pengelasan pipa perak jika terjadi kebocoran freon mikro.',
    features: [
      'Deteksi kebocoran freon dengan manifold gauge presisi',
      'Pengelasan pipa tembaga bocor dengan kawat perak',
      'Perbaikan talang air mampet dan rembesan dinding',
      'Penggantian drain hose elastis anti-lumut',
      'Uji tekanan nitrogen (pressure test)'
    ],
    priceRange: 'Konsultasi & Mulai Rp 120.000',
    badge: 'Spesialis Kebocoran',
    iconName: 'Search'
  },
  {
    id: 'perbaikan-kerusakan',
    title: 'Perbaikan & Servis Komponen',
    category: 'perbaikan',
    shortDesc: 'Solusi tuntas untuk AC mati total, tidak dingin, kompresor macet, atau berisik.',
    fullDesc: 'Penanganan cepat oleh teknisi senior untuk kerusakan elektrikal PCB, penggantian kapasitor kompresor / fan, sensor thermistor, motor dinamo fan, hingga kompresor overheat untuk hunian maupun gedung.',
    features: [
      'Diagnosa kerusakan elektrikal & modul PCB inverter',
      'Penggantian kapasitor original bergaransi',
      'Perbaikan suara berisik / bearing fan motor aus',
      'Penanganan kompresor macet atau overload',
      'Garansi suku cadang dan jasa perbaikan'
    ],
    priceRange: 'Sesuai Hasil Diagnosa & Part',
    iconName: 'Wrench'
  },
  {
    id: 'pemasangan-ac',
    title: 'Pemasangan & Instalasi AC Baru',
    category: 'pemasangan',
    shortDesc: 'Pemasangan rapi standar pabrik dengan proses vakum wajib agar kompresor awet.',
    fullDesc: 'Instalasi unit AC baru untuk rumah, ruko, apartemen, atau ruang kantor. Menggunakan pipa tembaga tebal (ketebalan standar ASTM), bracket kokoh, waterpass presisi, dan proses vakum digital sesuai SOP pabrikan.',
    features: [
      'Proses vakum sistem wajib untuk membuang uap air',
      'Pemasangan pipa tembaga tebal premium',
      'Bracket outdoor kokoh + dynabolt anti-getar',
      'Instalasi kelistrikan & MCB pengaman',
      'Uji performa pendinginan & cek ampere'
    ],
    priceRange: 'Mulai Rp 250.000 / unit',
    badge: 'Standar Pabrikan',
    iconName: 'PackageCheck'
  },
  {
    id: 'bongkar-pasang',
    title: 'Bongkar Pasang & Relokasi AC',
    category: 'pemasangan',
    shortDesc: 'Pemindahan unit AC antar ruangan atau pindah rumah/kantor dengan sistem pump-down aman.',
    fullDesc: 'Layanan bongkar pasang tanpa membuang freon (teknik pump-down freon ke kondensor). Pemindahan rapi dan pemasangan kembali di lokasi baru dengan pipa baru atau eksisting yang dibersihkan.',
    features: [
      'Metode pump-down simpan freon utuh',
      'Pembersihan unit sebelum pemasangan ulang',
      'Relokasi indoor/outdoor sesuai titik estetika & sirkulasi',
      'Re-vakum dan penyesuaian tekanan kerja freon'
    ],
    priceRange: 'Mulai Rp 350.000 / unit',
    iconName: 'ArrowLeftRight'
  },
  {
    id: 'isi-tambah-freon',
    title: 'Isi & Tambah Freon (R32, R410A, R22)',
    category: 'perawatan',
    shortDesc: 'Pengisian refrigerant murni bertekanan sesuai spesifikasi pabrik untuk dingin maksimal.',
    fullDesc: 'Pengisian refrigeran kualitas tinggi non-oplosan (R32 ramah lingkungan, R410A untuk inverter, R22 untuk tipe standar). Dilakukan pengukuran tekanan PSI dan arus ampere untuk efisiensi kompresor.',
    features: [
      'Freon murni 100% tanpa campuran',
      'Pengukuran tekanan PSI & arus listrik kompresor',
      'Pengecekan siklus pendinginan & pipa hisap',
      'Penyesuaian kebutuhan 0.5 PK hingga 5 PK'
    ],
    priceRange: 'Mulai Rp 100.000',
    iconName: 'Gauge'
  },
  {
    id: 'kontrak-perkantoran',
    title: 'Maintenance Kontrak Kantor & Gedung (B2B)',
    category: 'b2b',
    shortDesc: 'Perawatan berkala terjadwal untuk puluhan hingga ratusan unit kantor dengan invoice resmi.',
    fullDesc: 'Layanan khusus untuk pengelola gedung perkantoran, instansi pemerintah, sekolah, rumah sakit, dan hotel. Menjamin kenyamanan kerja karyawan dengan jadwal kunjungan berkala, emergency response, dan laporan teknis berkala.',
    features: [
      'Jadwal maintenance teratur (1 bulan / 2 bulan / 3 bulan)',
      'Laporan kondisi unit berkala (Log Book Maintenance)',
      'Prioritas penanganan darurat tanpa antri',
      'Legalitas & faktur/invoice resmi perusahaan',
      'Harga khusus paket volume besar'
    ],
    priceRange: 'Penawaran Custom / Unit Kontrak',
    badge: 'Solusi B2B Perkantoran',
    iconName: 'Building2'
  },
  {
    id: 'pengadaan-unit-ac',
    title: 'Pengadaan & Penjualan Unit AC Baru',
    category: 'pengadaan',
    shortDesc: 'Penyediaan unit AC baru original dari berbagai brand ternama dengan garansi resmi.',
    fullDesc: 'Konsultasi gratis kebutuhan kapasitas pendinginan (PK/BTU), pengadaan unit Split, Inverter, Cassette, Ceiling, hingga Floor Standing untuk hunian baru, renovasi, maupun proyek kantor.',
    features: [
      'Unit 100% Baru & Original bergaransi resmi pabrik',
      'Konsultasi gratis penentuan kapasitas PK yang tepat',
      'Pilihan brand terlengkap (Daikin, Panasonic, Sharp, Gree, dll)',
      'Paket komplit unit + pipa + material + pemasangan',
      'Pengiriman cepat langsung ke lokasi proyek'
    ],
    priceRange: 'Harga Grosir & Retail Terbaik',
    badge: 'Garansi Resmi',
    iconName: 'ShoppingBag'
  }
];

export const AC_CATALOG: AcProduct[] = [
  {
    id: 'ac-daikin-inverter-1pk',
    brand: 'Daikin',
    modelName: 'Flash Inverter FTKQ25',
    type: 'Split Inverter',
    capacity: '1 PK',
    btu: 9000,
    powerWatt: 680,
    refrigerant: 'R32',
    highlight: 'Sangat senyap & super hemat listrik hingga 50%',
    suitableFor: 'Kamar Tidur Utama, Ruang Kerja, Ruang Meeting Kecil (12 - 18 m²)',
    features: ['Filter Titanium Apatite', 'Mode Low Watt', 'Super Quiet 19 dB(A)', 'Fin Outdoor Anti-Karat']
  },
  {
    id: 'ac-panasonic-standard-05pk',
    brand: 'Panasonic',
    modelName: 'Standard Non-Inverter CS-YN5WKJ',
    type: 'Split Wall Standard',
    capacity: '0.5 PK',
    btu: 5000,
    powerWatt: 389,
    refrigerant: 'R32',
    highlight: 'Pendinginan cepat & daya rendah hemat biaya bulanan',
    suitableFor: 'Kamar Anak, Kamar Kost, Ruang Studio (6 - 10 m²)',
    features: ['Ecotough Outdoor Casing', 'Blue Fin Evaporator', 'Fast Cooling', 'Garansi Kompresor 3 Thn']
  },
  {
    id: 'ac-gree-f1-inverter-15pk',
    brand: 'Gree',
    modelName: 'F1 Series Inverter GWC-12F1',
    type: 'Split Inverter',
    capacity: '1.5 PK',
    btu: 12000,
    powerWatt: 950,
    refrigerant: 'R32',
    highlight: 'Teknologi inverter tangguh dengan garansi platinum',
    suitableFor: 'Ruang Keluarga, Kantor Open Space, Ruko (16 - 24 m²)',
    features: ['Smart Auto-Restart', 'Turbo Cooling Mode', 'Self-Cleaning Otomatis', 'Anti-Bocor Garansi 5 Thn']
  },
  {
    id: 'ac-sharp-sayonara-075pk',
    brand: 'Sharp',
    modelName: 'Sayonara Panas J-Tech AH-XP9UHY',
    type: 'Split Inverter',
    capacity: '0.75 PK',
    btu: 7000,
    powerWatt: 540,
    refrigerant: 'R32',
    highlight: 'Dilengkapi Plasmacluster pembasmi bakteri & virus',
    suitableFor: 'Kamar Tidur, Ruang Belajar (9 - 14 m²)',
    features: ['Plasmacluster Ion Generator', 'Baby Sleep Mode', '7 Shields Protection', 'Eco Mode']
  },
  {
    id: 'ac-daikin-cassette-3pk',
    brand: 'Daikin',
    modelName: 'SkyAir Round Flow Cassette FCNQ26',
    type: 'Cassette Plafon',
    capacity: '2.5 PK+',
    btu: 26000,
    powerWatt: 2400,
    refrigerant: 'R410A',
    highlight: 'Semburan 360 derajat merata untuk aula & kantor besar',
    suitableFor: 'Lobby Kantor, Ruang Rapat Besar, Restoran, Ballroom (35 - 55 m²)',
    features: ['360° Round Flow Airflow', 'Drain Pump Built-in Otomatis', 'Ultra Slim Design', 'Tahan Operasi 24 Jam']
  },
  {
    id: 'ac-mitsubishi-standing-3pk',
    brand: 'Mitsubishi',
    modelName: 'Floor Standing Heavy Duty PS-3',
    type: 'Floor Standing',
    capacity: '2.5 PK+',
    btu: 28000,
    powerWatt: 2650,
    refrigerant: 'R410A',
    highlight: 'Aliran angin kuat menjangkau hingga 15 meter ke depan',
    suitableFor: 'Ruang Serbaguna, Tempat Ibadah, Showroom, Gedung Acara (40 - 65 m²)',
    features: ['Long Distance Airflow', 'Touch Screen Panel', 'Heavy Duty Durability', 'Air Purifying Filter']
  },
  {
    id: 'ac-lg-dual-cool-2pk',
    brand: 'LG',
    modelName: 'DualCool Inverter T18EV4',
    type: 'Split Inverter',
    capacity: '2 PK',
    btu: 18000,
    powerWatt: 1540,
    refrigerant: 'R32',
    highlight: 'Dual Inverter Compressor dingin 40% lebih cepat',
    suitableFor: 'Ruang Tamu Luas, Mini Market, Kantor Divisi (24 - 35 m²)',
    features: ['Dual Inverter Technology', 'Active Energy Control', 'Watt Control 4 Tahap', 'Smart Diagnosis']
  },
  {
    id: 'ac-gree-standard-1pk',
    brand: 'Gree',
    modelName: 'Standard Deluxe GWC-09MOO5',
    type: 'Split Wall Standard',
    capacity: '1 PK',
    btu: 9000,
    powerWatt: 750,
    refrigerant: 'R32',
    highlight: 'Ekonomis, pendinginan bandel & material tebal',
    suitableFor: 'Kamar Kost Eksklusif, Kamar Tidur, Toko Kecil (12 - 18 m²)',
    features: ['Triple Protection', 'Garansi 5 Thn Servis 10 Thn Kompresor', 'Easy Removal Filter', 'Anti Bocor']
  }
];

export const TROUBLESHOOT_ISSUES: TroubleshootIssue[] = [
  {
    id: 'ac-tidak-dingin',
    title: 'AC Tidak Dingin / Cuma Keluar Angin Biasa',
    icon: 'ThermometerSnowflake',
    symptoms: [
      'Udara yang keluar dari indoor tidak dingin sama sekali',
      'Hanya seperti hembusan kipas angin biasa',
      'Suhu ruangan tetap panas walau remote sudah diatur ke 16°C'
    ],
    likelyCauses: [
      'Filter dan evaporator indoor tertutup debu tebal',
      'Kapasitor kompresor outdoor melemah atau rusak',
      'Tekanan freon berkurang akibat kebocoran halus',
      'Kompresor mengalami overheat dan proteksi trip mati'
    ],
    recommendedAction: 'Perlu pengecekan tekanan freon & arus ampere kompresor, serta cuci servis jika unit kotor.',
    urgency: 'Segera'
  },
  {
    id: 'air-menetes-bocor',
    title: 'Air Menetes / Bocor dari Unit Indoor',
    icon: 'Droplet',
    symptoms: [
      'Air menetes membasahi dinding, lantai, atau perabotan di bawah AC',
      'Ada genangan air di casing indoor',
      'Terdengar suara cipratan air di dalam unit'
    ],
    likelyCauses: [
      'Saluran pembuangan (drain hose) tersumbat lumut dan lendir debu',
      'Talang penampung air indoor retak atau terlepas jalurnya',
      'Kemiringan instalasi indoor kurang tepat (air tidak mengalir ke luar)',
      'Bunga es mencair akibat freon kurang'
    ],
    recommendedAction: 'Penembakan selang pembuangan dengan steam air tekanan tinggi dan perbaikan kemiringan jalur drain.',
    urgency: 'Segera'
  },
  {
    id: 'ac-bau-tidak-sedap',
    title: 'AC Mengeluarkan Bau Apek / Asam',
    icon: 'Wind',
    symptoms: [
      'Saat AC pertama kali dinyalakan keluar aroma pengap / bau bangkai / apek',
      'Kualitas udara membuat bersin atau tenggorokan tidak nyaman'
    ],
    likelyCauses: [
      'Evaporator ditumbuhi jamur dan bakteri akibat kelembapan berlebih',
      'Ada kotoran organik yang membusuk di bak drainase',
      'Filter tidak pernah dicuci lebih dari 3 bulan'
    ],
    recommendedAction: 'Deep cleaning chemical wash + semprotan disinfektan antibakteri pada kisi-kisi evaporator indoor.',
    urgency: 'Normal'
  },
  {
    id: 'ac-berisik-getar',
    title: 'Suara Bising / Bergetar Keras',
    icon: 'Volume2',
    symptoms: [
      'Unit indoor berdengung kencang atau bergetar',
      'Unit outdoor menimbulkan suara gergaji / knocking keras',
      'Pipa bergetar menempel pada dinding'
    ],
    likelyCauses: [
      'Baling-baling fan kotor tidak seimbang atau patah',
      'Baut dudukan kompresor / karet mounting outdoor lepas',
      'Bearing motor fan mulai aus / kering pelumas',
      'Kompresor mengalami masalah mekanis internal'
    ],
    recommendedAction: 'Pemeriksaan balancing fan, pengencangan bracket dynabolt, dan penggantian bearing/karet peredam.',
    urgency: 'Segera'
  },
  {
    id: 'lampu-kedip-mati-sendiri',
    title: 'Lampu Indikator Berkedip / AC Sering Mati Sendiri',
    icon: 'AlertTriangle',
    symptoms: [
      'Lampu timer atau power berkedip terus-menerus',
      'AC menyala 5-10 menit kemudian mati mendadak',
      'Listrik MCB rumah anjlok saat outdoor AC hidup'
    ],
    likelyCauses: [
      'Sensor thermistor suhu atau pipa mendeteksi anomali',
      'Korsleting pada gulungan kompresor atau kapasitor short',
      'Modul PCB elektronik mendeteksi error sistem',
      'Tegangan voltase listrik PLN drop di bawah 200V'
    ],
    recommendedAction: 'Analisa kode error digital dan pemeriksaan kelistrikan oleh teknisi bersertifikat.',
    urgency: 'Darurat'
  },
  {
    id: 'pipa-beku-es',
    title: 'Pipa atau Indoor Membeku Jadi Es Batu',
    icon: 'Snowflake',
    symptoms: [
      'Pipa tembaga kecil/besar di outdoor tertutup bunga es putih',
      'Indoor AC mengeluarkan serpihan es atau kabut putih',
      'Udara menjadi kurang dingin'
    ],
    likelyCauses: [
      'Tekanan freon di bawah standar akibat kebocoran sistem',
      'Evaporator indoor sangat kotor sehingga sirkulasi udara tertahan',
      'Putaran fan blower indoor terlalu lambat'
    ],
    recommendedAction: 'Cari titik bocor freon, perbaiki pipa, dan lakukan vakum ulang sebelum penambahan freon.',
    urgency: 'Segera'
  }
];

export const FAQS = [
  {
    q: 'Berapa lama sekali AC rumah atau kantor sebaiknya dicuci?',
    a: 'Untuk hunian rumah, disarankan dicuci rutin setiap 2 hingga 3 bulan sekali. Untuk gedung perkantoran, restoran, atau ruang kerja beroperasi harian, disarankan setiap 1 hingga 2 bulan sekali agar efisiensi listrik tetap hemat dan udara tetap sehat.'
  },
  {
    q: 'Mengapa memilih Melvaria Jaya Teknik dibanding teknisi lepasan?',
    a: 'Kami menjamin standar teknisi tinggi berpengalaman, pengerjaan rapi dan bersih dengan perlengkapan plastik cover anti-kotor, peralatan modern lengkap (termasuk pompa vakum standar pabrikan), transparansi harga tanpa biaya tersembunyi, serta garansi resmi pengerjaan.'
  },
  {
    q: 'Apakah melayani panggilan hari ini / darurat?',
    a: 'Ya, Melvaria Jaya Teknik siap melayani panggilan hari ini untuk perbaikan dan cuci AC. Silakan hubungi nomor 0813-1889-3657 melalui WhatsApp atau Telepon untuk mengatur jadwal teknisi meluncur ke lokasi Anda.'
  },
  {
    q: 'Apakah melayani pengadaan unit AC dalam jumlah banyak untuk proyek kantor?',
    a: 'Tentu. Kami menyediakan pengadaan dan penjualan berbagai merk resmi (Daikin, Panasonic, Gree, Sharp, dll.) baik tipe Split, Cassette plafon, hingga Floor Standing dengan harga B2B terbaik, garansi pabrik, dan paket instalasi lengkap.'
  },
  {
    q: 'Berapa garansi yang diberikan setelah perbaikan atau pemasangan?',
    a: 'Setiap pengerjaan pemasangan baru, pengelasan kebocoran, atau penggantian suku cadang dilengkapi garansi pengerjaan 30 hingga 90 hari sesuai jenis layanan, memberikan ketenangan pikiran bagi Anda.'
  },
  {
    q: 'Di mana alamat kantor / workshop Melvaria Jaya Teknik?',
    a: 'Workshop kami beralamat di Jalan Rajawali 1 No 10. Teknisi kami melayani panggilan langsung ke rumah tinggal, apartemen, ruko, maupun gedung perkantoran di seluruh area sekitar.'
  }
];

export const REVIEWS = [
  {
    name: 'Bpk. Hendra Gunawan',
    role: 'Pemilik Rumah Hunian',
    comment: 'Teknisi Melvaria Jaya Teknik sangat profesional. AC kamar yang tadinya bocor air dan tidak dingin langsung beres dalam 1 jam. Pengerjaan bersih tidak mengotori dinding/kasur!',
    rating: 5,
    service: 'Perbaikan Kebocoran & Cuci AC'
  },
  {
    name: 'Ibu Ratna Dewi',
    role: 'Office Manager PT Samudra',
    comment: 'Kami mempercayakan maintenance rutin 18 unit AC kantor ke Melvaria Jaya Teknik. Ruang meeting dingin merata, respon cepat kalau ada komplain, dan invoice resmi rapi.',
    rating: 5,
    service: 'Kontrak Maintenance Perkantoran'
  },
  {
    name: 'Bpk. Dimas Pratama',
    role: 'Pemilik Resto & Kafe',
    comment: 'Beli 2 unit AC Cassette dan 1 Split dari Melvaria Jaya Teknik sekalian dipasangkan. Harga unit sangat kompetitif, pemasangannya rapi dan vakumnya benar-benar sesuai SOP pabrik.',
    rating: 5,
    service: 'Pengadaan & Pemasangan Unit Baru'
  }
];
