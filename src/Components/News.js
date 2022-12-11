import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsList from "./NewsList";
import Spinner from "./Spinner";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [item, setItem] = useState("");
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");


  const fetchMoreData = () => {
    console.log("New Data Fetch");
    setPage(page + 1);
    axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7a6423fc0a8409eb6640f35fa9e3d8f&page=${page}&pagesize=${props.pageSize}`)
      .then((res) => {
        console.log("New Data", res.data.articles);
        setStatus(res.status);
        setItem(res.data);
        console.log("NewpageValue", page);
        setArticle(article.concat(res.data.articles));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7a6423fc0a8409eb6640f35fa9e3d8f&page=${page}&pagesize=${props.pageSize}`)
      .then((res) => {
        console.log("First load", res.data.articles);
        setStatus(res.status);
        setItem(res.data);
        setArticle(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("pageValue", page);
  }, [props.pageSize, props.category, props.country]);




  // const handleNextClick = () => {
  //   setPage(page + 1);
  // };
  // const handlePrevClick = () => {
  //   setPage(page - 1);
  // };
  return (
    <>
      <div className="bg-orange-500 py-10">
        <p className="text-4xl py-10 my-5 text-white font-bold text-center">
          NEWS-Top Headlines
        </p>
        <Spinner width="12" status={status} />
        <InfiniteScroll
          dataLength={item && article.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<Spinner />}>
          <div className="container px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10 mx-auto">
            {article && article.map((element, id) => (
              <div key={id}>
                <NewsList title={element.title} description={element.description} url={element.url} imageUrl={element.urlToImage ? element.urlToImage : "https://www.musafir.com/SFImage/Images/img-theme-park-015.jpg"} /></div>
            ))}
          </div>
        </InfiniteScroll>
        {/* 
        <div className="container d-flex justify-content-around my-10">
          <button type="button" disabled={page <= 1} className="btn btn-success bg-green-700 font-bold px-5 " onClick={handlePrevClick} > <span> &lArr; Prev</span></button>
          <button type="button" disabled={page >= Math.floor(item.totalResults / props.pageSize)} className=" btn btn-success bg-green-700 font-bold px-5 " onClick={handleNextClick}> <span>Next &rArr;</span> </button>
        </div> */}
      </div>
    </>
  );
}




News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};









