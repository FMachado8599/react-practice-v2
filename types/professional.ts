import { TimeSlot } from './booking';

export interface Professional {
  id: string;
  name: string;
  specialty: string[];
  photo?: string;
  rating: number;
  availability: TimeSlot[];
}