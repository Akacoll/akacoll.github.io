import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JumboTron from 'react-bootstrap/Jumbotron';

import Emoji from 'shared/Emoji';


const Header = (props) => (
    <header className="Header">
        <JumboTron>
            <Container>
                <Row>
                    <Col>
                        <h1>My App <Emoji label="Party Face">🥳</Emoji></h1>
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
