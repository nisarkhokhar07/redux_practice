import { createSlice } from '@reduxjs/toolkit'
// const {cakeActions} = require('../cake/cakeSlice') 
import { ordered as cakeOrdered } from '../cake/cakeSlice'

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
        builder.addCase(cakeOrdered , (state , action) => {
            state.numOfIcecreams -= action.payload
        })
    }
})

export default icecreamSlice.reducer
export const {ordered , restocked} = icecreamSlice.actions