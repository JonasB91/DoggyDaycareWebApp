import React, { useState, useEffect } from 'react';
import './Catalog.css'
import { Link } from "react-router-dom"

const apiUrl = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126'

const Catalog = (props) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setDogs(data);
      localStorage.setItem('dogs', JSON.stringify(data.record));
    };

    const storedDogs = localStorage.getItem('dogs');
    if (storedDogs) {
      console.log('Dogs are stored')
      setDogs(JSON.parse(storedDogs));
    } else {
      console.log('No dogs was fetched');
      fetchData();
    }

  }, []);

  return (
    <div className='background'>
    <div className='dog-container'>
      <div className='dogImage-container'>
      {dogs.map((dog, index) => (
        <Link to={`/${dog.name}`} key={index}>
          <div className='dogImage-wrap dogImageCard'>
          <h3>{dog.name}</h3>
          <img className='dogImage dogCard' src={dog.img} alt={dog.name} />
          </div>
        </Link>
      ))}
        </div>
      </div>
    </div>
    
  );
};


export default Catalog;