import {addExpense, removeExpense, editExpense} from '../../src/actions/expenses'

test('To test for remove actions', () => {
    
    expect(removeExpense({id:'r34t'})).toEqual({id:'r34t', type:'REMOVE_EXPENSE'})
})


test ('To test for Edit Expense', () => {
    let updates = {note:'new note value'}
    const edit =  editExpense({id:'uiejdiisu', updates})
    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        updates: {note:'new note value'},
        id: expect.any(String)
    })
})

test ('To test addExpense actions', () => {
    expect(addExpense ({description:'game', createdAt:1000, note:'entertainment', amount:0})).toEqual( {
        expense: {description:'game', createdAt:1000, note:'entertainment', amount:0, id: expect.any(String)},
        type: 'ADD_EXPENSE'
    })
})


test ('To test addExpense actions', () => {
    expect(addExpense ()).toEqual( {
        expense: {description:'', createdAt:0, note:'', amount:0, id: expect.any(String)},
        type: 'ADD_EXPENSE'
    })
})
