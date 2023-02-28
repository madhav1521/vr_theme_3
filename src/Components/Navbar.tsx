import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { toggle_icon, cmp_white_logo, cmp_white_icon, bell, profile, dropdown_white, search_icon } from "../Assets/Images";
import { render } from '@testing-library/react';



// const options = [
//   {
//     name: 'Enable both scrolling & backdrop',
//     scroll: true,
//     backdrop: true,
//   },
// ];

// function OffCanvasExample({ name, ...props }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const toggleShow = () => setShow((s) => !s);

//   return (
//     <>
//       <Button variant="primary" onClick={toggleShow} className="me-2">
//         {<img src={toggle_icon} alt="menu-bar" className='toggle' id='toggle' />}
//       </Button>
//       <Offcanvas show={show} onHide={handleClose} {...props}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// function Example() {
//   return (
//     <>
//       {options.map((props, idx) => (
//         <OffCanvasExample key={idx} {...props} />
//       ))}
//     </>
//   );
// }

// render(<Example />);














export default function Navbar() {
  return (
    <>
      <header className='header d-flex justify-content-between'>
        <div className="subdivision1 d-flex align-items-center ">
          <img src={toggle_icon} alt="menu-bar" className='toggle' id='toggle' />
          <img src={cmp_white_logo} alt="logo" className='brand-logo d-none d-sm-block' />
          <img src={cmp_white_icon} alt="logo" className='brand-icon d-block d-sm-none' />
          <form className="header-search d-flex align-items-center d-none d-md-block" role="search">
            <input className=" search-input form-control bg-transparent border-0 text-light" type="search" placeholder="Find Something here..." aria-label="Search" />
          </form>
          <Button><img src={search_icon} alt="search" className='search-btn d-block d-md-none bg-none' /></Button>


        </div>
        <div className="subdivision2 d-flex align-items-center">

          <Dropdown className='d-flex align-items-center'>
            <Dropdown.Toggle variant="transparent" id="dropdown-autoclose-inside">
              <img src={bell} alt="bell" className='notification' />
            </Dropdown.Toggle>
            <Dropdown.Menu className='d-item '>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>



    </>
  )
}
