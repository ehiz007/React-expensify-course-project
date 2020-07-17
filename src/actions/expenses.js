import {v4 as uuidv4} from 'uuid'
import database from '../firebase/firebase'

//Expenses Actions dispatched to the reducers to work on the store

//////////////////////////////NEW EXPENSE ADDER////////////////
//ADD_EXPENSE

export const addExpense = (expense) => ({
    expense,
    type: 'ADD_EXPENSE'
})

// dispatch action and send data to fire base database

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData
        const expense = {description, note, amount, createdAt}

        return database.ref('expenses').push(expense).then( (ref) => {
           
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

///////////////////EXPENSE REMOVER///////////////////

//Dispatches REMOVE_EXPENSE from store
export const removeExpense = ({id} = {}) =>(
    {
        id,
        type: 'REMOVE_EXPENSE'
    }
)

//Start remove Expense from store and database

export const startRemoveExpense = ({id} = {}) => {
    
    return (dispatch) => {
         return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}))
         })
         

    }
}

///////////////EDIT EXPENSE //////////////////////////////

//Edit expense
export const editExpense = ({id, updates} = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}) 

export const startEditExpense = ({id, updates} = {}) => {
    console.log(id)
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then((snapshot) => {
            console.log(snapshot)
            dispatch(editExpense({
                id,
                updates
            }))
        })
    }

}


///////////////SETTING STATE TO DATA READ FROM THE STORE

//dispatches set action to store 

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
})



export const startSetExpenses = () => {
    return (dispatch) => {
        const expenses = []
        
        return database.ref('expenses').once('value').then( (snapshot) => {
            if(snapshot !== null) {
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()})
                })
            }
            dispatch(setExpenses(expenses)) 
        })    
    }
}






//Old Add expense
// export const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createdAt= 0} = {}
//     ) => ({
//             expense:{
//                 id: uuidv4(),
//                 description,
//                 note,
//                 amount,
//                 createdAt
//             },
//             type: 'ADD_EXPENSE'
//         }
// )