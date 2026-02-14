import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Systems from '../components/Systems';

const SystemsPage = () => {
    return (
        <PageWrapper>
            <div className="pt-24 bg-aether-black min-h-screen">
                <Systems />
            </div>
        </PageWrapper>
    );
};

export default SystemsPage;
