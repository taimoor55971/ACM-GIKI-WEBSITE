/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useState } from "react";
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'
import "./gallery.css"
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";

const renderData = (items, e) => {
  
  return (
    
    <div className="container gallery">
      <ScrollToTop smooth color="#6f00ff" />
         <Helmet >
          <meta charSet="utf-8" />
          <title>ACM_GIKI Chapter|Gallery</title>
        <meta name="description" content="ACM GIKI Gallery Page" />
        <meta name="viewport" content="width=device-width,  initial-scale=1.0 ,user-scalable=no"></meta>

        </Helmet>
      <div className="row m-2">
        {items.map((items) => {
          return (
            <div key={items.id} className="col-sm-6 col-md-4 v my-2">
              
                 <Zoom zoomMargin={15} overlayBgColorEnd='rgba(0, 0, 0, 0.7)'>
                
                <img src={items.imageURL} class="figure-img img-fluid rounded" alt={items.comment}/>
                  </Zoom>
               
            </div>
          );
        })}
      </div>
      </div>
  );
};

function Gallery() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(12);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [Loading, SetLoading] = useState(false);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // eslint-disable-next-line no-unused-vars
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useLayoutEffect(() => {
   loadMessage();
  }, []);

  //
  const loadMessage = async () => {
    try {
      SetLoading(true);
      fetch("https://acm-giki-webapp.onrender.com/images")
      .then((response) => response.json())
      .then((json) => setData(json));
      SetLoading(false);
    } catch (e) {
     
      SetLoading(false);
    }
  };

  if (Loading) {
    return 'Loading...';
  }
  //

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 12);
  };

  return (
    <>
     
      {renderData(currentItems)}
      {/* <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
       */}
        
      <div className="">
      <button onClick={handleLoadMore} className="loadmore btn btn-primary d-flex justify-content-center  "   disabled={currentPage === pages[pages.length - 1] ? true : false}>
        Load More
        </button>
        </div>
    </>
  );
}

export default Gallery;
