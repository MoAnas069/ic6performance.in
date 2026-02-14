import React from 'react';

const Performance = () => {
    return (
        <section id="performance" className="min-h-screen bg-aether-black text-aether-text py-32 flex items-center relative overflow-hidden border-t border-white/5">

            {/* Background Graphic Suggestion */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-8 relative z-10">
                <h2 className="text-center text-4xl md:text-6xl font-light mb-24 tracking-tighter">
                    PERFORMANCE METRICS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                    <StatBlock label="Downforce (kg)" value="1200" suffix="+" />
                    <StatBlock label="Lateral G" value="2.5" suffix="G" />
                    <StatBlock label="0-60 mph" value="1.9" suffix="s" />
                </div>

                <div className="mt-32 text-center">
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        "Data is the only language we speak. The track is our laboratory."
                    </p>
                </div>
            </div>
        </section>
    );
};

const StatBlock = ({ label, value, suffix }) => (
    <div className="flex flex-col items-center justify-center">
        <div>
            <span className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-800 tracking-tighter block">
                {value}
                <span className="text-4xl align-top ml-2 text-gray-600 font-light">{suffix}</span>
            </span>
            <span className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-4 block">{label}</span>
        </div>
    </div>
);

export default Performance;
