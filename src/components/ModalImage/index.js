import React from 'react';
import {Modal, Image, Button, StyleSheet} from 'react-native';
import {getPhotoRequest} from './../../redux/photos/photosActions';
import {useDispatch, useSelector} from 'react-redux';
import {clearPhotoAC} from './../../redux/photos/photosActionCreators';
import Loader from './../Loader';
import PropTypes from 'prop-types';

const ModalImage = ({showModal, setShowModal}) => {
  const dispatch = useDispatch();
  const {photoId, photo, loading} = useSelector((state) => state);

  React.useEffect(() => {
    if (photoId) {
      dispatch(getPhotoRequest(photoId));
    }
    return () => dispatch(clearPhotoAC());
  }, [photoId]);

  return (
    <Modal visible={showModal}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Image
            source={{
              uri: photo ? photo.urls.regular : null,
            }}
            style={styles.modalImg}
          />
          <Button title="back" onPress={() => setShowModal(false)} />
        </>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalImg: {
    flex: 1,
    height: 200,
  },
});

ModalImage.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalImage;
