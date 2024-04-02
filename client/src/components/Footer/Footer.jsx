import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as YouTube } from "../../assets/images/youtube-icon.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter-icon.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram-icon.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook-icon.svg";
import { ReactComponent as TinyDivider } from "../../assets/images/tiny-divider.svg";
import { ReactComponent as Copyright } from "../../assets/images/copyright.svg";
import { ReactComponent as RightArrow } from "../../assets/images/right-arrow.svg";

function Footer() {
  const socialsData = [
    {
      id: 1,
      link: "https://www.youtube.com/",
      icon: <YouTube />,
    },
    {
      id: 2,
      link: "https://twitter.com/?lang=en",
      icon: <Twitter />,
    },
    {
      id: 3,
      link: "Instagram",
      icon: <Instagram />,
    },
    {
      id: 4,
      link: "https://www.facebook.com/",
      icon: <Facebook />,
    },
  ];

  const quickLinks = [
    {
      id: 1,
      linkName: "About Us",
      to: "/",
    },
    {
      id: 2,
      linkName: "Blog",
      to: "/",
    },
    {
      id: 3,
      linkName: "Testimonials",
      to: "/",
    },
    {
      id: 4,
      linkName: "Terms and Conditions",
      to: "/",
    },
    {
      id: 5,
      linkName: "Privacy Policy",
      to: "/",
    },
    {
      id: 6,
      linkName: "Site Map",
      to: "/",
    },
  ];

  const customerSupport = [
    {
      id: 1,
      linkName: "Feedback",
      to: "/",
    },
    {
      id: 2,
      linkName: "Report a Problem",
      to: "/",
    },
    {
      id: 1,
      linkName: "Request a Call Back",
      to: "/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top--left">
          <h4 className="footer__logo">
            XYZ <em>Industries</em>
          </h4>
          <p className="footer__desc">
            XYZ Industries: Where real estate dreams meet seamless transactions,
            transforming aspirations into achievements.
          </p>
          <Link to="/" className="btn-primary btn-primary__outline btn-light">
            Explore
            <RightArrow />
          </Link>
        </div>
        <div className="footer__top--right">
          <div className="footer__quick-links">
            <h5 className="footer__list-title">Quick Links</h5>
            <ul className="footer__list">
              {quickLinks.map(({ id, linkName, to }) => (
                <li key={id} className="footer__list-item">
                  <Link to={to} className="footer__link">
                    {linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__customer-support">
            <h5 className="footer__list-title">Customer Support</h5>
            <ul className="footer__list">
              {customerSupport.map(({ id, linkName, to }) => (
                <li key={id} className="footer__list-item">
                  <Link to={to} className="footer__link">
                    {linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__subscribe">
            <h5 className="footer__list-title">Subscribe Us</h5>
            <form className="footer__form">
              <span className="footer__form-desc">
                Subscribe to our weekly newsletter
              </span>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Email Id"
                autoComplete="off"
              />
              <button type="submit" className="submit-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="footer__hr" />
      <div className="footer__bottom">
        <div className="footer__socials">
          <ul className="socials-list">
            {socialsData.map(({ id, link, icon }) => (
              <li key={id} className="social-list-item">
                <a href={link} className="social-link">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__tnc">
          <div className="tnc__left">
            <Link to="/" className="tnc footer__link">
              Terms
            </Link>
            <TinyDivider />
            <Link to="/" className="tnc footer__link">
              Privacy
            </Link>
          </div>
          <div className="tnc__right">
            <Copyright />
            2024 XYZ
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
