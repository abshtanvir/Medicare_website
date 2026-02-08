import { Activity, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 px-6 lg:px-20">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                            <Activity className="w-5 h-5" />
                        </div>
                        <h2 className="text-white text-xl font-extrabold tracking-tight">HealthPlatform</h2>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Your trusted partner for all healthcare needs. Authentic medicines, reliable lab tests, and expert doctor consultations - all at your fingertips.
                    </p>
                    <div className="flex gap-4">
                        <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all" href="#">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all" href="#">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h5 className="text-white font-bold mb-6">Quick Links</h5>
                    <ul className="space-y-4 text-sm">
                        <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/careers">Career</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/locations">Lab Locations</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/pharmacy">Pharmacy Near Me</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-bold mb-6">Policies</h5>
                    <ul className="space-y-4 text-sm">
                        <li><Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/terms">Terms and Conditions</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/editorial">Editorial Policy</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/returns">Return Policy</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <h5 className="text-white font-bold">Download Our App</h5>
                    <p className="text-xs">Get extra 10% OFF on your first app order</p>
                    <div className="flex flex-col gap-3">
                        <button className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-all">
                            <span className="text-2xl">📱</span>
                            <div className="text-left">
                                <p className="text-[10px] uppercase">Download on</p>
                                <p className="text-xs font-bold text-white">Google Play</p>
                            </div>
                        </button>
                        <button className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-all">
                            <span className="text-2xl">🍎</span>
                            <div className="text-left">
                                <p className="text-[10px] uppercase">Download on</p>
                                <p className="text-xs font-bold text-white">App Store</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs">
                <p>© 2024 HealthPlatform. All rights reserved. ISO Certified & DEA Registered.</p>
            </div>
        </footer>
    );
}
