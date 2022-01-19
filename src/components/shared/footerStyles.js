import styled from "styled-components";

export default styled.nav`
  hr {
    height: 1px;
    margin-top: 3vw;
    width: 84vw;
    background-color: #a3a3a3;
    border: none;
  }
  div {
    margin: 0 8vw 5vw 8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img{
    width: 10vw;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      padding: 20px;
      color: #4f5874;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 550;
      font-size: 1vw;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }

  img {
    @media screen and (max-width: 600px) {
      margin: 30px 0;
    }
  }

`;
