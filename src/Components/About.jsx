import React from "react";
import "../styles/about.css";
import librarianImg from "../assets/librarian.png";

const About = () => {
  return (
    <div className="about-wrapper">
      {/* wrapper1 intro */}
      <div className="about-intro">
        <div className="about-intro-heading" data-aos="fade-left">
          <span></span>
          <h2>Welcome to our College Library</h2>
        </div>
        <h4 data-aos="fade-right">Overview</h4>
        <p data-aos="fade-left">
          "The library connects us with the insight and knowledge, painfully
          extracted from Nature, of the greatest minds that ever were, with the
          best teachers, drawn from the entire planet and from all our history,
          to instruct us without tiring, and to inspire us to make our own
          contribution to the collective knowledge of the human species. I think
          the health of our civilization, the depth of our awareness about the
          underpinnings of our culture and our concern for the future can all be
          tested by how well we support our libraries". -Cosmos Carl Saga
          Library is the index of this traditional and prestigious institution.
          It functions in a spacious and well equipped building. The library is
          facilitated with 16 computers 3 printers and a Xerox machine.
        </p>
        <p data-aos="fade-right">
          The life of the individual is decided by what he reads. To promote the
          reading habit, the library is stacked with a voluminous number
          of64,259 Books, 80409 e-books, 28 Journals, 3828 e.Journals,
          23Magazines, 29 Thesis and 275 Back volumes, 149 CDs and MathSciNet
          Database. Apart from the main library, thousands of books are
          collected and maintained by the various departments of the college.
        </p>
        {/* display gallery */}
        <div className="intro-gallery">
          <div data-aos="zoom-in">
            <img src="https://i.ibb.co/ypTTwGB/about1.jpg" alt="" />
          </div>
          <div>
            <img
              data-aos="zoom-out"
              src="https://i.ibb.co/brTbNTH/about2.jpg"
              alt=""
            />
            <img
              data-aos="zoom-out"
              src="https://i.ibb.co/WtyfLNb/hom2.jpg"
              alt=""
            />
            <img
              data-aos="zoom-out"
              src="https://i.ibb.co/CPddvH4/home1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="about-intro-heading" data-aos="fade-left">
          <span></span>
          <h2>Digital Library</h2>
        </div>
        <p data-aos="fade-right">
          UGC-INFLIBNET, N.LIST, e.ShodhSindhu An Initiative of Ministry of
          Human Resource Development (MHRD) under the NME-ICT now funded by UGC
          as college component under e.ShodhSindhu Consortium.{" "}
        </p>
        <p data-aos="fade-left">
          The N-LIST project provides access to e resources to students,
          researchers and faculty from colleges and other beneficiary
          institutions through server(s) installed at the INFILBNET centre. The
          authorized users from colleges can now access e-resources and download
          articles required by them directly from the publisher's website once
          they are duty authenticated as authorized users through servers
          deployed at the INFLIBNET Centre.
        </p>
      </div>
      {/*  wrapper 2 librarian*/}
      <div className="about-librarian">
        <div className="about-intro-heading" data-aos="fade-left">
          <span></span>
          <h2>Librarian</h2>
        </div>
        <div className="about-librarian-content">
          <div className="librarian-img" data-aos="fade-right">
            <img src={librarianImg} alt="" />
          </div>
          <div className="librarian-details" data-aos="fade-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              necessitatibus aspernatur non sint deleniti perferendis maxime
              quod doloremque, sit ex? Vitae mollitia aliquam nobis? Iusto quo
              atque esse in architecto nisi tenetur assumenda. Placeat ullam
              dolores vel distinctio blanditiis. Eius consectetur distinctio
              magnam reiciendis a quam mollitia dolorum doloribus cumque nobis
              voluptatum maiores aut autem, adipisci laudantium vitae ratione
              qui, sequi exercitationem sint quas blanditiis itaque. Maxime
              saepe necessitatibus nobis sed.
            </p>
          </div>
        </div>
      </div>
      {/* wrapper3  resources*/}
      <div className="about-resource">
        <div
          className="resources-box"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
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
        <div
          className="academicHub-box"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
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
      <div className="about-features" data-aos="fade-left">
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
      {/* wrapper 4 statics */}
      <div className="about-statics" data-aos="fade-right">
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
