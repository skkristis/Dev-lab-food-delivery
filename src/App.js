import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import ClientLanding from "./app/pages/ClientLanding";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={reduxStore}></Provider>
    </QueryClientProvider>
  );
}

export default App;
