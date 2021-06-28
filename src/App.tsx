import React from "react";
import "./App.scss";
import { createStore, StoreProvider } from "easy-peasy";
import Store, { ConfigureStore } from "./store";
import Home from "./home";
const store = createStore(Store, ConfigureStore);
function App() {
  return (
    <StoreProvider store={store}>
      <Home></Home>
    </StoreProvider>
  );
}

export default App;
