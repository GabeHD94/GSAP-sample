import React from "react";
import FooterBar from "../components/shared/footerStyles";
import EleanorBlack from "../assests/eleanor-black.png";

export default function footer() {
  return (
      <FooterBar>
        <hr></hr>
      <div>
        <img alt="elblack" src={EleanorBlack} />
      <section>
        <p>About Us</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
      </section>
      </div>
    </FooterBar>
  );
}
