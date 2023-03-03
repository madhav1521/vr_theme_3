import React from 'react'
import { Form } from 'react-bootstrap'

export default function Select(props:any) {
  return (
    <>
      <Form.Select aria-label="Default select example">
      <option>{props.select}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </>
  )
}
