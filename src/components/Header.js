import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <div >
        <h1>Expensify App</h1>
        <div className='spread'>
            <NavLink to='/' activeClassName='indicate' exact >Dashboard </NavLink>
            <NavLink to='/create' activeClassName='indicate'>Expense</NavLink>
            <NavLink to='/edit/:id' activeClassName='indicate'>Edit</NavLink>
            <NavLink to='/help' activeClassName='indicate'>Help</NavLink>
        </div>
    </div>
    
)

export default Header