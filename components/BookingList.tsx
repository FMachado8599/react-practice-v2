'use client';

import { useBookings } from '@/context/bookingsContext';
import { useBookingDetails } from '@/hooks/useBookingDetails';
import { Booking } from '@/types/booking';

function BookingItem({ booking }: { booking: Booking }) {
  const { professional, service } = useBookingDetails(booking);

  return (
    <li>
      <span>{booking.clientName}</span>
      <span>{professional?.name ?? 'Profesional no encontrado'}</span>
      <span>{service?.name ?? 'Servicio no encontrado'}</span>
      <span>{booking.dateTime.toLocaleString()}</span>
      <span>{booking.status}</span>
    </li>
  );
}

export default function BookingList() {
  const { bookings, loading, error } = useBookings();

  if (loading) return <p>Cargando reservas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {bookings.map((booking) => (
        <BookingItem key={booking.id} booking={booking} />
      ))}
    </ul>
  );
}