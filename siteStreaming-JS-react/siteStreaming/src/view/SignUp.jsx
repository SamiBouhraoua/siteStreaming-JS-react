import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsError(false);
    setMessage('');

    try {
      await axios.post('http://localhost:3010/auth/signUp', {
        email,
        password
      });
      setMessage("Inscription réussie !");
      setIsError(false);
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      // Récupérer l'erreur envoyée par le backend
      const errorMessage = err.response?.data?.error || "Erreur lors de l'inscription";
      setMessage(errorMessage);
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
        <form onSubmit={handleSignUp}>
          <h2>Inscription</h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
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

          <button className="btn btn-primary w-100 mb-2">S'inscrire</button>

          <div className="form-footer">
            <p>Déjà un compte ? <a href="/login">Se connecter</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;