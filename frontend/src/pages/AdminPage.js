import React, { useState } from 'react';
import '../styles/pages/AdminPage.css';
import { useEffect } from 'react';



const AdminPage = () => {
	const [albums, setAlbums] = useState([]);
	const [artists, setArtists] = useState([]);

    const [activeTab, setActiveTab] = useState('song');

    useEffect(() => {
      fetch('http://localhost:3001/artist/getAllNames', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
				const tempData = data.map(item => {
					return {
						artist_id: item[0],
						name: item[1],
					};
				});
				setArtists(tempData);
			})
			.catch(error => console.error('Error fetching artists:', error));

			fetch('http://localhost:3001/album/getAllNames', {
				method: 'GET',
				headers: {
				'Content-Type': 'application/json',
				},
			})
			.then(response => response.json())
			.then(data => {
				const tempData = data.map(item => {
					return {
						album_id: item[0],
						name: item[1],
					};
				});
				setAlbums(tempData);
			})
		}, []);
const [newSong, setNewSong] = useState({
            song_name: '',
            artist_name: '',
            album_name: '',
            release_date: '',
            genre: '',
            duration: '',
            song_position: ''
        });
    
        const handleInputChange = (event) => {
					if (event.target.name === 'release_date') {
						const formattedDate = formatDate(event.target.value);
						setNewSong({ ...newSong, [event.target.name]: formattedDate });
					} else {
            setNewSong({ ...newSong, [event.target.name]: event.target.value });
					}
        };
    
        const handleSubmitSong = (event) => {
            event.preventDefault();
            console.log('New Song Data:', newSong);
						//convert date to the correct format

						const formattedDate = formatDate(newSong.release_date);

            setNewSong({
                song_name: '',
                artist_name: '',
                album_name: '',
                release_date: formattedDate,
                genre: '',
                duration: '',
                song_position: ''
            });

						console.log('New Song Data:', newSong);

						fetch('http://localhost:3001/song/addSong', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(newSong),
						})
						.then(response => response.json())
						.then(data => {
							console.log(data);
						}
						)
						.catch(error => console.error('Error adding song:', error));

        };

				function formatDate(dateString) {
					const options = { day: '2-digit', month: 'short', year: '2-digit' };
					const date = new Date(dateString);
					const formattedDate = date.toLocaleDateString(undefined, options);
					return formattedDate.replace(/ /g, '-');
				}

    return (
        <div className="admin-page">
            <div className="sidebar">
                <button onClick={() => setActiveTab('song')}>Add New Song</button>
                <button onClick={() => setActiveTab('album')}>Add New Album</button>
                <button onClick={() => setActiveTab('artist')}>Add New Artist</button>
            </div>
            <div className="content">
                {activeTab === 'song' && 
                    <form onSubmit={handleSubmitSong} className="song-form">
                    <input
                        type="text"
                        name="song_name"
                        value={newSong.song_name}
                        onChange={handleInputChange}
                        placeholder="Song Name"
                    />
                    {/* Dropdown for artists */}
                    <select name="artist_name" value={newSong.artist_id} onChange={handleInputChange}>
                        <option value="">Select Artist</option>
                        {artists.map(artist => (
                            <option key={artist.artist_id} value={artist.artist_name}>{artist.name}</option>
                        ))}
                    </select>
                    {/* Dropdown for albums */}
                    <select name="album_name" value={newSong.album_id} onChange={handleInputChange}>
                        <option value="">Select Album</option>
                        {albums.map(album => (
                            <option key={album.album_id} value={album.album_name}>{album.name}</option>
                        ))}
                    </select>
                    {/* Other inputs */}
                    <input
                        type="date"
                        name="release_date"
												value={newSong.release_date}
												
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="genre"
                        value={newSong.genre}
                        onChange={handleInputChange}
                        placeholder="Genre"
                    />
                    <input
                        type="number"
                        name="duration"
                        value={newSong.song_duration}
                        onChange={handleInputChange}
                        placeholder="Song Duration"
                    />
                    <input
                        type="number"
                        name="song_position"
                        value={newSong.song_position}
                        onChange={handleInputChange}
                        placeholder="Song Position"
                    />
                    <button type="submit">Add Song</button>
                </form>
                }
                {activeTab === 'album' && <AddAlbumForm />}
                {activeTab === 'artist' && <AddArtistForm />}
            </div>
        </div>
    );
};



    const AddAlbumForm = () => {
        const [newAlbum, setNewAlbum] = useState({
            album_name: '',
            artist_name: '',
            album_type: '' // ALBUM_TYPE
        });
    
        const handleInputChange = (event) => {
            setNewAlbum({ ...newAlbum, [event.target.name]: event.target.value });
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('New Album Data:', newAlbum);
            // Here you would typically send a request to your backend
            // Reset form after submission
            setNewAlbum({
                album_name: '',
                artist_name: '',
                album_type: ''
            });
        };
    
        return (
            <form onSubmit={handleSubmit} className="album-form">
                <input
                    type="text"
                    name="album_name"
                    value={newAlbum.album_name}
                    onChange={handleInputChange}
                    placeholder="Album Name"
                />
                <input
                    type="text"
                    name="artist_name"
                    value={newAlbum.artist_name}
                    onChange={handleInputChange}
                    placeholder="Artist Name"
                />
                <select name="album_type" value={newAlbum.album_type} onChange={handleInputChange}>
                    <option value="">Select Album Type</option>
                    <option value="Single">Single</option>
                    <option value="EP">EP</option>
                    <option value="LP">LP</option>
                </select>
                <button type="submit">Add Album</button>
            </form>
        );
};

const AddArtistForm = () => {
    const [newArtist, setNewArtist] = useState({
        artist_name: ''
    });

    const handleInputChange = (event) => {
        setNewArtist({ ...newArtist, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New Artist Data:', newArtist);
        // Here you would typically send a request to your backend
        // Reset form after submission
        setNewArtist({
            artist_name: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="artist-form">
            <input
                type="text"
                name="artist_name"
                value={newArtist.artist_name}
                onChange={handleInputChange}
                placeholder="Artist Name"
            />
            <button type="submit">Add Artist</button>
        </form>
    );
};


export default AdminPage;
