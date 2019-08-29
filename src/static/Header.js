import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import JumboTron from 'react-bootstrap/Jumbotron';


const Header = (props) => (
    <header className="Header">
        <JumboTron>
            <Container>
                <Row>
                    <Col>
                        <h1>My App :)</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        props.children.map((child, index) => (
                            <Col key={index}>
                                {child}
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </JumboTron>
    </header>
)
export default Header;
