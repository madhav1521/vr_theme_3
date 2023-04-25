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

    function searchbar(){
      document.body.classList.toggle('setSearch')
    }
  return (
    <>
    {/* <div className='overlay' onClick={searchbar}></div> */}
    <div className='overlay' onClick={toggle}></div>
      <header className='header d-flex justify-content-between'>
        <div className="subdivision1 d-flex align-items-center ">
          
          <Button title='toggle-button'className='toggle' onClick={toggle}><img src={toggle_icon} alt="menu-bar"  id='toggle' /></Button>
          
          <a href='./' title='company-logo' ><img src={cmp_white_logo} alt="logo" className='brand-logo d-none d-sm-block' /></a>
          <a href='./' title='company-logo' ><img src={cmp_white_icon} alt="logo" className='brand-icon d-block d-sm-none' /></a>
          <form className="header-search " role="search">
            <input className=" search-input form-control bg-transparent border-0 text-light" type="search" placeholder="Find Something here..." aria-label="Search" />
            <Button title='close-searchbar' onClick={searchbar} type="button" className="btn toggle  btn-close-search btn-close " aria-label="Close"></Button> 
            
          </form>

 
        </div>
        <div className="subdivision2 d-flex align-items-center">
          <Button title='search-button' onClick={searchbar} className='toggle search-btn'><img src={search_icon} alt="search" className='d-block d-md-none bg-none' /></Button>

          <Dropdown className='dropdown d-inline mb-hide'>
            <Dropdown.Toggle title='notification-button' variant="transparent" id="dropdown-autoclose-true">
              <img src={bell} alt="bell" className='notification' />
            </Dropdown.Toggle>
            <Dropdown.Menu className='d-item '>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Help</Dropdown.Item>
              <Dropdown.Item href="/login">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='dropdown d-flex align-items-center'>
            <Dropdown.Toggle title='profile-menu' variant="transparent" id="dropdown-autoclose-inside">
              <Row className='d-flex align-items-center justify-content-start'>
                <Col md='2' className='p-picture'>
                  <img src={profile} alt="profile" className='profile' />
                </Col>
                <Col md='10' className='profile-text d-none d-md-flex flex-column align-items-center '>
                  <span className='profile-name text-light justify-content-center align-items-center' >John Doe <img src={dropdown_white} alt="profile" className='dropdown-arrow' /></span>
                  <span className='profile-designation'>Account Manager</span>
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
