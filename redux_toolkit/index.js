const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice')
const redux = require('redux')
const ActionBindCreators = redux.ActionBindCreators

console.log('Initial State:', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State:', store.getState())
})

const actions = ActionBindCreators({ordered , restocked }, store.dispatch)

actions.ordered(3)
actions.restocked(2)

unsubscribe()