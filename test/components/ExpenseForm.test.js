import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import ExpenseForm from '../../src/components/ExpenseForm'
import expenses from '../expenses/expenses'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

test('should display the expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should populate the input fields with the expense data', () =>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
   
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should render change in description input', () => {
    const value = 'some description test'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('description')).toBe(value)

    expect(wrapper).toMatchSnapshot()
})

test('should set note on input change', () => {
    const value = 'food provision'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()

})

test('should set not set amount on invalid input', () => {
    const value = 'gh455'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()

})

test('should set amount on input change', () => {
    const value = '500'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()

})

test('should submit form with the right information', () => {
    const expense = expenses[0]
    const submitAuth = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={submitAuth}/>)
    expect(wrapper).toMatchSnapshot()
    
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {} 
    })
    delete expense.id
    expect(submitAuth).toHaveBeenLastCalledWith({
        ...expense,
    createdAt: expense.createdAt.valueOf()})
    expect(wrapper.state('error')).toBe('')
})


test('should set a new date change', () => {
    const newDate = moment()
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(newDate)
    expect(wrapper.state('createdAt')).toEqual(newDate)
    expect(wrapper).toMatchSnapshot()
})

test('should set focused change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
    expect(wrapper.state('calenderFocused')).toBe(focused)
})