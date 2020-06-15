/////////////////////////FOR FILTERS ACTIONS/////////////////////////
//sort by text
export const setTextFilter = (text = '' ) => ({
    type: 'SEARCH_TEXT',
    text
})

//sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//set start date
export const setStartDate = (date) => ({
    type: 'START_DATE',
    date
})

//set end date
export const setEndDate = (date) => ({
    type: 'END_DATE',
    date
})