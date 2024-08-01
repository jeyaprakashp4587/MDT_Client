import React, { useEffect, useState } from "react";
import "../styles/collection.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookList from "../utils/BookList";
import Question from "../utils/Question";

const Collection = () => {
  const navigate = useNavigate();
  // nav link items
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (index) => {
    setSelectedItem(index);
  };
  const Navitems = ["New Arrivals", "Books", "E-Books", "Journals"];
  // nav links
  return (
    // <div className="collection-wrapper">
    //   {/* collection heading */}
    //   <div className="collection-heading">
    //     <h3>Library Collection</h3>
    //   </div>
    //   {/* collections nav links */}
    //   <div className="collection-nav">
    //     <ul>
    //       {Navitems.map((item, index) => (
    //         <li
    //           key={index}
    //           className={selectedItem === index ? "selected" : ""}
    //           onClick={() => handleClick(index)}
    //         >
    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   {/* books lists wrapper */}
    //   <div className="collection-content-wrapper">
    //     {/* book list heading */}
    //     <div className="section-heading">
    //       <span></span>
    //       <h2>Journals</h2>
    //     </div>
    //     {/* section */}
    //     <div className="booklist-section">
    //       <h2>SI.No</h2>
    //       <h2>Title</h2>
    //       <h2>Version</h2>
    //       <h2>Publisher</h2>
    //     </div>
    //     {/* lists */}
    //     <div className="booklist-lists">
    //       <div className="booklist-list">
    //         <div>1</div>
    //         <div>Pirates of the caribean </div>
    //         <div>Tamil</div>
    //         <div>Raja Publication</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <p>vfb</p>
  );
};

export default Collection;
