import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 80vw; */
  left: 0px;
  top: 0px;
  margin-bottom: 10vh;
  
  main{
    height: 83vh;
    background-color: #fbc843;

    @media screen and (max-width: 820px) {
      height:50vw;
  
    }
    @media screen and (max-width: 700px) {
      height: 100vw;
  
    }

  }


`;
