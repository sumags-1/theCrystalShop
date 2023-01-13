// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// PAGES
import CrystalHome from './pages/CrystalHome';
import Home from './pages/Home'

//COMPONENTS
import Login from './components/Login';
import Nav from './components/Nav';
import SignUp from './components/SignUp'

import './App.css';


function App() {

  const [crystals, setCrystals] = useState([]);
  const [isLoggedIn, setLogInStatus] = useState(false)



  useEffect(() => {
    if (localStorage.token) {
      setLogInStatus(true)
    }
  }, [])

  useEffect(() => {
    async function getIndexRoute() {
      const crystalData = await axios.get("http://localhost:5001/crystal")
      // console.log(crystalData.data)
      setCrystals(crystalData.data)
    }
    getIndexRoute()
  }, [])

  function logout(){
    setLogInStatus(false)
    localStorage.clear()
  }


  return (
    <div className="App">

      <Nav isLoggedIn={isLoggedIn} logout={logout}/>

      <Routes>

        <Route
          path='/crystal'
          element={<CrystalHome crystals={crystals} isLoggedIn={isLoggedIn} />}
        />

        <Route
          path='/'
          element={<Home isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />}
        />

        <Route
          path='/user/login'
          element={<Login isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />}
        />

        <Route
          path='/user/signup'
          element={<SignUp isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />}
        />
      </Routes>

    </div>
  );
}

export default App;
