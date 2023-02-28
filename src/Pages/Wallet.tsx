import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Wallet() {
  return (
    <div>
      <h1>Welcome to Wallet Page</h1>
      <Helmet><title>Wallet Page</title></Helmet>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  )
}
