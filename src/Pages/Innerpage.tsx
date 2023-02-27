import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import {Route, NavLink} from "react-router-dom";
import { innerpage } from '../Assets/Images';
import { Helmet } from 'react-helmet';

export default function Innerpage() {
  return (
    <div>
      <Helmet><title>Innerpage Page</title></Helmet>
            This is innerpage..<br/>
        <button><NavLink to="/dashboard">back to dashboard</NavLink></button>
        <button><NavLink to='/'>Logout</NavLink></button><br/><br/>

        <Navbar></Navbar>
        <Sidebar></Sidebar><br/><br/>

        <img src={innerpage} alt='dashboard' className='image'/>
    </div>
  )
}
