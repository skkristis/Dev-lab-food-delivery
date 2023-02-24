import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import ordersReducer from './reducers/ordersReducer';
import dishesReducer from './reducers/dishesReducer';
import restaurantsReducer from './reducers/restaurantsReducer';

const rootReducer = combineReducers({
  dishes: dishesReducer,
  restaurants: restaurantsReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
