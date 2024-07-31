import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../Components/Home";
import "../styles/LayerStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBars,
  faBook,
  faCircleExclamation,
  faHome,
  faList,
  faMagnifyingGlass,
  faPhone,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import About from "../Components/About";
import Collection from "../Components/Collection";

const Layer = () => {
  // navigation
  const navigation = useNavigate();
  //
  const menuBars = [
    { name: "Home", icon: faHome, route: "/" },
    { name: "About", icon: faCircleExclamation, route: "/about" },
    { name: "Collections", icon: faList, route: "/collection" },
    { name: "E-Book", icon: faBook, route: "ebook" },
  ];
  // get current route namw

  console.log("fdg");
  return (
    // layer wrapper
    <div className="Main-layer">
      {/* sidebar */}
      <div className="sidebar">
        {/* menu button */}
        <div className="menuBar">
          <FontAwesomeIcon icon={faBars} fontSize={20} className="barIcon" />
          Menu
        </div>
        {/* list menu */}
        {menuBars.map((bars) => (
          <div className="menuBar" onClick={() => navigation(bars.route)}>
            <FontAwesomeIcon
              icon={bars.icon}
              fontSize={20}
              className="barIcon"
            />
            {bars.name}
          </div>
        ))}
        {/* book image */}
        <img
          src="https://i.ibb.co/Lx13Bcm/open-book.png"
          className="book-icon"
        />
      </div>
      {/* header */}
      <div className="header">
        <div className="input-header">
          <input placeholder="Search" className="header-input" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="#424669"
            fontSize={20}
          />
        </div>
        <div className="header-contact">
          <button>
            <FontAwesomeIcon icon={faAddressBook} fontSize={17} />
            contact us
          </button>
        </div>
      </div>
      {/* pages */}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layer;
