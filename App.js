import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch, Route} from 'react-router-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPhotosRequest} from './src/redux/photos/photosActions';
import Baner from './src/components/Baner';
import Photos from './src/components/Photos';

const App = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPhotosRequest(currentPage));
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <Switch>
        <Route exact path="/" component={Baner} />
        <Route exact path="/photos" component={Photos} />
      </Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
