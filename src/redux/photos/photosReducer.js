import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_REQUEST_SUCCESS,
  GET_PHOTOS_REQUEST_FAIL,
  LOAD_MORE_PHOTOS,
  SET_PHOTO_ID,
  GET_PHOTO_REQUEST,
  GET_PHOTO_REQUEST_SUCCESS,
  GET_PHOTO_REQUEST_FAIL,
  CLEAR_PHOTO,
} from './photosActionCreators';

const initState = {
  loading: true,
  photos: [],
  currentPage: 1,
  photoId: null,
  photo: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {...state, loading: true};
    case GET_PHOTOS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: [...state.photos, ...action.payload],
      };
    case GET_PHOTOS_REQUEST_FAIL:
      return {...state, loading: false, photos: []};
    case LOAD_MORE_PHOTOS:
      return {...state, currentPage: state.currentPage + 1};
    case SET_PHOTO_ID:
      return {...state, photoId: action.payload};
    case GET_PHOTO_REQUEST:
      return {...state, loading: true};
    case GET_PHOTO_REQUEST_SUCCESS:
      return {...state, loading: false, photo: action.payload};
    case GET_PHOTO_REQUEST_FAIL:
      return {...state, loading: false, photo: null};
    case CLEAR_PHOTO:
      return {...state, photo: null};
    default:
      return state;
  }
};
