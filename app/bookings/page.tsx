"use client";

import { useEffect, useState } from 'react';
import { Booking } from '@/types';

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        // ✅ Ruta correcta
        const response = await fetch('/data/bookings.json');
        
        // ✅ Verificar si ok
        if (!response.ok) {
          throw new Error('Error al cargar las citas');
        }
        
        // ✅ Parsear JSON
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []); // ✅ Solo ejecutar una vez al montar

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Bookings Page</h1>
      <p>Total citas: {bookings.length}</p>
      
      {/* Acá mapeas las citas */}
      {bookings.map((booking) => (
        <BookingsPage key={booking.id} booking={booking} />
      ))}
    </div>
  );
}