import React from 'react';
import { motion } from 'framer-motion';

const Systems = () => {
    return (
        <section id="systems" className="min-h-screen bg-aether-black text-white relative py-32 overflow-hidden">

            {/* BACKGROUND: Technical Supply Chain Map */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <svg className="w-full h-full text-white/30" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                    {/* Abstract Regions */}
                    <path d="M150,150 Q200,100 250,150 T300,200" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M400,150 Q450,100 500,150 T550,250" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M700,150 Q750,100 800,150 T850,300" fill="none" stroke="currentColor" strokeWidth="1" />

                    {/* Connection Lines (Supply Chain Routes) */}
                    <line x1="250" y1="150" x2="500" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="500" y1="150" x2="800" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="500" y1="250" x2="500" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Manufacturing Hubs (Nodes) */}
                    <HubNode cx="250" cy="150" delay={0} />
                    <HubNode cx="500" cy="150" delay={1} />
                    <HubNode cx="800" cy="150" delay={2} />
                    <HubNode cx="500" cy="450" delay={3} />
                </svg>
            </div>

            {/* CONTENT CONTAINER */}
            <div className="container mx-auto px-8 relative z-10">

                {/* 1. HERO HEADLINE */}
                <div className="mb-32 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-tight"
                    >
                        Engineered Globally.<br />
                        <span className="text-gray-500">Built for Performance.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-px bg-white/20 mx-auto"
                    />
                </div>

                {/* 2. GLOBAL MANUFACTURING STATEMENT */}
                <div className="max-w-4xl mx-auto mb-48 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="text-xl md:text-3xl font-light leading-relaxed text-gray-300"
                    >
                        Through worldwide sourcing and manufacturing partnerships, <span className="text-white font-normal">IC6</span> works with leading facilities across multiple regions to deliver consistent quality, scalable production, and competitive wholesale pricing — without compromising craftsmanship or performance.
                    </motion.p>
                </div>

                {/* 3. SCALABLE PRODUCTION CALLOUTS */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-48 border-t border-b border-white/5 py-12">
                    {[
                        "Consistent quality standards",
                        "Scalable production capacity",
                        "Competitive wholesale pricing",
                        "Reliable global supply"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="text-center group"
                        >
                            <div className="w-2 h-2 bg-aether-red rounded-full mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{item}</h4>
                        </motion.div>
                    ))}
                </div>

                {/* 4. AFTERMARKET SPECIALIZATION */}
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                    {/* Left: Headline */}
                    <div className="w-full md:w-1/2 text-right">
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none"
                        >
                            Built for<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aether-red to-red-600">Serious</span><br />
                            Builds
                        </motion.h3>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-32 bg-white/20" />

                    {/* Right: Text */}
                    <div className="w-full md:w-1/2">
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            className="text-lg md:text-xl font-light text-gray-400 leading-relaxed max-w-md"
                        >
                            We specialize in high-performance carbon fibre aerodynamic and automotive components, supplying the global aftermarket with products built for serious builds and real results.
                        </motion.p>
                    </div>
                </div>

            </div>
        </section>
    );
};

const HubNode = ({ cx, cy, delay }) => (
    <motion.circle
        cx={cx} cy={cy} r="3"
        fill="currentColor"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: delay }}
    >
        {/* Pulse Effect */}
        <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
    </motion.circle>
);

export default Systems;
