import React from 'react'
import {NavLink} from 'react-router-dom'
import {startLogOut} from '../actions/auth'
import {connect} from 'react-redux'

export const Header = ({startLogOut}) => (
    <div >
        <h1>Expensify App</h1>
        <div className='spread'>
            <NavLink to='/dashboard' activeClassName='indicate' exact >Dashboard </NavLink>
            <NavLink to='/create' activeClassName='indicate'>Expense</NavLink>
            <button onClick={startLogOut}>Log out</button>
        </div>
    </div>
    
)

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())})


export default connect (undefined, mapDispatchToProps)(Header)