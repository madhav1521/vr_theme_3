import React from 'react'

export default function Radio() {
  return (
    <>
       <div className="formcheck d-flex ">
              <div className="form-check form-check-inline ">
                <input className="form-check-input shadow-none" type="radio" value="option1" name="flexRadioDefault" id="Radio1" checked />
                <label className="form-check-label text-secondary" htmlFor="Radio1">Option 1</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input shadow-none" type="radio" name="flexRadioDefault" value="option2" id="Radio2" />
                <label className="form-check-label text-secondary" htmlFor="Radio2">Option 2</label>
              </div>
            </div>
    </>
  )
}
