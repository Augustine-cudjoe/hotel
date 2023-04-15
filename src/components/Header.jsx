
import React from 'react';
import about from "./images/about.png";

const Header = () => {
  return (
    <div className='container head'>
      <div className="row g-2">
       <div className="col-sm-12 col-md-4 col-lg-5 ">
        <h1 className='head-title'>About us</h1>
   <p className="para">
    The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
      </p>
    <a href='#' className="btn btn-dark" style={{paddingTop:"1rem"}}> Read more</a>
  </div>
  <div className="col-sm-12 col-md-8 col-lg-7 ">
    <div className="card  bg-card">
          <img src={about} className="img-fluid " />
        </div>
       </div>
      </div>

    </div>
  )
}

export default Header;