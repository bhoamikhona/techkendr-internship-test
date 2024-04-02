import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HowRow from "../../partials/HowRow/HowRow.jsx";
import heroImg from "../../assets/images/hero-img.png";
import howImg1 from "../../assets/images/how-img-1.png";
import howImg2 from "../../assets/images/how-img-2.png";
import howImg3 from "../../assets/images/how-img-3.png";
import howImg4 from "../../assets/images/how-img-4.png";
import Feature from "../../partials/Feature/Feature.jsx";
import { ReactComponent as RightArrow } from "../../assets/images/right-arrow.svg";

function Home() {
  const rowData = [
    {
      id: 1,
      title: "Discover Your Perfect Home",
      desc: "Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.",
      img: howImg1,
      border: false,
      to: "/",
      align: "left",
    },
    {
      id: 2,
      title: "Showcase Your Property",
      desc: "List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly.",
      img: howImg2,
      border: true,
      to: "/",
      align: "right",
    },
    {
      id: 3,
      title: "Connect and Communicate",
      desc: "Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward.",
      img: howImg3,
      border: false,
      to: "/",
      align: "left",
    },
    {
      id: 4,
      title: "Seal the Deal Securely",
      desc: "Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property.",
      img: howImg4,
      border: false,
      to: "/",
      align: "right",
    },
  ];

  const featuresData = [
    {
      id: 1,
      number: "01",
      title: "Search and Filters",
      desc: "Tailored Searches to meet your needs. Find what you’re looking for with precision.",
    },
    {
      id: 2,
      number: "02",
      title: "Detailed Listings",
      desc: "Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications.",
    },
    {
      id: 3,
      number: "03",
      title: "Direct Messaging",
      desc: "Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions.",
    },
    {
      id: 4,
      number: "04",
      title: "Secure Payments",
      desc: "Trust in Every Transaction. Our secure payment system ensures your peace fo mind.",
    },
  ];

  return (
    <div className="home">
      <section className="section-hero">
        <div className="hero__info">
          <h1 className="section__title">
            CONNECTING DREAMS TO REALITY
            <br />
            <em>YOUR PREMIER</em>
            <br />
            REAL ESTATE MARKETPLACE
          </h1>
          <p className="section__subtitle">
            Where every search ends with a home
          </p>
        </div>
        <div className="hero__btns">
          <Link to="/" className="btn-primary btn-primary__solid">
            Find Your Home
            <RightArrow />
          </Link>
          <Link to="/" className="btn-primary btn-primary__solid">
            List Your Property
            <RightArrow />
          </Link>
        </div>
        <div className="hero__img-container">
          <img className="hero__img" src={heroImg} alt="House" />
        </div>
      </section>
      <section className="section-how">
        <h2 className="section__title">HOW IT WORKS?</h2>
        <p className="section__subtitle">Step by Step Guide</p>

        <div className="how__grid">
          {rowData.map(({ id, title, desc, img, to, align, border }) => (
            <HowRow
              key={id}
              title={title}
              desc={desc}
              img={img}
              to={to}
              align={align}
              border={border}
            />
          ))}
        </div>
      </section>

      <section className="section-features">
        <h2 className="section__title">WHY CHOOSE XYZ?</h2>
        <div className="features">
          {featuresData.map(({ id, number, title, desc }) => (
            <Feature key={id} number={number} title={title} desc={desc} />
          ))}
        </div>
      </section>

      <section className="section-cta">
        <div className="cta__info">
          <h2 className="section__title">
            YOUR <em>TRUSTED</em> PARTNER IN
            <br />
            THE FUTURE <em>OF HOUSING</em>
          </h2>
          <p className="section__subtitle">
            Our partnerships with governments and local banks ensure that our
            housing prices are
            <br />
            affordable enough for our target market.
          </p>
          <Link to="/" className="btn-primary btn-primary__solid">
            Join Our Community Today
            <RightArrow />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
