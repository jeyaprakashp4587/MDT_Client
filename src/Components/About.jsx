import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-wrapper">
      {/* wrapper1 intro */}
      <div className="about-intro">
        <div className="about-intro-heading">
          <span></span>
          <h2>Welcome to our College Library</h2>
        </div>
        <h4>Overview</h4>
        <p>
          Our college is proud to present a state-of-the-art library facility
          designed to cater to the academic and intellectual needs of our
          students and faculty. Spanning across two spacious levels, our library
          encompasses a total area of 6695 square feet.{" "}
        </p>
        {/* display gallery */}
        <div className="intro-gallery">
          <div>
            <img src="https://i.ibb.co/ypTTwGB/about1.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/brTbNTH/about2.jpg" alt="" />
            <img src="https://i.ibb.co/WtyfLNb/hom2.jpg" alt="" />
            <img src="https://i.ibb.co/CPddvH4/home1.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* wrapper2  resources*/}
      <div className="about-resource">
        <div className="resources-box">
          <div className="section-heading">
            <span></span>
            <h2>Resources:</h2>
          </div>
          <div className="resource-content">
            <img src="https://i.ibb.co/LrhZ3fR/Frame-4.png" />
            <p>
              Our library boasts a rich and diverse collection of resources,
              comprising both print and electronic materials. Students and
              faculty alike have access to an extensive array of books,
              journals, periodicals, and e-resources covering a wide range of
              subjects and disciplines.
            </p>
          </div>
        </div>
        <div className="academicHub-box">
          <div className="section-heading">
            <span></span>
            <h2>Academic Hub:</h2>
          </div>
          <div className="academic-content">
            <img
              src="https://i.ibb.co/R9PFrps/Writing-room-rafiki-2.png"
              alt=""
            />
            <p>
              More than just a repository of books, our library serves as the
              epicenter of academic activities within the college. It offers a
              conducive environment for study, research, and collaboration,
              fostering an atmosphere of intellectual curiosity and exploration.
              Students can engage in independent study or group discussions,
              while faculty members utilize the library's resources to support
              their teaching and research endeavors.
            </p>
          </div>
        </div>
      </div>
      {/* wrapper3 features */}
      <div className="about-features">
        <div className="section-heading">
          <span></span>
          <h2>Special Features</h2>
        </div>
        <p>
          In addition to its comprehensive collection of resources, our library
          offers several special features to enhance the learning experience.
        </p>
        <ul>
          <li>
            Back issues of journals are available in bound volumes for easy
            reference
          </li>
          <li>
            allowing students and faculty to access historical data and track
            the evolution of research within their respective fields.
          </li>
        </ul>
      </div>
      {/* statics */}
      <div className="about-statics">
        <div className="section-heading">
          <span></span>
          <h2>Statics</h2>
        </div>
        <div className="statics-wrapper">
          <div className="statics-wrapper-left">
            <div></div>
          </div>
          <div className="statics-wrapper-right">
            <div>
              Books <div style={{ backgroundColor: "#f8b179" }}></div>
            </div>
            <div>
              Journals <div style={{ backgroundColor: "#424669" }}></div>
            </div>
            <div>
              E-book <div style={{ backgroundColor: "#2d3250" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
