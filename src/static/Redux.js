import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from 'actions';

import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Button from 'shared/Button';

class Redux extends Component {
    state = {
        inputValue: ''
    }
    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        const {
            clickButton,
            newValue
        } = this.props;

        const { inputValue } = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Redux Test</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <InputGroup className="mb-3"
                            onChange={this.inputChange}
                            value={inputValue}
                        >
                            <FormControl
                                placeholder="Text"
                                aria-label="Text"
                                aria-describedby="basic-input"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={3}>
                        <Button variant="primary"
                            text="Send!"
                            onClick={() => clickButton(inputValue)}
                        ></Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>{newValue}</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});
export default connect(mapStateToProps, mapDispatchToProps)(Redux);