const redux = require('redux')
const produce = require('immer').produce


const actions = {
    UPDATE_STREET : 'UPDATE_STREET'
}
const INITIAL_STATE = {
    name: 'Umer Atiq 99',
    address: {
        street : '125 Mian Mir Colony Upper Mall',
        city : 'Lahore',
        country: 'Pakistan'
    }
}

function updatestreet ( newStreet ) {
    return {
        type : actions.UPDATE_STREET,
        payload: newStreet
    }
}

const reducer = (state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case actions.UPDATE_STREET:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street : action.payload
            //     }
            // }

            //now using immer it allows us to mutate directly an object
            return produce(state , (draft) => {
                draft.address.street = action.payload;
            })
    }
}

const store = redux.createStore(reducer);
console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("Updated Street", store.getState())
})

store.dispatch(updatestreet("Taxali Gate, Androon Lahore"))
unsubscribe()