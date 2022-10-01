import './Country.css'
import { useEffect } from "react";
import { useState } from "react";

const Country = () => {
    return (
        <div>
            <LoadCountry/>
        </div>
    );
};

const LoadCountry = () => {
    const [countries, setCountries] = useState([])
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    return (
        <div>
            {countries.map(country => <CountryName country={country} /> )}
        </div>
    );
};

const CountryName = (props) =>  {
    const {timezones, population,name} = props.country
    return(
        <div className="container">
            <h2>Name : {name.common}</h2>
            <p>Population : {population}</p>
            <p>Time : {timezones}</p>
        </div>
    )
}

export default Country;