import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPhotoIdAC} from './../../redux/photos/photosActionCreators';
import ModalImage from '../ModalImage';
import ImagesList from '../ImagesList';

const Photos = () => {
  const [showModal, setShowModal] = React.useState(false);
  const photoId = useSelector((state) => state.photoId);
  const dispatch = useDispatch();

  const showImage = (modalToggleValue, photoId) => {
    setShowModal(modalToggleValue);
    dispatch(setPhotoIdAC(photoId));
  };

  return (
    <>
      <ModalImage
        showModal={showModal}
        setShowModal={setShowModal}
        imageId={photoId}
      />
      <ImagesList showImage={showImage} />
    </>
  );
};

export default Photos;
