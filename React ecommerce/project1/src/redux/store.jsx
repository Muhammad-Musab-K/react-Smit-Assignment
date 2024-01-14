// store.js
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/product.slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  product: productSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export { store };
