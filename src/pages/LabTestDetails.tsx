import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { MOCK_LAB_TESTS } from '../lib/mockData';
import { useCart } from '../context/CartContext';
import { CheckCircle, Clock, Beaker, FileText, Home, ChevronRight, Calendar, MapPin, Shield, Smartphone, CreditCard, Award } from 'lucide-react';

export function LabTestDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedDate, setSelectedDate] = useState('24');
    const [selectedTime, setSelectedTime] = useState('06:00 - 07:00 AM');

    const test = MOCK_LAB_TESTS.find(t => t.id === id);

    if (!test) {
        return (
            <div className="flex-1 flex items-center justify-center p-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Test not found</h2>
                    <Link to="/lab-tests" className="text-primary font-semibold hover:underline">
                        Back to Lab Tests
                    </Link>
                </div>
            </div>
        );
    }

    const handleBookNow = () => {
        addToCart(test);
        navigate('/cart');
    };

    const dates = [
        { day: 'TOM', date: '24', month: 'Feb' },
        { day: 'FRI', date: '25', month: 'Feb' },
        { day: 'SAT', date: '26', month: 'Feb' },
        { day: 'SUN', date: '27', month: 'Feb' },
    ];

    const timeSlots = [
        '06:00 - 07:00 AM',
        '07:00 - 08:00 AM',
        '08:00 - 09:00 AM',
        '09:00 - 10:00 AM',
    ];

    const testCategories = [
        { name: 'Lipid Profile', count: 9, details: 'Includes Cholesterol, HDL, LDL, VLDL, Triglycerides...' },
        { name: 'Liver Function Test', count: 11, details: 'Includes Bilirubin, SGOT, SGPT, Alkaline Phosphatase...' },
        { name: 'Kidney Function Test', count: 8, details: 'Includes Creatinine, Urea, Uric Acid, BUN...' },
        { name: 'Thyroid Profile', count: 3, details: 'Includes T3, T4, TSH Ultra-sensitive...' },
    ];

    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/lab-tests" className="hover:text-primary transition-colors">Lab Tests</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900 font-semibold">{test.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Test Details */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Hero Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                            <div>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-emerald-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                                    <CheckCircle className="w-3 h-3" /> NABL Accredited Lab
                                </span>
                                <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-2">{test.name}</h1>
                                <p className="text-slate-600">{test.description}</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl text-center min-w-[120px]">
                                <p className="text-xs font-bold text-emerald-600 uppercase">Reports in</p>
                                <p className="text-2xl font-extrabold text-slate-900">24 hrs</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-100">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-slate-400 uppercase">Tests</span>
                                <span className="font-bold text-slate-900">{test.parameters} Parameters</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-slate-400 uppercase">Sample Type</span>
                                <span className="font-bold text-slate-900">Blood, Urine</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-slate-400 uppercase">Gender</span>
                                <span className="font-bold text-slate-900">All</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-slate-400 uppercase">Age Group</span>
                                <span className="font-bold text-slate-900">5+ Years</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                Test Preparation
                            </h3>
                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                                <ul className="space-y-2 text-amber-900 text-sm font-medium">
                                    <li className="flex gap-2">
                                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        Fasting required for 10-12 hours. Do not consume tea, coffee, or snacks. Water is permitted.
                                    </li>
                                    <li className="flex gap-2">
                                        <Beaker className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        Consult your physician before stopping any regular medications.
                                    </li>
                                    <li className="flex gap-2">
                                        <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        Avoid alcohol consumption 24 hours prior to the test.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Parameters Section */}
                    <section>
                        <h3 className="text-xl font-bold mb-6">What's Included in this Package?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {testCategories.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 bg-white rounded-xl border border-slate-100 flex items-start justify-between group hover:border-primary transition-colors cursor-pointer"
                                >
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{category.name} ({category.count})</h4>
                                        <p className="text-xs text-slate-500">{category.details}</p>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-primary text-2xl">+</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 font-bold hover:bg-slate-50 transition-all">
                            View all {test.parameters} parameters
                        </button>
                    </section>

                    {/* Process Steps */}
                    <section className="bg-slate-900 text-white rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-8">How it works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <div className="size-12 bg-primary rounded-xl flex items-center justify-center text-slate-900">
                                    <Home className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Home Collection</h4>
                                    <p className="text-sm text-slate-400">Certified phlebotomist arrives at your preferred time slot for sample collection.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="size-12 bg-primary rounded-xl flex items-center justify-center text-slate-900">
                                    <Beaker className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Lab Processing</h4>
                                    <p className="text-sm text-slate-400">Samples are processed in our NABL & CAP accredited automated laboratories.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="size-12 bg-primary rounded-xl flex items-center justify-center text-slate-900">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Digital Report</h4>
                                    <p className="text-sm text-slate-400">Receive an easy-to-read smart report on your email & WhatsApp within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section>
                        <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
                        <div className="space-y-3">
                            {[
                                'Why is fasting required for this test?',
                                'How will I get my reports?',
                                'Can I cancel or reschedule my booking?'
                            ].map((question, idx) => (
                                <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 cursor-pointer hover:border-primary transition-colors">
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-slate-900">{question}</p>
                                        <ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Booking Widget */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-4">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                            <div className="bg-emerald-50 p-6 flex justify-between items-center">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        {test.originalPrice && (
                                            <>
                                                <span className="text-slate-500 line-through text-sm font-medium">${test.originalPrice}</span>
                                                <span className="bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{test.discount}% OFF</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="text-3xl font-black text-slate-900">${test.price}</div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end text-emerald-600 font-bold mb-1">
                                        <CheckCircle className="w-4 h-4 mr-1" />
                                        Fast Booking
                                    </div>
                                    <p className="text-xs text-slate-500">Free Home Collection</p>
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Date Selection */}
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">
                                        1. Select Collection Date
                                    </label>
                                    <div className="flex gap-2 overflow-x-auto pb-2">
                                        {dates.map((date) => (
                                            <div
                                                key={date.date}
                                                onClick={() => setSelectedDate(date.date)}
                                                className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center cursor-pointer border-2 transition-all ${selectedDate === date.date
                                                        ? 'bg-primary text-slate-900 border-primary'
                                                        : 'bg-slate-50 text-slate-900 border-transparent hover:border-slate-200'
                                                    }`}
                                            >
                                                <span className="text-xs font-bold">{date.day}</span>
                                                <span className="text-lg font-black">{date.date}</span>
                                                <span className="text-[10px] font-bold uppercase">{date.month}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Selection */}
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">
                                        2. Select Time Slot
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {timeSlots.map((slot) => (
                                            <button
                                                key={slot}
                                                onClick={() => setSelectedTime(slot)}
                                                className={`py-3 px-2 rounded-lg border-2 text-xs font-bold flex items-center justify-center gap-1 transition-all ${selectedTime === slot
                                                        ? 'border-primary bg-primary/10 text-emerald-800'
                                                        : 'border-slate-100 text-slate-600 hover:border-slate-200'
                                                    }`}
                                            >
                                                <Calendar className="w-3 h-3" />
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-[10px] text-emerald-600 font-bold mt-2 text-center uppercase">
                                        Early morning slots recommended for fasting tests
                                    </p>
                                </div>

                                {/* Address Preview */}
                                <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-3">
                                    <div className="size-10 bg-white rounded-lg flex items-center justify-center text-slate-400">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Collection Address</p>
                                        <p className="text-xs font-bold text-slate-900 truncate">Home - 42, Green Park Avenue...</p>
                                    </div>
                                    <button className="text-primary text-[10px] font-black uppercase">Change</button>
                                </div>

                                <button
                                    onClick={handleBookNow}
                                    className="w-full bg-primary hover:bg-emerald-400 text-slate-900 font-extrabold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 text-lg"
                                >
                                    Book Now
                                    <ChevronRight className="w-5 h-5" />
                                </button>

                                <p className="text-center text-[10px] text-slate-400">
                                    By booking, you agree to our Terms and Health Protocols.
                                </p>
                            </div>
                        </div>

                        {/* Trust Card */}
                        <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-4">
                            <div className="size-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">Safe & Hygienic</p>
                                <p className="text-xs text-slate-500">WHO compliant safety protocols</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="mt-16 pb-16">
                <h3 className="text-center text-2xl font-extrabold mb-10 text-slate-900">Why trust HealthPlatform?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center space-y-3">
                        <div className="inline-flex size-14 bg-primary/20 rounded-full items-center justify-center text-emerald-600">
                            <Award className="w-7 h-7" />
                        </div>
                        <h5 className="font-bold">Certified Phlebotomists</h5>
                        <p className="text-xs text-slate-500 leading-relaxed">Highly trained & experienced technicians for painless collection.</p>
                    </div>
                    <div className="text-center space-y-3">
                        <div className="inline-flex size-14 bg-primary/20 rounded-full items-center justify-center text-emerald-600">
                            <Beaker className="w-7 h-7" />
                        </div>
                        <h5 className="font-bold">Advanced Labs</h5>
                        <p className="text-xs text-slate-500 leading-relaxed">Fully automated robotic labs for 99.9% accurate clinical results.</p>
                    </div>
                    <div className="text-center space-y-3">
                        <div className="inline-flex size-14 bg-primary/20 rounded-full items-center justify-center text-emerald-600">
                            <Smartphone className="w-7 h-7" />
                        </div>
                        <h5 className="font-bold">Smart Reports</h5>
                        <p className="text-xs text-slate-500 leading-relaxed">Easy-to-understand color coded digital reports on your device.</p>
                    </div>
                    <div className="text-center space-y-3">
                        <div className="inline-flex size-14 bg-primary/20 rounded-full items-center justify-center text-emerald-600">
                            <CreditCard className="w-7 h-7" />
                        </div>
                        <h5 className="font-bold">Best Price Promise</h5>
                        <p className="text-xs text-slate-500 leading-relaxed">Transparent pricing with no hidden home collection charges.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
