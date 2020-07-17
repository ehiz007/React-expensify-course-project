import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../src/components/AddExpense'
import expenses from '../expenses/expenses'
import moment from 'moment'

let startAddExpense,history,wrapper

beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
})

test('should render on form submission', () => {
    
    expect(wrapper).toMatchSnapshot()
})

test('should handle on submit event', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})