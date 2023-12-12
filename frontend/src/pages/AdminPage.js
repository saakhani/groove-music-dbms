import React, { useState } from 'react';
import '../styles/pages/AdminPage.css';
import { useEffect } from 'react';



const AdminPage = () => {
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
