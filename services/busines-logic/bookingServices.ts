import { Booking } from '@/types/booking';

type BookingJSON = Omit<Booking, 'dateTime'> & { dateTime: Date | string };

const getAll = async (): Promise<Booking[]> => {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Production not implemented yet');
  }
  const data = await import('../mockData/bookings.json');
  const bookingsJSON = data.default as BookingJSON[];

  return bookingsJSON.map((b) => ({
    ...b,
    dateTime: new Date(b.dateTime),
  }));
};

export const bookingService = { getAll };