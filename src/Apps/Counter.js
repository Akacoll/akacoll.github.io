import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Button from 'shared/Button.js'

const CounterButton = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <Button variant="outline-primary" onClick={handleClick} text={'+' + increment} />
}

const MultiplyButton = ({ multiply, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(multiply)
  }
  return <Button variant="outline-primary" onClick={handleClick} text={'*' + multiply} />
}

const ResetButton = ({ text, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction()
  }
  return <Button size="lg" variant="success" onClick={handleClick} text={text} />
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
          <Col>
            <h3>
              Counter (simple Hook)
            </h3>
          </Col>
        </Row>
        <Row>
          {
            [1, 10, 100, 1000, 5000].map((value, index) =>
              <Col key={index}>
                <CounterButton increment={value} onClickFunction={incrementCount} key={index}></CounterButton>
              </Col>)
          }
          {
            [2, 5, 7].map((value, index) =>
              <Col key={index}>
                <MultiplyButton multiply={value} onClickFunction={multiplyCount} key={index}></MultiplyButton>
              </Col>)
          }
        </Row>
        <Row>
          <Col>
            <ResetButton onClickFunction={() => setCount(0)} text={count}></ResetButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Counter;
