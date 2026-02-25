import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        id: "01",
        title: "Aero Side System",
        description: "Precision-engineered side aerodynamic elements for optimized lateral airflow.",
        image: "/images/2.jpeg"
    },
    {
        id: "02",
        title: "Front Splitter Element",
        description: "High-downforce carbon front splitter for increased front-axle stability.",
        image: "/images/20.jpeg"
    },
    {
        id: "03",
        title: "Rear Downforce Wing",
        description: "Aerodynamic rear wing system maximizing rear-axle traction under load.",
        image: "/images/6.jpeg"
    }
];

const ProductShowcase = () => {
    return (
        <section className="bg-aether-black py-32 border-t border-white/5">
            <div className="container mx-auto px-8">
                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-6"
                    >
                        Component Systems
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-px bg-aether-red mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="bg-[#050505] border border-white/10 group hover:border-white/20 transition-colors duration-500 overflow-hidden flex flex-col"
                        >
                            {/* Product Image Area - White background isolates the product clearly */}
                            <div className="aspect-[4/3] w-full bg-white relative overflow-hidden flex items-center justify-center p-6">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain filter contrast-[1.1] saturate-[0.8] group-hover:scale-105 transition-transform duration-1000"
                                    loading="lazy"
                                />
                                {/* Subtle Inner Shadow to blend the white box slightly into the dark theme */}
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none" />
                            </div>

                            {/* Product Info Area */}
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-xs font-mono text-aether-red mb-3 block">{product.id}</span>
                                <h3 className="text-lg text-white font-bold uppercase tracking-wide mb-3">{product.title}</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
