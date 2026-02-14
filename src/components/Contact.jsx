import React from 'react';


const Contact = () => {
    return (
        <footer id="contact" className="bg-black text-white py-32 border-t border-white/10">
            <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start">

                {/* Brand */}
                <div className="mb-16 md:mb-0">
                    <h2 className="text-2xl font-bold tracking-tighter uppercase mb-8">iC6 Performance</h2>
                    <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
                        Defining the future of automotive aerodynamics through uncompromising engineering and material science.
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-16">
                    <div>
                        <h4 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><a href="#" className="hover:text-gray-400 transition-colors">Engineering</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors">Systems</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors">Performance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><a href="mailto:info@ic6.com" className="hover:text-gray-400 transition-colors">Inquiries</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors">Press</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-8 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 font-mono">
                <span>&copy; 2026 iC6 Performance Systems. All rights reserved.</span>
                <span className="mt-4 md:mt-0">Designed in Void</span>
            </div>
        </footer>
    );
};

export default Contact;
