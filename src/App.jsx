import { RouterProvider } from 'react-router-dom/dist';
import './App.scss';
import { Provider } from 'react-redux';
import router from './router/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/index';
import { ChakraProvider } from '@chakra-ui/react';

import auth from './services/AuthService';

export default function App() {
  const user = {
    firstName: 'John',
    lastName: 'Wick',
    email: 'test@mail.com',
    password: 'secret',
    isAdult: true,
    termsAgree: true,
  };
  console.log(auth.register(user));

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
