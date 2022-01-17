import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 28vw;
    height: 28vw;
    margin: 1%;
    background-color: #f5f5f7;
    @media screen and (max-width: 600px) {
      /* width: 100%; */
      width: 100vw;
      height: 100vw;
    }
    div {
      display: flex;
      flex-direction: column;
      margin: 15px;
      align-items: flex-start;
      /* justify-content: flex-start; */
      width: 65%;
    }
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${(props) => props.theme.font};
      font-size: ${(props) => props.theme.hTwosize};
      font-weight: 200;
      margin: 0;
      color: #2b3144;
      /* width: 65%; */
      @media screen and (max-width: 600px) {
        font-size: 8vw;
        margin: 0;
        line-height: 6vw;
      }
    }
    img {
      width: 6vw;
      margin-top: 1vw;
      @media screen and (max-width: 600px) {
        width: 25vw;
      }
    }
    p {
      display: flex;
      font-size: 1vw;
      line-height: 1.5vw;
      justify-content: center;
      align-items: center;
      font-family: "Roboto", sans-serif;
      font-weight: bolder;
      /* width: 65%; */
      @media screen and (max-width: 600px) {
        font-size: 3vw;
        margin: 8% 0;

        /* width: 60vw; */
        line-height: 6vw;
      }
    }
  }
`;
