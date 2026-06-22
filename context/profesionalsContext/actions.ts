import { Professional } from "@/types/professional";

export const getProfessionalById = (professionals: Professional[], id: string) =>
    professionals.find((p) => p.id === id);

export const getActiveProfessionals = (professionals: Professional[]) =>
    professionals.filter((p) => p.isActive);

export const addProfessional = (professionals: Professional[], newProfessional: Omit<Professional, 'id'>): Professional[] => {
    const professional: Professional = {
        ...newProfessional,
        id: crypto.randomUUID(),
    };
    return [...professionals, professional];
};

export const updateProfessional = (professionals: Professional[], id: string, updates: Partial<Professional>): Professional[] => {
    return professionals.map((p) => p.id === id ? { ...p, ...updates } : p);
};

export const removeProfessional = (professionals: Professional[], id: string): Professional[] => {
    return professionals.filter((p) => p.id !== id);
};

export const toggleProfessionalActive = (professionals: Professional[], id: string): Professional[] => {
    return professionals.map((p) => p.id === id ? { ...p, isActive: !p.isActive } : p);
};