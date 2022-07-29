
/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import "./team.css"
import { useLayoutEffect } from "react";

const renderData = (items, e) => {
  
  return (
    
    <div className="container gallery">
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
              
                 
                
                <img src={items.imageURL} class="figure-img img-fluid rounded" id="ec-pic" alt={items.comment}/>
                  
               
            </div>
          );
        })}
      </div>
      
      </div>
  );
};

function T30({API}) {
  const [data, setData] = useState([]);

  const [currentPage, ] = useState(1);
  const [itemsPerPage] = useState(50);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // eslint-disable-next-line no-unused-vars
  useLayoutEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [API]);

  return (
    <>
     
      {renderData(currentItems)
      
      }
    
    </>
    
  );
}

export default T30;
