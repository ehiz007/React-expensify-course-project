import {createStore, combineReducers} from 'redux'
import uuidv4 from 'uuid'
import moment from 'moment'

//////////////////////////////////FOR EXPENSE ACTIONS

//ADD_EXPENSE
const addExpense = (
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
const removeExpense = ({id } = {}) =>(
    {
        id,
        type: 'REMOVE_EXPENSE'
    }
)
//Edit expense
const editExpense = ({id, updates} = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}) 

/////////////////////////FOR FILTERS ACTIONS/////////////////////////
//sort by text
const setTextFilter = (text = '' ) => ({
    type: 'SEARCH_TEXT',
    text
})

//sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//set start date
const setStartDate = (date) => ({
    type: 'START_DATE',
    date
})

//set end date
const setEndDate = (date) => ({
    type: 'END_DATE',
    date
})


/////////////////////////////DEFAULT REDUCER STATES//////////////////////////
const expenseReducerDefaultState = []
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate : undefined
}

//////////////////////////////REDUCERS///////////////////////////////

//////Expense reducer
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]

        case 'REMOVE_EXPENSE':
          return  state.filter(({id}) => id !== action.id)
        
        case 'EDIT_EXPENSE':
            return state.map ( (expense) => {
                if (expense.id === action.id) {
                    return ({
                        ...expense,
                        ...action.updates
                    })
                }
                else{
                    return expense
                }
            })
            
        default :
            return state
    }
}

/////////Filters reducer
const filtersReducer = (state= filtersReducerDefaultState, action) => {
    
    switch (action.type) {
       case 'SEARCH_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: action.date
            }

        default: 
            return state
    }
}


/////////////////CREATE STORE///////////////////////////////////
const store = createStore (
    combineReducers ({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)

const getVisibileExpenses = (expenses, {text, sortBy, startDate, endDate}) => (
    expenses.filter( (expense) => {
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase())
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    
        return textMatch && startDateMatch && endDateMatch
    }).sort((a,b) => {
        if (sortBy === 'date') {
           return a.createdAt < b.createdAt ? 1 : -1
        }
        else if (sortBy === 'amount') {
           return a.mount < b.amount ? 1 : -1
        }
        
    })
)

//////////////////////TESTING THE REDUX STORE///////////////////////
const unsuscribe = store.subscribe( () => {
    const state = store.getState()
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
}) 

const addOne = store.dispatch(addExpense({description:'rent', note:'january rent', amount:100000, createdAt: 125}))
const addTwo = store.dispatch(addExpense({description:'furniture', note:'parlour soafers',amount:700000, createdAt:200}))
// console.log(addTwo)
// store.dispatch(editExpense({id:addTwo.expense.id, updates:{amount:400}}))
// // store.dispatch(removeExpense({id: addTwo.expense.id}))
// store.dispatch(setTextFilter())
// store.dispatch(sortByDate())

// store.dispatch(setTextFilter('en'))
// store.dispatch(setStartDate(125))
// store.dispatch(setEndDate(250))
store.dispatch(sortByAmount())





const demoState = {
    expenses: [{
        id: '84jhf8ksfvk',
        description: 'January rent',
        note: 'This was the final payment for the address',
        amount: 73300,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate:undefined
    }
}
