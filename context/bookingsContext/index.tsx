'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { BookingsContextType, BookingsState } from './types';
import * as actions from './actions';
import { bookingService } from '@/services/busines-logic/bookingServices';

const initialState: BookingsState = {
  bookings: [],
  loading: true,
  error: null,
};

const BookingsContext = createContext<BookingsContextType | null>(null);

export function BookingsProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BookingsState>(initialState);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookings = await bookingService.getAll();
        setState({ bookings, loading: false, error: null });
      } catch {
        setState((prev) => ({ ...prev, loading: false, error: 'Error al cargar las reservas' }));
      }
    };
    fetchBookings();
  }, []);

  const value: BookingsContextType = {
    ...state,

    getBookingById: (id) => actions.getBookingById(state.bookings, id),
    getBookingsByStatus: (status) => actions.getBookingsByStatus(state.bookings, status),
    getBookingsByProfessional: (professionalId) =>
      actions.getBookingsByProfessional(state.bookings, professionalId),

    addBooking: (newBooking) =>
      setState((prev) => ({ ...prev, bookings: actions.addBooking(prev.bookings, newBooking) })),

    updateBooking: (id, updates) =>
      setState((prev) => ({ ...prev, bookings: actions.updateBooking(prev.bookings, id, updates) })),

    cancelBooking: (id) =>
      setState((prev) => ({ ...prev, bookings: actions.cancelBooking(prev.bookings, id) })),

    removeBooking: (id) =>
      setState((prev) => ({ ...prev, bookings: actions.removeBooking(prev.bookings, id) })),
  };

  return <BookingsContext.Provider value={value}>{children}</BookingsContext.Provider>;
}

export function useBookings() {
  const context = useContext(BookingsContext);
  if (!context) throw new Error('useBookings debe usarse dentro de BookingsProvider');
  return context;
}