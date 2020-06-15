import React from 'react'
import {connect} from 'react-redux'
import Expense from './ExpenseListItem'
import selectExpenses from '../selectors/getVisibility'


export const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        { props.expenses.length === 0 ? (<p>There are no expenses</p>) : (
            props.expenses.map( (expense,index) => (
                <Expense key={index} {...expense}/> 
                )
            )
        )}
        
    </div>
)

const mapStateToProps = (state) => (
    {
        expenses: selectExpenses(state.expenses,state.filters)
    }
)

export default connect(mapStateToProps)(ExpenseList)