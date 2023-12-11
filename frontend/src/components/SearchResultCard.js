// SearchResultCard.js

import React from 'react';
import '../styles/components/SearchResultCard.css'; // Import the CSS file
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
 
const SearchResultCard = ({ eventDetailsH}) => {
  const eventDetails = eventDetailsH;
 
  return (
    <div className="search-result-card">
      <div className="result-image">
        <img src={eventDetails.imgSrc} alt={`Event: ${eventDetails.title} at ${eventDetails.venue}`} />
      </div>
      <div className="result-title">{eventDetails.name}</div>
      <div className="result-venue">{eventDetails.artist}</div>
      <div className="result-description">{eventDetails.duration}</div>
      <button className="play-song-button">
        <FontAwesomeIcon icon={icon({name: 'play', style: 'solid'})}/>
      </button>
    </div>
  ); 
};
 
export default SearchResultCard;
 