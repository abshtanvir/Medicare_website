import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { Package, FileText, Calendar } from 'lucide-react';

export function Dashboard() {
    const { user } = useAuth();
    const { getUserOrders } = useOrders();

    if (!user) return null;

    const userOrders = getUserOrders(user.id);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'delivered':
                return 'bg-green-100 text-green-700';
            case 'shipped':
                return 'bg-blue-100 text-blue-700';
            case 'processing':
                return 'bg-yellow-100 text-yellow-700';
            case 'cancelled':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-medical-blue mb-2">Health Dashboard</h1>
                <p className="text-slate-600">Welcome back, {user.name}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-slate-600 font-medium">Total Orders</p>
                        <Package className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{userOrders.length}</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-slate-600 font-medium">Active Orders</p>
                        <Calendar className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">
                        {userOrders.filter((o) => o.status === 'pending' || o.status === 'processing' || o.status === 'shipped').length}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-slate-600 font-medium">Lab Reports</p>
                        <FileText className="w-5 h-5 text-accent-teal" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">
                        {userOrders.filter((o) => o.type === 'labtest' && o.status === 'delivered').length}
                    </p>
                </div>
            </div>

            {/* Orders */}
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Orders</h2>

                {userOrders.length === 0 ? (
                    <div className="bg-white rounded-xl border border-slate-100 p-12 text-center">
                        <Package className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                        <p className="text-slate-600">No orders yet</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {userOrders.map((order) => (
                            <div key={order.id} className="bg-white rounded-xl border border-slate-100 p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 mb-1">Order {order.id}</h3>
                                        <p className="text-sm text-slate-500">
                                            {new Date(order.createdAt).toLocaleDateString()} • {order.items.length} items
                                        </p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </div>

                                <div className="space-y-2 mb-4">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between text-sm">
                                            <span className="text-slate-700">
                                                {item.product.name} × {item.quantity}
                                            </span>
                                            <span className="font-semibold text-slate-900">${(item.product.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-600">Total</span>
                                    <span className="text-lg font-bold text-primary">${order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
