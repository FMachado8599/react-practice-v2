import { Booking } from '@/types/booking';

export const getBookingById = (bookings: Booking[], id: string) =>
  bookings.find((b) => b.id === id);

export const getBookingsByStatus = (bookings: Booking[], status: Booking['status']) =>
  bookings.filter((b) => b.status === status);

export const getBookingsByProfessional = (bookings: Booking[], professionalId: string) =>
  bookings.filter((b) => b.professionalId === professionalId);

export const addBooking = (bookings: Booking[], newBooking: Omit<Booking, 'id'>): Booking[] => {
  const booking: Booking = {
    ...newBooking,
    id: crypto.randomUUID(),
  };
  return [...bookings, booking];
};

export const updateBooking = (bookings: Booking[], id: string, updates: Partial<Booking>): Booking[] =>
  bookings.map((b) => (b.id === id ? { ...b, ...updates } : b));

export const cancelBooking = (bookings: Booking[], id: string): Booking[] =>
  bookings.map((b) => (b.id === id ? { ...b, status: 'cancelled' as const } : b));

export const removeBooking = (bookings: Booking[], id: string): Booking[] =>
  bookings.filter((b) => b.id !== id);