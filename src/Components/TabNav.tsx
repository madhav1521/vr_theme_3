import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

export default function TabNav() {
  return (
    <>
      <Tabs defaultActiveKey="Week" id="uncontrolled-tab-example" className=" tab-line d-flex flex-row " >
        <Tab eventKey="Week" title="Week" className="link">
          {/* <Sonnet1 /> */}
        </Tab>
        <Tab eventKey="Month" title="Month" className="link ">
          {/* <Sonnet2 /> */}
        </Tab>
        <Tab eventKey="Year" title="Year" className="link ">
          {/* <Sonnet3 /> */}
        </Tab>
      </Tabs>
    </>
  )
}

