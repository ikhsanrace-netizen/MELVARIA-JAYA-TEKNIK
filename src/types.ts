export interface ServiceItem {
  id: string;
  title: string;
  category: 'perawatan' | 'perbaikan' | 'pemasangan' | 'pengadaan' | 'b2b';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  priceRange: string;
  badge?: string;
  iconName: string;
}

export interface AcProduct {
  id: string;
  brand: 'Daikin' | 'Panasonic' | 'Sharp' | 'Gree' | 'LG' | 'Mitsubishi';
  modelName: string;
  type: 'Split Wall Standard' | 'Split Inverter' | 'Cassette Plafon' | 'Floor Standing';
  capacity: '0.5 PK' | '0.75 PK' | '1 PK' | '1.5 PK' | '2 PK' | '2.5 PK+';
  btu: number;
  powerWatt: number;
  refrigerant: 'R32' | 'R410A';
  highlight: string;
  suitableFor: string;
  features: string[];
}

export interface TroubleshootIssue {
  id: string;
  title: string;
  icon: string;
  symptoms: string[];
  likelyCauses: string[];
  recommendedAction: string;
  urgency: 'Normal' | 'Segera' | 'Darurat';
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  address: string;
  propertyType: 'Rumah Hunian' | 'Gedung Kantor' | 'Ruko / Usaha' | 'Apartemen' | 'Pabrik / Gudang';
  serviceType: string;
  acCount: number;
  acBrand: string;
  preferredDate: string;
  preferredTime: 'Pagi (08:00 - 12:00)' | 'Siang (12:00 - 15:00)' | 'Sore (15:00 - 18:00)' | 'Malam / Darurat';
  notes: string;
}

export interface SavedBooking extends BookingFormState {
  id: string;
  createdAt: string;
  status: 'Terkirim via WhatsApp' | 'Menunggu Konfirmasi' | 'Selesai';
}
