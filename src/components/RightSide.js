import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';

const RightSide = () => {
    return (
        <>
            <div className="col-12 col-md-6 left-back align-items-center right">
                <div className="align-items-center">
                    <div className="text-center">
                        <p className="o-font-lg  mb-1 mb-sm-3">Welcome To</p>
                        <h1 className="o-font-lg ml-2 o-text-purple">WebName</h1>
                    </div>
                    <p className="text-center">Log in to start</p>
                    <div className="row mb-5 justify-content-center">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSide
