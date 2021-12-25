import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

function App() {
  const Container = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    align-content: center;
    margin: auto;
    ${(props) =>
      props.sizeS &&
      css`
        background: rgb(40, 110, 250);
        width: 30px;
        height: 30px;
        margin: 0;
        border-radius: 5px;
      `}
  `;

  const Button = styled.button`
    background: transparent;
    border: 0px solid transparent;
    color: rgb(40, 110, 250);
    padding: 0.5em 1em;
    :active {
      color: rgb(151, 185, 252);
    }
    margin: 0px;
  `;
  const translateYP = keyframes`
  from{
    transform: translateY(30px);
  }
  to {
    transform: translateY(0px)
  }
  `;
  const translateYM = keyframes`
  from{
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0px)
  }
  `;
  const Counter = styled.p`
    color: white;
    font-size: 20px;
    animation: ${(props) => props.anim} 0.5s;
  `;

  const [count, setCount] = useState(0);
  const [animations, setAnimations] = useState(translateYP);

  const increment = () => {
    setCount(count + 1);
  };
  const dencrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <Container>
        <Button
          onClick={() => {
            dencrement();
            setAnimations(translateYM);
          }}
        >
          -
        </Button>

        <Container sizeS>
          <Counter anim={animations}>{count}</Counter>
        </Container>

        <Button
          onClick={() => {
            increment();
            setAnimations(translateYP);
          }}
        >
          +
        </Button>
      </Container>
    </div>
  );
}

export default App;
