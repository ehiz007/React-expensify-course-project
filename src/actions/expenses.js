import {v4 as uuidv4} from 'uuid'
//Expenses Actions

//ADD_EXPENSE
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt= 0} = {}
    ) => ({
            expense:{
                id: uuidv4(),
                description,
                note,
                amount,
                createdAt
            },
            type: 'ADD_EXPENSE'
        }
)

//REMOVE_EXPENSE
export const removeExpense = ({id } = {}) =>(
    {
        id,
        type: 'REMOVE_EXPENSE'
    }
)
//Edit expense
export const editExpense = ({id, updates} = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}) 