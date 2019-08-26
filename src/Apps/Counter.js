import React from 'react';
import {Container, Row, Col, Badge} from 'react-bootstrap';
import Button from '../Util/Button.js'
import { useState } from 'react'

const CounterButton = ({increment, onClickFunction}) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <Button variant="outline-primary" onClick={handleClick} text={'+' + increment}/>
}

const MultiplyButton = ({multiply, onClickFunction}) => {
  const handleClick = () => {
    onClickFunction(multiply)
  }
  return <Button variant="outline-primary" onClick={handleClick} text={'*' + multiply}/>
}

const Counter = () => {
  const [count, setCount] = useState(0)
  
  const incrementCount = increment => {
    setCount(count + increment)
  }  
  
  const multiplyCount = multiply => {
    setCount(count * multiply)
  }

  return (
    <div className="Counter">
      <Container>
        <Row>
              {
                [1,10,100,1000,5000].map((value, index) => 
                <Col>
                  <CounterButton increment={value} onClickFunction={incrementCount} key={index}></CounterButton>
                </Col>)
              }
            {
              [2,5,7].map((value, index) => 
              <Col>
                <MultiplyButton multiply={value} onClickFunction={multiplyCount} key={index}></MultiplyButton>
              </Col>)
            }
        </Row>
        <Row>
          <Col>
            <h1>
              <Badge pill variant="success">{count}</Badge>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Counter;
