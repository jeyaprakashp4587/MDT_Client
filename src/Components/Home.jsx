import React from "react";
import "../styles/Home.css";
import bg from "../assets/bg1.png";
import infaimg from "../assets/info.png";
import vector from "../assets/Vector.png";
import section1 from "../assets/section1.png";

const Home = () => {
  return (
    <div className="Home-wrapper">
      {/* home wrapprt 1 BG image */}
      <div className="Home-wrapper-1">
        <h1 className="img-label">MDT HINDHU COLLEGE LIBRARY</h1>
        <img src={bg} alt="bg cover" />
        {/* <div className="section">
          <div className="section-heading">
            <span></span>
            <img src={vector} alt="" />
            <h2>Infra Structure</h2>
          </div>
          <div className="info-img">
            <img src={infaimg} alt="" />
          </div>
        </div> */}
      </div>
      {/* home wrapper 2 features*/}
      <div className="Home-wrapper-2">
        <div className="Home-wrapper-2-left">
          {/* wrapper1 */}
          <div className="Home-wrapper2-left-heading">
            <div className="section-heading">
              <span></span>
              <h2 style={{ fontSize: "1.7em" }}>Features Services</h2>
            </div>
          </div>
          {/* wrappers */}
          <div className="Home-wrapper2-left-section1">
            <div
              className="section-heading"
              style={{ justifyContent: "flex-end" }}
            >
              <h2 style={{ fontSize: "1em" }}>24/7 online Access</h2>
              <span></span>
            </div>
            {/* section content */}
            <div className="Home-wrapper2-left-section1-content">
              <div className="Home-wrapper2-left-section1-content-left">
                <p className="Home-wrapper2-section-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam id maxime deserunt enim, culpa recusandae quidem odio
                  non ducimus? Perferendis esse libero ipsa labore veritatis
                  delectus similique odit ipsum repellendus error, aliquam
                  magnam ipsam adipisci pariatur? Itaque veritatis praesentium
                  obcaecati voluptatem voluptate cum, saepe eligendi tenetur.
                  Sed, amet assumenda. Sapiente.
                </p>
              </div>
              <div className="Home-wrapper2-left-section1-content-right">
                <img
                  src={section1}
                  className="Home-wrapper2-left-section-content-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Home-wrapper-2-right">
          <div className="section-heading">
            <span></span>
            <img src={vector} alt="" />
            <h2>Most Popular Books</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
