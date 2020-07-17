import React from 'react'
import {shallow} from 'enzyme'
import ExpenseTotal from '../../src/selectors/ExpenseTotal'
import expenses from '../expenses/expenses'

test('should render zero for no expenses', () => {
    const total = ExpenseTotal([])
    expect(total).toBe(0)
})

test('should render the amount value for only one expense', () => {
    const total = ExpenseTotal([expenses[0]])
    
    expect(total).toBe(500)
    
})


test('should render the amount value for all expense', () => {
    const total = ExpenseTotal(expenses)
    expect(total).toBe(1900)
    
})