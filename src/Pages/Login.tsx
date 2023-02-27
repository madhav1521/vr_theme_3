import React from 'react'
import Dashboard from './Dashboard'

import { Route, NavLink } from "react-router-dom";
import { company_logo } from "../Assets/Images";
import { Helmet } from 'react-helmet';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FormCheck from 'react-bootstrap/FormCheck'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Login() {
  return (
    <>
      <Helmet><title>Login Page</title></Helmet>
      <div className="page-wrapper d-flex justify-content-center align-items-center">
        <main className="container row d-flex">
          {/* <div className="login-container " > */}
            <div className="col1 col-lg-7 col-md-6 col-sm ">
              <div className="leftside">
              <strong className="text text-white">
                An Avenue to Communicate Your Unique Selling Point
              </strong>
              <p className="lorem text-white">Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown editors now use Lorem Ipsum</p>
            </div>
            </div>


            <div className="col2  col-lg-5 col-md-6 col-sm bg-white">
              <div className="login-box">
                <img src={company_logo} alt='company image' className="cmp" />
                <div className="wlc">Welcome Back!</div>
                <p>Login into your account</p>
                <Form>

                  <FloatingLabel controlId="floatingInput" label="Username" className="login-name floatinglabel border-bottom-1">
                      <Form.Control type="text" placeholder="Username" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" className='login-password floatinglabel' label="Password">
                      <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>

                  <Form.Check
                    type="checkbox"
                    id="custom-checkbox"
                    label="Remember me"
                    className="custom-checkbox"
                  />

                  <div className="login-btn-line d-flex justify-content-between align-items-center">
                    <Button variant="primary" className='login-btn text-light'>LOGIN</Button>{' '}
                    <a href='#' className="fp">Forgot Password?</a>
                  </div>
                  <div className="sign-up-line">
                    <p>Don’t have an account?<a href='#'>SIGNUP</a></p>
                  </div>
                </Form>
              </div>
            </div>
          {/* </div> */}
        </main>
      </div>

    </>
  )
}
