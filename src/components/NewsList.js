import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({news, OnNewsItemClick, handleFaveNewsItem}) => {

    const NewsItems = news.map((newsItem, index) => {
        return (
            <div>
                <ul>
                    <NewsItem newsItem={newsItem} index={index} OnNewsItemClick={OnNewsItemClick}  />
                </ul>
            </div>
        );
      
    });

    return (
        <div id="news-list">
            <ul>
                {NewsItems}
            </ul>
        </div>
    )
  
};

export default NewsList;