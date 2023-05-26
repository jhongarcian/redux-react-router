import { configureStore } from '@reduxjs/toolkit'
import breedsReducer from '../features/breedsSlice'
// import subbreedsReducer from '../features/subbreedsSlice'
import selectedBreedsSlice from '../features/selectedBreedsSlice'

export default configureStore({
  reducer: {
    breeds: breedsReducer,
    selectedBreeds: selectedBreedsSlice,
    // breedsWithSubbreeds: subbreedsReducer
  },
})