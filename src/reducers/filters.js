//Filters Reducer
import moment from 'moment'
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate : moment().endOf('month')
}


export default (state = filtersReducerDefaultState, action) => {
    
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
                startDate: {...action.date}
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: {...action.date}
            }

        default: 
            return state
    }
}