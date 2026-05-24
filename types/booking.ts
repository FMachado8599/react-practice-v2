import { Professional } from './professional';
import { Service } from './service';

export interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  professional: Professional;
  service: Service;
  dateTime: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes: string;
  price: number;
}

export interface TimeSlot {
  id: string;
  professional: string; // ID del profesional
  startTime: string; // "09:00"
  endTime: string; // "18:00"
  dayOfWeek: number; // 0-6 (lunes a domingo)
  isAvailable: boolean;
}