import React from 'react';

const ImmersiveTransition = () => {
    return (
        <section className="h-[50vh] w-full bg-black relative overflow-hidden flex items-center justify-center">
            {/* Barely perceptible light shift */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-[#080808] to-black opacity-50 animate-pulse duration-[5000ms]" />
        </section>
    );
};

export default ImmersiveTransition;
