import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Engineering from '../components/Engineering';
import DetailStrip from '../components/DetailStrip';

const EngineeringPage = () => {
    return (
        <PageWrapper>
            {/* Added padding top to account for fixed navbar */}
            <div className="pt-24 bg-aether-black min-h-screen">
                <Engineering />
                <DetailStrip />
            </div>
        </PageWrapper>
    );
};

export default EngineeringPage;
