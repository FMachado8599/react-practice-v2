'use client';

import { useServices } from '@/context/servicesContext';

export default function ServicesList() {
  const { services, loading, error } = useServices();

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <span>{service.name}</span>
          <span>{service.duration} min</span>
          <span>${service.price}</span>
          <span>{service.isActive ? 'Activo' : 'Inactivo'}</span>
        </li>
      ))}
    </ul>
  );
}