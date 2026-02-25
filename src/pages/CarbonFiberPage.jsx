import React from 'react';
import PageWrapper from '../components/PageWrapper';
import CarbonFiber from '../components/CarbonFiber';
import PrecisionManufacturing from '../components/PrecisionManufacturing';

const CarbonFiberPage = () => {
    return (
        <PageWrapper>
            <div className="pt-24 bg-aether-black min-h-screen">
                <CarbonFiber />
                <PrecisionManufacturing />
            </div>
        </PageWrapper>
    );
};

export default CarbonFiberPage;
