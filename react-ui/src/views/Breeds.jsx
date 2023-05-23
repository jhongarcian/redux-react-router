import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';

const Breeds = () => {
  
  const [selectedBreeds, setSelectedBreeds] = useState([])

  const data = useSelector(selectBreeds);

  const handleClick = (e) => {
    const value = e.target.dataset.breed;
    let _selectedBreeds = []

    if(selectedBreeds.indexOf(value) > -1) {
      _selectedBreeds = selectedBreeds.filter(breed => breed !== value)
      setSelectedBreeds(_selectedBreeds)
    } else {
      _selectedBreeds = [...selectedBreeds, value];
    }
    setSelectedBreeds(_selectedBreeds)
  };

  const breeds = data && data.map(breed => {
    return <li data-breed={breed} key={breed} onClick={handleClick} >{breed}</li>
  })

  return (
    <>
      <div>Breeds</div>
      <ul>{breeds}</ul>
      {JSON.stringify(selectedBreeds)}
    </>
    )
}

export default Breeds;