import React from 'react'
import {connect} from 'react-redux'
import {startRemoveExpense} from '../actions/expenses'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

//changing currency
numeral.register('locale', 'ng', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '₦'
    }
});

// switch between locales
numeral.locale('ng');

export const Expense= ( { id,description,amount,createdAt, dispatch } ) =>(
    <div  className='expense'>  
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        
        <p>
            {numeral(amount).format('$0,0.00')}  
                - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
        <button onClick = { () => {
             dispatch(startRemoveExpense({id})) 
        }
            }>remove</button>
    </div>
)



export default connect()(Expense)


