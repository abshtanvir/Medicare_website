import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Order } from '../types';

interface OrderContextType {
    orders: Order[];
    addOrder: (order: Omit<Order, 'id' | 'createdAt'>) => void;
    updateOrderStatus: (orderId: string, status: Order['status']) => void;
    getUserOrders: (userId: string) => Order[];
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
    const [orders, setOrders] = useState<Order[]>(() => {
        const stored = localStorage.getItem('medicare_orders');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('medicare_orders', JSON.stringify(orders));
    }, [orders]);

    const addOrder = (orderData: Omit<Order, 'id' | 'createdAt'>) => {
        const newOrder: Order = {
            ...orderData,
            id: `ORD-${Date.now()}`,
            createdAt: new Date().toISOString(),
        };
        setOrders(prev => [newOrder, ...prev]);
    };

    const updateOrderStatus = (orderId: string, status: Order['status']) => {
        setOrders(prev =>
            prev.map(order =>
                order.id === orderId ? { ...order, status } : order
            )
        );
    };

    const getUserOrders = (userId: string) => {
        return orders.filter(order => order.userId === userId);
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus, getUserOrders }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrders() {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrders must be used within OrderProvider');
    }
    return context;
}
