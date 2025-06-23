import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './view/SignUp';
import Login from './view/Login';
import Dashboard from './view/Dashboard';
import Account from './view/Account';
import AddVideo from './view/AddVideo';
import ProtectedRoute from './view/ProtectedRoute';

import './css/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/AddVideo" element={
          <ProtectedRoute>
            <AddVideo />
          </ProtectedRoute>
        } />
        <Route path="/account" element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;