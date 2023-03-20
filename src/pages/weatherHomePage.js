import React  from 'react'
import'./weatherHomePage.css';

function WeatherHomePage() {
  
  
  
  return (
  <div className='home'>
      <h1>Weather Dashboard</h1>
      <div className='Search'>
          <h5>search and add locations</h5>
          <button className='bu'>Search</button>

      </div>
      <br></br>
      <div className='Display'>
          <h5>display Dashboard locations</h5>
          <button className='bu1'>Display</button>

      </div>
     </div>
     
)
}

export default WeatherHomePage