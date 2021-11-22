import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import store from './src/redux/store';
import StackNavigation from './src/navigation/StackNavigation';

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    </Provider>
  )
}

export default App;