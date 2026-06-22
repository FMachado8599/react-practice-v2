import { Professional } from "@/types/professional";

export interface ProfessionalsState {
    professionals: Professional[];
    loading: boolean;
    error: string | null;
}

export interface ProfessionalsContextType extends ProfessionalsState {
    // Queries
    getProfessionalById: (id: string) => Professional | undefined;
    getActiveProfessionals: () => Professional[];
    //Mutations
    addProfessional: (professional: Omit<Professional, 'id'>) => void;
    updateProfessional: (id: string, updates: Partial<Professional>) => void;
    removeProfessional: (id: string) => void;
    toggleProfessionalActive: (id: string) => void;
}