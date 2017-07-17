import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import HomeComponent from '../components/HomeComponent'
import NotFoundComponent from '../components/NotFoundComponent'

import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'
import LogoutComponent from '../components/LogoutComponent'

import AddCarComponent from '../components/AddCarComponent'
import AllCarsComponent from '../components/AllCarsComponent'
import SingleCarComponent from '../components/SingleCarComponent'
import ProfileComponent from '../components/ProfileComponent'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route exact path='/not-found' component={NotFoundComponent} />
    <Route exact path='/login' component={LoginComponent} />
    <Route exact path='/register' component={RegisterComponent} />
    <Route exact path='/logout' component={LogoutComponent} />

    <Route exact path='/cars/all' component={AllCarsComponent} />
    <PrivateRoute exact path='/cars/details/:id' component={SingleCarComponent} />
    <PrivateRoute exact path='/cars/create' component={AddCarComponent} />
    <PrivateRoute exact path='/cars/mine' component={ProfileComponent}/>
    <Route component={NotFoundComponent} />
  </Switch>
)

export default Routes
