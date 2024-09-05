import React from "react";
import { Route, Routes } from "react-router-dom";

import Form from "./Form";
import Home from "./Home";
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
