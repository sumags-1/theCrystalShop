// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// PAGES
import Home from './pages/Home';
import './App.css';


function App() {

  const [crystals, setCrystals] = useState([]);

  useEffect(() => {
    async function getIndexRoute() {
      const crystalData = await axios.get("http://localhost:5001/crystal")
      console.log(crystalData.data)
      setCrystals(crystalData.data)
    }
    getIndexRoute()
  }, [])


  return (
    <div className="App">

      <Routes>

        <Route
          path='/crystal'
          element={<Home crystals={crystals} />}
        />

      </Routes>

    </div>
  );
}

export default App;
