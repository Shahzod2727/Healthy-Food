import React from "react";
import styled from "styled-components";
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline:none;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// render(
//   <div>
//
//   </div>
// );

const Testbutton = () => {
  return (
    <>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </>
  );
};

export default Testbutton;
