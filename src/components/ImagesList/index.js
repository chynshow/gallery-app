import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loadMorePhotostAC} from './../../redux/photos/photosActionCreators';
import PropTypes from 'prop-types';

const ImagesList = ({showImage}) => {
  const dispatch = useDispatch();
  const handleLoadMode = () => dispatch(loadMorePhotostAC());
  const photos = useSelector((state) => state.photos);

  return (
    <FlatList
      data={photos}
      renderItem={({item}) => <RenderRow item={item} showImage={showImage} />}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={() => handleLoadMode()}
    />
  );
};

const RenderRow = ({item, showImage}) => (
  <View style={styles.randerRow}>
    <TouchableOpacity onPress={() => showImage(true, item.id)}>
      <Text style={styles.itemAuthor}>{item.user.name}</Text>
      <Image
        style={styles.itemImg}
        source={{
          uri: item.urls.small,
        }}
      />
      <Text style={styles.itemAltDescription}>{item.alt_description}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  randerRow: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  itemImg: {
    height: 400,
  },
  itemAuthor: {
    padding: 10,
  },
  itemAltDescription: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

ImagesList.propTypes = {
  showImage: PropTypes.func.isRequired,
};

RenderRow.propTypes = {
  item: PropTypes.object.isRequired,
  showImage: PropTypes.func.isRequired,
};

export default ImagesList;
