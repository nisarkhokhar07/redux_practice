const createSlice = require('@reduxjs/toolkit').createSlice

const INITIAL_STATE = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name: 'cake',
    INITIAL_STATE,
    reducers: {
        ordered: ( state , action ) => {
            state.numOfCakes -= action.payload
        },
        restocked: ( state , action ) => {
            state.numOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions