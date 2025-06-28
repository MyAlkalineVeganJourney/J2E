import React from 'react';
import PageLayout from '../../../components/PageLayout';
import InfoCard from '../../../components/InfoCard';
import NumerologyData from '../../../data/NumerologyData';

const Numerology = () => {
  return (
    <PageLayout
      title="Numerology"
      subtitle="The Power of Numbers and Their Frequencies"
    >
      <div className="numerology-page-content p-4">
        {NumerologyData.map((item, index) => (
          <InfoCard key={index} data={{
            name: item.title,
            description: item.description,
            bioChemicals: item.bioChemicals?.join(', '),
            benefits: item.benefits?.join(', '),
            image: item.image
          }} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Numerology;
