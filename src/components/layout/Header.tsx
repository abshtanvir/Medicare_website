import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LogOut, Activity } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export function Header() {
    const { user, logout, isAdmin } = useAuth();
    const { itemCount } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md px-6 lg:px-20 py-3">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
                <Link to="/" className="flex items-center gap-2">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                        <Activity className="w-5 h-5" />
                    </div>
                    <h2 className="text-medical-blue text-xl font-extrabold tracking-tight">HealthPlatform</h2>
                </Link>

                <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
                    <Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/">
                        Home
                    </Link>
                    <Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/medicines">
                        Medicines
                    </Link>
                    <Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/lab-tests">
                        Lab Tests
                    </Link>
                    {user && !isAdmin && (
                        <Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/dashboard">
                            Dashboard
                        </Link>
                    )}
                    {isAdmin && (
                        <Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/admin">
                            Admin
                        </Link>
                    )}
                </nav>

                <div className="flex items-center gap-3">
                    {!isAdmin && (
                        <Link to="/cart" className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg relative">
                            <ShoppingCart className="w-5 h-5" />
                            {itemCount > 0 && (
                                <span className="absolute top-1 right-1 size-4 bg-primary text-[10px] font-bold flex items-center justify-center rounded-full">
                                    {itemCount}
                                </span>
                            )}
                        </Link>
                    )}

                    {user ? (
                        <div className="flex items-center gap-2">
                            <span className="hidden sm:block text-sm font-medium text-slate-700">{user.name}</span>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="hidden sm:inline text-sm font-bold">Logout</span>
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold shadow-sm hover:brightness-95 transition-all"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
