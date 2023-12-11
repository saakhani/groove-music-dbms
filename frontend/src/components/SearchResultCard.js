// SearchResultCard.js

import React from 'react';
import '../styles/components/SearchResultCard.css'; // Import the CSS file
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState, useEffect } from 'react';
 
const SearchResultCard = ({ eventDetailsH, onClick}) => {
  const eventDetails = eventDetailsH;
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [albumType, setAlbumType] = useState('');
  const [imageSrc, setImageSrc] = useState('dummy');

  useEffect(() => {
    fetch(`http://localhost:3001/album/getNameType/${eventDetails.album_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      const albumData = data;
      setAlbumName(albumData[0]);
      setAlbumType(albumData[1]);
    })
    .catch(error => console.error('Error fetching album details:', error));

    fetch(`http://localhost:3001/artist/getName/${eventDetails.artist_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      const artistData = data;
      setArtistName(artistData[0]);
      console.log(imageSrc);
    })
    .catch(error => console.error('Error fetching artist details:', error));


  }, [eventDetails]);


  useEffect(() => {
    if (artistName != '' && albumName != '' && albumType != '') {
      setImageSrc(`${artistName.toLowerCase().replace(/\s/g, '-')}/${albumType.toLowerCase()}/${albumName.toLowerCase().replace(/\s/g, '-')}`);
    }
  }, [artistName, albumType, albumName]);

  const handleClick = () => {
    const eventDetailsUpdated = {
      ...eventDetails,
      artist: artistName,
      album: albumName,
      albumType: albumType,
      imageSrc: imageSrc,
    };
    onClick(eventDetailsUpdated);
  };


  return (
    <div className="search-result-card" onClick={handleClick}>
      <div className="result-image">
        <img src={require(`../assets/music/${imageSrc}/cover.jpg`)} alt={`Event: ${eventDetails.title} at ${eventDetails.artist}`} />
      </div>
      <div className="result-name">{eventDetails.name}</div>
      <div className="result-artist">{artistName}</div>
    </div>
  ); 
};
 
export default SearchResultCard;
 