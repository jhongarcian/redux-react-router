import React from 'react'
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';

const Breeds = () => {

  const data = useSelector(selectBreeds);

  const breeds = data && data.map(breed => {
    return <li>{breed}</li>
  })

  return (
    <>
      <div>Breeds</div>
      <ul>{breeds}</ul>
    </>
    )
}

export default Breeds;