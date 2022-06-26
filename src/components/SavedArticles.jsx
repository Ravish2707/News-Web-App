import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function SavedArticles() {
  const [articles, setArticles] = useState([]);

  const getSavedNewsArticles = async () => {
    const response = await fetch("http://127.0.0.1:5000/getAllArticles");
    const data = await response.json();
    console.log(data);
    setArticles(data);
  };
  useEffect(() => {
    getSavedNewsArticles();
  }, []);

  return (
    <div style={{marginTop: '100px'}}>
      <div className="container main-div">
        <div className="row">
          {articles.map((element) => {
            const { title, description, imageUrl, url, author, date } = element;
            return (
              <div className="col-md-4">
                <NewsItem
                  title={title}
                  description={description}
                  imageUrl={
                    !imageUrl
                      ? "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"
                      : imageUrl
                  }
                  url={url}
                  author={author}
                  date={date}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SavedArticles;
