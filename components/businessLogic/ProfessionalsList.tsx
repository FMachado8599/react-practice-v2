'use client';

import { useProfessionals } from '@/context/profesionalsContext';

export default function ProfessionalList() {
  const { professionals, loading, error } = useProfessionals();

  if (loading) return <p>Cargando profesionales...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {professionals.map((prof) => (
        <li key={prof.id}>
          <span>{prof.photo}</span>
          <span>{prof.name}</span>
          <span>⭐ {prof.rating}</span>
          <span>{prof.isActive ? 'Activo' : 'Inactivo'}</span>
        </li>
      ))}
    </ul>
  );
}