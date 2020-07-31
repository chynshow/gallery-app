export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_REQUEST_SUCCESS = 'GET_PHOTOS_REQUEST_SUCCESS';
export const GET_PHOTOS_REQUEST_FAIL = 'GET_PHOTOS_REQUEST_FAIL';
export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST';
export const GET_PHOTO_REQUEST_SUCCESS = 'GET_PHOTO_REQUEST_SUCCESS';
export const GET_PHOTO_REQUEST_FAIL = 'GET_PHOTO_REQUEST_FAIL';
export const LOAD_MORE_PHOTOS = 'LOAD_MORE_PHOTOS';
export const SET_PHOTO_ID = 'SET_PHOTO_ID';
export const CLEAR_PHOTO = 'CLEAR_PHOTO';

export const getPhotosRequestAC = () => ({type: GET_PHOTOS_REQUEST});
export const getPhotosRequestSuccessAC = (photos) => ({
  type: GET_PHOTOS_REQUEST_SUCCESS,
  payload: photos,
});
export const getPhotosRequesFailtAC = () => ({type: GET_PHOTOS_REQUEST_FAIL});
export const getPhotoRequestAC = () => ({type: GET_PHOTO_REQUEST});
export const getPhotoRequestSuccessAC = (photo) => ({
  type: GET_PHOTO_REQUEST_SUCCESS,
  payload: photo,
});
export const getPhotoRequesFailAC = () => ({type: GET_PHOTO_REQUEST_FAIL});
export const loadMorePhotostAC = () => ({type: LOAD_MORE_PHOTOS});
export const setPhotoIdAC = (id) => ({type: SET_PHOTO_ID, payload: id});
export const clearPhotoAC = () => ({type: CLEAR_PHOTO});
