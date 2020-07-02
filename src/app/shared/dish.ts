import { Comment } from './comment';

export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    vaccant: number;
    lat: number;
    lng: number;
    comments: Comment[];
}