import React from 'react'
import PropTypes from 'prop-types'

function UploadFile(props: any) {
  return (
    <>
      <div className="uploadinputfile d-flex align-items-center ">
        <button title='upload-button' className='border-0 bg-transparent' ><label className="upload input-group-text" htmlFor="inputGroupFile">Upload</label></button>
        <input type="file" className="  " id="inputGroupFile" hidden multiple/>
        <span className="upload-file-name text-secondary">Not item selected </span>
      </div>
    </>
  )
}

export default UploadFile

