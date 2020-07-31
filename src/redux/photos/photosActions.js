import {
  getPhotosRequestSuccessAC,
  getPhotosRequestAC,
  getPhotosRequestFailAC,
  getPhotoRequestAC,
  getPhotoRequestSuccessAC,
  getPhotoRequesFailAC,
} from './photosActionCreators';

export const getPhotosRequest = (currentPage) => async (dispatch) => {
  try {
    dispatch(getPhotosRequestAC());
    const res = await fetch(
      `https://api.unsplash.com/photos?page=${currentPage}&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,
    );
    const payload = await res.json();
    dispatch(getPhotosRequestSuccessAC(payload));
  } catch (error) {
    dispatch(getPhotosRequestFailAC());
    console.warn(error.response.data.error);
  }
};

export const getPhotoRequest = (photoId) => async (dispatch) => {
  try {
    dispatch(getPhotoRequestAC());
    const res = await fetch(
      `https://api.unsplash.com/photos/${photoId}?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,
    );

    const payload = await res.json();
    dispatch(getPhotoRequestSuccessAC(payload));
  } catch (error) {
    dispatch(getPhotoRequesFailAC());
    console.warn(error.response.data.error);
  }
};
