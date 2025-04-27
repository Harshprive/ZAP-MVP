import React from 'react';
import CardData from './DataNearYouPage';
import CardNearYouPage from './CardNearYouPage';



const NearYouPage = () => {
  return (
    <div className="  bg-gray-100 py-20">
      

      <div className="flex flex-wrap gap-4 justify-center">
      
        {CardData.map((card) => (
          <CardNearYouPage
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            distance={card.distance}
            status={card.status}
            link={card.link}
          />
        ))}
        
      </div>
      
    </div>
  );
};

export default NearYouPage;
