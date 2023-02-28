import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Docs() {
  return (
    <div>
      <h1>Welcome to Docs Page</h1>
      <Helmet><title>Docs Page</title></Helmet>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  )
}
