import { createStore } from 'redux'
import rootReducer from './rootReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whiteList: [
        'cart'
    ]
}
{/*@ts-ignore */}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
export default store