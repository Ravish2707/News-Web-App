import React from "react";

export default function NewsItem({
  title,
  description,
  imageUrl,
  url,
  author,
  date,
}) {
    const saveArticle = async() => {
        // Code for saving article in backend.
        // Using fetch api for posting articles in backend.
        // URL = "http://127.0.0.1:5000/saveArticles"
        // Paramenter to pass in api - title, description, author, date, imageUrl from props.
        const response = await fetch("http://127.0.0.1:5000/saveArticles", {
          method: 'POST',
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description, author, date, imageUrl, url})
        })

        const data = await response.json();
        console.log(data);
    }
  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <div className="display-flex">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Read More
            </a>
            <button type="button" className="btn btn-primary" style={{ marginLeft: 10}} onClick={saveArticle}>Save Article</button>
          </div>
        </div>
      </div>
    </div>
  );
}
