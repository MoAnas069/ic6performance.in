import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Engineering from '../components/Engineering';

const EngineeringPage = () => {
    return (
        <PageWrapper>
            {/* Added padding top to account for fixed navbar */}
            <div className="pt-24 bg-aether-black min-h-screen">
                <Engineering />
            </div>
        </PageWrapper>
    );
};

export default EngineeringPage;
