import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Vérification de la présence de la clé correspondant à l'utilisateur ou à l'administrateur
  const isUserLoggedIn = localStorage.getItem('user') !== null;
  const isAdminLoggedIn = localStorage.getItem('admin') !== null;
  const isProLoggedIn = localStorage.getItem('pro') !== null;
  // Si l'utilisateur est connecté en tant qu'utilisateur ou administrateur, autoriser l'accès
  if (isUserLoggedIn || isAdminLoggedIn || isProLoggedIn) {
    return children;
  } else {
    // Si l'utilisateur n'est pas connecté en tant qu'utilisateur ou administrateur, rediriger vers la page de connexion
    return <Navigate to="/connexion" replace />;
  }
};

export default ProtectedRoute;
