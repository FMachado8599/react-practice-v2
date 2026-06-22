'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ServicesContextType, ServicesState } from './types';
import * as actions from './actions';
import { serviceService } from '@/services/busines-logic/serviceServices';

const initialState: ServicesState = {
  services: [],
  loading: true,
  error: null,
};

const ServicesContext = createContext<ServicesContextType | null>(null);

export function ServicesProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ServicesState>(initialState);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const services = await serviceService.getAll();
        setState({ services, loading: false, error: null });
      } catch {
        setState((prev) => ({ ...prev, loading: false, error: 'Error al cargar los servicios' }));
      }
    };
    fetchServices();
  }, []);

  const value: ServicesContextType = {
    ...state,

    getServiceById: (id) => actions.getServiceById(state.services, id),
    getActiveServices: () => actions.getActiveServices(state.services),

    addService: (newService) =>
      setState((prev) => ({ ...prev, services: actions.addService(prev.services, newService) })),

    updateService: (id, updates) =>
      setState((prev) => ({ ...prev, services: actions.updateService(prev.services, id, updates) })),

    removeService: (id) =>
      setState((prev) => ({ ...prev, services: actions.removeService(prev.services, id) })),

    toggleServiceActive: (id) =>
      setState((prev) => ({ ...prev, services: actions.toggleServiceActive(prev.services, id) })),
  };

  return <ServicesContext.Provider value={value}>{children}</ServicesContext.Provider>;
}

export function useServices() {
  const context = useContext(ServicesContext);
  if (!context) throw new Error('useServices debe usarse dentro de ServicesProvider');
  return context;
}