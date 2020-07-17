import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../src/components/ExpenseSummary'
import expenses from '../expenses/expenses'

test('should return only one expense', () => {
    const wrapper= shallow(<ExpenseSummary expenses={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})