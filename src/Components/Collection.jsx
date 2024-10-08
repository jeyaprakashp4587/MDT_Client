import React, { useEffect, useState } from "react";
import "../styles/collection.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookList from "../utils/BookList";
import Question from "../utils/Question";

const Collection = () => {
  const navigate = useNavigate();
  // nav link items
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (index, route) => {
    setSelectedItem(index);
    navigate(route);
  };
  // const Navitems = ["New Arrivals", "Books", "E-Books", "Journals"];
  const Navitems = [
    { name: "New Arrivals", route: "/NewArival" },
    { name: "ALL Books", route: "/Allbooks" },
    { name: "E-Books", route: "/ebook" },
    { name: "Journals", route: "/journal" },
  ];
  // nav links
  return (
    <div className="collection-wrapper">
      {/* collection heading */}
      <div data-aos="zoom-in" className="collections-heading">
        Library Collection
      </div>
      {/* collections nav links */}
      <div data-aos="fade-right" className="collection-nav">
        {Navitems.map((item, index) => (
          <li
            key={index}
            className={selectedItem === index ? "selected" : ""}
            onClick={() => {
              handleClick(index, item.route);
            }}
          >
            {item.name}
          </li>
        ))}
      </div>
      {/* books lists wrapper */}
      <div className="collection-content-wrapper">
        {/* book list heading */}
        <div className="section-heading">
          <span></span>
          <h2>Journals</h2>
        </div>
        {/* section */}
        <div className="booklist-section">
          <h2>SI.No</h2>
          <h2>Title</h2>
          <h2>Version</h2>
          <h2>Publisher</h2>
        </div>
        {/* lists */}
        <div className="booklist-lists">
          <div className="booklist-list">
            <div>1</div>
            <div>Pirates of the caribean </div>
            <div>Tamil</div>
            <div>Raja Publication</div>
          </div>
          <div className="booklist-list">
            <div>1</div>
            <div>Pirates of the caribean </div>
            <div>Tamil</div>
            <div>Raja Publication</div>
          </div>
          <div className="booklist-list">
            <div>1</div>
            <div>Pirates of the caribean </div>
            <div>Tamil</div>
            <div>Raja Publication</div>
          </div>
          <div className="booklist-list">
            <div>1</div>
            <div>Pirates of the caribean </div>
            <div>Tamil</div>
            <div>Raja Publication</div>
          </div>
          <div className="booklist-list">
            <div>1</div>
            <div>Pirates of the caribean </div>
            <div>Tamil</div>
            <div>Raja Publication</div>
          </div>
          <div className="booklist-list">
            <div>1</div>
            <div>Pirates of the caribean </div>
            <div>Tamil</div>
            <div>Raja Publication</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
