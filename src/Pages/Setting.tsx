import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Setting() {
  return (
    <div>
      
      <Helmet><title>Setting Page</title></Helmet>
      <Navbar></Navbar>
      <div className='d-flex'>
      <Sidebar></Sidebar>
      <h1>Welcome to Setting Page</h1>
      </div>
    </div>
  )
}
