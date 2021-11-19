import React, { useState, useEffect } from 'react'

import Loading from './Loading'
import Tours from './Tours'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'



function App() {
  const [ loading, setLoading ] = useState(true);
  const [ tours, setTours ] = useState([]);


  const isLoading = () => {
    if (loading) {
      return <Loading />;
    } else {
      return <Tours tours={tours} />;
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

  
  return (
    <main>
      {isLoading()}
      
    </main>
  );
}




export default App


