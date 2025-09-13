export interface Developer {
  id: string;
  name: string;
  logo?: string;
  projectCount: number;
  location: string;
  startingPrice: string;
  possessionDate: string;
  description?: string;
}

export interface Property {
  id: string;
  name: string;
  developerId: string;
  developer: string;
  image: string;
  location: string;
  startingPrice: string;
  possessionDate: string;
  propertyType: 'Apartment' | 'Villa' | 'Flat' | 'Plot' | 'Office';
  bedrooms: string;
  bathrooms: string;
  status: 'Available' | 'Few Units Left' | 'Sold Out';
  highlights: string[];
}

export interface Unit {
  id: string;
  unitNumber: string;
  floor: number;
  type: string;
  size: string;
  price: string;
  status: 'Available' | 'Held' | 'Sold';
}

export interface PropertyDetails extends Property {
  description: string;
  amenities: string[];
  floorPlans: Array<{
    id: string;
    type: string;
    image: string;
    size: string;
  }>;
  brochures: Array<{
    id: string;
    name: string;
    url: string;
  }>;
  units: Unit[];
  paymentPlans: Array<{
    id: string;
    name: string;
    downPayment: string;
    installments: string;
    possessionPayment: string;
  }>;
}

export interface Lead {
  id: string;
  buyerName: string;
  phone: string;
  email: string;
  status: 'Hot' | 'Warm' | 'Cold';
  projectName: string;
  developerName: string;
  lastInteraction: string;
  budget: string;
  requirements: string;
}

export interface Booking {
  id: string;
  projectName: string;
  developerName: string;
  unitDetails: {
    tower: string;
    floor: number;
    unitNumber: string;
    type: string;
  };
  bookingDate: string;
  status: 'Reserved' | 'Payment Pending' | 'Confirmed';
  totalAmount: string;
  paidAmount: string;
  pendingAmount: string;
  paymentProgress: number;
  nextPaymentDate?: string;
}

export interface Message {
  id: string;
  contactName: string;
  contactType: 'Buyer' | 'Developer' | 'Agent';
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: string;
  type: 'text' | 'attachment';
  attachmentType?: 'brochure' | 'floorplan' | 'quote';
  attachmentName?: string;
}

export interface AgentProfile {
  id: string;
  name: string;
  designation: string;
  region: string;
  phone: string;
  email: string;
  avatar?: string;
  stats: {
    leadsHandled: number;
    bookingsClosed: number;
    targetsAchieved: number;
    monthlyTarget: number;
  };
  settings: {
    currency: string;
    language: string;
    notifications: boolean;
  };
}