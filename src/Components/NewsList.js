import React from 'react'
export default function NewsList(props) {
  return (
    <>
    <div className="z-1 card border-red-500 bg-gray-400 border-2  h-full pb-12" >
    <img  src={props.imageUrl} className="card-img-top" alt="News"/>
    <div className="card-body">
    <h5 className="card-title text-xl font-bold">{props.title}....</h5>
    <p className="card-text ">{props.description}....</p>
    <a href={props.url} target="_blank" className="absolute bottom-1 left-[50%] translate-x-[-50%] btn btn-dark btn-sm my-3">Read More</a>
    </div>
    </div>
    </>
  )
}
