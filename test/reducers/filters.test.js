import filters from '../../src/reducers/filters'
import moment from 'moment'

test('should setup default filter value', () => {
    expect(filters(undefined,{type: '@@INIT'})).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate : moment().endOf('month')
    
    })
})

test ('should set sort by to amount', () => {
    expect(filters(undefined, {type: 'SORT_BY_AMOUNT'}).sortBy).toBe('amount')
})

test ('should set sort by to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    expect(filters(currentState,{type:'SORT_BY_DATE'})).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate : moment().endOf('month')
    })
})

test ('should sort by filter with text value', () => {
    
    expect(filters(undefined, {type:'SEARCH_TEXT', text:'coding time'}).text).toBe('coding time')
})

test('should set start date filter', () => {
    const filter = filters(undefined, {type:'START_DATE', date: undefined})
    expect(filter.startDate).toEqual({})
})

test('should set end date filter', () => {
    const filter = filters(undefined, {type:'END_DATE', date: undefined})
    expect(filter.endDate).toEqual({})
})