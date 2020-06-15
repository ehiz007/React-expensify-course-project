import React from 'react'
import {ExpenseList} from '../../src/components/ExpenseList'
import {shallow} from 'enzyme'
import Expenses from '../expenses/expenses'
import toJSON from 'enzyme-to-json'

test('should display Expense list', () => {
    const wrapper = shallow(<ExpenseList expenses={Expenses} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test ('should display no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})