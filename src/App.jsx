import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import appStore from "./utils/appStrore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<div>TestPage</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
