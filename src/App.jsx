import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Clock from "./Components/Clock";
import Calculator from "./Components/Calculator";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exect path='/' element={<Clock />} ></Route>
          <Route exect path='/calculator' element={<Calculator />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;