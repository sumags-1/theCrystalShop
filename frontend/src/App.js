// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// PAGES
import CrystalHome from './pages/CrystalHome'
import Home from './pages/Home'
import AddCrystal from './pages/AddCrystal'
import EditCrystal from './pages/EditCrystal'
import ShowCrystal from './pages/ShowCrystal'
import ErrorPath from './pages/ErrorPath';

//COMPONENTS
import Login from './components/Login';
import Nav from './components/Nav';
import SignUp from './components/SignUp'

import './App.css';
import { showCrystal } from './utils/api';

function App() {

  const navigate = useNavigate()
  const [crystals, setCrystals] = useState([]);
  const [isLoggedIn, setLogInStatus] = useState(false)
  const [shownCrystal, setShownCrystal] = useState({})



  useEffect(() => {
    if (localStorage.token) {
      setLogInStatus(true)
    }
  }, [])

  useEffect(() => {
    async function getIndexRoute() {
      const crystalData = await axios.get("/")
      // console.log(crystalData.data)
      setCrystals(crystalData.data)
    }
    getIndexRoute()
  }, [])

  function logout() {
    setLogInStatus(false)
    localStorage.clear()
    navigate('/')
  }

  // function to grab crystals by id
  async function getCrystalbyID(id) {
    const shownCrystalData = await axios.get(`${id}`)
    setShownCrystal(shownCrystalData.data)
  }


  return (
    <div className="App">

      <Nav isLoggedIn={isLoggedIn} logout={logout} />

      <Routes>

        <Route
          path='/crystal'
          element={<CrystalHome getCrystalbyID={getCrystalbyID} crystals={crystals} isLoggedIn={isLoggedIn} />}
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

        <Route
          path='/crystal/addcrystal'
          element={<AddCrystal crystals={crystals} isLoggedIn={isLoggedIn} />}
        />

        <Route
          exact path='/crystal/:id'
          element={<ShowCrystal shownCrystal={shownCrystal} crystals={crystals} isLoggedIn={isLoggedIn} />}
        />

        <Route
          exact path='/editcrystal/:id'
          element={<EditCrystal shownCrystal={shownCrystal} setShownCrystal={setShownCrystal} crystals={crystals} setCrystals={setCrystals} isLoggedIn={isLoggedIn} />}
        />

        <Route path='/*' element={<ErrorPath />}></Route>

      </Routes>

    </div>
  );
}

export default App;
