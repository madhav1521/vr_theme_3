import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Wallet() {
  return (
    <div>
      <Helmet><title>Wallet Page</title></Helmet>
      <Navbar></Navbar>
      <div className='d-flex'>
      <Sidebar></Sidebar>
      <h1>Welcome to Wallet Page</h1>
      </div>
    </div>
  )
}
