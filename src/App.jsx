import { RouterProvider } from 'react-router-dom/dist';
import router from './router/index.jsx';
import './App.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
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
