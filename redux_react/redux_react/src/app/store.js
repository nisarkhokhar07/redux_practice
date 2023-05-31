import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamreducer from '../features/icecream/icecreamSlice'
// const reduxLogger = require('redux-logger')
// const { getDefaultMiddleware } = require('@reduxjs/toolkit')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamreducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store