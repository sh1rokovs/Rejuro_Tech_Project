export interface ICar {
    id: string;
    img: string;
    name: string;
    description: string;
    price: string;
    likes: number;
}

export interface ServerResponse {
    items: ICar[];
}