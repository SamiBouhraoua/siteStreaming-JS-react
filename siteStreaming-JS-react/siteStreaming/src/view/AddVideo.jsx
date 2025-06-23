import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const AddVideo = () => {
    const [videos, setVideos] = useState([]);
    const [newVideo, setNewVideo] = useState({ title: '', description: '', url: '' });
    const [message, setMessage] = useState(''); // Pour afficher l'alerte
    const [isError, setIsError] = useState(false); // Détermine si le message est une erreur ou non

    // Fonction pour ajouter une vidéo
    const handleAddVideo = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3010/videoRouter/add', newVideo);
            setVideos([...videos, response.data]); // Ajouter la nouvelle vidéo à la liste
            setNewVideo({ title: '', description: '', url: '' }); // Réinitialiser le formulaire
            setMessage('Vidéo ajoutée avec succès !');
            setIsError(false); // Message de succès
        } catch (error) {
            setMessage('Erreur lors de l\'ajout de la vidéo');
            setIsError(true); // Message d'erreur
        }
    };

    return (
        <div className="AddVideo-container">
            <Navbar />

            <div className="content_AddVideo">
                <div className="add-video-form">
                    {message && (
                        <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} fade show`} role="alert">
                            {message}
                        </div>
                    )}
                    <h2>Ajouter une vidéo</h2>
                    <form onSubmit={handleAddVideo}>
                        <input
                            type="text"
                            placeholder="Titre"
                            value={newVideo.title}
                            onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Description"
                            value={newVideo.description}
                            onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                            required
                        />
                        <input
                            type="url"
                            placeholder="URL de la vidéo"
                            value={newVideo.url}
                            onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
                            required
                        />
                        <button type="submit">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddVideo;
