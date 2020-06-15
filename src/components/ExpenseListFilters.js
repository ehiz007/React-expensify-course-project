import React from 'react'
import {connect} from 'react-redux'
import 'react-dates/initialize'
import {DateRangePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'
import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from '../actions/filters'



export class ExpenseListFilters extends React.Component  {
    constructor (props) {
        super(props)
        this.state = {
            calenderFocuse: null
        }
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSelectChange = (e) => {      
        if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }else if (e.target.value === 'date') {
            this.props.sortByDate()
        }            
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)  
    }
    onFocusChange = (calenderFocuse) => {
        this.setState(() => ({calenderFocuse}))
    }
   render () {
   
       return (
            <div>
                <input type='text' value={this.props.filters.text} onChange = {this.onTextChange}/>
                <select value = {this.props.filters.sortBy} onChange = {this.onSelectChange}>
                    <option value='date'>By date</option>
                    <option value='amount'>By Amount</option>
                </select>
                <DateRangePicker
                    startDate = {moment(this.props.filters.startDate)}  
                    startDateId = 'startDateId'
                    endDateId = 'endDateId'
                    endDate = {moment(this.props.filters.endDate)}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calenderFocuse}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    showClearDates={true}

                />
        
             </div>
       )
   }
}

const mapStateToProps= (state) => (
    {
        filters: state.filters
    }
)

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (value) => dispatch(setTextFilter(value)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)