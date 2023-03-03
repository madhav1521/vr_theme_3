import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Route, NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { eye } from '../Assets/Images';
import Password from '../Components/Password';
import Username from '../Components/Username';
import Select from '../Components/Select';

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
            <Select select='Country'  />

            {/* <!-- second column starts
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column2">
              <h3>Two Column</h3>
            </div>
            <div className="row mt-4">
              <div className=" col-md-6">
                <Username label='Full Name' type='text' placeholder='Your Name' value='John Doe' />
              </div>
              <div className=" col-md-6">
                <Username label='Education' type='text' placeholder='Disable' value='Disable' />
              </div>
              <div className="col-md-6">
                <Username label='Email ID' type='text' placeholder='Email' value='johndoe@gmail.com' />
              </div>
              <div className=" col-md-6">
                <Password label='Password' type='password' placeholder='******' value='******' />
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
                <Username label='Focus' type='text' placeholder='Focused' value='|' />
              </div>
              <div className=" col-md-4">
                <Username label='Email' type='text' placeholder='John Doe' value='John Doe' />
                <div className="below-select text-danger">
                  Enter Valid email id
                </div>
              </div>



              <div className=" col-md-4">
                <div className="form-floating ">
                  <input type="text" className="form-control text-dark" id="floatinglName" value="Placeholder" placeholder="First Name" />
                  <label htmlFor="floatinglName">Label</label>
                </div>
              </div>
            </div>

            {/* <!-- Fourth column starts
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column2">
              <h3>Four Column</h3>
            </div>
            <div className="row mt-4">
              <div className=" col-md-3 col-lg-3 col-md-4 ">
                <Username label='Email ID' type='text' placeholder='Email' value='johndoe@gmail.com' />
              </div>
              <div className=" col-md-3 col-lg-3 col-md-4 ">
                <Select select='Country' />
              </div>

              <div className=" col-md-3 col-lg-3 col-md-4 ">
                <Username label='Full Name' type='text' placeholder='John Doe' value='John Doe' />
              </div>
              <div className="col-md-3 col-lg-3 col-md-4 ">
                <div className=" form-floating " >
                  <input type="text" className="focus form-control shadow-none  text-dark" id="floatingFocus" placeholder="First Name.." />
                  <label htmlFor="floatingFocus" className="focus-label">Focus</label>
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
              <input type="file" id="imgupload" className="uploadbutton" />
              <button id="OpenImgUpload" className="upload border-0 d-flex form-check-inline align-items-center" >
                <img src="./images/ic-upload.svg" alt="upload" ></img>
                <span className="text">Upload</span>
              </button>
              <span className="nis text-secondary">no item selected</span>
            </div>

            {/* <!-- Sixth column starts (Checkbox)
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column6 ">
              <h5>Checkbox</h5>
            </div>
            <div className="formcheck d-flex ">
              <div className="form-check form-check-inline ">
                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" checked />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Selected
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Not yet Selected
                </label>
              </div>
            </div>

            {/* <!-- Seventh column starts (Radiobutton)
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column7 ">
              <h5>Radio Button</h5>
            </div>
            <div className="formcheck d-flex ">
              <div className="form-check form-check-inline ">
                <input className="form-check-input shadow-none" type="radio" value="option1" name="flexRadioDefault" id="Radio1" checked />
                <label className="form-check-label" htmlFor="Radio1">Selected</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input shadow-none" type="radio" name="flexRadioDefault" value="option2" id="Radio2" />
                <label className="form-check-label" htmlFor="Radio2">Not yet Selected</label>
              </div>
            </div>

            {/* <!-- Eighth column starts (Call to action)
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="column8 ">
              <h5>Call to action</h5>
            </div>
            <div className="pri-sec d-sm-flex">
              <button className="primary form-check-inline border-0  mb-2 ">
                Primary
              </button>
              <button className="secondary form-check-inline mb-2 ">
                Secondary
              </button>
              <button className="disabled form-check-inline mb-2" disabled>
                disabled
              </button>
            </div>


            {/* <!-- Tabbing starts
                            ---------------------------------------------------------------------------------------------------------- --> */}

            <div className="tabs " >
              <div className="tabbing1">
                Tabs
              </div>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="tab-item" role="presentation">
                  <button className="tab-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#para1" type="button"
                    role="tab" aria-selected="true">Tab1</button>
                </li>
                <li className="tab-item" role="presentation">
                  <button className="tab-link" data-bs-toggle="tab" data-bs-target="#para2" type="button" role="tab"
                    aria-selected="false">Tab2</button>
                </li>
                <li className="tab-item" role="presentation">
                  <button className="tab-link" data-bs-toggle="tab" data-bs-target="#para3" type="button" role="tab"
                    aria-selected="false">Tab3</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="para1" role="tabpanel">
                  First, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <div className="tab-pane fade show " id="para2" role="tabpanel">
                  Second, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <div className="tab-pane fade show " id="para3" role="tabpanel">
                  Third, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
