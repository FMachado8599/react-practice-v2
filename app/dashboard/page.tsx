import ProfessionalList from '@/components/businessLogic/ProfessionalsList';
import ServicesList from '@/components/businessLogic/ServicesList';
import BookingList from '@/components/BookingList';

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <h2>Profesionales</h2>
      <ProfessionalList />
      <br />
      <div className="border-t border-gray-300 my-4" />
      <br />
      <h2>Servicios</h2>
      <ServicesList />
      <br />
      <div className="border-t border-gray-300 my-4" />
      <br />
      <h2>Reservas</h2>
      <BookingList />
    </main>
  );
}