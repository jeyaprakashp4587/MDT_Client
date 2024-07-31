import React from "react";
import "../styles/Home.css";
import bg from "../assets/bg1.png";
import infaimg from "../assets/info.png";
import vector from "../assets/Vector.png";
import section1 from "../assets/section1.png";

const Home = () => {
  const learingImgs = [
    "https://i.ibb.co/0tZgWGy/image-28.png",
    "https://i.ibb.co/LnRHPFN/image-26.png",
    "https://i.ibb.co/djb6BmL/image-24.png",
    "https://i.ibb.co/nm4TGZ3/image-23.png",
    "https://i.ibb.co/k3vzSSz/image-22.png",
    "https://i.ibb.co/LSSMtw1/image-21.png",
    "https://i.ibb.co/x1SKvQw/image-20.png",
  ];
  return (
    <div className="Home-wrapper">
      {/*  wrapper 1 image */}
      <div className="Home-wrapper-1">
        <h1 className="img-label">MDT HINDHU COLLEGE LIBRARY</h1>
        <img src={bg} alt="bg cover" />
      </div>
      {/*  wrapper 2 features*/}
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
            {/* section content 1*/}
            <div className="Home-wrapper2-left-section1-content">
              <div className="Home-wrapper2-left-section1-content-left">
                <p className="Home-wrapper2-section-para">
                  Access our extensive collection of digital resources anytime,
                  anywhere. Whether you're studying late at night or conducting
                  research on the weekends, our online library is available to
                  support your academic needs.
                </p>
              </div>
              <div className="Home-wrapper2-left-section1-content-right">
                <img
                  src={section1}
                  className="Home-wrapper2-left-section-content-img"
                />
              </div>
            </div>
            {/* section content 2*/}
            <div
              className="section-heading"
              style={{ justifyContent: "flex-start" }}
            >
              {" "}
              <span></span>
              <h2 style={{ fontSize: "1em" }}>Research Asisstance</h2>
            </div>
            <div className="Home-wrapper2-left-section2-content">
              <div className="Home-wrapper2-left-section1-content-left">
                <img
                  src={section1}
                  className="Home-wrapper2-left-section-content-img"
                />
              </div>
              <div className="Home-wrapper2-left-section1-content-right">
                <p className="Home-wrapper2-section-para">
                  Need help with your research? Our expert librarians are here
                  to assist you. From refining your search queries to finding
                  scholarly articles, we offer personalized assistance to help
                  you navigate our vast collection of resources effectively.
                </p>
              </div>
            </div>
            {/* section content 3*/}
            <div
              className="section-heading"
              style={{ justifyContent: "flex-end" }}
            >
              <h2 style={{ fontSize: "1em" }}>InterLibrary Loan</h2>
              <span></span>
            </div>
            <div className="Home-wrapper2-left-section1-content">
              <div className="Home-wrapper2-left-section1-content-left">
                <p className="Home-wrapper2-section-para">
                  Can't find what you're looking for in our library? No problem!
                  Take advantage of our interlibrary loan service to borrow
                  materials from other libraries. Expand your research horizons
                  with access to resources beyond our collection.
                </p>
              </div>
              <div className="Home-wrapper2-left-section1-content-right">
                <img
                  src={section1}
                  className="Home-wrapper2-left-section-content-img"
                />
              </div>
            </div>
            {/* section content 4*/}
            <div
              className="section-heading"
              style={{ justifyContent: "flex-start" }}
            >
              <span></span>
              <h2 style={{ fontSize: "1em" }}>Tech Support</h2>
            </div>
            <div className="Home-wrapper2-left-section4-content">
              <div className="Home-wrapper2-left-section1-content-left">
                <img
                  src={section1}
                  className="Home-wrapper2-left-section-content-img"
                />
              </div>
              <div className="Home-wrapper2-left-section1-content-right">
                <p className="Home-wrapper2-section-para">
                  Encounter technical issues while accessing our online
                  resources? Our tech support team is here to help. Contact us
                  for assistance with login problems, database access issues, or
                  any other technical challenges you may encounter.
                </p>
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
      {/* wrapper 3  technie learing*/}
      <div className="Home-wrapper-3">
        <div className="section-heading">
          <span></span>
          <h2 style={{ fontSize: "1.5em" }}>Teaching,learing Initiatives</h2>
        </div>
        {/* learning images */}
        <div className="Home-wrapper-3-Images">
          {learingImgs.map((img) => (
            <img src={img} className="learning-Img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
