//importing required libraries
const redux = require('redux')
const createStore = redux.createStore
const ActionBindCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers



//actions object
const actions = {
    CAKE_ORDERED: 'CAKE_ORDERED',
    CAKE_RESTOCKED: 'CAKE_RESTOCKED',
    ICECREAM_ORDERED: 'ICECREAM_ORDERED',
    ICECREAM_RESTOCKED: 'ICECREAM_RESTOCKED'
}

//action creators
function cakeordered(qty = 1) {
    return{
        type: actions.CAKE_ORDERED,
        payload: qty
    }
}

function cakerestocked( qty = 1) {
    return {
        type: actions.CAKE_RESTOCKED,
        payload: qty
    }
}

function icecreamOrdered( qty = 1 ) {
    return {
        type: actions.ICECREAM_ORDERED,
        payload: qty
    }
}

function icecreamRestocked( qty = 1) {
    return {
        type: actions.ICECREAM_RESTOCKED,
        payload: qty
    }
}

//initial state of the app
const INITIAL_STATE_CAKE ={
    numOfCakes : 10
}

const INITIAL_STATE_ICECREAM = {
    numOfIcecreams : 10
}

//reducer function which updates the state based on the type of action received
const cakeReducer = (state = INITIAL_STATE_CAKE , action ) => {
    switch (action.type) {
        case actions.CAKE_ORDERED:
            return {
                numOfCakes : state.numOfCakes - action.payload
            }
        case actions.CAKE_RESTOCKED:
            return {
                numOfCakes : state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const icecreamReducer = (state = INITIAL_STATE_ICECREAM, action) => {
    switch (action.type) {
        case  actions.ICECREAM_ORDERED:
            return {
                numOfIcecreams : state.numOfIcecreams - action.payload
            }
        case actions.ICECREAM_RESTOCKED:
            return {
                numOfIcecreams : state.numOfIcecreams + action.payload
            }
        default:
            return state
    }
}

//running our code
//this is wrong way as there is only one store of our app so,
// const cakeStore = createStore(cakeReducer);
// const icecreamStore = createStore(icecreamReducer);

//we combine our different reducers and make a root reducer so we can pass it in our
//createStore() function that in turn returns us a single store for whole app
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer);

console.log('Initial State', store.getState())

//subscribe function which runs on every state change in app, it takes function as an argument and returns
//a function which should be called at the end when the component is unmounted
const unsubscribe = store.subscribe(() => {console.log('Updated State', store.getState())})

//invoking dispatch function which takes action creator as argument
//action creator returns an object including type and payload, which is the argument of dispatch func

//store.dispatch(cakeordered(3))
//store.dispatch(cakerestocked(2))


//alternative way to write store.dispatch again and again we bind them in action creators _|^
const actionCreator = ActionBindCreators({cakeordered, cakerestocked, icecreamOrdered, icecreamRestocked}, store.dispatch)
actionCreator.cakeordered(3);
actionCreator.cakerestocked(2);
actionCreator.icecreamOrdered(2);
actionCreator.icecreamRestocked(7);


//calling fucntion returned by subscribe function
unsubscribe()

