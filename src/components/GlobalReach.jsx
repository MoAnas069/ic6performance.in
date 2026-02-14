import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GlobalReach = () => {
    return (
        <section className="min-h-screen bg-aether-black flex flex-col items-center justify-center relative overflow-hidden py-32 text-center">

            {/* BACKGROUND: Abstract World Map & Particles */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {/* Simulated World Map Dots/Lines using SVG */}
                <svg className="w-full h-full text-white/5" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
                    {/* Abstract Continents (Simplified Polygons) */}
                    <path d="M200,150 Q250,100 300,150 T350,200 T250,250 Z" fill="currentColor" /> {/* NA-ish */}
                    <path d="M450,150 Q500,100 550,150 T550,250 T450,300 Z" fill="currentColor" /> {/* EU/Africa-ish */}
                    <path d="M650,150 Q750,100 850,150 T800,300 T700,250 Z" fill="currentColor" /> {/* Asia-ish */}

                    {/* Longitude / Latitude Lines */}
                    <line x1="0" y1="125" x2="1000" y2="125" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 15" />
                    <line x1="0" y1="250" x2="1000" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 15" />
                    <line x1="0" y1="375" x2="1000" y2="375" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 15" />

                    {/* Connection Arcs */}
                    <motion.path
                        d="M250,200 Q450,50 550,200"
                        fill="none" stroke="#FF0000" strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <motion.path
                        d="M550,200 Q700,100 800,200"
                        fill="none" stroke="#FF0000" strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 2 }}
                    />
                </svg>

                {/* Floating Particles */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
            </div>

            {/* CURSOR INTERACTION GLOW */}
            {/* Note: Ideally implemented with mouse tracking, but for simplicity/performance in this component we keep it static or css hover */}
            <div className="absolute inset-0 bg-radial-gradient from-aether-red/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />


            {/* CONTENT */}
            <div className="container mx-auto px-8 relative z-10 max-w-4xl">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-5xl md:text-9xl font-bold tracking-tighter text-white uppercase mb-16"
                >
                    Built for the<br />
                    <span className="text-[#FF0000] drop-shadow-[0_0_20px_rgba(255,0,0,0.6)]">World</span>
                </motion.h1>

                {/* Main Statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-24"
                >
                    Whether you're in the heart of Europe, the Americas, the Middle East, or Asia,
                    <span className="text-white font-normal mx-2">IC6 Performance</span>
                    delivers state-of-the-art aerodynamic components directly to your door — ensuring your vehicle receives the ultimate in performance enhancement and luxury aesthetics.
                </motion.p>

                {/* Supporting Micro Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-gray-500 mb-24"
                >
                    <span className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-aether-red rounded-full"></span> Worldwide Fulfillment
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-aether-red rounded-full"></span> Precision Manufacturing
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-aether-red rounded-full"></span> Engineered Consistency
                    </span>
                </motion.div>

                {/* Closing Line */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    className="relative inline-block"
                >
                    <h3 className="text-2xl md:text-4xl font-light tracking-widest text-white uppercase">
                        Performance without borders<span className="text-[#FF0000]">.</span>
                    </h3>
                    {/* Subtle underline glow */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#FF0000] to-transparent opacity-50"></div>
                </motion.div>

            </div>

        </section>
    );
};

export default GlobalReach;
