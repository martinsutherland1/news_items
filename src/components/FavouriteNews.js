import React from "react";

const FavouriteNews = ({ news, OnNewsItemClick }) => {
    
    const favouriteNewsItems = news.filter(newsItem => newsItem.favourite)

    return (
        <>
        <div id="reading-list">
        <h3>Reading List</h3>
        <ul>
            {favouriteNewsItems.map(newsItem => {
                return (
                    <li key={newsItem.webTitle}>
                        <button onClick={() => OnNewsItemClick(newsItem.webTitle)}>{newsItem.webTitle}</button>
    
                    </li>
    
                )
            })}
        </ul>

        </div>
      
        </>
    )

}

export default  FavouriteNews;

