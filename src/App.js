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
//import AddDeposit from './pages/DashPages/AddDeposit';
import AddWithdrawal from './pages/DashPages/AddWithdrawal';
import Profile from './pages/DashPages/Profile';
import Contact from './components/Client/Contact';
import AboutUs from './components/Client/About';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/login' element={<Signin/>} />
          <Route path='/dashboard' element={<DashBoardLayout/>}>
            
            <Route path='' element={<DashHome/>} />
            {/* <Route path='portfolio' element={<DashHome/>} /> */}
            <Route path='deposit' element={<Deposit/>} />
            {/*<Route path='add-deposit' element={<AddDeposit/>} /> */}
            <Route path='deposit/:id' element={<Deposit/>} />
            <Route path='invest' element={<Invest/>} />
            <Route path='withdraw' element={<Withdraw/>} />
            <Route path='add-withdraw' element={<AddWithdrawal/>} />
            <Route path='withdraw/:id' element={<Withdraw/>} />
            <Route path='profile' element={<Profile/>}/>

          </Route>
        </Routes>
    </Router>

    </>
  );
}

export default App;