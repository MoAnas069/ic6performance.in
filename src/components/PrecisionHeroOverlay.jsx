import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PrecisionHeroOverlay = () => {
    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8 md:p-16 z-50">
            {/* Top Branding */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex justify-between items-start"
            >
                <div className="w-full text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase relative z-50 flex flex-col md:block items-center">
                        <span className="text-[#FF0000] drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">IC6</span>
                        <span className="text-white text-lg md:text-6xl md:ml-3 tracking-widest md:tracking-tighter mt-2 md:mt-0">performance.com</span>
                    </h1>
                    <p className="text-[10px] md:text-sm font-mono text-gray-400 mt-3 md:mt-2 tracking-[0.3em] uppercase">
                        <span className="text-[#FF0000]">EST</span> -2026
                    </p>
                </div>

                {/* Optional Status Indicators */}
                <div className="hidden md:flex flex-col items-end space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#FF0000] rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-gray-500 uppercase">System Online</span>
                    </div>
                    <div className="text-xs font-mono text-gray-600 uppercase">v2.0.4</div>
                </div>
            </motion.div>

            {/* Bottom Scroll Prompt */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="flex justify-center"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Scroll to Initialize</span>
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
