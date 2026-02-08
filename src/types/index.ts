export interface User {
    id: string;
    email: string;
    name: string;
    role: 'user' | 'admin';
}

export interface Product {
    id: string;
    name: string;
    category: 'medicine' | 'labtest';
    price: number;
    originalPrice?: number;
    image: string;
    description: string;
    manufacturer?: string;
    prescriptionRequired?: boolean;
    parameters?: number;
    discount?: number;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Order {
    id: string;
    userId: string;
    userName: string;
    userEmail: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: string;
    type: 'medicine' | 'labtest';
    address?: string;
    appointmentDate?: string;
    appointmentTime?: string;
}
