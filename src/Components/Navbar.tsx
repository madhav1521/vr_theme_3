import React, { useState } from 'react';
import { Button, Dropdown, NavLink } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { toggle_icon, cmp_white_logo, cmp_white_icon, bell, profile, dropdown_white, search_icon } from "../Assets/Images";
import Sidebar from './Sidebar';


export default function Navbar() {
  const [status, setStatus] = React.useState(true)
  const [search,setSearch] =useState(true)
    function toggle (){
      document.body.classList.toggle('setStatus')
    }
    // {status==true ? <Sidebar />:''}

    function searchbar(){
      document.body.classList.toggle('setSearch')
      // setSearch(!search)
      // if (search){
      //   document.body.classList.add('setSearch')
      // }else
      // {
      //   document.body.classList.remove('setSearch')
      // }
    }
  return (
    <>
    {/* <div className='overlay' onClick={searchbar}></div> */}
    <div className='overlay' onClick={toggle}></div>
      <header className='header d-flex justify-content-between'>
        <div className="subdivision1 d-flex align-items-center ">
          
            <img onClick={toggle} src={toggle_icon} alt="menu-bar" className='toggle' id='toggle' />
          
          <img src={cmp_white_logo} alt="logo" className='brand-logo d-none d-sm-block' />
          <img src={cmp_white_icon} alt="logo" className='brand-icon d-block d-sm-none' />
          <form className="header-search " role="search">
            <input className=" search-input form-control bg-transparent border-0 text-light" type="search" placeholder="Find Something here..." aria-label="Search" />
            <button onClick={searchbar} type="button" className="btn btn-close-search btn-close " aria-label="Close"></button> 
            
          </form>
          <button onClick={searchbar} className='search-btn'><img src={search_icon} alt="search" className='d-block d-md-none bg-none' /></button>

 
        </div>
        <div className="subdivision2 d-flex align-items-center">

          <Dropdown className='d-inline mb-hide'>
            <Dropdown.Toggle variant="transparent" id="dropdown-autoclose-true">
              <img src={bell} alt="bell" className='notification' />
            </Dropdown.Toggle>
            <Dropdown.Menu className='d-item '>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Help</Dropdown.Item>
              <Dropdown.Item href="/login">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='d-flex align-items-center'>
            <Dropdown.Toggle variant="transparent" id="dropdown-autoclose-inside">
              <Row className='d-flex align-items-center justify-content-start'>
                <Col md='2' className='p-picture'>
                  <img src={profile} alt="profile" className='profile' />
                </Col>
                <Col md='10' className='p-text d-none d-md-flex flex-column align-items-center '>
                  <span className='p-name text-light justify-content-center align-items-center' >John Doe <img src={dropdown_white} alt="profile" className='dropdown-arrow' /></span>
                  <span className='p-designation text-secondary'>Account Manager</span>
                </Col>
              </Row>
            </Dropdown.Toggle>
            <Dropdown.Menu className='d-item '>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Help</Dropdown.Item>
              <Dropdown.Item href="/login">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
    </>
  )
}
