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
    height: 42vw;
    width: 32vw;
    background-color: #fbc843;

    img {
      margin-left: 10vw;
    }

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
      margin: 0;

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
    h3 {
      img {
        margin-top: -2vh;
        width: 40vw;
      }
    }

    @media screen and (max-width: 600px) {
      width: 90vw;
      height: 80vw;
      justify-content: flex-start;
      align-items: center;
      padding-right: 0px;
      h1 {
        font-size: 10vw;
        width: 40vw;
        margin-top: -19vw; 
      }
      div {
        img {
          width: 11vw;
          height:4vw;
          margin-right: 20px;
        }
        h2 {
          /* display: flex; */
          margin: 2vw;
          font-size: 6vw;
        }
      }
      p {
        font-size: 4vw;
        margin-bottom: 4vw;
      }
      span {
        img {
          margin-top: 9vw;
          width: 5vw;
        }
      }
      h3 {
      img {
        margin-top: 1vh;
        margin-left: 0vh;
        width: 90vw;
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
          width: 90vw;
          line-height: 6vw;

          font-size: 3.9vw;
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
