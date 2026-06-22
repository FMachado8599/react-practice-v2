import { Professional } from './professional';
import { Service } from './service';

export interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  professionalId: string;
  serviceId: string;
  dateTime: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface TimeSlot {
  id: string;
  professionalId: string; // ID del profesional
  startTime: string; // "09:00"
  endTime: string; // "18:00"
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5; // 0-5 (lunes a sábado)
  isAvailable: boolean;
}