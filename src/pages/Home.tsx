import { Link } from 'react-router-dom';
import { Search, Pill, TestTube, CheckCircle, ArrowRight } from 'lucide-react';
import { MOCK_MEDICINES, MOCK_LAB_TESTS } from '../lib/mockData';
import { useCart } from '../context/CartContext';

export function Home() {
    const { addToCart } = useCart();

    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
            {/* Hero Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 bg-primary/20 text-accent-teal text-xs font-bold tracking-widest uppercase rounded-full">
                            Fastest Delivery in 60 Mins
                        </span>
                        <h1 className="text-medical-blue text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Your Health, <br />
                            <span className="text-primary drop-shadow-sm">Simplified.</span>
                        </h1>
                        <p className="text-slate-600 text-lg max-w-lg">
                            Order authentic medicines, health products and book diagnostic tests from top-certified labs near you.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="relative flex items-center w-full max-w-xl group">
                            <div className="absolute left-4 text-slate-400">
                                <Search className="w-5 h-5" />
                            </div>
                            <input
                                className="w-full h-16 pl-12 pr-32 rounded-xl border-none bg-white shadow-xl focus:ring-2 focus:ring-primary text-slate-700 placeholder:text-slate-400 transition-all"
                                placeholder="Search for Insulin, Paracetamol, Blood Test..."
                                type="text"
                            />
                            <button className="absolute right-2 h-12 px-6 bg-primary text-background-dark font-bold rounded-lg hover:brightness-105 transition-all">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
                        alt="Healthcare professional"
                    />
                    <div className="absolute bottom-6 right-6 z-20 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-4 max-w-xs">
                        <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-accent-teal">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">100% Verified</p>
                            <p className="text-xs text-slate-500">All medicines are checked by certified pharmacists</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Services */}
            <section className="mb-16">
                <h3 className="text-medical-blue text-2xl font-bold mb-6 flex items-center gap-2">
                    Quick Services <div className="h-1 w-12 bg-primary rounded-full"></div>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        to="/medicines"
                        className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all border-l-4 border-l-primary cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-accent-teal">
                                <Pill className="w-8 h-8" />
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Flat 20% OFF</span>
                        </div>
                        <h4 className="text-xl font-bold text-medical-blue mb-2">Order Medicines</h4>
                        <p className="text-slate-500 mb-6 max-w-xs">
                            Upload your prescription and we'll deliver your medicines to your doorstep.
                        </p>
                        <div className="flex gap-3">
                            <span className="px-5 py-2.5 bg-primary text-background-dark font-bold rounded-lg text-sm hover:brightness-105">
                                Order Now
                            </span>
                        </div>
                    </Link>

                    <Link
                        to="/lab-tests"
                        className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all border-l-4 border-l-blue-500 cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <TestTube className="w-8 h-8" />
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Home Collection</span>
                        </div>
                        <h4 className="text-xl font-bold text-medical-blue mb-2">Book Lab Tests</h4>
                        <p className="text-slate-500 mb-6 max-w-xs">
                            Certified labs, accurate reports, and samples collected from your comfort.
                        </p>
                        <div className="flex gap-3">
                            <span className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg text-sm hover:bg-blue-700 shadow-blue-200 shadow-lg">
                                View Tests
                            </span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Popular Health Packages */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-medical-blue text-2xl font-bold">Popular Health Packages</h3>
                        <p className="text-slate-500 text-sm">Best value preventive checkups for your family</p>
                    </div>
                    <Link to="/lab-tests" className="text-accent-teal text-sm font-bold flex items-center gap-1 hover:underline">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_LAB_TESTS.slice(0, 3).map((test) => (
                        <div
                            key={test.id}
                            className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center justify-between">
                                <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase rounded tracking-wider">
                                    Most Popular
                                </span>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold text-slate-800">{test.name}</h5>
                                <p className="text-xs text-slate-500">Includes {test.parameters} tests</p>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                                <div>
                                    {test.originalPrice && (
                                        <span className="text-xs text-slate-400 line-through">${test.originalPrice}</span>
                                    )}
                                    <p className="text-xl font-bold text-slate-900">${test.price}</p>
                                </div>
                                <button
                                    onClick={() => addToCart(test)}
                                    className="px-4 py-2 bg-primary text-background-dark font-bold text-xs rounded-lg shadow-sm hover:brightness-95"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trending Medicines */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-medical-blue text-2xl font-bold">Trending Medicines</h3>
                    <Link to="/medicines" className="text-accent-teal text-sm font-bold flex items-center gap-1 hover:underline">
                        View All Medicines <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {MOCK_MEDICINES.slice(0, 5).map((medicine) => (
                        <div
                            key={medicine.id}
                            className="group bg-white p-4 rounded-2xl border border-slate-100 hover:shadow-md transition-all flex flex-col"
                        >
                            <div className="relative aspect-square bg-slate-50 rounded-xl mb-4 overflow-hidden p-4">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform rounded"
                                    src={medicine.image}
                                    alt={medicine.name}
                                />
                                {medicine.discount && (
                                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded">
                                        {medicine.discount}% OFF
                                    </span>
                                )}
                            </div>
                            <h6 className="text-sm font-bold text-slate-800 truncate mb-1">{medicine.name}</h6>
                            <p className="text-[10px] text-slate-400 mb-3 uppercase tracking-tighter">{medicine.manufacturer}</p>
                            <div className="mt-auto flex items-center justify-between">
                                <div>
                                    {medicine.originalPrice && (
                                        <span className="text-[10px] text-slate-400 line-through">${medicine.originalPrice}</span>
                                    )}
                                    <p className="text-sm font-black text-slate-900">${medicine.price}</p>
                                </div>
                                <button
                                    onClick={() => addToCart(medicine)}
                                    className="size-8 bg-slate-100 text-slate-700 hover:bg-primary hover:text-background-dark rounded-lg flex items-center justify-center transition-all"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
