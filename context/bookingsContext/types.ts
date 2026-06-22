import { Booking } from '@/types/booking';

export interface BookingsState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

export interface BookingsContextType extends BookingsState {
  // Queries
  getBookingById: (id: string) => Booking | undefined;
  getBookingsByStatus: (status: Booking['status']) => Booking[];
  getBookingsByProfessional: (professionalId: string) => Booking[];

  // Mutations
  addBooking: (booking: Omit<Booking, 'id'>) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  cancelBooking: (id: string) => void;
  removeBooking: (id: string) => void;
}