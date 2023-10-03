import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/'
        element={<Homepage />} />
      </Switch>
    </>
  )
}

export default Routes
