import { SET_GALLERY, SET_CURRENT_ALBUM, SET_CURRENT_PHOTO } from './actions'

const createReducer = actionType => initState => (state = initState, { type, payload }) =>
  type === actionType ? payload : state

export const galleryReducer = createReducer(SET_GALLERY)([])
export const albumReducer = createReducer(SET_CURRENT_ALBUM)(null)
export const photoReducer = createReducer(SET_CURRENT_PHOTO)(null)
