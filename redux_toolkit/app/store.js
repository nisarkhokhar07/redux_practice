const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
// const reduxLogger = require('redux-logger')
const icecreamreducer = require('../features/icecream/icecreamSlice')
// const { getDefaultMiddleware } = require('@reduxjs/toolkit')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamreducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store