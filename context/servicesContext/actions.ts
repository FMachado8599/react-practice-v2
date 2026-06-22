import { Service } from '@/types/service';

export const getServiceById = (services: Service[], id: string) =>
  services.find((s) => s.id === id);

export const getActiveServices = (services: Service[]) =>
  services.filter((s) => s.isActive);

export const addService = (services: Service[], newService: Omit<Service, 'id'>): Service[] => {
  const service: Service = {
    ...newService,
    id: crypto.randomUUID(),
  };
  return [...services, service];
};

export const updateService = (services: Service[], id: string, updates: Partial<Service>): Service[] =>
  services.map((s) => (s.id === id ? { ...s, ...updates } : s));

export const removeService = (services: Service[], id: string): Service[] =>
  services.filter((s) => s.id !== id);

export const toggleServiceActive = (services: Service[], id: string): Service[] =>
  services.map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s));