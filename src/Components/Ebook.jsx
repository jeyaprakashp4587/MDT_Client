import React, { useEffect, useState } from "react";
import Ebookjson from "../json/Ebook.json";

const Ebook = () => {
  const [ebooks, setEbooks] = useState([]);
  useEffect(() => {
    setEbooks(Ebookjson.ebooks);
  }, []);

  return (
    <div className="Ebook-wrapper">
      {/* Ebook heading */}
      <div className="collections-heading" data-aos="zoom-in">
        E-Books
      </div>
      {/* books lists wrapper */}
      <div className="collection-content-wrapper">
        {/* book list heading */}
        <div className="section-heading">
          <span></span>
          <h2>E-Books</h2>
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
          {ebooks.map((book, index) => (
            <div className="booklist-list">
              <div>{index}</div>
              <div>{book.bookName} </div>
              <div>{book.language}</div>
              <div>{book.authorName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ebook;
