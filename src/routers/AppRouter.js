import React from 'react'
import {BrowserRouter, Route, Switch, NavLink, Link} from 'react-router-dom'
import Header from '../components/Header'
import ExpenseDashboardPage from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpPage from '../components/HelpPage'
import ErrorPage from '../components/ErrorPage'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
          
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path ='/help' component={HelpPage}/>
                <Route component={ErrorPage} />
                
            </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter