import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News country="au" />} />
          <Route path='/general' element={<News country="in" category="general" pageSize={5} />} />
          <Route path='/business' element={<News country="in" category="business" pageSize={5} />} />
          <Route path='/entertainment' element={<News country="in" category="entertainment" pageSize={5} />} />
          <Route path='/health' element={<News country="in" category="health" pageSize={5} />} />
          <Route path='/science' element={<News country="in" category="science" pageSize={5} />} />
          <Route path='/sports' element={<News country="in" category="sports" pageSize={5} />} />
          <Route path='/technology' element={<News country="in" category="technology" pageSize={5} />} />
        </Routes>
      </Router>
    </>
  );
}


// ae
// ar
// at
// au
// be
// bg
// br
// ca
// ch
// cn
// co
// cu
// cz
// de
// eg
// fr
// gb
// gr
// hk
// hu
// id
// ie
// il
// in
// it
// jp
// kr
// lt
// lv
// ma
// mx
// my
// ng
// nl
// no
// nz
// ph
// pl
// pt
// ro
// rs
// ru
// sa
// se
// sg
// si
// sk
// th
// tr
// tw
// ua
// us
// ve
// za