import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../src/components/AddExpense'
import expenses from '../expenses/expenses'
import moment from 'moment'

let addExpense,history,wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>)
})

test('should render on form submission', () => {
    
    expect(wrapper).toMatchSnapshot()
})

test('should handle on submit event', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})