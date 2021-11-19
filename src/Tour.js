import React, { useState } from 'react';



const Tour = ({ id, name, info, image, price }) => {
  const [ infoBtnText, setInfoBtnText ] = useState('show more');
  const [ infoText, setInfoText ] = useState(info.slice(0, 250) + '...');


  const toggleText = () => {

    if (infoText === info) {
      setInfoText(info.slice(0, 250) + '...');
      setInfoBtnText('show more');
    } else {
      setInfoText(info);
      setInfoBtnText('show less');
    }
  };

  const handleClick = (e) => {
    toggleText();  
  };


  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info" >
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {infoText}
          <button onClick={handleClick} >  
            {infoBtnText}
          </button>
        </p>
        <button className="delete-btn"  >not interested</button>
      </footer>
    </article>
  );
};



export default Tour;


