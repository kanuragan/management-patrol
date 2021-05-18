import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Area from '../views/area/Area';
import List from '../views/area/List';
import Login from '../views/auth/Login'
import Changepassword from '../views/Changepassword';
import Dashboard from '../views/Dashboard';
import Employee from '../views/Employee';
import Profile from '../views/Profile';
import Assignment from '../views/Assignment';
import Schedule from '../views/Schedule';

function Router(props) {
    const token_apps = localStorage.getItem('BASEAPPS_ACCESS_TOKEN')
    return (
        
        <BrowserRouter>
            {/* {!token_apps ? <Redirect to='/'  /> : <Redirect to='/dashboard' />} */}
            <Switch>
                <Route exact path='/'>
                     <Login />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard/>
                </Route>
                <Route path='/employee'>
                    <Employee/>
                </Route>

                <Route exact path='/area'>
                    <Area/>
                </Route>
                    <Route path='/area/list-area'>
                        <List/>
                    </Route>
                
                <Route path='/assignment'>
                    <Assignment/>
                </Route>
                <Route path='/schedule'>
                    <Schedule/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/change_password'>
                    <Changepassword/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;