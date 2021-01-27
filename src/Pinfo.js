import React from 'react';
import Setimage from './Setimage';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Pinfo =()=>{
    return(
    <>
    
    <div className ="col-md-8 col-8  mx-auto">
  <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
</nav>
</div>

<Setimage/>



    </>       
    )
}
export default Pinfo;