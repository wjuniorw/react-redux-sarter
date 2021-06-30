import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

import PrivateRoute from '../components/PrivateRoute'

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <PrivateRoute path="/dash" exact component={Dashboard} />
  </BrowserRouter>
)

export default Routes
