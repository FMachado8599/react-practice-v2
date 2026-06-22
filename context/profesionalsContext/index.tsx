'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ProfessionalsContextType, ProfessionalsState } from './types';
import * as actions from './actions';
import { professionalService } from '@/services/busines-logic/professionalServices';

const initialState: ProfessionalsState = {
  professionals: [],
  loading: true,
  error: null,
};

const ProfessionalsContext = createContext<ProfessionalsContextType | null>(null);

export function ProfessionalsProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<ProfessionalsState>(initialState);

    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                const professionals = await professionalService.getAll();
                setState({ professionals, loading: false, error: null });
            } catch {
                setState((prev) => ({ ...prev, loading: false, error: 'Error al cargar los profesionales' }));
            }
        };
        fetchProfessionals();
    }, []);

    const value: ProfessionalsContextType = {
        ...state,

        getProfessionalById: (id) => actions.getProfessionalById(state.professionals, id),
        getActiveProfessionals: () => actions.getActiveProfessionals(state.professionals),

        addProfessional: (newProfessional) =>
            setState((prev) => ({ ...prev, professionals: actions.addProfessional(prev.professionals, newProfessional) })),

        updateProfessional: (id, updates) =>
            setState((prev) => ({ ...prev, professionals: actions.updateProfessional(prev.professionals, id, updates) })),

        removeProfessional: (id) =>
            setState((prev) => ({ ...prev, professionals: actions.removeProfessional(prev.professionals, id) })),

        toggleProfessionalActive: (id) =>
            setState((prev) => ({ ...prev, professionals: actions.toggleProfessionalActive(prev.professionals, id) })),
    };
    return (
    <ProfessionalsContext.Provider value={value}>
        {children}
    </ProfessionalsContext.Provider>
    );
}

export function useProfessionals() {
    const context = useContext(ProfessionalsContext);
    if (!context) throw new Error('useProfessionals debe usarse dentro de ProfessionalsProvider');
    return context;
}