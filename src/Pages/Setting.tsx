import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Setting() {
  return (
    <div>
      <h1>Welcome to Setting Page</h1> 
      <Helmet><title>Setting Page</title></Helmet>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  )
}
