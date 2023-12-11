import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/pages/HomePage.css'; // Import the CSS file
import MusicPlayer from '../components/MusicPlayer';
import Header from '../components/Header';
import SearchResultCard from '../components/SearchResultCard';
import { useParams } from "react-router-dom";

const Homepage = () => {
    // const toggleSidebar = () => {
    //     const sidebar = document.querySelector('.sidebar');
    //     sidebar.style.left = (sidebar.style.left === '0px') ? '-200px' : '0';
    // };

		const params = useParams();
		const [searchQuery] = useState(params.SearchBoxQuery);
		const [searchResults, setSearchResults] = useState([]);
		const [songDetails, setSongDetails] = useState({			
			title: 'willow',
			artist: 'Taylor Swift',
			src: require(`../assets/music/taylor-swift/lp/evermore/01.mp3`),
			albumArt: require(`../assets/music/taylor-swift/lp/evermore/cover.jpg`),
		});
		const [initMusicPlayer, setInitMusicPlayer] = useState(false);


	
		useEffect(() => {
			fetch('http://localhost:3001/song', {
					method: 'GET',
					headers: {
							'Content-Type': 'application/json',
					},
			})
			.then(response => response.json())
			.then(data => {
					// console.log(data); // Log the response data here
					// console.log(data.rows); // Log the response data here
					const searchData = data.rows.map(item => {
							return {
									id: item[0],
									name: item[1],
									artist_id: item[4],
									album_id: item[6],
									track_number: item[8],
							};
					});
	
					setSearchResults(searchData);
			})
			.catch(error => console.error('Error fetching search results:', error));
	}, [searchQuery]);


	const handleResultCardClick = (eventDetails) => {
		setInitMusicPlayer(true);
		const paddedTrackNumber = eventDetails.track_number.toString().padStart(2, '0');
		setSongDetails({
			title: eventDetails.name,
			artist: eventDetails.artist,
			src: require(`../assets/music/${eventDetails.artist.toLowerCase().replace(/\s/g, '-')}/${eventDetails.albumType.toLowerCase()}/${eventDetails.album.toLowerCase().replace(/\s/g, '-')}/${paddedTrackNumber}.mp3`),
			albumArt: require(`../assets/music/${eventDetails.artist.toLowerCase().replace(/\s/g, '-')}/${eventDetails.albumType.toLowerCase()}/${eventDetails.album.toLowerCase().replace(/\s/g, '-')}/cover.jpg`),
		});
	};



    return (
        <div className='homepage'>
					<div className='homepage-header'>
						<Header inputQueryHeader={searchQuery}/>
					</div>
						<div className='homepage-content'>
							<div className='homepage-content-other'>
								<div className = 'search-results-container'>
									{searchResults.map((searchResult) => (
										<SearchResultCard onClick = {handleResultCardClick} eventDetailsH={searchResult} key={searchResult.id} />
									))}'
								</div>
							</div>
							{	initMusicPlayer &&
							<div className='music-player-div'>
								<MusicPlayer title={songDetails.title} artist={songDetails.artist} src={songDetails.src} albumArt={songDetails.albumArt}/>
							</div>
							}
						</div>

            {/* <div className="menu-btn" onClick={alert('dont click this again')}>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
            </div> */}
            {/* Sidebar and other content */}
            {/* <main>
                <h2>Featured Playlists</h2>
                <div className="featured-playlist">
                </div>
            </main> */}
        </div>
    );
};

export default Homepage;
