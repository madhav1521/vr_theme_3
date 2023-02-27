import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import {Route, NavLink} from "react-router-dom";
import { dashboard } from '../Assets/Images';
import { Helmet } from 'react-helmet';

export default function Dashboard() {
  return (
    <>
    <Helmet><title>Dashboard Page</title></Helmet>
        This is dashboard.. <br/>
        <button><NavLink to="/innerpage">go to Innerpage</NavLink></button>
        <button><NavLink to='/login'>Logout</NavLink></button><br/><br/><br/>

        <Navbar></Navbar>
        <Sidebar></Sidebar><br/><br/>

        <img src={dashboard} alt='dashboard' className='image'/>
        
       
    </>
  )
}
