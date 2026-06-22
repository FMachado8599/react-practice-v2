// services/business-logic/serviceServices.ts
import { Professional } from '@/types/professional';

const getAll = async (): Promise<Professional[]> => {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Firebase
    throw new Error('Production not implemented yet');
    }
    const data = await import('../mockData/professionals.json');
    return data.default as Professional[];
};

export const professionalService = { getAll };

