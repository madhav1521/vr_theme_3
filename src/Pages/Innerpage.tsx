import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import {Route, NavLink} from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Innerpage() {
  return (
    <div>
      <Helmet><title>Innerpage Page</title></Helmet>
      <Navbar></Navbar>
      <Sidebar></Sidebar><br/><br/>

    </div>
  )
}
