import {addExpense, removeExpense, editExpense, startAddExpense} from '../../src/actions/expenses'
import expenses from '../expenses/expenses'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../src/firebase/firebase'

const createMockStore = configureStore([thunk])
beforeEach( () => {
    database.ref('expenses').set('dhb')
})

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
    expect( addExpense (expenses[0])).toEqual({ 
        expense:expenses[0],
        type: 'ADD_EXPENSE'
    })
})

test('should add expense data to database and store', () => {
    const store = createMockStore({})
    const expenseData = {
        description: 'rice',
        note: 'food stuffs',
        amount: 1200,
        createdAt: 9000,
        
    }
    database.ref('expenses').push({...expenseData})

    store.dispatch(startAddExpense(expenseData)).then((snapshot) => {
        const actions = store.getActions()
        console.log(actions[0])
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            id: expect.any(String),
            ...expenseData
        })
       
        return database.ref(`expenses/${snapshot.key}`).once('value')
    }).then( (childSnapshot) => {
        console.log('dd',childSnapshot.val())
        expect(childSnapshot.val()).toEqual(expenseData)
        
    })
})


test('to test addexpense with default values', () => {
    const store = createMockStore({})
    const expenseData = {description: '', note: '', createdAt: 0, amount: 0}
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            expenseData,
            id: expect.any(String)
        })
        return database.ref(`expenses/${actions[0].id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(gexpenseData)
        done()
    })

})





// test ('To test addExpense actions with default values passed in', () => {
//     expect(addExpense ()).toEqual( {
//         expense: {description:'', createdAt:0, note:'', amount:0, id: expect.any(String)},
//         type: 'ADD_EXPENSE'
//     })
// })



// expense: {description:'game', createdAt:1000, note:'entertainment', amount:0, id: expect.any(String)

