import React from 'react'
import counterReducer from './CounterReducer'
import gameReducer from './gameReducer'
import { createStoreHook } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

//     const myStore = createStore(counterReducer)
// const myStore = createStore(gameReducer)

const rootReducer = combineReducers({
    counterStore: counterReducer,
    gameStore: gameReducer
})


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

// const myStore = createStore(rootReducer)

const myStore = createStore(persistedReducer)

 

export default myStore