import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {Banner} from './Components/Banner';
import { PlaceFinder } from './Components/PlaceFinder';
import { useDispatch } from 'react-redux';
import { SearchBox } from './Components/SearchBox';
import {getTomtomLocation} from './Redux/Actions/LocationActions';
import { useSelector } from 'react-redux';


//tutorial: https://developer.tomtom.com/blog/build-different/building-responsive-location-search-component-react-search-box


function App() {

  const dispatch = useDispatch();

  const [userLocation, setUserLocation] = useState(null);
  const [userQuery, setUserQuery] = useState('a');

  //data will be used as suggestions
  
  const [searchResults, setSearchResults] = useState(null);
  const setSearchResultsState = (objArr)=>{
    setSearchResults(objArr);
  }

  
  //whatever's in the value, gets displayed in a suggestion box
  const [data, setData] = useState([
    
  ]); //try redux

  

  useEffect(()=>{


    
    navigator.geolocation.getCurrentPosition(position=>{
      setUserLocation(position.coords);
    }); //gets the current position of device in long/ lat
    //        

            

            
  },[])


  

  return (
    <div style={{textAlign:'center'}}>
        <h4>my tom tom practice app</h4>
        <Banner userLocation={userLocation}/>
        <SearchBox data={data} location={userLocation}/>
    </div>
  );
}

export default App;
