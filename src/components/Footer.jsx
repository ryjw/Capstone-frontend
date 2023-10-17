import React from "react";
import "../assets/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-info-row-container">
          <div className="footer-section-container">
            <p className="address-content">
              Our Location:
              <br />
              124 Conch Street <br />
              Bikini Bottom, FL 33040
              <br />
            </p>
          </div>
          <div className="footer-section-container">
            <p className="phone-content">
              Phone:
              <br />
              786.577.3412
            </p>
          </div>
          <div className="footer-section-container">
            <p className="copyright-content">
              Copyright 2023 © All rights Reserved
            </p>
          </div>
        </div>
        <div className="footer-about-section">
          <h1 className="about-header">About Our Delectable Delights</h1>
          <p className="about-content">
            Welcome to the Krusty Krab, where we bring Bikini Bottom's finest
            flavors to your plate! Our passion for delicious and imaginative
            seafood creations is matched only by our dedication to delivering a
            dining experience that's truly unique. At the Krusty Krab, we take
            pride in crafting mouthwatering dishes that even the pickiest sea
            creatures would adore. Our secret recipes, inspired by the legendary
            Krabby Patty, promise a taste that's both classic and extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
}
