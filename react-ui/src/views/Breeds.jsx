import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBreeds } from "../features/breedsSlice";

const Breeds = () => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  const data = useSelector(selectBreeds);

  const handleClick = (e) => {
    const value = e.target.dataset.breed;
    let _selectedBreeds = [];

    if (selectedBreeds.indexOf(value) > -1) {
      _selectedBreeds = selectedBreeds.filter((breed) => breed !== value);
      setSelectedBreeds(_selectedBreeds);
    } else {
      _selectedBreeds = [...selectedBreeds, value];
    }
    setSelectedBreeds(_selectedBreeds);
  };

  const handleSelectedBreeds = (e) => {
    console.log(selectedBreeds)
  };

  const breeds =
    data &&
    data.map((breed) => {
      return (
        <li
          className={selectedBreeds.indexOf(breed) > -1 ? "active" : ""}
          data-breed={breed}
          key={breed}
          onClick={handleClick}
        >
          {breed}
        </li>
      );
    });

  return (
    <>
      <div className="breeds-subheader">
        <h1>Breeds</h1>
        {selectedBreeds.length > 0 && (
          <button onClick={handleSelectedBreeds}>
            Add selections to favorites
          </button>
        )}
      </div>
      <ul className="breeds">{breeds}</ul>
    </>
  );
};

export default Breeds;
