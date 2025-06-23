import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../view/Navbar';
import '../css/Account.css';

const Account = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [deletePassword, setDeletePassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3010/auth/updatePassword', {
        email,
        currentPassword,
        newPassword,
      });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Erreur');
      setMessage('');
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete('http://localhost:3010/auth/deleteAccount', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { password: deletePassword },
      });
      setMessage(response.data.message);
      setError('');
      localStorage.removeItem('token');
      setTimeout(() => navigate('/Login'), 1000);
    } catch (err) {
      setError(err.response?.data?.error || 'Erreur');
      setMessage('');
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />

      <div className="content">
        <div className="profile-header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UQTNXD_5wPXSNMRED30blT7VLs8Hp65UygWTP1I0agw_c0WDZ-pQVtomYP_lTTbn3UQ&usqp=CAU"
            alt="Profil"
            className="profile-picture"
          />
          <h1>Mon compte</h1>
        </div>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="form-wrapper">
          <div className="form-section">
            <h3>Changer le mot de passe</h3>
            <form onSubmit={handleUpdatePassword}>
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Mot de passe actuel"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn">Mettre à jour</button>
            </form>
          </div>

          <div className="form-section danger">
            <h3>Supprimer le compte</h3>
            <form onSubmit={handleDeleteAccount}>
              <input
                type="password"
                placeholder="Mot de passe"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                required
              />
              <button type="submit" className="btn delete">Supprimer mon compte</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;