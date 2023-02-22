import React from 'react';
import { RouterProvider } from 'react-router-dom/dist';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { Provider } from 'react-redux';
import router from './router/index';
import { persistor, store } from './store/index';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}
