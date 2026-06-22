// services/serviceService.ts
import { Service } from '@/types/service';

const getAll = async (): Promise<Service[]> => {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Firebase
    throw new Error('Production not implemented yet');
  }
  const data = await import('../mockData/services.json');
  return data.default as Service[];
};

export const serviceService = { getAll };