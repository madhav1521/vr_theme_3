import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Checkbox() {
  return (
    <>
      
      <div className="formcheck d-flex ">
              <div className="form-check form-check-inline ">
                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" defaultChecked={true}/>
                <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                  Option 1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label text-secondary " htmlFor="flexCheckChecked">
                  Option 2
                </label>
              </div>
            </div>
    </>
  )
}
