import React, { useState } from 'react';
import "../styles/components/SearchBoxStatic.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function SearchBoxStatic({inputQuery, onSearchBox}) {
  // State to manage the input value
  const [inputValue, setInputValue] = useState(inputQuery);

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    //onInputChange(event.target.value);
  };

  const searchButtonEvent = () => {
    onSearch(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  const onSearch = (inputValue) => {
    //alert("searching for " + inputValue);
    if (inputValue === '') {
      alert("Please enter a search term")
    }
    else{
      onSearchBox(inputValue);
    }
  }



  //check if any element from search-wrapper is in focus or not
  const isTextBoxFocused = () => {
    return document.activeElement === document.getElementById("search-wrapper");
  };


  return (
    <div className='search-wrapper-static'>
      <input
        className='input-box-static'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="search here..."
        onKeyPress={handleKeyPress}
      />
      {/* Display the input value */}
      {/* <p>You typed: {inputValue}</p> */}
      <button className='search-button-static' onClick={searchButtonEvent}>
        {/* <img 
            className='search-image-static'
            src={images.search_icon}
            alt="Search Button"
        /> */}
        <FontAwesomeIcon className = "search-icon" icon={icon({name: 'search', style: 'solid'})}/>
      </button>
    </div>
  );
}

SearchBoxStatic.propTypes = {
  inputQuery: PropTypes.string.isRequired,
};

export default SearchBoxStatic;
