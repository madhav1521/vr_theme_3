import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function History() {
  return (
    <>
      <h1>Welcome to History Page</h1>
      <Helmet><title>History Page</title></Helmet>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </>
  )
}
