import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    font-family: ${(props) => props.theme.font};
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    margin: 10vw 7vw 10vw 0px;
    width: 35vw;
    height: 50vw;
    background-color: #fbc843;

    @media screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5vw 5.8vw 1vw -25vw;
      width: 78vw;
      height: 125vw;
    }
    img {
      position: absolute;
      width: 40vw;
      @media screen and (max-width: 600px) {
        width: 110vw;
        margin-left: 7vw;
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
    margin: 0px 0px 0px 5.8vw;
    width: 39vw;
    height: 40vw;

    h2 {
      margin: 5vw 5vw 2vw 0;

      font-weight: 300;
      font-size: ${(props) => props.theme.hTwosize};

      line-height: 5vw;
      letter-spacing: -1px;
      color: #2b3144;
      width: 34vw;

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
      width: 23vw;
      font-family: "Roboto", sans-serif;
      font-size: 1vw;
      font-weight: 900;
      line-height: 1.9vw;
      @media screen and (max-width: 820px) {
        width: 20vw;
        font-size: 1vw;
        line-height: 15px;
      }
      @media screen and (max-width: 600px) {
        width: 89vw;
        line-height: 6vw;

        font-size: 3.9vw;
      }
    }
    @media screen and (max-width: 600px) {
      width: 95%;
    }

  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    margin: 20vw -1px;


  }
`;
