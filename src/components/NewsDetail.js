import React from "react";


const NewsDetail = ({ selectedNewsItem, handleFaveNewsItem }) => {


    const handleClick2 = () => {
        handleFaveNewsItem(selectedNewsItem.webTitle)
      }
    
      const faveButtonText = selectedNewsItem.favourite ? 'Remove from favourites' : 'Add to favourites'


    return (
        <div id="news-details">
            <h4>{selectedNewsItem.webTitle}</h4>
            <p>{selectedNewsItem.sectionName}</p>
            <a id="read=here" href={selectedNewsItem.webUrl}>Read here</a>
            <button id="reading" onClick={handleClick2}>{faveButtonText}</button>
            
            
        </div>
    )
}


export default NewsDetail;

