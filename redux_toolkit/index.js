const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const redux = require('redux')
const ActionBindCreators = redux.bindActionCreators

console.log('Initial State:', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State:', store.getState())
})

const actions = ActionBindCreators({ordered: cakeActions.ordered , restocked: cakeActions.restocked }, store.dispatch)
store.dispatch(cakeActions.ordered(3))
actions.restocked(2)

unsubscribe()