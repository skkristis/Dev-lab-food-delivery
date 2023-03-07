import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import ordersReducer from './reducers/ordersReducer';
import dishesReducer from './reducers/dishesReducer';
import cartReducer from './reducers/cartReducer';
import customerReducer from './reducers/customerReducer';
import userReducer from './reducers/userReducer';
import restaurantsManagementReducer from './reducers/restaurantsManagementReducer';
import restaurantsClientReducer from './reducers/restaurantsClientReducer';

const rootReducer = combineReducers({
  dishes: dishesReducer,
  restaurantsManagement: restaurantsManagementReducer,
  restaurantsClient: restaurantsClientReducer,
  orders: ordersReducer,
  cart: cartReducer,
  customer: customerReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['restaurantsClient'],
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
