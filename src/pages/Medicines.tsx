import { MOCK_MEDICINES } from '../lib/mockData';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

export function Medicines() {
    const { addToCart } = useCart();

    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-medical-blue mb-2">Medicine Store</h1>
                <p className="text-slate-600">Browse our collection of authentic medicines and health products</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {MOCK_MEDICINES.map((medicine) => (
                    <div
                        key={medicine.id}
                        className="group bg-white p-4 rounded-2xl border border-slate-100 hover:shadow-lg transition-all flex flex-col"
                    >
                        <div className="relative aspect-square bg-slate-50 rounded-xl mb-4 overflow-hidden">
                            <img
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                src={medicine.image}
                                alt={medicine.name}
                            />
                            {medicine.discount && (
                                <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded">
                                    {medicine.discount}% OFF
                                </span>
                            )}
                            {medicine.prescriptionRequired && (
                                <span className="absolute top-2 right-2 px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">
                                    Rx
                                </span>
                            )}
                        </div>

                        <h6 className="text-sm font-bold text-slate-800 mb-1 line-clamp-2">{medicine.name}</h6>
                        <p className="text-[10px] text-slate-400 mb-2 uppercase">{medicine.manufacturer}</p>
                        <p className="text-xs text-slate-600 mb-4 line-clamp-2 flex-1">{medicine.description}</p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div>
                                {medicine.originalPrice && (
                                    <span className="text-[10px] text-slate-400 line-through block">${medicine.originalPrice}</span>
                                )}
                                <p className="text-lg font-black text-slate-900">${medicine.price}</p>
                            </div>
                            <button
                                onClick={() => addToCart(medicine)}
                                className="flex items-center gap-1 px-4 py-2 bg-primary text-background-dark font-bold text-xs rounded-lg hover:brightness-95 transition-all"
                            >
                                <ShoppingCart className="w-3 h-3" />
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
