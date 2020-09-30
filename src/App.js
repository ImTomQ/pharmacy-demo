import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routers from "./router/Router";
import Sidebar from './components/Sidebar/'

function App() {
  
  return (
    <>
      <Router>
        <Sidebar />
        <Routers />
      </Router>
    </>
  )
}

export default App
