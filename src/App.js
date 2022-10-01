import './App.css';
// import Country from './Components/Country/Country';
// import Header from './Components/Header/Header';
import Country from './Components//Country/Country';


function App() {
  return (
    <div className="App">
      <Country></Country>
    </div>
  );
}




// const LoadCountry = () => {
//   const [countries, setCountries] = useState([])// re
//   useEffect(()=>{//siteEffect
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[]);
  
//   return(
//     <div>
//       <h1>Omar Faruk</h1>
//       <h2>Countries {countries.length}</h2>
//       {countries.map(country => <Display countryName={country.name.common}/>)}
//     </div>
//   )
// }

// function Display(props){
//   // console.log(props.countryName);
//   return(
//     <div>
//       <p>Name {props.countryName}</p>
//     </div>
//   )
// }


  export default App;