import React, { useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../Components/Home";
import "../styles/LayerStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBars,
  faBook,
  faCircleExclamation,
  faEnvelope,
  faHome,
  faList,
  faMagnifyingGlass,
  faPhone,
  faSignal,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import About from "../Components/About";
import Collection from "../Components/Collection";
import logo from "../assets/logo1.png";

const Layer = () => {
  // navigation
  const navigation = useNavigate();
  //
  const menuBars = [
    { name: "Home", icon: faHome, route: "/" },
    { name: "About", icon: faCircleExclamation, route: "/about" },
    { name: "Collections", icon: faList, route: "/collection" },
    { name: "E-Book", icon: faBook, route: "/ebook" },
  ];
  //
  const [menu, setMenu] = useState(false);
  const HandleMenu = () => {
    setMenu(!menu);
  };

  return (
    // layer wrapper
    <div className="Main-layer">
      {/* layer letter */}
      <h2 className="layer-letter">MDT</h2>
      {/* sidebar */}
      <div
        className="sidebar"
        style={{
          height: menu ? "auto" : "0px",
          padding: menu ? "1rem" : "0",
        }}
      >
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
      </div>
      {/* header */}
      <div className="main-header">
        {/* menu  */}
        <FontAwesomeIcon
          icon={menu ? faTimes : faBars}
          className="menu"
          onClick={HandleMenu}
        />
        <img src={logo} className="logo" style={{ width: "50px" }} />
        <div className="input-header">
          <input placeholder="Search" className="header-input " />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="#424669"
            fontSize={20}
            className="text-zinc-400"
          />
        </div>
        <div className="header-contact">
          <button>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 20 }} />
            contact us
          </button>
        </div>
      </div>
      {/* pages */}
      <div className="pages container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layer;
