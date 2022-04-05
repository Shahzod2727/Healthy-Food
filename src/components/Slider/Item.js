import styled from "styled-components";

export default styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 300px;
  width: 100%;
  // background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    padding: 20px;

    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;  /* Centering y-axis */
    // align-items :center; /*
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
  h1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #000000;
  }
  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.7;
    text-align: center;
    // text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
