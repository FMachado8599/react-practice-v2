import { useServices } from '@/context/servicesContext';
import { useProfessionals } from '@/context/profesionalsContext';
import { Booking } from '@/types/booking';

export function useBookingDetails(booking: Booking) {
  const { getProfessionalById } = useProfessionals();
  const { getServiceById } = useServices();

  const professional = getProfessionalById(booking.professionalId);
  const service = getServiceById(booking.serviceId);

  return { professional, service };
}