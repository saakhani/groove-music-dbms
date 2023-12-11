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


		const song_details = {
			title: 'willow',
			artist: 'Taylor Swift',
			src: require(`../assets/music/taylor-swift/lp/evermore/01.mp3`),
			albumArt: require(`../assets/music/taylor-swift/lp/evermore/cover.jpg`),
		};

	
		useEffect(() => {
			fetch('http://localhost:3001/song', {
					method: 'GET',
					headers: {
							'Content-Type': 'application/json',
					},
			})
			.then(response => response.json())
			.then(data => {
					console.log(data); // Log the response data here
					console.log(data.rows); // Log the response data here



	
					const searchData = data.rows.map(item => {
							return {
									id: item[0],
									name: item[1],
									duration: item[2],
									artist: item[4],
									imgSrc: require(`../assets/music/taylor-swift/lp/evermore/cover.jpg`),
							};
					});
	
					setSearchResults(searchData);
			})
			.catch(error => console.error('Error fetching search results:', error));
	}, [searchQuery]);
	
		// const onPlayClick = (eventDetails) => {
		// 	setSongDetails({
		// 		title: eventDetails.name,
		// 		artist: eventDetails.artist,
		// 		src: require(`../assets/music/taylor-swift/lp/evermore/02.mp3`),
		// 		albumArt: require(`../assets/music/taylor-swift/lp/evermore/cover.jpg`),
		// 	});
		// };


    return (
        <div className='homepage'>
					<div className='homepage-header'>
						<Header inputQueryHeader={searchQuery}/>
					</div>
						<div className='homepage-content'>
							<div className='homepage-content-other'>
								<div className = 'search-results-container'>
									{searchResults.map((searchResult) => (
										<SearchResultCard eventDetailsH={searchResult} key={searchResult.id} />
									))}'
								</div>
							</div>	
							<div className='music-player-div'>
								<MusicPlayer title={song_details.title} artist={song_details.artist} src={song_details.src} albumArt={song_details.albumArt}/>
							</div>
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
