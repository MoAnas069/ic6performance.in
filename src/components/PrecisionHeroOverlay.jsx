import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const PrecisionHeroOverlay = () => {
    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8 md:p-16 z-50">
            {/* Top Branding */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex justify-center items-start w-full"
            >
                <div className="w-full flex flex-col items-center">
                    <Logo className="scale-75 md:scale-100 origin-top" />

                    {/* Optional Status Text - Now matching the font style */}
                    <div className="mt-4 flex flex-col items-center space-y-1 font-['Michroma']">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full animate-pulse blur-[1px]" />
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest opacity-70">
                                System Online
                            </span>
                        </div>
                    </div>
                </div>

            </motion.div>

            {/* Bottom Scroll Prompt */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="flex justify-center"
            >
                <div className="flex flex-col items-center gap-2 font-['Michroma']">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll to Initialize</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-px h-12 bg-gradient-to-b from-[#FF0000] to-transparent"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default PrecisionHeroOverlay;
