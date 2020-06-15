import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from "../../src/components/EditExpense"
import expenses from '../expenses/expenses'

let editExpense,history,wrapper,removeExpense

beforeEach(() => {
    removeExpense = jest.fn()
    editExpense = jest.fn()
    history = { push: jest.fn()}
   
    wrapper = shallow(<EditExpensePage expense={expenses[0]} removeExpense={removeExpense} editExpense={editExpense} history={history} />)
})

test('should render edit expense page snapshot', () => {
  expect(wrapper).toMatchSnapshot()  
})

test('should update expense on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0],expenses[0].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should remove expense on submit', () => {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
})