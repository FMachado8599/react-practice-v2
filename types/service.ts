export interface Service {
  id: string;
  name: string;
  duration: number; // minutos
  price: number;
  category: 'corte' | 'color' | 'tratamiento' | 'depilacion' | 'otro';
}