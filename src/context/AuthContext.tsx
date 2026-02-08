import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const MOCK_USERS = {
    user: { id: '1', email: 'user@demo.com', name: 'John Doe', role: 'user' as const },
    admin: { id: '2', email: 'admin@demo.com', name: 'Admin User', role: 'admin' as const },
};

const MOCK_CREDENTIALS = {
    'user@demo.com': 'user123',
    'admin@demo.com': 'admin123',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        const stored = localStorage.getItem('medicare_user');
        return stored ? JSON.parse(stored) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('medicare_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('medicare_user');
        }
    }, [user]);

    const login = (email: string, password: string): boolean => {
        if (MOCK_CREDENTIALS[email as keyof typeof MOCK_CREDENTIALS] === password) {
            const userData = email === 'admin@demo.com' ? MOCK_USERS.admin : MOCK_USERS.user;
            setUser(userData);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    const isAdmin = user?.role === 'admin';

    return (
        <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
