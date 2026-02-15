import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="bg-aether-black min-h-screen text-aether-text selection:bg-white selection:text-black flex flex-col font-sans">

            {/* Fixed Navbar */}
            <header className="fixed top-0 left-0 w-full z-[100] p-6 md:p-8 flex justify-between items-center text-white pointer-events-none bg-gradient-to-b from-black/50 to-transparent">

                {/* Logo - Hidden on Home Page */}
                {!isHome ? (
                    <NavLink to="/" className="text-xl md:text-2xl font-bold tracking-tighter uppercase pointer-events-auto hover:opacity-70 transition-opacity flex items-baseline relative z-50">
                        <span className="text-[#FF0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">IC6</span>
                        <div className="hidden md:block">
                            <span className="text-white ml-2">performance.com</span>
                        </div>
                    </NavLink>
                ) : (
                    <div className="relative z-50"></div>
                )}

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest pointer-events-auto">
                    <NavItem to="/" label="Home" />
                    <NavItem to="/systems" label="Systems" />
                    <NavItem to="/engineering" label="Engineering" />
                    <NavItem to="/quality" label="Quality" />
                    <NavItem to="/final" label="Global" />
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden pointer-events-auto relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <div className="w-8 flex flex-col items-end gap-1.5">
                        <motion.span
                            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                            className="w-full h-0.5 bg-white block origin-center transition-transform shadow-sm"
                        />
                        <motion.span
                            animate={{ opacity: isMenuOpen ? 0 : 1 }}
                            className="w-2/3 h-0.5 bg-white block transition-opacity shadow-sm"
                        />
                        <motion.span
                            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                            className="w-full h-0.5 bg-white block origin-center transition-transform shadow-sm"
                        />
                    </div>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop for click-to-close */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 z-[80]"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-0 left-0 w-full h-[75vh] bg-[#050505] border-b border-white/10 z-[90] flex flex-col justify-between pt-24 shadow-2xl relative overflow-hidden"
                        >
                            {/* Carbon Fiber Background Pattern */}
                            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                                style={{
                                    backgroundImage: `
                                         linear-gradient(45deg, #151515 25%, transparent 25%, transparent 75%, #151515 75%, #151515),
                                         linear-gradient(45deg, #151515 25%, transparent 25%, transparent 75%, #151515 75%, #151515)
                                     `,
                                    backgroundPosition: '0 0, 10px 10px',
                                    backgroundSize: '20px 20px'
                                }}
                            />
                            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px)'
                                }}
                            />

                            <div className="flex-grow flex flex-col justify-center items-center space-y-8 relative z-50 text-white">
                                <MobileNavItem to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
                                <MobileNavItem to="/systems" label="Systems" onClick={() => setIsMenuOpen(false)} />
                                <MobileNavItem to="/engineering" label="Engineering" onClick={() => setIsMenuOpen(false)} />
                                <MobileNavItem to="/quality" label="Quality" onClick={() => setIsMenuOpen(false)} />
                                <MobileNavItem to="/final" label="Final" onClick={() => setIsMenuOpen(false)} />
                            </div>

                            {/* Mobile Footer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="relative z-50 w-full text-center pb-4"
                            >
                                <div className="flex flex-col items-center">
                                    <h4 className="text-lg font-bold tracking-tighter uppercase flex items-center justify-center">
                                        <span className="text-[#FF0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">IC6</span>
                                        <span className="text-white ml-2 text-xs tracking-widest">performance.com</span>
                                    </h4>
                                    <p className="text-[9px] font-mono text-gray-500 mt-1 tracking-[0.3em] uppercase">
                                        <span className="text-[#FF0000]">EST</span> -2026
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Global Minimal Footer */}
            <footer className="bg-black text-white py-12 border-t border-white/5 text-[10px] md:text-xs font-mono uppercase tracking-widest text-center z-10 relative">
                <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center opacity-50 hover:opacity-100 transition-opacity duration-500 gap-4">
                    <span>iC6 Performance Engineering Systems</span>
                    <span className="md:ml-auto">&copy; 2026 iC6. All rights reserved.</span>
                </div>
            </footer>

        </div>
    );
};

const NavItem = ({ to, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `transition-all duration-300 hover:text-white ${isActive ? 'text-white font-bold opacity-100' : 'text-gray-400 opacity-70'}`
        }
    >
        {label}
    </NavLink>
);

const MobileNavItem = ({ to, label, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `block text-3xl font-bold uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-[#FF0000]' : 'text-white hover:text-gray-300'}`
        }
    >
        {label}
    </NavLink>
);

export default Layout;
