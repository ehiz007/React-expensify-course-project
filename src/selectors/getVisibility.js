//showing the sorted expense
import moment from 'moment'

export default (expenses, {text, sortBy, startDate, endDate}) => (
    expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase())
        const startDateMatch = startDate ?  moment(startDate).isSameOrBefore(createdAtMoment, 'day') : true 
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment, 'day') : true
        
        return textMatch && startDateMatch && endDateMatch
    }).sort((a,b) => {
        if (sortBy === 'date') {
           return a.createdAt < b.createdAt ? 1 : -1
        }
        else if (sortBy === 'amount') {
           return a.amount < b.amount ? 1 : -1
        }
        
    })
)

