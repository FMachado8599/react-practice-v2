export const VALID_DURATIONS = [30, 60, 90, 120, 150, 180] as const;
export type ServiceDuration = typeof VALID_DURATIONS[number];

export interface Service {
  id: string;
  name: string;
  duration: ServiceDuration;
  price: number;
  isActive: boolean;
}
