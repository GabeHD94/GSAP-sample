import styled from "styled-components";

export default styled.div`
  display: flex;
  /* padding: 20vh 5.8vw; */

  section {
    font-family: ${(props) => props.theme.font};
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
    margin: 100px 5.8vw;
    width: 30vw;
    height: 40vw;
    background-color: #fbc843;
    h1 {
      font-size: 3vw;
      font-weight: 200;
      margin: 0 10vw;
    }
    p {
      margin: 0 10vw 2vh 10vw;
      color: #4b5168;
      font-size: 0.8vw;
    }
    h2 {
      margin: 0 10vw;
      color: black;
      font-size: 1.0vw;
    }
  }

  main {
    font-family: ${(props) => props.theme.font};
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    margin: 100px 5.8vw;
    width: 50vw;
    height: 40vw;

    h2 {
      margin: 5vw 5vw 2vw 0;

      font-family: "Bebas Neue";
      font-weight: 300;
      /* margin: 90px 0; */
      font-size: 6vw;
      line-height: 6vw;
      letter-spacing: -1px;
      color: #2b3144;
      width: 40vw;

      @media screen and (max-width: 820px) {
        width: 50vw;
        line-height: 60px;
        font-size: 8vw;
        margin: 0;
      }
      @media screen and (max-width: 600px) {
        width: 90vw;
        line-height: 9.9vw;
        font-size: 11vw;
        margin: 0;
      }
    }
    p {
      width: 30vw;
      font-family: "Roboto", sans-serif;
      font-size: 1vw;
      font-weight: 900;
      line-height: 1.9vw;
      @media screen and (max-width: 820px) {
        width: 40vw;
        font-size: 1.5vw;
        line-height: 20px;
        @media screen and (max-width: 600px) {
          width: 80vw;
          font-size: 3vw;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
