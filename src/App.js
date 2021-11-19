// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 0 hr 50' 00 ''
import React, { useState, useEffect } from 'react'

import Loading from './Loading'
import Tours from './Tours'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'



function App() {
  const [ loading, setLoading ] = useState(true);
  const [ tours, setTours ] = useState([]);
 

  const renderComponents = () => {
    
    
    if (loading) {
      return <Loading />;
    } else if (tours.length === 0) {
      return (
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours} >Refresh</button>
        </div>
      );   
    } else {
      return <Tours tours={tours} removeTour={removeTour} />;
    }
  };

  const fetchTours = async () => {
    setLoading(true);
    
    try { // handlering only Network Errros
      const response = await fetch(url);
      const tempTours = await response.json();

      console.log(tempTours);
      setLoading(false);
      setTours(tempTours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []); // renders only at initial render


  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };


  return (
    <main>
      {renderComponents()}
      
    </main>
  );
}




export default App


