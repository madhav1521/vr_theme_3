import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Docs() {
  return (
    <div>
      
      <Helmet><title>Docs Page</title></Helmet>
      <Navbar></Navbar>
      <div className='d-flex'>
      <Sidebar></Sidebar>
      <h1>Welcome to Docs Page</h1>
      </div>
    </div>
  )
}
