import React from 'react';
import Tour from './Tour';



const Tours = ({ tours }) => {
  // const { name, info, image, price } = tours;
  // console.log(name, info, image, price);

  const renderTour = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} ></Tour>;
  });
  
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline">
        
        </div>
      </div>
      <div>
        {renderTour}
      </div>
    </section>
  );
};



export default Tours;


