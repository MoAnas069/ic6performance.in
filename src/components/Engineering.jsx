import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Engineering = () => {
    return (
        <section id="engineering" className="bg-aether-black text-aether-text relative z-10 border-t border-white/5">

            {/* HERO INTRODUCTION */}
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6"
                >
                    Aerodynamic<br />Performance Systems
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="text-gray-400 font-light max-w-2xl text-lg md:text-xl leading-relaxed"
                >
                    Precision-engineered components designed to enhance airflow efficiency, stability, and aggressive performance aesthetics.
                </motion.p>
            </div>

            {/* SYSTEM 1: WINGS & SPOILERS */}
            <SystemRow
                title="Performance Wings & Spoilers"
                description="Designed to increase downforce, improve stability, and enhance high-speed control."
                image="/assets/wing.png"
                align="left"
            />

            {/* SYSTEM 2: FRONT SPLITTERS */}
            <SystemRow
                title="Front Splitters & Lip Systems"
                description="Engineered to optimize airflow, reduce front-end lift, and improve aerodynamic balance."
                image="/assets/splitter.png"
                align="right"
            />

            {/* SYSTEM 3: REAR DIFFUSERS */}
            <SystemRow
                title="Rear Diffuser Systems"
                description="Designed to manage underbody airflow, reduce turbulence, and improve overall aerodynamic efficiency."
                image="/assets/diffuser.png"
                align="left"
            />

            <div className="h-32"></div>

        </section>
    );
};

const SystemRow = ({ title, description, image, align }) => {
    const isLeft = align === 'left';

    return (
        <div className="min-h-screen py-16 md:py-24 flex items-center relative overflow-hidden group">
            <div className={`container mx-auto px-6 md:px-8 flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'} items-center gap-12 md:gap-32`}>

                {/* Visual Side */}
                <div className="w-full md:w-3/5 perspective-[1000px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotateY: isLeft ? 5 : -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative aspect-video bg-[#080808] border border-white/5 overflow-hidden group-hover:border-white/20 transition-colors duration-700 shadow-2xl"
                    >
                        {/* Image */}
                        <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]" />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                        {/* Interactive Highlight */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
                    </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/5 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    >
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 uppercase leading-none">{title}</h3>
                        <div className="w-16 h-1 bg-aether-red mb-6 md:mb-8 mx-auto md:mx-0" />
                        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">{description}</p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Engineering;
