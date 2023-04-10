import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Route, NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Button, FloatingLabel, Form, Tab, Tabs, } from 'react-bootstrap';
import Password from '../Components/Password';
import Username from '../Components/Username';
import Select from '../Components/Select';
import UploadFile from '../Components/UploadFile';
import Radio from '../Components/Radio';
import Checkbox from '../Components/Checkbox';
import { calender, dropdown_black, dropdown_white } from '../Assets/Images';



export default function Innerpage() {
  return (
    <>
      <Helmet><title>Innerpage Page</title></Helmet>
      <Navbar></Navbar>
      <div className="main w-100 d-flex">
        <Sidebar></Sidebar>
        <div className="user-page ">
          <div className="page-title">
            <h4>Users</h4>
          </div>

          {/*  form starts
                ----------------------------------------------------------------------------------------------------------  */}
          <div className="user-container ">

            <div className="column1">
              <h3>One Column</h3>
            </div>


            <Username label='Username' type='text' placeholder='Username' />
            <Password label='Password' type='password' placeholder='Username' />
            {/* <Select select='Country' /> */}
            <div className="selection">
              <Form.Select aria-label="Default select example" className='formselect'>
                <option>Country</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </Form.Select>
            </div>

            {/* <!-- second column starts
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column2">
              <h3>Two Column</h3>
            </div>
            <div className="row mt-3">
              <div className=" col-md-6">
                <Username label='Full Name' type='text' placeholder='Your Name' defaultValue='John Doe' />
              </div>
              <div className=" col-md-6">
                <FloatingLabel controlId="floatingInput" label='Education' className="login-name  border-0 text-secondary b-dash">
                  <Form.Control type='text' placeholder='Disable' defaultValue='Disable' disabled className='disable' />
                </FloatingLabel>
              </div>
              <div className="col-md-6">


                <div className="input-group has-validation mb-27p mb-md-3 error-input">
                  <div className="form-floating text-secondary is-invalid">
                    <Form.Control type="text" className="form-control is-invalid shadow-none" id="floatingInputGroup2" placeholder="Username" defaultValue='John Doe' required />
                    <label >Error</label>
                  </div>
                  <div className="invalid-feedback mb-3">
                    Please Enter your Full Name
                  </div>
                </div>


              </div>
              <div className=" col-md-6">
                <Password label='Password' type='password' placeholder='******' defaultValue='******' />
              </div>
            </div>

            {/*                 
                          <!-- third column starts
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column3">
              <h3>Third Column</h3>
            </div>
            <div className="row mt-3">

              <div className="col-md-4">
                <Username label='Focus' type='text' placeholder='Focused' defaultValue='|' />
              </div>
              <div className="selectinvalidtext col-md-4">

                <FloatingLabel controlId="floatingInput" label='Email' className="login-name email-label ">
                  <Form.Control type='text' placeholder='John Doe' defaultValue='John Doe' />
                </FloatingLabel>
                <div className="below-select text-danger">
                  Enter Valid email id
                </div>
              </div>

              <div className="date col-md-4 ">
                <FloatingLabel controlId="floatingInput" label="Date picker dialog" className="calender mb-5">
                  <Form.Control type="date" name='' />
                </FloatingLabel>
                
              </div>
            </div>

            {/* <!-- Fourth column starts
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column4">
              <h3>Four Column</h3>
            </div>
            <div className="row mt-3">
              <div className="  col-lg-3 col-md-6 ">
                <Username label='Email ID' type='text' placeholder='Email' defaultValue='johndoe@gmail.com' />
              </div>
              <div className="  col-lg-3 col-md-6 ">
                <div className="selection pt-2 mt-1">
                  <Form.Select aria-label="Default select example" className='formselect'>
                    <option>Country</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                  </Form.Select>
                </div>
              </div>

              <div className="  col-lg-3 col-md-6 ">
                <FloatingLabel controlId="floatingInput" label='Full Name' className="login-name floatinglabel border-0 text-secondary">
                  <Form.Control type='text' placeholder='John Doe' defaultValue='John Doe' disabled className='disable' />
                </FloatingLabel>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <FloatingLabel controlId="floatingInput" label="Phone No" className="floatinglabel">
                  <Form.Control type="tel" name='' defaultValue='+21 - 23456 7890' placeholder='+21 - 23456 7890' />
                </FloatingLabel>
                <div className="below-number text-secondary ">
                  Enter your register phone no
                </div>
              </div>
            </div>
            {/*                 
                          <!-- Fifth column starts (Other form Elements)
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column5 ">
              <h3>Other Elements</h3>
              <h5>File Upload</h5>
            </div>
            <div className="uploadbutton d-flex align-items-center form-check-inline ">

              <UploadFile />


            </div>

            {/* <!-- Sixth column starts (Checkbox)
                            ---------------------------------------------------------------------------------------------------------- --> */}
            <div className="column6 ">
              <h5>Radio Box</h5>
            </div>

            <Radio />



            {/* <!-- Seventh column starts (Radiobutton)
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column7 ">
              <h5>Check Box</h5>
            </div>

            <Checkbox />

            {/* <!-- Eighth column starts (Call to action)
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column8 ">
              <h5>Call to Action</h5>
            </div>
            <div className="pri-sec d-sm-flex">
              <button className="primary form-check-inline border-0  mb-2 ">
                Primary
              </button>
              <button className="secondary form-check-inline mb-2 ">
                Secondary
              </button>

            </div>


            {/* <!-- Tabbing starts
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="tabs " >
              <div className="tab-text">
                Tabs
              </div>

              <Tabs defaultActiveKey="tab 1" id="uncontrolled-tab-example" className=" tab-line d-flex flex-row " >
                <Tab eventKey="tab 1" title="Tab 1" className="tabbing">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                </Tab>
                <Tab eventKey="tab 2" title="Tab 2" className="tabbing ">
                  2 , It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                </Tab>
                <Tab eventKey="tab 3" title="Tab 3" className="tabbing ">
                  3, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                </Tab>
              </Tabs>




            </div>
          </div>
        </div>
      </div>
    </>
  )
}
