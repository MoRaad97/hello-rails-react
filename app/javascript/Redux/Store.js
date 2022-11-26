import { configureStore } from '@reduxjs/toolkit'
import greetingsReducer from './Greetings_Reducer'

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;