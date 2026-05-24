"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { Booking, Professional, Service } from '@/types/index';

interface BookingContextType {
    bookings: Booking[];
    professionals: Professional[];
    services: Service[];
    loading: boolean;
    error: string | null;
    addBooking: (booking: Booking) => void;
    deleteBooking: (id: string) => void;
    cancelBooking: (id: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [professionals, setProfessionals] = useState<Professional[]>([]);
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // TODO: Agregar useEffect para hacer fetch de los 3 JSONs

    const addBooking = (booking: Booking) => {
        setBookings([...bookings, booking]);
    };

    const deleteBooking = (id: string) => {
        setBookings(bookings.filter((b) => b.id !== id));
    };

    const cancelBooking = (id: string) => {
        setBookings(
            bookings.map((b) =>
                b.id === id ? { ...b, status: 'cancelled' as const } : b
            )
        );
    };

    return (
        <BookingContext.Provider
            value={{
                bookings,
                professionals,
                services,
                loading,
                error,
                addBooking,
                deleteBooking,
                cancelBooking,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking debe ser usado dentro de BookingProvider');
    }
    return context;
}