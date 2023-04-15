import React from 'react';
import Slider from './Slider';

const Form = () => {
  return (
    <div className='container'>
      

      <div className="card form-bg"> 
      <form>
     
       <h1 className='form-title'>Book a room online </h1> 
       
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Arrival</label>
    <input type="date" className="form-control" id="exampleInputDate" aria-describedby="dateHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputDate2" className="form-label">Departure</label>
    <input type="date" className="form-control" id="exampleInputDate" />
  </div>
 
  <button type="submit" className="btn btn-danger">Book Now</button>
</form>
    </div>
    </div>
  )
}

export default Form;
