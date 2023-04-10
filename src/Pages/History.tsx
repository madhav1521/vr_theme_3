import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function History() {
  return (
    <>
      
      <Helmet><title>History Page</title></Helmet>
      <Navbar></Navbar>
      <div className='d-flex'>
      <Sidebar></Sidebar>
      <h1>Welcome to History Page</h1>
      </div>
    </>
  )
}
