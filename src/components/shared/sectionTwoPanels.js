import styled from "styled-components";

export default styled.div`
  display: flex;

  section {
    font-family: ${(props) => props.theme.font};
    /* display: flex; */
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
    margin: 10vw 5.8vw;
    height: 45vw;
    width: 40vw;
    background-color: #fbc843;

    span {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      margin: 0vh 10px 5vw;

      img {
        width: 2vw;
        margin: 20px 10px;
      }
    }

    p {
      color: #4b5168;
      margin: 0 0 1vw 10vw;
      font-size: 1vw;
    }
    div {
      margin: 0 10vw;

      display: flex;
      flex-direction: row;
      /* justify-content: space-between; */
      align-items: center;

      img {
        /* margin: 0 2%; */
      /* width: 4vw; */
      height: 1.5vw;
      }
      h2 {
        width: 2vw;
        margin-left: 2vw;
        font-size: 2vw;
        font-weight: 200;
        /* margin: 0 10vw; */
      }
    }

    h1 {
      width: 12vw;
      font-size: 3vw;
      font-weight: 200;
      margin: 0 10vw;
    }

    @media screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
      /* margin: 1vw 5.8vw; */
      padding-right: 0px;

      width: 90vw;
      height: 110vw;
      h1 {
        font-size: 7vw;
        font-weight: 200;
        margin: 0 10vw;
      }
      h2 {
        font-size: 5vw;
      }
      p {
        margin: 0 10vw 2vh 10vw;
        color: #4b5168;
        font-size: 2.7vw;
      }
      div {
        img {
          margin-right: 9vw;

          height: 30%;
          width: 16%;
        }
      }
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
      font-size: ${(props) => props.theme.hTwosize};

      line-height: 5vw;
      letter-spacing: -1px;
      color: #2b3144;
      width: 34vw;

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
    @media screen and (max-width: 600px) {
      margin: 0 25px;
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    margin: 20vw -1px;

    /* width: 100%; */
  }
`;
