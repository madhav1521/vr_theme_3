import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Route, NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Sonnet from '../Components/Sonnet';
import { Tab, Tabs } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { card1, card2, card3} from "../Assets/Images";

export default function Dashboard() {
  return (
    <>
      <Helmet><title>Dashboard Page</title></Helmet>
      <Navbar></Navbar>
      <div className="main d-flex">
        <Sidebar></Sidebar>
        <div className="main-container w-100">

          <div className="line1">
            <strong>Dashboard</strong>
          </div>


          <Row className='sticker'>
            <Col lg='4' className="">
              <div className="card d-flex flex-row justify-content-between">
                <div className="">
                  <h5 className='mb-2'>Engaged Users</h5>
                  <h1 className='mb-1'>98,872</h1>
                  <h6>+ 25% 20,641 (prev)</h6>
                </div>
                <div className="">
                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="d-flex flex-row " >
                    <Tab eventKey="Week" title="Week" className="week link">
                      <Sonnet />
                    </Tab>
                    <Tab eventKey="Month" title="Month" className=" link ">
                      <Sonnet />
                    </Tab>
                    <Tab eventKey="Year" title="Year" className=" link ">
                      <Sonnet />
                    </Tab>
                  </Tabs>
                  <img src={card1} alt="card1" />
                </div>
              </div>
            </Col>
            <Col lg='4' className="">
              <div className="card d-flex flex-row justify-content-between">
                <div className="">
                  <h5 className='mb-2'>Page Impressions</h5>
                  <h1 className='mb-1'>154,534</h1>
                  <h6>+ 14% 20,641 (prev)</h6>
                </div>
                <div className="">
                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="d-flex flex-row " >
                    <Tab eventKey="Week" title="Week" className="week link">
                      <Sonnet />
                    </Tab>
                    <Tab eventKey="Month" title="Month" className=" link ">
                      <Sonnet />
                    </Tab>
                    <Tab eventKey="Year" title="Year" className=" link ">
                      <Sonnet />
                    </Tab>
                  </Tabs>
                  <img src={card2} alt="card2" />
                </div>
              </div>
            </Col>
            <Col lg='4' className="">
              <div className="card d-flex flex-row justify-content-between">
                <div className="">
                  <h5 className='mb-2'>Conversions</h5>
                  <h1 className='mb-1'>120,142</h1>
                  <h6>+ 12% 20,641 (prev)</h6>
                </div>
                <div className="">
                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="d-flex flex-row " >
                    <Tab eventKey="Week" title="Week" className="week link">
                      <Sonnet />
                    </Tab>
                    <Tab eventKey="Month" title="Month" className=" link ">
                      <Sonnet />
                    </Tab>
                    <Tab eventKey="Year" title="Year" className=" link ">
                      <Sonnet />
                    </Tab>
                  </Tabs>
                  <img src={card3} alt="card3" />
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </div>

    </>
  )
}
