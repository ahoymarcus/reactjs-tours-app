import React, { useState, useEffect } from 'react'

import Loading from './Loading'
import Tours from './Tours'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'



function App() {
  const [ loading, setLoading ] = useState(true);


  const isLoading = () => {
    if (loading) {
      return <Loading />;
    } else {
      return <Tours />;
    }
  };


  return (
    <main>
      {isLoading()}
      
    </main>
  );
}




export default App


