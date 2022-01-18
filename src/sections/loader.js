import React from "react";
import LoaderOval from "../assests/load-oval.png";
import LoaderCrown from "../assests/loadCrown.png";
import LoaderDot from "../assests/loaddot.png";
import LoaderStyles from "../components/shared/loaderStyles";

export default function loader() {
  return (
    <LoaderStyles>
      <img src={LoaderOval}></img>
      <img src={LoaderCrown}></img>
      <section>
        <img src={LoaderDot}></img>
      </section>
    </LoaderStyles>
  );
}
