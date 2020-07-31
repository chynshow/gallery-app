import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const Baner = ({history}) => (
  <View style={styles.banerContainer}>
    <Text style={styles.banerTitle}>Welcome!</Text>
    <Button title="Go to gallery" onPress={() => history.push('/photos')} />
  </View>
);

const styles = StyleSheet.create({
  banerContainer: {
    flex: 1,
    backgroundColor: '#202124',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banerTitle: {
    paddingBottom: 30,
    fontSize: 35,
    color: '#fff',
  },
});

Baner.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Baner;
