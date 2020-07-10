import { Comment } from './comment';

export interface Hospital {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    totalBeds: number,
    occupiedBeds: number,
    lat: number;
    lng: number;
 
}


