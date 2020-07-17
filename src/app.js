import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibility from './selectors/getVisibility'
import { startSetExpenses} from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate, setStartDate,setEndDate} from './actions/filters'
import 'normalize-css/normalize.css'
import './style/style.scss'
import './firebase/firebase'

const store = configureStore()

const unsuscribe = store.subscribe( () =>{
    const state = store.getState()
    const visibleExpenses = getVisibility(state.expenses, state.filters)

})


const jsx =  (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    
    ReactDOM.render(jsx, document.getElementById('app'))
})

