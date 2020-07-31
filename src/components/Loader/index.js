import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Loader = () => (
  <View style={styles.container}>
    <Text style={styles.text}>LOADING...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#333',
  },
});

export default Loader;
