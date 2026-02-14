import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PerformanceFeature = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <section ref={ref} className="min-h-screen bg-aether-black text-white py-32 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center gap-16 md:gap-32">
                {/* Left: Oversized Product Image */}
                <div className="w-full md:w-1/2 relative aspect-square overflow-hidden group">
                    {/* Subtle Glow on Hover */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20 mix-blend-overlay" />

                    <motion.div style={{ y }} className="w-full h-full relative z-10">
                        <div className="w-full h-full bg-gradient-to-br from-[#111] to-black flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors duration-700">
                            <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-20" />
                            <span className="text-white/10 text-9xl font-bold uppercase tracking-tighter select-none">
                                Aero<br />Sys
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Minimal Text */}
                <div className="w-full md:w-1/2">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-4xl md:text-6xl font-light tracking-tighter mb-12"
                    >
                        Performance<br />Aerodynamic<br />Systems
                    </motion.h3>
                    <div className="space-y-6 text-gray-500 font-light text-xl leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Derived from computational fluid dynamics.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Tested in wind tunnels.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-white"
                        >
                            Built to dominate.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceFeature;
