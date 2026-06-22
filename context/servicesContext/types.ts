import { Service } from '@/types/service';

export interface ServicesState {
  services: Service[];
  loading: boolean;
  error: string | null;
}

export interface ServicesContextType extends ServicesState {
  // Queries
  getServiceById: (id: string) => Service | undefined;
  getActiveServices: () => Service[];

  // Mutations
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, updates: Partial<Service>) => void;
  removeService: (id: string) => void;
  toggleServiceActive: (id: string) => void;
}