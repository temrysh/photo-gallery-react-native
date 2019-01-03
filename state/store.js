import { createStore, combineReducers } from 'redux'
import { galleryReducer as gallery, albumReducer as album, photoReducer as photo } from './reducers'
export const store = createStore(combineReducers({ gallery, album, photo }))
