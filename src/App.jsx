import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import appStore from "./utils/appStrore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<div>TestPage</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
