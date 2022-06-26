import React , { useState, useEffect }from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default function News({category, pageSize}) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&page=${page}&category=${category}&pageSize=${pageSize}&apiKey=2d4e6cb667284e30b5aae4d8e2ddac9c`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    
    }

    useEffect(() => {
        updateNews()
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&page=${page + 1}&category=${category}&pageSize=${pageSize}&apiKey=2d4e6cb667284e30b5aae4d8e2ddac9c`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setTotalResults(totalResults)
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
    };

    return (
        <div className="main-div">
             <h1 className="text-center" style={{marginTop: '90px'}}>Top Headlines - Today</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                    style={{overflow: 'hidden'}}
                >
                    <div className="container main-div">
                        <div className="row">
                            {
                                articles.map((element) => {
                                    const { title, description, urlToImage, url, author, publishedAt } = element
                                    return <div className="col-md-4">
                                        <NewsItem title={title} description={description} imageUrl={!urlToImage ? "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg" : urlToImage} url={url} author={author} date={publishedAt} />
                                    </div>
                                })
                            }
                        </div>

                    </div>

                </InfiniteScroll>
        </div>
    )
}

