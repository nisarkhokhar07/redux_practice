import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: INITIAL_STATE,
    reducers: {
        ordered: ( state , action ) => {
            state.numOfCakes -= action.payload
        },
        restocked: ( state , action ) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const {ordered , restocked} = cakeSlice.actions