import React from 'react';
import { RouterProvider } from 'react-router-dom/dist';
import './App.scss';
import { Provider } from 'react-redux';
import router from './router/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/index';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './themes';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
          </ChakraProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
