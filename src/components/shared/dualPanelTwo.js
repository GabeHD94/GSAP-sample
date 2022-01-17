import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  section {
    font-family: ${(props) => props.theme.font};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vw 5.8vw;
    width: 30vw;
    height: 40vw;
    img{
      margin: 90px;
      width: 50%;
      position: absolute;

    }

    @media screen and (max-width: 600px) {
      display: flex;
      margin: 1vw 5.8vw;

      width: 88.3vw;
      height: 40vh;
    }
  }

  main {
    font-family: ${(props) => props.theme.font};
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    margin: 100px 0px 100px 5.8vw;
    width: 39vw;
    height: 40vw;

    h2 {
      margin: 5vw 5vw 2vw 0;

      font-family: "Bebas Neue";
      font-weight: 300;
      font-size: 5vw;
      line-height: 5vw;
      letter-spacing: -1px;
      color: #2b3144;
      width: 27vw;

      @media screen and (max-width: 820px) {
        width: 40vw;
        line-height: 50px;
        font-size: 6vw;
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
      width: 20vw;
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
    @media screen and (max-width: 600px) {
      margin: 0 25px;
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    /* width: 100%; */
  }
`;
