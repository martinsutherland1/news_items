import React from "react";


const NewsItem = ({newsItem, index, OnNewsItemClick}) => {

  const handleClick = () => {
    OnNewsItemClick(newsItem)
  }

  


    return (
        <div>
      
      <li onClick={handleClick}>
        {newsItem.webTitle} 
      </li>
      

      
    </div>
    )
    
} 

export default NewsItem;
