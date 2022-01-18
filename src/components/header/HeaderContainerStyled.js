import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 80vw; */
  left: 0px;
  right: 0px;
  top: 0px;
  margin-bottom: 5vw;
  
  main{
    height: 44vw;
    background-color: #fbc843;

    @media screen and (max-width: 820px) {
      height:50vw;
  
    }
    @media screen and (max-width: 600px) {
      height: 80vw;
  
    }

  }


`;
