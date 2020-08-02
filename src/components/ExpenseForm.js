import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize'

export default class ExpenseForm extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            description:  props.expense ? props.expense.description : '',
            amount:  props.expense ? props.expense.amount.toString() : '',
            note:  props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error:''
        }
    };
    
    enterDescription = (e) => {
        const description = e.target.value 
        this.setState ( () => ({
            description 
        }))
    };
    changeAmount = (e) => {
        const amount = e.target.value

        if(amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }
    changeNote = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState( () => ({createdAt}) )
        }
        
    }

    onFocusChange = ({focused}) => {
        this.setState (() => ({
            calenderFocused : focused
        }))
    }
    
    onSubmit = (e) => {
        e.preventDefault()

        if ( !this.state.description || !this.state.amount) {
            const error = 'Please Enter description and amount!'
            this.setState(() => ({error}))
        } else {
            this.setState(() => ({error:''}))
            const expense = {
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf(),
                amount: parseFloat(this.state.amount),
                note: this.state.note
            }
            this.props.onSubmit(expense)

        }
    }
    render() {
        
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type='text' 
                        value= {this.state.description}
                        autoFocus
                        placeholder='description'
                        onChange= {this.enterDescription}
                     />
                    <input type='number' 
                        value = {this.state.amount}
                        placeholder = 'amount'
                        onChange={this.changeAmount}
                    />

                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {()=>false}
                    />
                    <textarea
                        placeholder='add a note for your expense (optional)'
                        value={this.state.note}
                        onChange = {this.changeNote}
                    ></textarea>
                    <button onClick={this.onSubmit}>Add Expense</button>
                </form>
            </div>
        )
        
    }

}