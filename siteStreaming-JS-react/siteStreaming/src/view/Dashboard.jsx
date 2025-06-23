import React, { useEffect, useState } from 'react';
import Navbar from '../view/Navbar';
import axios from 'axios';
import '../css/Dashboard.css';

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:3010/videoRouter/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des vidéos:', error);
        setError('Impossible de récupérer les vidéos');
      }
    };
    fetchVideos();
  }, []);

  const handleDeleteVideo = async (videoId) => {
    try {
      await axios.delete(`http://localhost:3010/videoRouter/videos/${videoId}`);
      setVideos(videos.filter(video => video._id !== videoId));
    } catch (error) {
      console.error('Erreur lors de la suppression de la vidéo:', error);
      setError('Erreur lors de la suppression de la vidéo');
    }
  };

  const getYouTubeId = (url) => {
    const regExp = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        {error && <div className="error-message">{error}</div>}
        <div className="video-grid">
          {videos.map((video) => {
            const videoId = getYouTubeId(video.url);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

            return (
              <div
                className="video-card"
                key={video._id}
                onClick={() => setSelectedVideo(video)}
              >
                <img src={thumbnailUrl} alt={video.title} className="video-thumbnail" />
              </div>
            );
          })}
        </div>

        {selectedVideo && (
          <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={() => setSelectedVideo(null)}>✖</span>
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.url)}?autoplay=1&mute=0`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={selectedVideo.title}
              ></iframe>
              <div className="video-info">
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
                <button onClick={() => {
                  handleDeleteVideo(selectedVideo._id);
                  setSelectedVideo(null);
                }} className="btn delete">Supprimer</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
