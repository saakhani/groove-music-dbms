import React, { useState } from 'react';
import '../styles/pages/AdminPage.css'; // Ensure you have a corresponding CSS file

const AdminPage = () => {
    // Dummy data for artists and albums
    const dummyArtists = [
        { id: 'ar1', name: 'Artist 1' },
        { id: 'ar2', name: 'Artist 2' },
        // ... more artists
    ];

    const dummyAlbums = [
        { id: 'al1', name: 'Album 1', artistId: 'ar1' },
        { id: 'al2', name: 'Album 2', artistId: 'ar2' },
        // ... more albums
    ];

    // State for new song form
    const [newSong, setNewSong] = useState({
        song_name: '',
        artist_id: '',
        album_id: '',
        release_date: '',
        genre: '',
        song_duration: '',
        song_position: ''
    });

    const handleInputChange = (event) => {
        setNewSong({ ...newSong, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New Song Data:', newSong);
        // Here you would typically make an API call to your backend
        setNewSong({
            song_name: '',
            artist_id: '',
            album_id: '',
            release_date: '',
            genre: '',
            song_duration: '',
            song_position: ''
        });
    };

    return (
        <div className="admin-page">
            <h1>Add New Song</h1>
            <form onSubmit={handleSubmit} className="song-form">
                <input
                    type="text"
                    name="song_name"
                    value={newSong.song_name}
                    onChange={handleInputChange}
                    placeholder="Song Name"
                />
                <select name="artist_id" value={newSong.artist_id} onChange={handleInputChange}>
                    <option value="">Select Artist</option>
                    {dummyArtists.map(artist => (
                        <option key={artist.id} value={artist.id}>{artist.name}</option>
                    ))}
                </select>
                <select name="album_id" value={newSong.album_id} onChange={handleInputChange}>
                    <option value="">Select Album</option>
                    {dummyAlbums.map(album => (
                        <option key={album.id} value={album.id}>{album.name}</option>
                    ))}
                </select>
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
                    name="song_duration"
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
        </div>
    );
};

export default AdminPage;
