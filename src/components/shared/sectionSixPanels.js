import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    font-family: ${(props) => props.theme.font};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* flex-direction: column; */
    margin: 10vw 0vw 10vw 0vw;
    padding-right: 30px;
    width: 38vw;
    height: 48vw;
    background-color: #fbc843;

    @media screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      /* margin: 1vw 5.8vw; */
      padding-right: 0px;

      width: 100%;
      height: 110vw;
    }
    img {
      position: absolute;
      width: 30vw;
      @media screen and (max-width: 600px) {
        width: 70vw;
        /* margin-left: 7vw; */
      }
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 2vw;
        -webkit-box-shadow: 25px 12px 38px 6px rgba(0, 0, 0, 0.54);
        box-shadow: 25px 12px 38px 6px rgba(0, 0, 0, 0.24);
        margin-left: 15vw;
        width: 20vw;
        @media screen and (max-width: 600px) {
          width: 50vw;
          margin-left: 35vw;
          border-radius: 5vw;
        }
      }
    }
  }

  main {
    font-family: ${(props) => props.theme.font};
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: -6vh 0px 0px 5vw;
    width: 39vw;
    height: 40vw;

    span {
      display: flex;
      align-items: center;
      color: #414a69;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 1vw;
      img {
        margin-left: 2vw;
        width: 1vw;
        fill: #94d31b;
        @media screen and (max-width: 600px) {
          width: 3vw;
        }
      }
      @media screen and (max-width: 600px) {
        font-size: 3vw;
      }
    }

    h2 {
      margin: 5vw 5vw 2vw 0;
      font-weight: 300;
      font-size: ${(props) => props.theme.hTwosize};

      line-height: 5vw;
      letter-spacing: -1px;
      color: #2b3144;
      width: 38vw;

      @media screen and (max-width: 820px) {
        line-height: 5vw;
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
      width: 24vw;
      font-family: "Roboto", sans-serif;
      font-size: 1vw;
      font-weight: 900;
      line-height: 1.9vw;
      @media screen and (max-width: 820px) {
        font-size: 1vw;
        line-height: 15px;
        @media screen and (max-width: 600px) {
          width: 80vw;
          line-height: 6vw;

          font-size: 3.9vw;
        }
      }
      span {
        margin-top: 10px;
        color: black;
      }
    }
    @media screen and (max-width: 600px) {
      width: 95%;
    }
    div {
      img {
        margin: 70px 0 0 -35vw;
        width: 60vw;
        position: absolute;
        @media screen and (max-width: 600px) {
          display: none;
        }
      }
    }
    hr {
      width: 23vw;
      height: 5px;
      border: none;
      opacity: 0.3;
      background-color: #f4f4f5;
      @media screen and (max-width: 600px) {
        width: 20vh;
      opacity: 0.4;

      }
    }
    @media screen and (max-width: 600px) {
      margin: 10vw 5vw 10vw 10vw;
    }
  }
  @media screen and (max-width: 600px) {
    margin: 40px -2px;

    flex-direction: column-reverse;
  }
`;
