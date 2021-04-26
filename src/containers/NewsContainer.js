import React, {useState, useEffect} from "react";
import NewsList from "../components/NewsList";
import NewsDetail from "../components/NewsDetail";
import FavouriteNews from "../components/FavouriteNews";

const NewsContainer = () => {
    const [news, setNewsItem] = useState([]);
    const [selectedNewsItem, setSelectedNewsItem] = useState(null);


    useEffect(() => {
        getNews();
      }, []);


      const getNews = function(){
          fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
          .then((res) => res.json())
          .then((news) => setNewsItem(news.response.results));
      }

      const OnNewsItemClick = function (newsItem){
          setSelectedNewsItem(newsItem);
      }

      const handleFaveNewsItem = (newsItem) => {
          const updatedNewsItems = news.map((webTitle) => {
              if (webTitle.webTitle === newsItem){
                  webTitle.favourite = !newsItem.favourite
              }
              return webTitle
          })
          setNewsItem(updatedNewsItems)
      }


      



      return (

        <div class="news-wrapper">
            <NewsList news={news} OnNewsItemClick={OnNewsItemClick} handleFaveNewsItem={handleFaveNewsItem}/> 
            { selectedNewsItem ? <NewsDetail selectedNewsItem={selectedNewsItem} handleFaveNewsItem={handleFaveNewsItem}/> : null } 
            <FavouriteNews news={news}  OnNewsItemClick={OnNewsItemClick}/> 
            
        </div>
          
      )


}

export default NewsContainer;