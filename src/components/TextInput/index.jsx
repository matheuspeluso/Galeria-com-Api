import React from 'react'

import "./styles.css";

const TextInput = ({searchValue,handleChange}) => {
  return (
    <label className='label-container'>
        <p>Busca: </p>
        <input
            className='text-input'
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder='type your search...'
        />
    </label>
  )
}

export default TextInput