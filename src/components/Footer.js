import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <footer className="blockquote-footer">
                <Container>
                    <Row>
                        <Col>Copyright</Col>
                        <Col>Links</Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
