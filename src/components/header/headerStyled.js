import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;

  section {
    margin-left: 5.8vw;
  }
  img {
    width: 500px;
  }

  p {
    display: flex;
    align-items: center;
    color: #414a69;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 1vw;
    @media screen and (max-width: 700px) {
      font-size: 3vw;
    
  }
    img {
      margin-left: 2vw;
      width: 1vw;
      fill: #94d31b;
      @media screen and (max-width: 700px) {
      width: 3vw;
    
  }
    }
  }
`;
