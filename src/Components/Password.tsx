import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { eye } from '../Assets/Images'

export default function Password(props:any) {
    return (
        <>
            <Form>

                <FloatingLabel controlId="floatingPassword" className='login-password floatinglabel' label={props.label}>
                    <Form.Control type={props.type} placeholder={props.placeholder} value={props.value}/>
                    <Button className='eye'> <img src={eye} alt="eye" /> </Button>
                </FloatingLabel>
            </Form>

        </>
    )
}
