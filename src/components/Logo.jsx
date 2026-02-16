import React from 'react';

const Logo = ({ className = "" }) => {
    return (
        <div className={`relative flex flex-col items-center leading-none select-none z-10 ${className}`}>

            {/* Background Glow - Subtle ambiance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-[rgba(255,255,255,0.1)_0%,transparent_70%] blur-[30px] -z-10 pointer-events-none opacity-30" />

            {/* Main Row: iC6 and performance.com */}
            <div className="flex items-baseline gap-2 md:gap-4">
                {/* iC6 - Pure Metallic Red */}
                <span className="font-['Michroma'] italic text-5xl md:text-7xl"
                    style={{
                        // User Defined CSS for .ic6
                        fontWeight: 900,
                        letterSpacing: '0.02em',
                        transform: 'scale(1.03) skewX(-12deg)',
                        // Add padding to prevent skewed edge clipping
                        paddingRight: '0.1em',

                        // existing metallic gradient - Lightened bottom stop from #990000 to #b30000
                        background: 'linear-gradient(180deg, #ff9999 0%, #ff1a1a 45%, #cc0000 85%, #b30000 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',

                        opacity: 1,
                        filter: 'none',
                        mixBlendMode: 'normal',

                        // User Provided Text Shadow
                        textShadow: '0 0 6px rgba(255,50,50,0.25), 0 0 16px rgba(255,0,0,0.18)'
                    }}>
                    iC6
                </span>

                {/* PERFORMANCE.COM - Split to extend 'p' tail */}
                <span className="flex items-baseline ml-1">
                    {/* The 'p' with extended tail */}
                    <span className="relative font-['Michroma'] italic font-bold text-3xl md:text-5xl tracking-tight"
                        style={{
                            // Same gradient as before
                            background: 'linear-gradient(180deg, #ffffff 0%, #dbe0e6 30%, #aeb5bd 55%, #858e96 75%, #7a828a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            transform: 'skewX(-12deg)',
                            opacity: 1,
                            filter: 'none',
                            mixBlendMode: 'normal',
                            textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)'
                        }}>
                        p
                        {/* THE TAIL EXTENSION */}
                        <span className="absolute left-[0.15em] bottom-[-0.15em] w-[0.14em] h-[0.4em] origin-top"
                            style={{
                                background: 'linear-gradient(to bottom, #7a828a, #5c6269)', // Dark metallic to match bottom of letter
                                transform: 'skewX(0deg)', // Already inside a skewed parent? No, skews stack. Parent has -12deg.
                                // Actually, pseudo-element inherits transform? No, it's a child span.
                                // If parent is skewed, child aligns with that skew.
                                // So a vertical rect will appear skewed. That's likely what we want for the stem.
                                borderRadius: '0 0 2px 2px',
                                opacity: 1
                            }}
                        />
                    </span>

                    {/* Rest of the word */}
                    <span className="font-['Michroma'] italic font-bold text-3xl md:text-5xl tracking-tight"
                        style={{
                            background: 'linear-gradient(180deg, #ffffff 0%, #dbe0e6 30%, #aeb5bd 55%, #858e96 75%, #7a828a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            transform: 'skewX(-12deg)',
                            paddingRight: '0.1em',
                            opacity: 1,
                            filter: 'none',
                            mixBlendMode: 'normal',
                            textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)'
                        }}>
                        erformance.com
                    </span>
                </span>
            </div>

            {/* EST - 2026 Row */}
            <div className="flex items-center gap-4 mt-2 opacity-100 relative z-10 mix-blend-normal">
                {/* EST - Red Accent */}
                <span className="font-['Michroma'] italic font-bold text-sm md:text-base tracking-[0.2em] text-[#ff4444]"
                    style={{
                        transform: 'skewX(-12deg)',
                        opacity: 1,
                        filter: 'none',
                        textShadow: '0 0 6px rgba(255,50,50,0.25)'
                    }}>
                    EST
                </span>

                {/* Hyphen */}
                <span className="w-8 h-[2px] bg-gray-400 opacity-100"></span>

                {/* 2026 - Metallic Silver */}
                <span className="font-['Michroma'] italic font-bold text-sm md:text-base tracking-[0.2em] text-gray-300"
                    style={{
                        transform: 'skewX(-12deg)',
                        background: 'linear-gradient(to bottom, #ffffff, #aaaaaa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        opacity: 1,
                        filter: 'none'
                    }}>
                    2026
                </span>
            </div>
        </div>
    );
};

export default Logo;
