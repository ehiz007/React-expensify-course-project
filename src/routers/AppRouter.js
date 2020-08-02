import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import {BrowserRouter, Router, Route, Switch, NavLink, Link} from 'react-router-dom'
import ExpenseDashboardPage from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import ErrorPage from '../components/ErrorPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoutes'
import PublicRoute from './PublicRoutes'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard'  component={ExpenseDashboardPage} />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <Route component={ErrorPage} />
                
            </Switch>
        </div>
    </Router>
)


export default AppRouter

//for normal operation browser history has its own history passed in behind the scene
//for router you need to pass in your history >>> which led to import history and creating an instance used in router