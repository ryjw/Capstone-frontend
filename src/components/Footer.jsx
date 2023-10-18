import React from "react";
import "../assets/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="section-header">About Our Food</h3>
          <p className="section-content">
            At Krusty Krab, we bring Bikini Bottom's finest flavors to your
            plate! Our passion for delicious and imaginative seafood creations
            is matched only by our dedication to delivering a dining experience
            that's truly unique. <br />
            <br />
            We take pride in crafting mouthwatering dishes that even the
            pickiest sea creatures would adore. Our secret recipes, inspired by
            the legendary Krabby Patty, promise a taste that's both classic and
            extraordinary.
          </p>
        </div>
        <div className="footer-contact-location-container">
          <div id="footer-contact" className="footer-section">
            <h3 className="section-header">Contact</h3>
            <p>
              <span className="email">Email:</span> info@KrustyKrab.com
            </p>
            <p>
              <span className="phone">Phone:</span> 786.577.3412
            </p>
          </div>
          <div id="footer-location" className="footer-section">
            <h3 className="section-header">Location</h3>
            <p className="section-content">
              124 Conch Street <br />
              Bikini Bottom, FL 33040
              <br />
            </p>
          </div>
        </div>
        <div className="footer-socials-copyright-container">
          <div id="footer-socials" className="footer-section">
            <h3 className="section-header">Follow Us</h3>
            <div className="social-icon-container">
              <img
                className="social-icons"
                src="/social_fb.jpg"
                alt="facebook icon"
              ></img>
              <img
                className="social-icons"
                src="/social_insta.jpg"
                alt="instagram icon"
              ></img>
              <img
                className="social-icons"
                src="/social_x.jpg"
                alt="x icon"
              ></img>
              <img
                className="social-icons"
                src="/social_thread.jpg"
                alt="threads icon"
              ></img>
              <img
                className="social-icons"
                src="/social_mastodon.jpg"
                alt="mastodon icon"
              ></img>
            </div>
          </div>
          <p className="copyright-content">
            Copyright 2023 © All rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
