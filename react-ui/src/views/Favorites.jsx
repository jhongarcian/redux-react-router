import React from 'react'
import { useSelector } from "react-redux";
import { selectSelectedBreeds } from '../features/selectedBreedsSlice';

const Favorites = () => {
  const data = useSelector(selectSelectedBreeds);

  const selecedBreeds = data && data.map(breed => {
    return (
      <li
        data-breed={breed}
        key={breed}
      >
        {breed}
      </li>
    )
  })
  return (
    <>
      <h1>Favorites</h1>
      <div>{selecedBreeds}</div>
    </>
  )
}

export default Favorites;