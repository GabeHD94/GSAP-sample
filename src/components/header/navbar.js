import styled from "styled-components";

export default styled.nav`
  margin: 3vh 6vw;

  img {
    width: 15vw;
    @media screen and (max-width: 600px) {
      width: 40vw;
    }
  }
  @media screen and (max-width: 600px) {
    margin: 3vw 6vw;
  }

  @media screen and (max-width: 390px) {

    width: 20px;
  }
`;
