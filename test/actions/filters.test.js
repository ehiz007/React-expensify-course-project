import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from '../../src/actions/filters'
import moment from 'moment'

test('Test set text filter without arguments', () => {
    expect(setTextFilter()).toEqual({
        type: 'SEARCH_TEXT',
        text: expect.any(String)
    })
})

test('To test set text filter with arguments passed in', () => {

    expect(setTextFilter('javasScript')).toEqual({
        type: 'SEARCH_TEXT',
        text: expect.any(String)
    }) 
})

test('To test sort by date', () => {
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
})

test('to test sort hy amount', () => {
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
} )

test ('to test start date', () => {
    expect(setStartDate(moment(0))).toEqual({type:'START_DATE', date:moment(0)})
})

test('to test sort by end date', () => {
    expect(setEndDate(moment(0))).toEqual({type:'END_DATE', date:moment(0)})
})