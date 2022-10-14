import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DashHome from './pages/DashPages/DashHome';
import Deposit from './pages/DashPages/Deposit';
import Invest from './pages/DashPages/Invest';
import Withdraw from './pages/DashPages/Withdraw';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
//import SignIn from './pages/SignIn'
import DashBoardLayout from './Template/DashBoardLayout';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/dashboard' element={<DashBoardLayout/>} >
            
            <Route path='' element={<DashHome/>} />
            <Route path='deposit' element={<Deposit/>} />
            <Route path='invest' element={<Invest/>} />
            <Route path='withdraw' element={<Withdraw/>} />
          </Route>
        </Routes>
    </Router>

    </>
  );
}

export default App;