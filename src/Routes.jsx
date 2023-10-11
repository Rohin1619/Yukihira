import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage';
import NavBar from './components/navbar/NavBar';
import AboutUs from './pages/aboutUs/AboutUs';
import Menu from './pages/menu/Menu';
import Login from './pages/Login/login';
import Bill from './pages/bill/bill';
import Payment from './pages/payment/Payment';

const Routes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/'
        element={<Homepage />} />
        <Route path='/aboutus'
          element={ <AboutUs /> } />
        <Route path='/menu'
          element={ <Menu /> } />
        <Route path='/login'
        element= {<Login /> } />
        <Route path='/bill'
        element={ < Bill /> } />
        <Route path='/bill/payment'
        element={ < Payment />} />
      </Switch>
    </>
  )
}

export default Routes
