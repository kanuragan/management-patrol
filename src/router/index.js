import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Area from '../views/area/Area';
import List from '../views/area/List';
import Login from '../views/auth/Login'
import Changepassword from '../views/Changepassword';
import Dashboard from '../views/Dashboard';
import Employee from '../views/Employee';
import Profile from '../views/Profile';

function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Login/>
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