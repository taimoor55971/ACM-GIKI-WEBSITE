import React, { useEffect, useState } from "react";
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'
import "./gallery.css"
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";

const Card = ({ item }) => {
  return (
    <div key={item.id} className="col-sm-6 col-md-4 my-2">
      <Zoom zoomMargin={15} overlayBgColorEnd='rgba(0, 0, 0, 0.7)'>
        <img src={item.imageURL} className="figure-img img-fluid rounded" alt={item.comment} />
      </Zoom>
    </div>
  );
};

const Gallery = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [Loading, setLoading] = useState(false);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = Array.from(Array(pages).keys()).map((number) => {
    const pageNumber = number + 1;
    return (
      <li
        key={pageNumber}
        id={pageNumber}
        onClick={handleClick}
        className={currentPage === pageNumber ? "active" : null}
      >
        {pageNumber}
      </li>
    );
  });

  useEffect(() => {
    loadMessage();
  }, []);

  const loadMessage = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://acm-giki-webapp.onrender.com/images");
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  if (Loading) {
    return 'Loading...';
  }

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 12);
  };

  const handleLoadLess = () => {
    setItemsPerPage(itemsPerPage - 12);
  };

  const showLoadMoreButton = currentPage < pages;
  const showLoadLessButton = itemsPerPage > 12;

  return (
    <>
      <div className="container gallery">
        <ScrollToTop smooth color="#6f00ff" />
        <Helmet>
          <meta charSet="utf-8" />
          <title>ACM_GIKI Chapter|Gallery</title>
          <meta name="description" content="ACM GIKI Gallery Page" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        </Helmet>
        <div className="row m-2">
          {currentItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        {showLoadMoreButton && (
          <button
            onClick={handleLoadMore}
            className="loadmore btn btn-primary"
            style={{ marginRight: '10px' }}
          >
            Load More
          </button>
        )}
        {showLoadLessButton && (
          <button
            onClick={handleLoadLess}
            className="loadmore btn btn-primary"
          >
            Load Less
          </button>
        )}
      </div>
    </>
  );
}

export default Gallery;
