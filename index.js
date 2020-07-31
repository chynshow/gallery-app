import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NativeRouter} from 'react-router-native';
import {Provider} from 'react-redux';
import store from './src/redux';
import App from './App';

const RNRedux = () => (
  <Provider store={store}>
    <NativeRouter>
      <App />
    </NativeRouter>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
