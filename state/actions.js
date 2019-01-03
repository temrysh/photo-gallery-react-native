export const SET_GALLERY = 'SET_GALLERY'
export const SET_CURRENT_ALBUM = 'SET_CURRENT_ALBUM'
export const SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO'

export const setGallery = gallery => ({ type: SET_GALLERY, payload: gallery })
export const setCurrentAlbum = id => ({ type: SET_CURRENT_ALBUM, payload: id })
export const setCurrentPhoto = id => ({ type: SET_CURRENT_PHOTO, payload: id })
