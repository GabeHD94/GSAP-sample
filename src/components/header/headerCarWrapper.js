import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  //A7
  img {
    margin-top: 3vw;
    width: 30vw;
    @media screen and (max-width: 600px) {
      display: none;
      width: 55vw;
      margin-left: vw;
    }
  }

  //full A7
  div {
    img {
      display: none;
      @media screen and (max-width: 600px) {
        display: unset;
        width: 50vw;
        margin-top: 11vw;
      }
    }
  }

  //mercedes
  section {
    img {
      display: unset;
      position: absolute;
      margin-left: -12vw;
      margin-top: 7.5vw;
      width: 39vw;
      @media screen and (max-width: 600px) {
        margin-left:-60px;
        width: 60vw;
        margin-top: 18vw;
      }
    }
    //porsche
    div {
      img {
        width: 45vw;
        margin-top: 7vw;
        margin-left: -30vw;
        position: absolute;
        z-index: 1;
        @media screen and (max-width: 600px) {

          width: 67vw;
          margin-left: -40vw;
          margin-top: 18vw;
        }
      }
    }

  }
`;
