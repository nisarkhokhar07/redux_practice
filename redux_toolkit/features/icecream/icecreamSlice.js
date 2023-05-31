const createSlice = require('@reduxjs/toolkit').createSlice
// const {cakeActions} = require('../cake/cakeSlice') 
const cakeActions = require ('../cake/cakeSlice').cakeActions

const INITIAL_STATE = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: INITIAL_STATE,
    reducers: {
        ordered: (state, action) => {
            state.numOfIcecreams -= action.payload
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: ( state, action ) => {
    //         state.numOfIcecreams -= action.payload
    //     }
    // }
    //recommended way to add extra reducers
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered , (state , action) => {
            state.numOfIcecreams -= action.payload
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions