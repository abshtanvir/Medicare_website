import { MOCK_LAB_TESTS } from '../lib/mockData';
import { useCart } from '../context/CartContext';
import { TestTube, CheckCircle } from 'lucide-react';

export function LabTests() {
    const { addToCart } = useCart();

    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-medical-blue mb-2">Lab Test Booking</h1>
                <p className="text-slate-600">Book diagnostic tests and health checkup packages with home collection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_LAB_TESTS.map((test) => (
                    <div
                        key={test.id}
                        className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col hover:shadow-xl transition-all"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-primary/20 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                NABL Accredited
                            </span>
                            <TestTube className="w-6 h-6 text-primary" />
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{test.name}</h3>
                            <p className="text-sm text-slate-600 mb-3">{test.description}</p>
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span>Includes {test.parameters} parameters</span>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-100">
                            <div className="flex items-end justify-between mb-4">
                                <div>
                                    {test.originalPrice && (
                                        <span className="text-sm text-slate-400 line-through block">${test.originalPrice}</span>
                                    )}
                                    <p className="text-2xl font-black text-slate-900">${test.price}</p>
                                </div>
                                {test.discount && (
                                    <div className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">
                                        Save {test.discount}%
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => addToCart(test)}
                                className="w-full bg-primary text-background-dark font-black py-3 rounded-lg hover:brightness-95 transition-all"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
