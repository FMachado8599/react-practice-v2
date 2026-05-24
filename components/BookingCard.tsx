"use client";

import { Booking } from '../types/index';
import { BookingContext } from '../context/BookingContext';
import { useContext } from 'react';
import { Card } from './ui/card';

interface BookingCardProps {
    key: string;    
    booking: Booking;
    onCancel?: (id: string) => void;
    onDelete?: (id: string) => void;
}

export default function BookingCard({ booking, onCancel, onDelete }: BookingCardProps) {
    const bookingContext = useContext(BookingContext);

    return (
        <Card className="w-full p-4 mb-4">
            <h3 className="text-lg font-bold">{booking.service.name}</h3>
            <p>Profesional: {booking.professional.name}</p>
            <p>Fecha y hora: {new Date(booking.dateTime).toLocaleString()}</p>
            <p>Estado: {booking.status}</p>
            <p>Notas: {booking.notes}</p>
            <p>Precio: ${booking.price}</p>
            {booking.status === 'pending' && (
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={() => onCancel && onCancel(booking.id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => onDelete && onDelete(booking.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Eliminar
                    </button>
                </div>
            )}
        </Card>
    );
}