import moment from 'moment'
import selector from '../../src/selectors/getVisibility'
import expenses from '../expenses/expenses'

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate:undefined
    }
    const received = selector(expenses,filters)

    expect(received).toEqual([expenses[1],expenses[0]])
})

test('should filter by start date ', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate:undefined
    }
    expect(selector(expenses, filters)).toEqual([expenses[1], expenses[2]])
    
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    expect(selector(expenses, filters)).toEqual([expenses[2], expenses[0]])
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    expect(selector(expenses,filters)).toEqual([expenses[1], expenses[2], expenses[0]])
})

test('should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    expect(selector(expenses, filters)).toEqual([expenses[2],expenses[0], expenses[1]])
})