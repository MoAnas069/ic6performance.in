import React from 'react';
import { motion } from 'framer-motion';

const EngineeredExtreme = () => {
    return (
        <section className="min-h-screen bg-aether-black flex flex-col justify-center items-center relative overflow-hidden py-32">
            {/* Subtle moving gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-aether-black via-[#0a0a0a] to-aether-black animate-gradient-slow opacity-50" />

            <div className="container mx-auto px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-24 uppercase"
                >
                    Engineered for<br />the Extreme
                </motion.h2>

                <div className="flex flex-col items-center space-y-4">
                    {["Aerospace-grade carbon fiber", "Precision moulding", "Structural integrity", "Relentless quality control"].map((item, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-lg md:text-xl text-gray-400 font-light tracking-wide uppercase"
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeredExtreme;
