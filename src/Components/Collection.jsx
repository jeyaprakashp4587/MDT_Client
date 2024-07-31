import React from "react";
import "../styles/collection.css";
import { Route, Routes } from "react-router-dom";

const Collection = () => {
  return (
    <div className="collection-wrapper">
      {/* collection heading */}
      <div className="collection-heading">
        <h3>Library Collection</h3>
      </div>
      {/* collections nav links */}
      <div className="collection-nav">
        <ul>
          <li>New Arivals</li>
          <li>Books</li>
          <li>E-Books</li>
          <li>Journals</li>
          <li>Questions</li>
        </ul>
      </div>
      {/* books lists wrapper */}
    </div>
  );
};

export default Collection;
