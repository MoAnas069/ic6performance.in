import React from 'react';
import { motion } from 'framer-motion';

const PrecisionManufacturing = () => {
    return (
        <section className="bg-aether-black py-32 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-8 relative z-20 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-6"
                >
                    Precision Assembly
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-gray-400 font-light text-xl tracking-wide max-w-2xl mx-auto"
                >
                    State-of-the-art facilities merging human craftsmanship with automated precision.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full relative aspect-video md:aspect-[21/9] bg-[#050505] overflow-hidden"
            >
                <video
                    src="/images/video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
};

export default PrecisionManufacturing;
