import React from 'react';

const detailImages = [
    "/images/12.jpeg",
    "/images/168.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg"
];

const DetailStrip = () => {
    return (
        <section className="bg-aether-black py-10 overflow-hidden border-t border-b border-white/5">
            <div className="container mx-auto px-8 mb-8">
                <h3 className="text-white/50 text-xs font-mono uppercase tracking-[0.3em] font-semibold text-center">
                    Engineering Precision Details
                </h3>
            </div>
            {/* Wrapper for the scrolling animation */}
            <div className="flex w-[200%] md:w-[120%] animate-marquee">
                {/* Double the array for a seamless infinite loop */}
                {[...detailImages, ...detailImages].map((img, i) => (
                    <div key={i} className="w-[33.33%] md:w-[16.66%] aspect-square p-2 flex-shrink-0">
                        <div className="w-full h-full bg-[#0a0a0a] overflow-hidden rounded-sm border border-white/10 relative">
                            {/* Inner Shadow overlay */}
                            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] z-10 pointer-events-none" />
                            <img
                                src={img}
                                alt={`Craftsmanship Detail ${i}`}
                                className="w-full h-full object-cover filter contrast-125 saturate-50 mix-blend-lighten hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Inline styles for the marquee animation */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                /* Pause animation on hover for better UX */
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default DetailStrip;
