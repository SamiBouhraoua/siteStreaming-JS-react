#  siteStreaming-JS-react

Ce projet est une plateforme de streaming vidéo complète réalisée en **React** pour le frontend et **Node.js/Express + MongoDB** pour le backend. Elle permet aux utilisateurs de s'inscrire, se connecter, visualiser et gérer des vidéos, avec authentification par token JWT.

---

##  Technologies utilisées

### Frontend (React)
- React.js
- React Router
- CSS personnalisé
- Axios pour les requêtes API

### Backend (Node.js)
- Express.js
- MongoDB + Mongoose
- JWT (authentification)
- Nodemailer
---

✨ Fonctionnalités
- Authentification sécurisée avec JWT

- Affichage des vidéos dans une interface React moderne

- Upload, modification et suppression de vidéos par l'utilisateur

- Middleware pour sécuriser les routes API

 Envoi de mails via Nodemailer

 -----

 Structure

 siteStreaming-JS-react/
├── App-Serveur/
│   ├── Controllers/
│   ├── middelware/
│   ├── models/
│   ├── routes/
│   ├── mailer.js
│   ├── server.js
│   └── .env
│
├── siteStreaming/
│   ├── public/
│   ├── src/
│   └── package.json


----

## 📦 Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/siteStreaming-JS-react.git
cd siteStreaming-JS-react

2. Démarrer le backend
cd App-Serveur
npm install
node server.js
Créer un fichier .env dans App-Serveur/ avec :
MONGODB_URI=mongodb://localhost:27017/streaming
SECRET_KEY=ma_clé_secrète
PORT=5000

3. Démarrer le frontend
cd ../siteStreaming
npm install
npm start
