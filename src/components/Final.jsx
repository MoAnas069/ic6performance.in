import React from 'react';
import { motion } from 'framer-motion';

const Final = () => {
    return (
        <section id="final" className="min-h-screen bg-aether-black text-white flex flex-col items-center justify-center relative overflow-hidden pb-48">

            <div className="container mx-auto px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-tight mb-16">
                        We don't just sell parts.<br />
                        <span className="text-gray-500">We supply performance ecosystems.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-4xl mx-auto"
                />
            </div>

            {/* Silence / Footer Area */}
            <div className="absolute bottom-12 text-center w-full text-xs text-gray-800 font-mono tracking-widest uppercase">
                iC6 Performance &copy; 2026
            </div>
        </section>
    );
};

export default Final;
