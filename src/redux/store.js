// import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import rootReducer from './reducers'; // Replace with your actual root reducer
// import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
// const middleware = [...getDefaultMiddleware(), logger];

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   // Optionally, you can configure other options here
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   // other store configuration options
// });

// const persistor = persistStore(store);
// // const store = configureStore({
// //   reducer: rootReducer,
// //   middleware: middleware,
// //   // other store configuration options
// // });

// // export default store;

// export {store, persistor};

// store.js
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers'; // replace with your actual rootReducer

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['rootReducer'],

  // Optionally, you can configure other options here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  //   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  // other store configuration options
});

const persistor = persistStore(store);

export {store, persistor};
