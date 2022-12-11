import React from 'react'
import Loading from '..//assets/loading.gif';
export default function Spinner(props) {
  return (
    <div className={`${props.status===''? "block" : "hidden"}`}>
      <img className={`mx-auto w-${props.width} `} src={Loading} alt=""/>
    </div>
  )
}