import { createStore } from 'redux'

const incrementBy = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
})

const decrementBy = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'RESET',
    count
})

const store = createStore ( (state = {count:0}, actions) => {
    switch(actions.type) {
        case 'INCREMENT':
            return {
                count: state.count + actions.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - actions.decrementBy
            }
        case 'RESET':
            return {
                count:actions.count
            }
        default :
            return state
    }
    
})

const unsubscribe = store.subscribe (() => {
    console.log(store.getState())
})

store.dispatch(incrementBy({incrementBy:7}))
store.dispatch(decrementBy({decrementBy:3}))
store.dispatch(setCount({count:100}))

// console.log(store.getState())
// unsubscribe()
// store.dispatch({
//     type:'RESET'
// })

// store.dispatch({
//     type:'RESET'
// })


