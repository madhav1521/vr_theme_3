import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Route, NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Dropdown, Tab, Table, Tabs } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { card1, card2, card3, dot1, dot2, dot3, dot4, graph, progress } from "../Assets/Images";
import Sonnet2 from '../Components/sonnet2';
import Sonnet3 from '../Components/sonnet3';
import Sonnet1 from '../Components/Sonnet1';

export default function Dashboard() {
  return (
    <>
      <Helmet><title>Dashboard Page</title></Helmet>
      <Navbar></Navbar>
      <div className="main d-flex">
        
        <Sidebar></Sidebar>
        

        <div className="main-container w-100">

          <div className="line1">
            <h4>Dashboard</h4>
          </div>


          <Row className='line2'>
            <Col xs='12' sm='10' md='6' lg='4' className="col">
              <div className="card w-100">
                <div className="report-text">
                  <h5 className='mb-2'>Engaged Users</h5>
                  <h1 className='mb-1'>98,872</h1>
                  <h6>+ 25% 20,641 (prev)</h6>
                </div>
                <div className="report-map">
                  <Tabs defaultActiveKey="Week" id="uncontrolled-tab-example" className=" tab-line d-flex flex-row " >
                    <Tab eventKey="Week" title="Week" className="link">
                      <Sonnet1 />
                    </Tab>
                    <Tab eventKey="Month" title="Month" className="link ">
                      <Sonnet2 />
                    </Tab>
                    <Tab eventKey="Year" title="Year" className="link ">
                      <Sonnet3 />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
            <Col xs='12' sm='10' md='6' lg='4' className="col">
              <div className="card w-100">
                <div className="report-text">
                  <h5 className='mb-2'>Page Impressions</h5>
                  <h1 className='mb-1'>154,534</h1>
                  <h6>+ 14% 20,641 (prev)</h6>
                </div>
                <div className="report-map" >
                  <Tabs defaultActiveKey="Week" id="uncontrolled-tab-example" className="tab-line d-flex flex-row " >
                    <Tab eventKey="Week" title="Week" className="link">
                      <Sonnet2 />
                    </Tab>
                    <Tab eventKey="Month" title="Month" className=" link ">
                      <Sonnet1 />
                    </Tab>
                    <Tab eventKey="Year" title="Year" className=" link ">
                      <Sonnet3 />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
            <Col xs='12' sm='10' md='6' lg='4' className="col">
              <div className="card w-100">
                <div className="report-text">
                  <h5 className='mb-2'>Conversions</h5>
                  <h1 className='mb-1'>120,142</h1>
                  <h6>+ 12% 20,641 (prev)</h6>
                </div>
                <div className="report-map">
                  <Tabs defaultActiveKey="Week" id="uncontrolled-tab-example" className="tab-line d-flex flex-row " >
                    <Tab eventKey="Week" title="Week" className="link">
                      <Sonnet3 />
                    </Tab>
                    <Tab eventKey="Month" title="Month" className=" link ">
                      <Sonnet2 />
                    </Tab>
                    <Tab eventKey="Year" title="Year" className=" link ">
                      <Sonnet1 />
                    </Tab>
                  </Tabs>

                </div>
              </div>
            </Col>
          </Row>

          <div className="line3 ">
            <div className="g-1 flex-wrap">
              <div className="spm">
                <h5>Sales per month</h5>
              </div>
              <div className="stats flex-wrap">
                <div className='d-flex'><img src={dot2} alt="dot" className='dots img-fluid' /><h6>Impression</h6></div>
                <div className='d-flex'><img src={dot3} alt="dot" className='dots img-fluid' /><h6>Conversions</h6></div>
                <div className='d-flex'><img src={dot1} alt="dot" className='dots img-fluid' /><h6>Engage</h6></div>
              </div>
            </div>
            <div className="g-2">
              <img src={graph} alt="data-graph" className='img-fluid w-100' />
            </div>
          </div>


          <Row className='line4 justify-content-sm-center'>
            <Col sm='12' xl='9' lg='8' md='7' className='data-entry'>
              <div className="t-1">
                <h5>Latest Transaction</h5>
                <div className="table-responsive">
                  <Table className='table ' >
                    <thead>
                      <th>Date</th>
                      <th>Id no.	</th>
                      <th>Billing Name	</th>
                      <th>Amount</th>
                      <th>Payment Status</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><h6>8 Sep, 2020</h6></td>
                        <td><h6>#SK1235</h6></td>
                        <td><h6>Sony</h6></td>
                        <td><h6>$6,500</h6></td>
                        <td ><h6 className="success bg-success">Paid</h6></td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">View</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>17 Oct, 2020</h6></td>
                        <td><h6>#SK4567</h6></td>
                        <td><h6>Gillette</h6></td>
                        <td><h6>$2,600</h6></td>
                        <td ><h6 className="success bg-success">Paid</h6></td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">View</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>21 Sep, 2020</h6></td>
                        <td><h6>#SK8754</h6></td>
                        <td><h6>The Walt Disney Company</h6></td>
                        <td><h6>$1,630</h6></td>
                        <td ><h6 className="success bg-success">Paid</h6></td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">View</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>17 Oct, 2020</h6></td>
                        <td><h6>#SK2435</h6></td>
                        <td><h6>IBM</h6></td>
                        <td><h6>$4,200</h6></td>
                        <td ><h6 className="success bg-success">Paid</h6></td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">View</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>24 May, 2020</h6></td>
                        <td><h6>#SK8759</h6></td>
                        <td><h6>McDonald's</h6></td>
                        <td><h6>$4,200</h6></td>
                        <td ><h6 className="fail bg-danger">Failed</h6></td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">View</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>22 Oct, 2020</h6></td>
                        <td><h6>#535353</h6></td>
                        <td><h6>Louis Vuitton</h6></td>
                        <td><h6>$6,200</h6></td>
                        <td ><h6 className="success bg-success">Paid</h6></td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">View</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>1 Feb, 2020</h6></td>
                        <td><h6>#SK9987</h6></td>
                        <td><h6>McDonald's</h6></td>
                        <td><h6>$2,100</h6></td>
                        <td ><h6 className="success bg-success">Paid</h6></td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">View</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>

            <Col sm='6'  xl='3' lg='4' md='5' className='tester '>

              <div className="t-2">
                <h5>Monthly Target</h5>
                <div className="progress-rate d-flex justify-content-center">
                  <img src={progress} alt="progress-report" className='progress img-fluid' />
                  <div className='percent d-flex flex-column align-items-center  '>
                    <h2>70%</h2>
                    <h6>Progress</h6>
                  </div>
                </div>
                <div className="complete d-flex align-items-center justify-content-center flex-wrap">
                  <div className='d-flex'><img src={dot3} alt="dot" className=' img-fluid' /><h6>Completed</h6></div>
                  <div className='d-flex'><img src={dot4} alt="dot" className=' img-fluid' /><h6>left</h6></div>
                </div>
                <div className="dollar">
                  <span>Total Target</span>
                  <h6>$10,000</h6>
                </div>
                <div className="dollar">
                  <span>Completed</span>
                  <h6>$70,000</h6>
                </div>
                <div className="dollar">
                  <span>Remaining</span>
                  <h6>$30,000</h6>
                </div>


              </div>
            </Col>
          </Row>

        </div>

      </div>

    </>
  )
}
