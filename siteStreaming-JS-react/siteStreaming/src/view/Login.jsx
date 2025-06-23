import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsError(false);

    try {
      const res = await axios.post('http://localhost:3010/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', res.data.token);  // Stockage du token dans localStorage
      setMessage('Connexion réussie !');
      setIsError(false);
      setTimeout(() => navigate('/dashboard'), 1000);  // Rediriger après 2 secondes
    } catch (err) {
      // Récupérer l'erreur envoyée par le backend
      setMessage(err.response?.data?.error || 'Erreur de connexion');
      setIsError(true);
    }
  };

  return (
    <div className="auth-background">
      <div className="container mt-5">
        {message && (
          <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} fade show`} role="alert">
            {message}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <h2>Connexion</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-3"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mb-3"
            placeholder="Mot de passe"
            required
          />
          <button className="btn btn-primary w-100">Se connecter</button>
          <div className="form-footer">
            <p>Pas encore de compte ? <a href="/signup">S'inscrire</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
