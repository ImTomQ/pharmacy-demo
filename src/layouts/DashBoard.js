import React from 'react'
import Sidebar from '../components/Sidebar';
import Routers from '../router/Router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function DashBoard() {
  return (
    <>
    <Sidebar />
      <Router>
        <Routers />
      </Router>
    </>
  )
}

export default DashBoard
