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

---

##  Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/siteStreaming-JS-react.git
cd siteStreaming-JS-react
2. Démarrer le backend
bash

cd App-Serveur
npm install
node server.js
 Configurez votre .env avec :

env

MONGODB_URI=mongodb://localhost:27017/streaming
SECRET_KEY=...votre_clé...
PORT=5000
3. Démarrer le frontend
bash

cd ../siteStreaming
npm install
npm start


 Fonctionnalités
 - Authentification JWT (connexion / inscription)

- Upload, modification et suppression de vidéos

- Interface moderne pour visualiser les vidéos

- Envoi d’e-mail de confirmation (via mailer.js)

- Middleware de protection des routes (verifyToken.js)

 Structure

siteStreaming-JS-react/
├── App-Serveur/        → API REST avec Express + MongoDB
├── siteStreaming/      → Application React


Ajouter les rôles utilisateur (admin / viewer)

Prévisualisation vidéos via lecteur React

Design responsive mobile






