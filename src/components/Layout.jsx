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
            <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">

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
                    className="md:hidden pointer-events-auto relative z-50 p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <div className="w-8 flex flex-col items-end gap-1.5">
                        <motion.span
                            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                            className="w-full h-0.5 bg-white block origin-center transition-transform"
                        />
                        <motion.span
                            animate={{ opacity: isMenuOpen ? 0 : 1 }}
                            className="w-2/3 h-0.5 bg-white block transition-opacity"
                        />
                        <motion.span
                            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                            className="w-full h-0.5 bg-white block origin-center transition-transform"
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
                            className="fixed inset-0 bg-black/80 z-30"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-0 left-0 w-full h-[75vh] bg-neutral-900 border-b border-white/10 z-40 flex flex-col items-center justify-center shadow-2xl"
                        >
                            <div className="flex flex-col space-y-8 text-center">
                                <MobileNavItem to="/" label="Home" index={0} />
                                <MobileNavItem to="/systems" label="Systems" index={1} />
                                <MobileNavItem to="/engineering" label="Engineering" index={2} />
                                <MobileNavItem to="/quality" label="Quality" index={3} />
                                <MobileNavItem to="/final" label="Final" index={4} />
                            </div>

                            {/* Mobile Footer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-12 text-xs font-mono uppercase tracking-widest text-gray-500"
                            >
                                Est. 2026 — IC6 Performance
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

const MobileNavItem = ({ to, label, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + (index * 0.1) }}
    >
        <NavLink
            to={to}
            className={({ isActive }) =>
                `text-3xl font-bold uppercase tracking-tight ${isActive ? 'text-[#FF0000]' : 'text-white'}`
            }
        >
            {label}
        </NavLink>
    </motion.div>
);

export default Layout;
