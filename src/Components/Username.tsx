import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

export default function Username(props:any) {
    return (
        <>
            <FloatingLabel controlId="floatingInput" label={props.label} className="login-name floatinglabel border-bottom-1">
                <Form.Control type={props.type} placeholder={props.placeholder} value={props.value}  />
            </FloatingLabel>
        </>
    )
}
