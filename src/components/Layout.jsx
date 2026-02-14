import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="bg-aether-black min-h-screen text-aether-text selection:bg-white selection:text-black flex flex-col">

            {/* Fixed Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">

                {/* Logo - Hidden on Home Page */}
                {!isHome ? (
                    <NavLink to="/" className="text-xl md:text-2xl font-bold tracking-tighter uppercase pointer-events-auto hover:opacity-70 transition-opacity flex items-baseline">
                        <span className="text-[#FF0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">IC6</span>
                        <span className="text-white ml-2">performance.com</span>
                    </NavLink>
                ) : (
                    <div></div> // Spacer to keep Nav on right if needed, or just null. 
                    // justify-between with one item (Nav) puts it on right? No, flex-start/end depending.
                    // If justify-between and only 1 child?
                    // Actually, if we want Nav on the right always, we need a placeholder or just ensure Nav is 2nd item.
                    // If left is null, justify-between might center the Nav or put it left.
                    // Let's use <div></div> to be safe if we want Nav on right, OR just rely on justify-between behavior (left/right).
                    // If items=2: Left / Right. If items=1: Left? 
                    // Let's put an empty div to maintain standard "Left-Right" spacing if Home logo is hidden, 
                    // OR if the user wants the Nav to stay on the right. 
                    // I will render an empty div to push Nav to the right.
                )}

                <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest pointer-events-auto">
                    <NavItem to="/" label="Home" />
                    <NavItem to="/systems" label="Systems" />
                    <NavItem to="/engineering" label="Engineering" />
                    <NavItem to="/quality" label="Quality" />
                    <NavItem to="/final" label="Final" />
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Global Minimal Footer */}
            <footer className="bg-black text-white py-12 border-t border-white/5 text-xs font-mono uppercase tracking-widest text-center z-10 relative">
                <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
                    <span>iC6 Performance Engineering Systems</span>
                    <span className="mt-4 md:mt-0">&copy; 2026 iC6. All rights reserved.</span>
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

export default Layout;
