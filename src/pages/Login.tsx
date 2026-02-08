import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity } from 'lucide-react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = (location.state as any)?.from?.pathname || '/';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const success = login(email, password);
        if (success) {
            navigate(from, { replace: true });
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen bg-background-light flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="size-16 bg-primary rounded-xl flex items-center justify-center text-background-dark mb-4">
                            <Activity className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-medical-blue">Welcome Back</h2>
                        <p className="text-slate-500 text-sm mt-2">Sign in to your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary text-background-dark font-bold py-3 rounded-lg hover:brightness-95 transition-all"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                        <p className="text-xs font-semibold text-slate-600 mb-2">Demo Credentials:</p>
                        <div className="space-y-1 text-xs text-slate-500">
                            <p><strong>User:</strong> user@demo.com / user123</p>
                            <p><strong>Admin:</strong> admin@demo.com / admin123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
