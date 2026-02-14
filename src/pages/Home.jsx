import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ScrollyTelling from '../components/ScrollyTelling';
import EngineeredExtreme from '../components/EngineeredExtreme';
import PerformanceFeature from '../components/PerformanceFeature';
import GlobalCapability from '../components/GlobalCapability';
import ImmersiveTransition from '../components/ImmersiveTransition';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <PageWrapper>
            <ScrollyTelling />

            <div className="relative z-10 bg-aether-black text-aether-text">
                <EngineeredExtreme />

                <PerformanceFeature />

                <ImmersiveTransition />

                <GlobalCapability />

                {/* Transition to deeper site */}
                <section className="py-32 flex justify-center items-center bg-black">
                    <Link
                        to="/engineering"
                        className="text-white border border-white/20 px-12 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-500"
                    >
                        Explore Capability
                    </Link>
                </section>
            </div>
        </PageWrapper>
    );
};

export default Home;
