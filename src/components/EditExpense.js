import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense} from '../actions/expenses'
import {removeExpense} from '../../src/actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(expense, this.props.expense.id)
        this.props.history.push('/')
    }
    removeExpense = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                This is the edit page{this.props.expense.id} 
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.removeExpense}>Remove Expense</button>
            </div>
        )
    }
}



const mapPropsToState = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    
})

const mapDispatchToState = (dispatch, props) => ({
    editExpense: (expense,id) => ( dispatch( editExpense({
        id,
        updates: expense
    }))),
    removeExpense: (id) => (dispatch(removeExpense({id})))
})

export default connect(mapPropsToState, mapDispatchToState)(EditExpensePage)

