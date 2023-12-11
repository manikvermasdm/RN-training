// App.js
import * as React from 'react';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    <Home />
    //   </PersistGate>
    // </Provider>
  );
}

export default App;
