import styled from "styled-components";

export default styled.div`
  display: flex;
  /* padding: 20vh 5.8vw; */

  section {
    font-family: ${(props) => props.theme.font};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 5.8vw;
    width: 30vw;
    height: 40vw;
    background-color: #fbc843;
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 30px;
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
      color: #2B3144;
    }
    p {
      width: 34vw;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
    }
    
    
  }
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;

  }
`;
