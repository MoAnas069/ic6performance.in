import React from 'react';
import PageWrapper from '../components/PageWrapper';
import CarbonFiber from '../components/CarbonFiber';

const CarbonFiberPage = () => {
    return (
        <PageWrapper>
            <div className="pt-24 bg-aether-black min-h-screen">
                <CarbonFiber />
            </div>
        </PageWrapper>
    );
};

export default CarbonFiberPage;
