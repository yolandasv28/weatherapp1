import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = (props)=>{
    
    let cities = props.cities;

    return (<div>
        <WeatherLocation city={cities}/>
    </div>);

};

export default LocationList;