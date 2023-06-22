export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

export interface IUser {
    id: string;
    email: string;
    password?: string;
    displayName: string;
    photoURL?: string;
    emailVerified?: boolean;
    roles: string[];
}
