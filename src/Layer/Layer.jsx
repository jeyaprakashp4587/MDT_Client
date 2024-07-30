import React from "react";
import { Route, Routes } from "react-router-dom";
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

const Layer = () => {
  const menuBars = [
    { name: "Home", icon: faHome },
    { name: "About", icon: faCircleExclamation },
    { name: "Collections", icon: faList },
    { name: "E-Book", icon: faBook },
  ];
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
          <div className="menuBar">
            <FontAwesomeIcon
              icon={bars.icon}
              fontSize={20}
              className="barIcon"
            />
            {bars.name}
          </div>
        ))}
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
        </Routes>
      </div>
    </div>
  );
};

export default Layer;
