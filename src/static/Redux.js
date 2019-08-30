import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addButton } from 'actions';

import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Button from 'shared/Button';
import { Card } from 'react-bootstrap';

const ProductCard = props => {
    const product = {
        name: props.product.name,
        desc: props.product.desc,
    }
    return (
        <Card bg="dark" text="white" style={{ width: '18rem' }} className="col-md-6 col-md-offset-3">
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
            </Card.Body>
        </Card>
    );
}

class Redux extends Component {
    state = {
        product: {
            name: "",
            desc: "",
        }
    }

    nameChange = event => {
        this.setState({
            product: {
                name: event.target.value,
                desc: this.state.product.desc,
            }
        })
    }
    descChange = event => {
        this.setState({
            product: {
                name: this.state.product.name,
                desc: event.target.value,
            }
        })
    }
    render() {
        const {
            addButton,
            products
        } = this.props;

        const product = this.state.product;
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Redux Test</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <InputGroup className="mb-3"
                            onChange={this.nameChange}
                            value={product.name}
                        >
                            <FormControl
                                placeholder="Name"
                                aria-label="Name"
                                aria-describedby="basic-input"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={7}>
                        <InputGroup className="mb-3"
                            onChange={this.descChange}
                            value={product.desc}
                        >
                            <FormControl
                                placeholder="Description"
                                aria-label="Description"
                                aria-describedby="basic-input"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={2}>
                        <Button variant="primary"
                            text="Add!"
                            onClick={
                                () => {
                                    addButton(product)
                                }
                            }
                        ></Button>
                    </Col>
                </Row>
                <Row>
                    {products.map((prod, index) => (
                        <Col key={index}>
                            <ProductCard product={prod}></ProductCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ addButton }, dispatch);

const mapStateToProps = store => ({
    products: store.productState
});
export default connect(mapStateToProps, mapDispatchToProps)(Redux);