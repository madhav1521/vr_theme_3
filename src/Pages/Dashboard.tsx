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
      <Navbar />
      <div className="main d-flex">
        <Sidebar />
        <div className="main-container w-100">
          <div className="page-title">
            <h4>Dashboard</h4>
          </div>
          <Row className='sticker'>
            <Col xs='12' md='4' className="col">
              <div className="card w-100">
                <div className="report-text">
                  <h5 className='mb-3'>Engaged Users</h5>
                  <div className='numericals d-block d-md-none d-xxl-block'>
                    <h1 className='mb-2'>98,872</h1>
                    <h6>+ 25% 20,641 (prev)</h6>
                  </div>
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
                <div className='numericals d-none d-md-block d-xxl-none'>
                  <h1 className='mb-2'>98,872</h1>
                  <h6>+ 25% 20,641 (prev)</h6>
                </div>
              </div>
            </Col>

            <Col xs='12' md='4' className="col">
              <div className="card w-100">
                <div className="report-text">
                  <h5 className='mb-3'>Page Impressions</h5>
                  <div className='numericals d-block d-md-none d-xxl-block'>
                    <h1 className='mb-2'>154,534</h1>
                    <h6>+ 14% 20,641 (prev)</h6>
                  </div>
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
                <div className='numericals d-none d-md-block d-xxl-none'>
                  <h1 className='mb-2'>154,534</h1>
                  <h6>+ 14% 20,641 (prev)</h6>
                </div>
              </div>
            </Col>
            <Col xs='12' md='4' className="col">
              <div className="card w-100">
                <div className="report-text">
                  <h5 className='mb-3'>Conversions</h5>
                  <div className='numericals d-block d-md-none d-xxl-block'>
                    <h1 className='mb-2'>120,142</h1>
                    <h6>+ 12% 20,641 (prev)</h6>
                  </div>
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
                <div className='numericals d-none d-md-block d-xxl-none '>
                  <h1 className='mb-2'>120,142</h1>
                  <h6>+ 12% 20,641 (prev)</h6>
                </div>
              </div>
            </Col>
          </Row>

          <div className="graph-card">
            <div className="g-1 flex-wrap">
              <div className="spm">
                <h5>Sales per month</h5>
              </div>
              <div className="stats flex-wrap">
                <div className='d-flex'><img src={dot1} alt="dot" className='dots img-fluid' /><h6>Engage</h6></div>
                <div className='d-flex'><img src={dot2} alt="dot" className='dots img-fluid' /><h6>Impression</h6></div>
                <div className='d-flex'><img src={dot3} alt="dot" className='dots img-fluid' /><h6>Conversions</h6></div>
              </div>
            </div>
            <div className="g-2">
              <img src={graph} alt="data-graph" className='img-fluid w-100' />
            </div>
          </div>


          <Row className='transaction-card'>
            <Col xl='9' className='data-entry'>
              <div className="traction-box">
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
                        <td>8 Sep, 2020</td>
                        <td>#SK1235</td>
                        <td>Sony</td>
                        <td>$6,500</td>
                        <td><h6 className="success bg-success">Paid</h6></td>
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
                        <td>17 Oct, 2020</td>
                        <td>#SK4567</td>
                        <td>Gillette</td>
                        <td>$2,600</td>
                        <td><h6 className="success bg-success">Paid</h6></td>
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
                        <td>21 Sep, 2020</td>
                        <td>#SK8754</td>
                        <td>The Walt Disney Company</td>
                        <td>$1,630</td>
                        <td><h6 className="success bg-success">Paid</h6></td>
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
                        <td>17 Oct, 2020</td>
                        <td>#SK2435</td>
                        <td>IBM</td>
                        <td>$4,200</td>
                        <td><h6 className="success bg-success">Paid</h6></td>
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
                        <td>24 May, 2020</td>
                        <td>#SK8759</td>
                        <td>McDonald's</td>
                        <td>$4,200</td>
                        <td><h6 className="fail bg-warning">Failed</h6></td>
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
                        <td>22 Oct, 2020</td>
                        <td>#535353</td>
                        <td>Louis Vuitton</td>
                        <td>$6,200</td>
                        <td><h6 className="success bg-success">Paid</h6></td>
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
                        <td>1 Feb, 2020</td>
                        <td>#SK9987</td>
                        <td>McDonald's</td>
                        <td>$2,100</td>
                        <td><h6 className="success bg-success">Paid</h6></td>
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

            <Col xl='3'>

              <div className="target-box">
                <div className="progress-parent">
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
                </div>
                <div className="dollar-parent">
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
              </div>
            </Col>
          </Row>

        </div>

      </div>

    </>
  )
}
