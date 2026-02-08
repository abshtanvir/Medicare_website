import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Activity, LayoutDashboard, ShoppingBag, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function AdminSidebar() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="w-64 border-r border-neutral-border bg-white flex flex-col h-screen shrink-0">
            <div className="p-6 flex items-center gap-3 border-b border-neutral-border">
                <div className="bg-primary p-2 rounded-lg text-background-dark">
                    <Activity className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-xl font-extrabold tracking-tight">HealthPlatform</h2>
                    <p className="text-xs text-slate-500">Admin Portal</p>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1 mt-4">
                <Link
                    to="/admin"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${isActive('/admin')
                            ? 'bg-primary/20 text-text-main border-l-4 border-primary'
                            : 'text-slate-600 hover:bg-background-light'
                        }`}
                >
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                </Link>

                <Link
                    to="/admin/orders"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${isActive('/admin/orders')
                            ? 'bg-primary/20 text-text-main border-l-4 border-primary'
                            : 'text-slate-600 hover:bg-background-light'
                        }`}
                >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Orders</span>
                </Link>
            </nav>

            <div className="p-4 border-t border-neutral-border">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-background-light text-slate-600 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
}
