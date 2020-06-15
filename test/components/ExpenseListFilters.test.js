import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../src/components/ExpenseListFilters'
import moment from 'moment'
import {filters, altFilters} from '../filters/filters'

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper

beforeEach( () => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter = {setTextFilter} 
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate} 
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
         />)
})

test('should render filter component', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should set alt filter props', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper.instance().props.filters).toEqual(altFilters)
    expect(wrapper).toMatchSnapshot()
})

test('should render set text filter', () => {
    wrapper.find('input').simulate('change', {
        target: {value:'food'}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith('food')
})

test('should sort by date', () => {
    wrapper.setState({
        filters:altFilters
    })
    wrapper.find('select').simulate('change', {
        target: {value: 'date'}
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'amount'}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changer', () => { 
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(altFilters)
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate)
})

test('should handle date focus changes', () => {
    const calenderFocuse = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFocuse)
    expect(wrapper.state('calenderFocuse')).toBe(calenderFocuse)
})