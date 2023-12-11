import React, { useState } from 'react';
import '../styles/pages/AdminPage.css';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('song');

        // Dummy data for artists and albums
        const dummyArtists = [
            { id: 'ar1', name: 'Artist 1' },
            { id: 'ar2', name: 'Artist 2' }
        ];
    
        const dummyAlbums = [
            { id: 'al1', name: 'Album 1', artistId: 'ar1' },
            { id: 'al2', name: 'Album 2', artistId: 'ar2' }
        ];
    
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
            <div className="sidebar">
                <button onClick={() => setActiveTab('song')}>Add New Song</button>
                <button onClick={() => setActiveTab('album')}>Add New Album</button>
                <button onClick={() => setActiveTab('artist')}>Add New Artist</button>
            </div>
            <div className="content">
                {activeTab === 'song' && 
                    <form onSubmit={handleSubmit} className="song-form">
                    <input
                        type="text"
                        name="song_name"
                        value={newSong.song_name}
                        onChange={handleInputChange}
                        placeholder="Song Name"
                    />
                    {/* Dropdown for artists */}
                    <select name="artist_id" value={newSong.artist_id} onChange={handleInputChange}>
                        <option value="">Select Artist</option>
                        {dummyArtists.map(artist => (
                            <option key={artist.id} value={artist.id}>{artist.name}</option>
                        ))}
                    </select>
                    {/* Dropdown for albums */}
                    <select name="album_id" value={newSong.album_id} onChange={handleInputChange}>
                        <option value="">Select Album</option>
                        {dummyAlbums.map(album => (
                            <option key={album.id} value={album.id}>{album.name}</option>
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
