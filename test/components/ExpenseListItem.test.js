import React from 'react'
import {Expense} from '../../src/components/ExpenseListItem'
import {shallow} from 'enzyme'
import expenses from '../expenses/expenses'
import toJSON from 'enzyme-to-json'

test('should display an individual expense', () => {
    const wrapper = shallow(<Expense expense={expenses[1]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})