import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export function Cart() {
    const { items, removeFromCart, updateQuantity, clearCart, total } = useCart();
    const { user } = useAuth();
    const { addOrder } = useOrders();
    const navigate = useNavigate();
    const [address, setAddress] = useState('');

    const handleCheckout = () => {
        if (!user) {
            navigate('/login', { state: { from: { pathname: '/cart' } } });
            return;
        }

        if (items.length === 0) return;

        // Create order
        addOrder({
            userId: user.id,
            userName: user.name,
            userEmail: user.email,
            items,
            total,
            status: 'pending',
            type: items[0].product.category,
            address: address || '123 Main St, New York, NY',
        });

        clearCart();
        navigate('/dashboard');
    };

    if (items.length === 0) {
        return (
            <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
                <div className="text-center">
                    <ShoppingBag className="w-24 h-24 mx-auto text-slate-300 mb-6" />
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
                    <p className="text-slate-600 mb-8">Add some items to get started</p>
                    <button
                        onClick={() => navigate('/medicines')}
                        className="px-8 py-3 bg-primary text-background-dark font-bold rounded-lg hover:brightness-95"
                    >
                        Browse Medicines
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
            <h1 className="text-3xl font-bold text-medical-blue mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                        <div key={item.product.id} className="bg-white rounded-xl border border-slate-100 p-6 flex gap-6">
                            <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-24 h-24 object-cover rounded-lg"
                            />

                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{item.product.name}</h3>
                                <p className="text-sm text-slate-500 mb-3">{item.product.description}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                            className="size-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="font-bold text-slate-900 w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                            className="size-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <p className="text-xl font-black text-slate-900">${(item.product.price * item.quantity).toFixed(2)}</p>
                                        <button
                                            onClick={() => removeFromCart(item.product.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl border border-slate-100 p-6 sticky top-24">
                        <h3 className="font-bold text-lg mb-4">Order Summary</h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-slate-600">
                                <span>Subtotal</span>
                                <span className="font-semibold">${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Delivery</span>
                                <span className="font-semibold text-green-600">FREE</span>
                            </div>
                            <div className="border-t border-slate-100 pt-3 flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span className="text-primary">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Delivery Address</label>
                            <textarea
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter delivery address"
                                rows={3}
                            />
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full bg-primary text-background-dark font-bold py-4 rounded-lg hover:brightness-95 transition-all"
                        >
                            {user ? 'Proceed to Checkout' : 'Login to Checkout'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
