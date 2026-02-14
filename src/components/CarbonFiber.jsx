import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CarbonFiber = () => {
    const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setHoverPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section
            id="quality"
            className="min-h-screen bg-aether-black text-white relative py-32 overflow-hidden flex flex-col justify-center"
            onMouseMove={handleMouseMove}
        >

            {/* BACKGROUND: Cinematic Reveal */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Base Dark */}
                <div className="absolute inset-0 bg-[#050505]" />

                {/* Weave Pattern (Initially Hidden/Silhouetted) */}
                <motion.div
                    initial={{ opacity: 0.1 }}
                    whileInView={{ opacity: 0.4 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(45deg, #151515 25%, transparent 25%, transparent 75%, #151515 75%, #151515),
                            linear-gradient(45deg, #151515 25%, transparent 25%, transparent 75%, #151515 75%, #151515)
                        `,
                        backgroundPosition: '0 0, 10px 10px',
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Diagonal Thread Texture (Fine detail) */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px)'
                    }}
                />

                {/* Light Sweep Animation (The Reveal) */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileInView={{ x: '100%', opacity: 1 }}
                    transition={{ duration: 4, ease: "easeOut" }}
                />

                {/* Interactive Cursor Light (The Lens) */}
                <div
                    className="absolute w-[400px] h-[400px] bg-radial-gradient from-white/10 to-transparent rounded-full blur-3xl opacity-0 md:opacity-100 transition-opacity duration-500 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay"
                    style={{ left: hoverPos.x, top: hoverPos.y }}
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000_100%)]" />
            </div>

            {/* ENGINEERING LABELS (Absolute positioned over texture) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <Label x="10%" y="20%" label="Aerospace-grade prepreg fabric" delay={1} />
                <Label x="80%" y="30%" label="Structural integrity" delay={1.5} align="right" />
                <Label x="15%" y="70%" label="Strength-to-weight optimization" delay={2} />
                <Label x="75%" y="80%" label="Precision weave alignment" delay={2.5} align="right" />
            </div>

            {/* CONTENT CONTAINER */}
            <div className="container mx-auto px-8 relative z-10">

                {/* HEADLINE */}
                <div className="mb-32 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-tight"
                    >
                        Performance Begins With<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500">Material Intelligence</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-px bg-aether-red mx-auto"
                    />
                </div>

                {/* TEXT SEGMENTS */}
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* Segment 1 */}
                    <TextSegment delay={0.2}>
                        We use aerospace-grade carbon fibre prepreg fabric — the same class of material trusted in aircraft and advanced engineering applications.
                    </TextSegment>

                    {/* Segment 2 */}
                    <TextSegment delay={0.4}>
                        Selected for its exceptional strength-to-weight ratio, this material delivers outstanding durability, precision, and performance without unnecessary weight.
                    </TextSegment>

                    {/* Segment 3 */}
                    <TextSegment delay={0.6}>
                        Every weave is carefully aligned to ensure structural integrity, consistency, and a flawless finish — enabling performance under extreme conditions while meeting the highest standards of quality and reliability.
                    </TextSegment>

                </div>

            </div>

            {/* HEAT RESILIENCE SIMULATION (Cinematic "Video" Section) */}
            <div className="w-full bg-black py-32 relative overflow-hidden border-t border-white/5 mt-32">

                {/* HEADLINE */}
                <div className="container mx-auto px-8 mb-24 text-center relative z-10">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4"
                    >
                        Engineered to Endure Extremes
                    </motion.h3>
                    <p className="text-gray-500 uppercase tracking-widest text-xs">Simulated Thermal Stress Test</p>
                </div>

                {/* 3D SCENE CONTAINER */}
                <div className="relative w-full h-[60vh] flex items-center justify-center perspective-[1000px] overflow-hidden">

                    {/* Background Glow (The Torch Effect) */}
                    <motion.div
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
                        className="absolute inset-0 bg-radial-gradient from-orange-600/20 via-transparent to-transparent z-0 pointer-events-none"
                    />

                    {/* THE CUBE */}
                    <CubeSimulation />

                    {/* OVERLAY LABELS */}
                    <div className="absolute inset-0 pointer-events-none z-20 container mx-auto">
                        <Label x="20%" y="30%" label="Extreme heat resilience" delay={0.5} />
                        <Label x="70%" y="40%" label="Structural integrity retained" delay={1} align="right" />
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 8, repeat: Infinity, times: [0, 0.5, 1] }}
                            className="absolute bottom-32 left-1/2 -translate-x-1/2 text-orange-500 font-mono text-xs tracking-widest uppercase"
                        >
                            Temperature Critical: 800°C
                        </motion.div>
                    </div>

                </div>

            </div>

        </section>
    );
};

const TextSegment = ({ children, delay }) => (
    <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
        className="text-xl md:text-3xl font-light leading-relaxed text-gray-300 text-center"
    >
        {children}
    </motion.p>
);

const Label = ({ x, y, label, delay, align = 'left' }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay }}
        className="absolute hidden md:flex items-center gap-4"
        style={{ left: x, top: y, flexDirection: align === 'right' ? 'row-reverse' : 'row' }}
    >
        <div className="w-2 h-2 bg-aether-red rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
        <div className="h-px w-16 bg-white/20" />
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 whitespace-nowrap">
            {label}
        </span>
    </motion.div>
);

const CubeSimulation = () => {
    // Rotation & Heat Animation
    return (
        <motion.div
            className="w-64 h-64 relative preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{
                rotateX: [15, 25, 15],
                rotateY: [0, 360]
            }}
            transition={{
                rotateX: { duration: 10, repeat: Infinity, ease: "linear" },
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
        >
            {/* Cube Faces */}
            <CubeFace transform="translateZ(128px)" /> {/* Front */}
            <CubeFace transform="rotateY(180deg) translateZ(128px)" /> {/* Back */}
            <CubeFace transform="rotateY(90deg) translateZ(128px)" /> {/* Right */}
            <CubeFace transform="rotateY(-90deg) translateZ(128px)" /> {/* Left */}
            <CubeFace transform="rotateX(90deg) translateZ(128px)" /> {/* Top */}
            <CubeFace transform="rotateX(-90deg) translateZ(128px)" /> {/* Bottom */}
        </motion.div>
    );
};

const CubeFace = ({ transform }) => (
    <motion.div
        className="absolute inset-0 border border-white/10"
        style={{
            transform: transform,
            backgroundImage: `
                linear-gradient(45deg, #101010 25%, transparent 25%, transparent 75%, #101010 75%, #101010),
                linear-gradient(45deg, #101010 25%, transparent 25%, transparent 75%, #101010 75%, #101010)
            `,
            backgroundPosition: '0 0, 5px 5px',
            backgroundSize: '10px 10px',
            backgroundColor: '#050505'
        }}
        animate={{
            boxShadow: [
                "inset 0 0 0px rgba(0,0,0,0)",
                "inset 0 0 50px rgba(255, 69, 0, 0.8)",
                "inset 0 0 0px rgba(0,0,0,0)"
            ],
            borderColor: [
                "rgba(255,255,255,0.1)",
                "rgba(255, 100, 0, 0.8)",
                "rgba(255,255,255,0.1)"
            ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
    >
        {/* Face Glow Overlay */}
        <motion.div
            className="absolute inset-0 bg-orange-500 Mix-blend-overlay"
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
        />
    </motion.div>
);

export default CarbonFiber;
