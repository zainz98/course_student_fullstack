import React  from 'react'

import'./WeatherSearchPage.css';



function WeatherSearchPage() {
  

  return (
    <div>
        <div className='Search'><h3>Search location</h3></div>

        <div className='Enter'><h6>Enter city name woridwide</h6></div>
        <div>
          <input></input>
        </div>
        <div>
          <button className='bu' >Search </button>
        </div>
        
        
    </div>
  )
}
fetch("http://localhost:9000/weather?lat=${lat}&lon=${lon}&locationNameByUser=${locationNameByUser}&appid={fd0ed8fa2df63b8af02b8d2bfc5f0e64}&units=metric")
.then(function(response){
  return response.json();
})


export default WeatherSearchPage