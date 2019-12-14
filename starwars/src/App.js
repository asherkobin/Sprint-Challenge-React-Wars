import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StarWarsPeople from './components/StarWarsPeople';
import './App.css';
const fakeData = require('./Data.json');
const starWarsPeopleUrl = "https://swapi.co/api/people/";

const App = () => {
  const [starWarsPeopleResponse, setStarWarsPeopleResponse] = useState({});
  const [starWarsPeople, setStarWarsPeople] = useState([]);
  
  useEffect(() => {
      Axios.get(starWarsPeopleUrl).then((res) => {
        setStarWarsPeopleResponse(res.data);
        setStarWarsPeople(res.data.results);
      }).catch(e => {
        console.log("Error: " + e);
      });
      
      // setStarWarsPeopleResponse(fakeData)
      // setStarWarsPeople(fakeData.results);

  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsPeople peopleList={starWarsPeople}/>
    </div>
  );
}

export default App;
