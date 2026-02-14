import React from 'react';
import { motion } from 'framer-motion';

const GlobalCapability = () => {
    return (
        <section className="min-h-screen bg-aether-black flex items-center justify-center relative py-32 overflow-hidden">
            {/* Layered background depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-20 pointer-events-none" />

            <div className="container mx-auto px-8 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-5xl md:text-9xl font-bold tracking-tighter text-white mb-24"
                >
                    BUILT FOR<br />THE WORLD
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-32 text-gray-500 uppercase tracking-widest text-sm md:text-base font-mono">
                    {["Worldwide sourcing", "Scalable production", "Consistent excellence"].map((text, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                        >
                            {text}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalCapability;
