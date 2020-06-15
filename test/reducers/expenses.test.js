import expenses from '../../src/reducers/expenses'
import expenseList from '../expenses/expenses'
import moment from 'moment'

test('should set default state', () => {
    expect(expenses(undefined,{type: '@@INIT'})).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenseList[0].id}
    expect(expenses(expenseList, action)).toEqual([expenseList[1],expenseList[2]])
})

test('should not remove expense if the id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: -1}
    expect(expenses(expenseList, action)).toEqual(expenseList)
})

test('should add an expense', () => {
    const action = {
        type:'ADD_EXPENSE', 
        expense: {
            description: 'ps5',
            note: 'gaming',
            amount: 5400,
            createdAt: moment(0).add(10, 'days'),
            id:4
    }}

    expect(expenses(expenseList, action)).toEqual([...expenseList, action.expense])
})

test('should edit an expense', () => {
    const action = {
        id : 2,
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'Salad',
            amount: 740,
        }
    }
    const testData = expenses(expenseList, action)
    expect(testData).toEqual([expenseList[0],{...expenseList[1],...action.updates},expenseList[2]])
})

test('should not edit expense if id is not found', () => {
    const action = {
        id : 10,
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'Salad',
            note: 'food',
            amount: 740
        }
    }
    expect(expenses(expenseList,action)).toEqual(expenseList)
})