import React from 'react';
import {
  HomeScreen,
  SecondScreen,
} from 'screens';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Second: {
    screen: SecondScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
