import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/getVisibility'
import ExpenseTotal from '../selectors/ExpenseTotal'
import numeral from 'numeral'


// switch between locales
// numeral.locale('ng');

export const ExpenseSummary = (props) => {
    const expense = props.expenseCount === 1 ? 'expense' : 'expenses'
    
    return (
        <div>
            <h3>you have {props.expenseCount} {expense} , totalling {numeral(props.expenseTotal).format('$0,0.00')}</h3>
        
        </div>
    )
}

const mapStateToProps = (state) => {
       const expenses = selectExpenses(state.expenses, state.filters)
       return {
           expenseCount: expenses.length,
           expenseTotal: ExpenseTotal(expenses)
       }
}


export default connect(mapStateToProps)(ExpenseSummary)